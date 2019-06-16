import styles from './index.less';
import React from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import {Spin, Icon } from 'antd'
import Head from './head'
import Left from './left'
// import sty from '@/less/global.less'
const antIcon = <Icon type="loading" style={{ fontSize: 60 }} spin />;

class LayoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 1800
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  layout = () => {
    if (this.props.location.pathname === '/login') {
      return (
        <div className={styles.userContent}>
          <div className={styles.content}>
            <div className={styles.main}>
              this is login
              {this.props.children}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <React.Fragment>
        <div className={styles.content}>
          <Left/>
          <div className = {styles.right}>
            <Head/>
            <div className = {styles.body}>
              {this.props.children}
            </div>
          </div>
          
        </div>
        <div className={'loadMask ant-modal-wrap'} style = {{display: 'none'}} id="loadMask">
          <Spin indicator={antIcon} />
        </div>
        </React.Fragment>
      )
    }
  }
  render () {
    let _this = this
    return (
      <React.Fragment>
        {_this.layout()}
      </React.Fragment>
    )
  }
}
// function BasicLayout(props) {
//   if (this.props.location.pathname === '/login') {
//     return (
//       <div className={styles.normal}>
//         <div className={styles.content}>
//           <div className={styles.main}>
//             {this.props.children}
//           </div>
//         </div>
//       </div>
//     )
//   } else {
//     return (
//       <div className={styles.normal}>
//         <h1 className={styles.title}>Yay! Welcome to umi!</h1>
//         {props.children}
//       </div>
//     )
//   }
// }
function mapStateToProps(state) {
  if (state.global) {
    const { currentLanguage, time, currentUserInfo} = state.global;
    return {
      currentLanguage, time, currentUser: currentUserInfo
    };
  }
  return {}
}
let rootLayoutPage= withRouter(LayoutPage);
export default connect(mapStateToProps)(rootLayoutPage);