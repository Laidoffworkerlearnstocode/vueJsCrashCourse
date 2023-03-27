<script setup>

</script>

<template>
  <div class="container">
    <h1>Hello World!</h1>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'); 
/* 设置全局字体，这里导入的是谷歌字体，也可以导入本地字体 */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}/* 这是一个常见的 CSS 样式规则，通常称为 CSS Reset 或 CSS Normalize。这个规则将所有元素的 box-sizing 设置为 border-box，将所有元素的外边距（margin）和内边距（padding）设置为 0，从而消除了不同浏览器对默认样式的差异。*/

body {
  font-family: 'Poppins', sans-serif;
}/* font-family 属性规定了元素的字体族，可以指定多个字体族作为备选方案。在这个样式规则中，首选的字体族是 'Poppins' 字体，如果用户的计算机上没有安装 'Poppins' 字体，浏览器会使用字体族中的第一个可用字体，也就是 sans-serif。 */

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 30px;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: black;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
 
</style>
