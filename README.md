# v-input-check
自定义指令完成ElementUI中el-input数据输入限制。

## 使用方法
```js
// main.js
import InputCheck from 'md-input-check' 
Vue.use(InputCheck)
```
```vue
<!--ElementUI-->
 <el-input v-input-check="'toNonNegInt'" placeholder="输入内容" v-model="value1" ></el-input>
<!--原生-->
 <input v-input-check="'toFixed2'" placeholder="输入内容" v-model="value4"/>
```

## 可选值

- 非负整数（Non-Negative Integer） 'toNonNegInt'
- 正整数（Positive Integer） 'toPosInt'
- 保留两位小数（Format to Two Decimal Places） 'toFixed2'