import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import "./styles.css";

const SignedInLinks = props => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink  to="/create">New List</NavLink>
        </li>
        <li>
          <NavLink to="/battletimer/demo">BattleTimer</NavLink>
        </li>
        <li>
          <NavLink to="/mystats/demo">Statistics</NavLink>
        </li>
        {/* eslint-disable-next-line */}
        <li>
          <a onClick={props.signOut}>Log Out</a>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating orange lighten-1">
            {props.profile.initials}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
