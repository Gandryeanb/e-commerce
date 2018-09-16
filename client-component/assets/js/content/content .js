Vue.component('vue-content',{
    data : () => {
        return {
            items : [],
            categories : [],
            cart :[],
            totalPriceCart : 0,

            cart : [],
            totalPriceCart : 0,

            valKeyUp : "",
            isAlreadyLogin : false,
            refreshItem : ""
        }
    },
    props : ["logStatus","fnRefresh","keyUp"],
    created() {
        let token = window.localStorage.getItem("token")
        
        if (token) {
            this.isAlreadyLogin = true
        }
    },
    watch : {
        keyUp : function (val) {
            this.items = val
        },
        fnRefresh : function (val) {
            this.refreshItem = val
        },
        logStatus : function () {
            this.isAlreadyLogin = this.logStatus
        },
        cart : function () {            
            this.$emit("infocart",this.cart)
            this.$emit("infototalpricecart",this.totalPriceCart)
        }
    },
    methods : {
        
    },
    template : `
    <div class="ui container box-content">
        <div class="ui grid row" id="margin-test">
            <div class="three wide column segment">
            <vue-content-user-profile v-if="isAlreadyLogin"></vue-content-user-profile>
            <vue-content-category  @allCategories="items=$event" @selectedCategories="items=$event" v-bind:fn-refresh="refreshItem"></vue-content-category>   
            </div>
            <div class="thirteen wide column segment">
                <vue-content-cards v-bind:items-data="items" v-bind:stats-log="isAlreadyLogin" @cartInfo="cart=$event" @totalPriceCartInfo="totalPriceCart=$event" v-bind:fn-refresh="refreshItem"></vue-content-cards>
            </div>
        </div>
    </div>
    `
})