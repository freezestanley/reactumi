# Layouts
> src layouts 全局layout 设置
> src/layouts/index.js  layout() 设置不同模版结构

# page 结构
> src/pages/login 为例
> components            - 放该页面组件
> models                - 放reducers && effect
> services              - 放ajax 请求
> index.js              - 页面信息

# AJAX 请求
```
import request from '../../utils/request';
import root from '../../utils/proxyTable';
export function user (obj) {
  return request(`${root}/users`, {
    method: 'GET',
    body: null
  });
}
```
> root 请求basePath
> `${root}/users`  = 'api/users'
> mock 数据见 文件夹mock/index.js
> proxy 服务器请求 .umirc.js
```
  proxy: {
    "/api": {
    "target": "http://172.28.14.27/",
    "changeOrigin": true,
    "pathRewrite": {"^/api": "/api"},
    "secure": false
    }
  },
```

#开发环境

> 忽略以下错误
```
umi.js:6969 Warning: Please use `require("dva").fetch` instead of `require("dva/fetch")`. Support for the latter will be removed in the next major release.
Warning: Please use `require("dva").dynamic` instead of `require("dva/dynamic")`. Support for the latter will be removed in the next major release.
umi.js:6969 Warning: Please use `require("dva").router` instead of `require("dva/router")`. Support for the latter will be removed in the next major release.
```
