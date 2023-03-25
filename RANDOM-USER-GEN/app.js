const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'John@gmail.com',
            gender: 'male',
            picture:'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api');
            const {results} = await res.json();
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        },
    },
}); // 通过cdn引入vue.js后，可以直接使用Vue.createApp()方法创建一个Vue实例, 也可以使用Vue.component()方法创建一个组件, 一个Vue实例就是一个Vue应用，可以包含多个组件

app.mount('#app'); // 通过Vue实例的mount()方法挂载到DOM元素上,这里是挂载到id为app的元素上

 