
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: '无界山',
      // dll: true,
      dynamicImport: {
        webpackChunkName: true,
        // loadingComponent: './components/Loading.js',
      },
      // dynamicImport: true,
      dll: {
        include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
        exclude: ['@babel/runtime'],
      },
      fastClick: true,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  define: {
    "process.env.apiUrl":'https://www.zhongan.com/'
  },
  targets: {
    ie: 10,
  },
  treeShaking: true,
  // proxy: {
  //   "/api": {
  //     "target": "http://172.28.14.27/",
  //     "changeOrigin": true,
  //     "pathRewrite": {"^/api": "/api"},
  //     "secure": false
  //   }
  // },
}
