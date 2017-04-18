var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue World',
        count: 0
    },
    methods: {
        countUp: function () {
            this.count++;
        },
        countDown: function () {
            this.count--;
        }
    }
})
