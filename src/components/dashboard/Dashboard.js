import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
// eslint-disable-next-line
import { firestore } from "firebase";

class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;

    //if not authenticated will redirect to about
    if (!auth.uid) return <Redirect to="/about" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col sm12 m5 offset-m1">
            <Notifications notifications={notifications}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //use firestore
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", limit: 5, orderBy: ['createdAt', 'desc']  },
    { collection: "notifications", limit: 3, orderBy: ['time', 'desc'] }
  ])
)(Dashboard);
