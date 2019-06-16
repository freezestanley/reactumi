import * as globalService from '../services/global';

export default {
  namespace: 'global',
  state: {
    name: 'wike'
  },
  reducers: {
    setUserInfo(state, {payload: {name}}) {
      return {...state, name}
    }
  },
  effects: {
    * user ({payload: {}}, {call, put}) {
      const {data, headers} = yield call(globalService.user, {name: '123213'})
      console.log(JSON.stringify(data))
      yield put({
        type: 'setUserInfo',
        payload: {
          name: data.name
        },
      })
    }
  }
}