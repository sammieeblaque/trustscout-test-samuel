import React from "react";
import { withRouter } from "react-router-dom";

import AuthContext from "../contexts/AuthContext";
import { firebase } from "../firebase";
import * as routes from "../routes";

interface IUserProps {
  history?: any;
}

const withAuthorization = (authCondition: any) => (Component: any) => {
  class WithAuthorization extends React.Component<IUserProps> {
    componentDidMount() {
      firebase.auth.onAuthStateChanged((authUser) => {
        if (!authCondition(authUser)) {
          //if the authorization fails, redirects to sign in page
          // const { history } = this.props;
          this.props.history.push(routes.LANDING_PAGE);
        }
      });
    }

    render() {
      return (
        <AuthContext.Consumer>
          {/* it either renders the passed component or not */}
          {(authUser) =>
            authUser ? (
              <Component {...this.props} loggedUser={authUser} />
            ) : null
          }
        </AuthContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization as any); //using withRouter so we have access to history props
};

export default withAuthorization;
