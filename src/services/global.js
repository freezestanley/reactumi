import request from '../../utils/request';
import root from '../../utils/proxyTable';

export function user (obj) {
  return request(`${root}/users`, {
    method: 'GET',
    body: null
  });
}