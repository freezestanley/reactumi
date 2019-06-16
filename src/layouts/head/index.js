import React from 'react';
import style from './head.less'
import PropTypes from 'prop-types';
import router from 'umi/router';
import Link from 'umi/link';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';
// import menuRoute from 'src/components/menu/menuRoute'
class header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    }
  }
  render () {
    return (
      <div className={style.head}>123123</div>
    )
  }
}
function mapStateToProps(state) {
  // const { data } = state.menu;
  return {
    // data
  };
}
let locationHeader = withRouter(header)
export default connect(mapStateToProps)(locationHeader);