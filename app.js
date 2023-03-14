var app = new Vue({
    el: '#app',
    data: {
        product: 'Fall Limited Edition Sneakers',
        img1: 'assets/img1.jpg',
        img2: 'assets/img2.jpg',
        img3: 'assets/img3.jpg',
        img4: 'assets/img4.jpg',
        count: 0,
    },
    methods: {
        increamentProduct() {
            this.count += 1
        },
        decreamentProduct () {
            if (this.count > 0 ) {
                this.count -= 1
            }
        }
    }
})
