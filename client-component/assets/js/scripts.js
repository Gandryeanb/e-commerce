Vue.config.devtools = true

var app = new Vue({
    el: '#app',
    data: {
        isAlreadyLogin : false,
        fnRefresh : '',

        valKeyUp : '',

        categories: [],
        items: [],
        emailVal: '',
        passVal: '',
        modalItem  : '',
        cart : [],
        totalPriceCart : 0
    },
    watch : {
        valKeyUp : function () {

        },
        fnRefresh : function () {
            if (this.fnRefresh) {
                this.fnRefresh === false
            }
        },
        valKeyUpItem : function () {
            
            console.log(this.valKeyUpItem)

            let self = this

            if (this.valKeyUpItem !== '') {
                axios({
                    method : "get",
                    url : `http://localhost:3000/item/search/${this.valKeyUpItem}`
                })
                .then (response => {
                    console.log(response);
                    console.log(self.valKeyUpItem);
                    
                    let tmp = []
                    for (let i = 0; i < response.data.data.length; i++) {
                        tmp.push(response.data.data[i])
                    }
                    self.items = tmp
                })
                .catch(err => {
                    console.log(err)
                })
            } else {
                // this.
                this.loadDataItemUnfiltered()
            }
        }
    },
    methods: {
        
        
        
    }
})