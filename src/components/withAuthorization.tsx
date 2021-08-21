import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../contexts/AuthContext";
import { firebase } from "../firebase";
import * as routes from "../routes";

const WithAuthorization = ({ children }: any) => {
  const history = useHistory();
  useEffect(() => {
    firebase.auth.onAuthStateChanged((authUser) => {
      if (authUser?.email === "") history.push(routes.LANDING_PAGE);
    });
  }, []);

  const authContext: any = useContext(AuthContext);

  return <>{authContext?.email !== "" && children}</>;
};

export default WithAuthorization;
