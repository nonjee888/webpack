// ES6
import _ from "lodash";
// ES5문법인 경우 아래와 같이 씀
// var _ = require("lodash");
// var path = require("path");

function component() {
  var element = document.createElement("div");

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  // element,innerHTML = 'Hello webpack' 위의 코드와 같은 의미

  // 'Hello webpack' 이라는 텍스트가 넣어져있는 div 태그를 화면에 붙여주었다

  return element;
}

document.body.appendChild(component());
