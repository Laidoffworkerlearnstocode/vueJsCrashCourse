const app = Vue.createApp({
    template: '<h1>Hello World!</h1>'
}); // 通过cdn引入vue.js后，可以直接使用Vue.createApp()方法创建一个Vue实例, 也可以使用Vue.component()方法创建一个组件, 一个Vue实例就是一个Vue应用，可以包含多个组件

app.mount('#app'); // 通过Vue实例的mount()方法挂载到DOM元素上,这里是挂载到id为app的元素上


