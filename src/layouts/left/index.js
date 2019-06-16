import React from 'react';
import style from './left.less'
import PropTypes from 'prop-types';
import router from 'umi/router';
import Link from 'umi/link';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';
// import menuRoute from 'src/components/menu/menuRoute'
class left extends React.Component {
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
let locationLeft = withRouter(left)
export default connect(mapStateToProps)(locationLeft);