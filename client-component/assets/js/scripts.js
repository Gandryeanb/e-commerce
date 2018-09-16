Vue.config.devtools = true

var app = new Vue({
    el: '#app',
    data: {
        isAlreadyLogin : false,
        fnRefresh : '',

        valKeyUp : '',

        categories: [],
        items: [],
        modalItem  : '',
        cart : [],
        totalPriceCart : 0
    },
    watch : {
        fnRefresh : function () {
            if (this.fnRefresh) {
                this.fnRefresh === false
            }
        }, 
    },
    methods: {
        
        
        
    }
})