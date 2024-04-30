import React, { PureComponent } from "react";

// 装饰器为,组件添加age属性
function AddAge(Target: Function) {
  Target.prototype.age = 111;
}
// 使用装饰圈
@AddAge
class Test extends PureComponent {
  age?: number;

  render() {
    return <h2>我是类组件---{this.age}</h2>;
  }
}

export default Test;
