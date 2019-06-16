import fetch from 'dva/fetch';
import {Toast} from 'antd-mobile'

function hideMask() {
  let loadmask = document.getElementById('loadMask')
  if(loadmask)
    loadmask.style.display = 'none';
}
function showMask() {
  let loadmask = document.getElementById('loadMask')
  if(loadmask)
    loadmask.style.display = 'flex';
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    Toast.fail('System Error, Please refresh and try again', 5)
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options, showmask = true) {
  let headers = new Headers({
    'Content-Type': 'application/json;charset=UTF-8',
//    'token': ''
  })
  options.headers = headers
  options.credentials = 'include'
  if (showmask) {
    await showMask()
  }
  const response = await fetch(url, options);
  checkStatus(response);
  if (showmask) {
    await hideMask()
  }
  let data;
  if (options.method == 'GET') {
    data = await response.json();
  } else if(options.method == 'POST') {
    data = await response.json();
  } else {
    data = await response.json();
  }
  const ret = {
    data,
    headers: {},
  };
  if (response.headers.get('x-total-count')) {
    ret.headers['x-total-count'] = response.headers.get('x-total-count');
  }
  return ret;
}
