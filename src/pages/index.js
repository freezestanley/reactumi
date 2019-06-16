import styles from './index.less';
import React, { Component } from 'react'
import { connect } from 'dva';
import withRouter from 'umi/withRouter';

// console.log(process.UMI_ENV)
class RegistrationForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: null
    }
  }
  onClickHandler = (e) => {
    this.props.dispatch({
      type: 'global/user',
      payload: {name: 'tony'}
    })
  }
  render() {
    return (
      <div className={styles.normal}>
        <div onClick={(e) => this.onClickHandler(e)}>get user info</div>
        <div>current user name: {this.props.name}</div>
        <ul className={styles.list}>
          <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
          <li>
            {JSON.stringify(process.env.apiUrl)} 
            <a href="https://umijs.org/guide/getting-started.html">
              Getting Started
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {name} = state.global;
  return {
    name
  };
}
let withRouterMenuSide = withRouter(RegistrationForm)
export default connect(mapStateToProps)(withRouterMenuSide);