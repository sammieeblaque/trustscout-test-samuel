import React from "react";
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

class Home extends React.Component<ILoggedProps> {
  state: IUsers = {
    users: null,
    username: "",
    count: 0,
    firedbCount: 0,
  };

  componentDidMount() {
    const { loggedUser } = this.props;
    db.doGetAnyUser(loggedUser?.uid).then((res) => {
      this.setState({
        username: res.val().username,
        firedbCount: res.val().count,
        count: res.val().count,
      });
    });
  }

  async componentDidUpdate(prevProps: any, prevState: any) {
    const { loggedUser } = this.props;

    try {
      if (prevState.firedbCount !== this.state.count) {
        await db.storeCount(loggedUser?.uid, this.state.count);
        await db.doGetAnyUser(loggedUser?.uid).then((res) => {
          this.setState({ firedbCount: res.val().count });
        });
      }
    } catch (error) {
      throw Error("Unable to get Firebase Count Value");
    }
  }

  async alterCounter(type: string) {
    if (type === "decrement") {
      if (this.state.firedbCount >= 1) {
        await this.setState({ count: this.state.firedbCount - 1 });
      }
    } else {
      await this.setState({ count: this.state.firedbCount + 1 });
    }
    const mulTen = this.state.count % 10 === 0;
    this.multipleTen(mulTen);
  }

  multipleTen(multiple: boolean) {
    if (multiple) {
      console.log("This is a multiple");
    }
  }

  render() {
    const { username, count } = this.state;
    return (
      <>
        <div className="row">
          <div className="card col-lg-12 col-md-12 col-sm-12 home__card">
            <h1 className="text-center">
              Hello <i>{username}</i>
            </h1>
            <div className="row">
              <p className="font-weight-bold">
                Your will receive an email notification everytime your count
                value reaches multiples of 10
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
                  onClick={() => this.alterCounter("increment")}
                >
                  Increment
                </button>
              </div>
              <div>
                <button
                  className="btn-danger rounded"
                  style={{ fontSize: "20px" }}
                  onClick={() => this.alterCounter("decrement")}
                >
                  Decrement
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const authCondition = (authUser: any) => !!authUser;

export default withAuthorization(authCondition)(Home); //grants authorization to open endpoint if an user is signed in
