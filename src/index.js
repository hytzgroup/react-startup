import _ from "lodash";
import printMe from "./print.js";
import './font/iconfont.css';
import './style.css';

const fn = () => {
  console.log('123--->>>');
}


function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  btn.innerHTML = "点击这里，然后查看 console！";
  element.classList.add('hello');
  element.classList.add('ef-icon-pre-jianhao');
  btn.onclick = printMe;
  element.appendChild(btn);
  fn();
  return element;
}



let element = component(); // 存储 element，以在 print.js 修改时重新渲染
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");
    //printMe();
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}
