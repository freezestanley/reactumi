import { debug } from "util";
const cookie = {
  set: function (name, value) { // 设置cookie方法
    var Days = 30
    var exp = new Date()
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/;";
  },
  get: function (key) { // 获取cookie方法
    var arrStr = document.cookie.split("; ")
    for (var i = 0; i < arrStr.length; i++) {
      var temp = arrStr[i].split("=")
      if (temp[0] === key) {
        return unescape(temp[1])
      }
    }
  },
  delete: function (name) { // 删除cookie方法
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var cval = window.cookie.set(name)
    if (cval != null) {
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/;";
    }
  }
}
window.cookie = cookie

String.prototype.trim = function () { return this.replace(/(^\s*)|(\s*$)/g, ""); }
String.prototype.parseNumber = function() {return Number(this)}
String.prototype.addComma = function () {
  let split = this.toString().split('.')
  let before = (split[0]).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  let result = before + '.' + split[1]
  return result
}
String.prototype.format = function (param) {
  let result=''
  if (param === 'YYYY-MM-DD'){
    result = this.substr(4,2)+'-'+this.substr(6,2)+'-'+this.substr(0,4)
  }
  return result
}
Number.prototype.trim = function (param) {
  return this
}
export default {cookie};