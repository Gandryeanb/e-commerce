Vue.component('vue-content-cards',{
    data : () => {
        return {
            isAlreadyLogin : false,
            refreshItem : false,
            items : [],
            modalItem : [],
            cart : [],
            totalPriceCart : 0
        }
    },
    created () {
        let token = window.localStorage.getItem("token")
        
        if (token) {
            this.isAlreadyLogin = true
        }
    },
    props : ["itemsData","statsLog","fnRefresh"],
    watch : {
        fnRefresh : function () {
            this.cart = [],
            this.totalPriceCart = 0
        },
        itemsData : function () {
            this.items = this.itemsData
        },
        statsLog : function () {
            this.isAlreadyLogin = this.statsLog
        },
        cart : function () {
            this.$emit("cartInfo",this.cart)
            this.$emit("totalPriceCartInfo",this.totalPriceCart)
        }
    },
    methods : {
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
        selectedModalItem: function (item) {
            let self = this

            self.modalItem = item
            $('#item-modal').modal('setting', 'transition', 'pulse').modal('show');
        }
    },
    template : `
    <div>
        <div class="ui link four cards">
            <div class="card cards-item" v-for="item in items">
                <div class="image">
                    <img src="./assets/img/360x360.png" v-on:click="selectedModalItem(item)">
                </div>

                <div class="content" v-on:click="selectedModalItem(item)">
                    <div class="header">{{item.name}}</div>
                    <div class="meta">
                        <h3>Rp. {{item.price}}</h3>
                    </div>
                    <div class="description">
                        {{item.description}}
                    </div>
                </div>

                <div class="extra content">
                    <span>
                        <i class="boxes icon"></i>
                    </span>
                    <span>
                        {{item.amount}}
                    </span>
                    <button class="ui teal right floated mini button" v-on:click="addCart(item)" v-if="isAlreadyLogin">
                        Add to cart
                    </button>
                    <button class="ui teal right floated mini button disabled" v-else="isAlreadyLogin">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>

        <div class="ui mini modal" id="item-modal">
            <div class="header">
                {{ modalItem.name }}
            </div>
            <div class="image">
                <img src="./assets/img/360x360.png">
            </div>
            <div class="content">
                <h2>Rp.{{ modalItem.price }}</h2>
                <h4>Item description :</h4>
                <p>{{ modalItem.description }}</p>
            </div>
            <div class="actions">
                <div class="ui black deny button">
                    Nope
                </div>
                <div class="ui teal deny right labeled icon button" v-on:click="addCart(modalItem)" v-if="isAlreadyLogin">
                    add to Cart
                    <i class="shop icon"></i>
                </div>
                <div class="ui teal deny right labeled icon button disabled" v-on:click="addCart(modalItem)" v-else="isAlreadyLogin">
                    add to Cart
                    <i class="shop icon"></i>
                </div>
            </div>
        </div>

    </div>

        
    `
})