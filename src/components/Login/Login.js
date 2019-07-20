import React from 'react';
import {connect} from "react-redux";
import {onLoginSubmit} from "../../thunks/loginThunk";

const Login = (props) => {
  return (
      <div>
        <button onClick={props.onLogin}>Login!!!</button>
      </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onLogin: () => dispatch(onLoginSubmit('demo@demo.com'))
});

export default connect(null, mapDispatchToProps)(Login);
