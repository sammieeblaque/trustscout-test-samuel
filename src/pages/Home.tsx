import { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";

import withAuthorization from "../components/withAuthorization";
import { db } from "../firebase";

interface IUsers {
  users?: null;
  username: string;
  count: number;
  firedbCount: number;
}
interface ILoggedProps {
  loggedUser?: any;
}

const Home = ({ ...props }: ILoggedProps) => {
  const { loggedUser } = props;

  const [user, setUser] = useState<IUsers>({
    users: null,
    username: "",
    count: 0,
    firedbCount: 0,
  });

  const { count, username, firedbCount } = user;

  useEffect(() => {
    const getAnyUser = async () => {
      try {
        const result = await db.doGetAnyUser(loggedUser?.uid);
        await setUser({
          username: result.val().username,
          firedbCount: result.val().count,
          count: result.val().count,
        });
      } catch (error) {
        console.error(error);
      }
    };
    getAnyUser();
  }, [username]);

  useEffect(() => {
    const updateCounter = async () => {
      try {
        await db.storeCount(loggedUser?.uid, count);
        const result = await db.doGetAnyUser(loggedUser?.uid);
        setUser({ ...user, firedbCount: result.val().count });
      } catch (error) {
        console.error(error);
      }
    };
    updateCounter();
  }, [count]);

  const alterCounter = (type: string) => {
    if (type === "decrement") {
      firedbCount >= 1 && setUser({ ...user, count: firedbCount - 1 });
    } else setUser({ ...user, count: firedbCount + 1 });
  };

  return (
    <>
      <div className="row">
        <div className="card col-lg-12 col-md-12 col-sm-12 home__card">
          <h1 className="text-center">
            Hello <i>{username}</i>
          </h1>
          <div className="row">
            <p className="font-weight-bold">
              Your will receive an email notification everytime your count value
              reaches multiples of 10
            </p>
          </div>
          <div className="p-2 bold text-center">
            <h6 className="font-weight-bold">
              <i>
                Your Count Value is:
                <span
                  className="ml-2"
                  style={{
                    border: "1.5px solid black",
                    borderRadius: "30%",
                    padding: "3px 10px",
                  }}
                >
                  {count}
                </span>
              </i>
            </h6>
          </div>
          <div className="p-3">
            <div>
              <button
                className="btn-primary rounded mb-3"
                style={{ fontSize: "20px" }}
                onClick={() => alterCounter("increment")}
              >
                Increment
              </button>
            </div>
            <div>
              <button
                className="btn-danger rounded"
                style={{ fontSize: "20px" }}
                onClick={() => alterCounter("decrement")}
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const authCondition = (authUser: any) => !!authUser;

export default withAuthorization(authCondition)(Home); //grants authorization to open endpoint if an user is signed in
