import { useEffect, useState } from "react";
import { firebase } from "../firebase";

import AuthContext from "../contexts/AuthContext"; //using provider's context api

const WithAuthentication = ({ children }: any) => {
  const [authUser, setAuthUser] = useState<null | any>();

  useEffect(() => {
    firebase.auth.onAuthStateChanged((user) =>
      user ? setAuthUser(user) : setAuthUser(null)
    );
  });
  return (
    <>
      <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
    </>
  );
};

export default WithAuthentication;
