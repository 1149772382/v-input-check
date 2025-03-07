<template>
  <div style="width: 400px;">
    <el-row>
      非负整数：{{ value1 }}
      <el-input v-input-check="'toNonNegInt'" placeholder="输入内容" v-model="value1" @input="(val)=>handleInput(val)"></el-input>
    </el-row>
    <el-row>
      正整数：{{ value2 }}
      <el-input v-input-check="'toPosInt'" placeholder="输入内容" v-model="value2"></el-input>
    </el-row>
    <el-row>
      保留两位小数：{{ value3 }}
      <el-input v-input-check="'toFixed2'" placeholder="输入内容" v-model="value3"></el-input>
    </el-row>
    <el-row>
      原生input：{{ value4 }}<br/>
      <input v-input-check="'toFixed2'" placeholder="输入内容" v-model="value4" @input="(val)=>handleInput(val)"/>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
    };
  },
  methods: {
    handleInput(e) {
      console.log("handleInput",e);
    },
  },
};
</script>

<style>
h1 {
  color: #42b983;
}
</style>
