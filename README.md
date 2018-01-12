## 安装 (1.9.1)

使用 [npm](http://npmjs.com/):

如果 React 已经安装

```
yarn add react-dtui --save
```

## 例子

我们的组件文档里头有很多例子, 这里提供给一个快速上手的例子:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-dtui';
//import styles
import 'react-dtui/build/libs/react-dtui.css';

const App = () => <Button>hello dtui</Button>;

ReactDOM.render((
    <App/>
), document.getElementById('root'));

```
