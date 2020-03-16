import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import PropTypes from "prop-types";
import Preloader from "../layout/Preloader";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader></Preloader>;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id}></LogItem>)
      )}
    </ul>
  );
};

Logs.popTypes = {
  log: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
