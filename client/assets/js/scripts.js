Vue.config.devtools = true

var app = new Vue({
    el: '#app',
    data: {
        isAlreadyLogin : false,

        categories: [],
        items: [],
        emailVal: '',
        passVal: '',
        modalItem  : '',
        cart : [],
        totalPriceCart : 0
    },
    created() {
        let token = window.localStorage.getItem('token')
        if (token) {
            this.isAlreadyLogin = true
        }
        this.loadDataItemUnfiltered()
        this.loadDataItems()
    },
    methods: {
        login : function () {
            $('#login-modal').modal('setting', 'transition', 'fly up').modal('show');
        },
        register : function () {
            $('#register-modal').modal('setting', 'transition', 'fly up').modal('show');
        },
        shopCart : function() {
            $('#cart-modal').modal('setting', 'transition', 'fly up').modal('show');
        },
        selectedCategory: function (id) {
            axios({
                    method: "get",
                    url: `http://localhost:3000/item/category/${id}`
                })
                .then(response => {
                    let self = this
                    let tmp = []
                    for (let i = 0; i < response.data.data.length; i++) {
                        tmp.push(response.data.data[i])
                    }
                    self.items = tmp
                })
                .catch(err => {
                    console.log(err);
                })

        },
        logout : function () {
            window.localStorage.removeItem('token')
            this.isAlreadyLogin = false
        },
        submitLogin: function () {
            // console.log(`email : ${this.emailVal}`);
            // console.log(`password : ${this.passVal}`)
            let self = this
            axios({
                    method: 'post',
                    url: 'http://localhost:3000/user/login',
                    data: {
                        email: 'JohnDoe@mail.com',
                        password: '1234'
                    }
                })
                .then(response => {
                    if (response.data.token !== undefined) {
                        // console.log(response.data.token);
                        self.emailVal = ""
                        self.passVal = ""
                        
                        window.localStorage.setItem('token', response.data.token)
                        self.isAlreadyLogin = true

                    } else {
                        console.log('wrong email or password');
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        },
        loadDataItemUnfiltered: function () {
            let self = this
            axios({
                    method: 'get',
                    url: 'http://localhost:3000/item'
                })
                .then(response => {
                    let tmp = []
                    for (let i = 0; i < response.data.data.length; i++) {
                        tmp.push(response.data.data[i])
                    }
                    self.items = tmp
                })
                .catch(err => {
                    console.log(err);
                })
        },
        loadDataItems: function () {
            let self = this
            axios({
                    method: 'get',
                    url: 'http://localhost:3000/item/category'
                })
                .then(response => {
                    for (let i = 0; i < response.data.data.length; i++) {
                        self.categories.push([response.data.data[i][0].categoryId.name, response.data.data[i].length, response.data.data[i][0].categoryId._id]);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        },
        selectedModalItem: function (item) {
            let self = this

            self.modalItem = item
            $('#item-modal').modal('setting', 'transition', 'pulse').modal('show');
        },
        addCart : function (item) {            
            
            if (this.cart.length == 0) {
                this.cart.push([item,1])
                this.totalPriceCart += Number(item.price)
            } else {
                let isItemAlready = false
                for (let i = 0; i < this.cart.length; i++) {
                    if (this.cart[i][0].name === item.name) {
                        isItemAlready = true
                    }
                }

                if (isItemAlready) {
                    for ( let i = 0; i < this.cart.length; i++) {
                        if (this.cart[i][0].name === item.name) {
                            let updatedAmount = this.cart[i][1] += 1
                            this.cart[i][1] = updatedAmount
                            this.totalPriceCart += Number(item.price)
                            this.cart.push('a')
                            this.cart.pop()                            
                        } 
                    }
                } else {
                    this.cart.push([item,1])
                    this.totalPriceCart += Number(item.price)
                }
            }
        },
        submitCheckOut : function () {
            
            let token = window.localStorage.getItem('token')
            if (token) {

                let items = []
                let UserId = '5b9731328cc32c775a6c011d'
                
                for (let i = 0; i < this.cart.length; i++) {
                    for (let j = 0; j < this.cart[i][1]; j ++) {
                        items.push(this.cart[i][0]._id)
                    }
                }            
                
                axios({
                    method: 'post',
                    url : 'http://localhost:3000/transaction',
                    data : {
                        userId : UserId,
                        itemId : items
                    }
                })
                .then(response => {
                    console.log('berhasil create transaction');
                    this.cart = []
                    this.totalPriceCart = 0
                    this.categories = []
                    this.items = []
                    this.loadDataItemUnfiltered()
                    this.loadDataItems()
                })
                .catch(response => {
                    console.log('gagal create transaction');
                    console.log(response);
                })

            } else {
                console.log('you need to login first');
                
            }
        }

    }
})