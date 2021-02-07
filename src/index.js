import _ from "lodash";
import printMe from "./print.js";
function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  btn.innerHTML = "点击这里，然后查看 console！";
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

let element = component(); // 存储 element，以在 print.js 修改时重新渲染
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");
    document.body.removeChild(element);
    element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
    document.body.appendChild(element);
  });
}
