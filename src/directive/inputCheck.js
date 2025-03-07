/**
 *  v-check-input
 *  A custom directive to validate input fields
 *  @description 用于el-input的自定义指令，用于限制输入数据类型 input事件会触发两次
 *  @version 1.0.0
 *  @author yuanzz
 */

// 非负整数（Non-Negative Integer）
function toNonNegInt(num) {
  if (num == null) return "";
  return num.replace(/\D/g, "") === "" ? "" : parseInt(num);
}

// 正整数（Positive Integer）
function toPosInt(num) {
  if (num == null) return "";
  return num.replace(/\D/g, "");
}

// 保留两位小数（Format to Two Decimal Places）
function toFixed2(num) {
  if (num == null) return "";

  let str = num + "";

  // 只允许一个小数点
  if (str.includes(".")) {
    let parts = str.split(".");
    // 限制小数点后最多两位
    str = parts[0] + "." + parts[1].slice(0, 2);
  }

  // 处理去除多余字符，只保留数字和一个小数点
  str = str.replace(/[^\d.]/g, "");

  // 确保只有一个小数点
  if (str.indexOf(".") !== str.lastIndexOf(".")) {
    str =
      str.substring(0, str.indexOf(".") + 1) +
      str.substring(str.indexOf(".") + 1).replace(/\./g, "");
  }

  return str;
}

const FunArr = { toNonNegInt, toPosInt, toFixed2 };

let inputCheck = {
  bind(el, binding, vnode) {
    let inputEl;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      inputEl = el;
    } else {
      inputEl =
        el.getElementsByTagName("input")[0] ||
        el.getElementsByTagName("textarea")[0];
    }
    if (!inputEl) {
      return;
    }

    // 标志位，防止事件重复触发
    let isProcessing = false;
    inputEl.handler = function () {
      if (isProcessing) return;
      if (!binding || !FunArr.hasOwnProperty(binding.value)) {
        return;
      }
      let newValue = FunArr[binding.value](inputEl.value);
      inputEl.value = newValue;
      // 设置标志位为 true，表示正在处理事件
      isProcessing = true;

      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        // 原生input 手动触发 input 事件更新 Vue 中的绑定值
        const event = new Event("input", { bubbles: true });
        el.dispatchEvent(event);
      } else {
        // 使用vnode.emit手动触发input事件，更新Vue的绑定值
        vnode.componentInstance.$emit("input", newValue);
      }

      // 设置标志位为 false，处理完事件后恢复
      isProcessing = false;
    };

    inputEl.addEventListener("input", inputEl.handler);
  },
  unbind(el) {
    const inputEl = el.getElementsByTagName("input")[0];
    if (inputEl && inputEl.handler) {
      inputEl.removeEventListener("input", inputEl.handler);
    }
  },
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const install = function (Vue) {
  Vue.directive("input-check", inputCheck);
};

export default install;
