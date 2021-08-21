import React from "react";
import { firebase } from "../firebase";

import AuthContext from "../contexts/AuthContext"; //using provider's context api

const withAuthentication = (Component: any) => {
  class WithAuthentication extends React.Component {
    state = {
      authUser: null,
    };

    componentDidMount() {
      firebase.auth.onAuthStateChanged((authUser) => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      });
    }

    render() {
      const { authUser } = this.state;
      // console.log("withAuthentication file authUser", authUser);
      return (
        //   passing down the authUser value, so other components can consume it
        <AuthContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthContext.Provider>
      );
    }
  }

  return WithAuthentication;
};

export default withAuthentication;
