Vue.component('vue-nav', {
    data: () => {
        return {
            isAlreadyLogin : false,
            cart : [],
            totalPriceCart : 0,
            fnRefresh : "",
            searchKeyUp : ""

        }
    },
    props : ["infoCart","infoPriceCart"],
    created() {
        let token = window.localStorage.getItem('token')
        if (token) {
            this.isAlreadyLogin = true
        }
    }, 
    watch : {
        searchKeyUp : function () {
            this.$emit('val-key-up',this.searchKeyUp)
        },
        fnRefresh : function () {            
            this.$emit('refresh',true)
            this.fnRefresh = false
        },
        isAlreadyLogin : function(val) {
            this.$emit("log-status",this.isAlreadyLogin)
        },
        infoCart : function (val) {
            this.cart = this.infoCart
        },
        infoPriceCart : function(val) {
            this.totalPriceCart = this.infoPriceCart
        }
    }
    ,template: `
    <div class="ui segment">
        <div class="ui grid row" id="header-menu">
            <div class="three wide column" id="logo-header">
                <h1 id="logo">Bongkar gudang</h1>    
            </div>
            
            <vue-nav-search-form @keyUp="searchKeyUp=$event"></vue-nav-search-form>

            <div class="three wide column" id="logo-header">
                <div class="menu">

                    <vue-nav-logout-btn @logged-out="isAlreadyLogin=$event" v-if="isAlreadyLogin"></vue-nav-logout-btn>
                    
                    <div v-else="isAlreadyLogin">

                        <vue-nav-login-btn @logged-in="isAlreadyLogin=$event"></vue-nav-login-btn>

                        <vue-nav-register-btn></vue-nav-register-btn>

                    </div>
                    <vue-nav-cart-btn @refreshItem="fnRefresh=$event" v-bind:log-status="isAlreadyLogin" v-bind:info-cart="cart" v-bind:info-price-cart="totalPriceCart"></vue-nav-cart-btn>
                </div>
            </div>
        </div>
    </div>
    `
})