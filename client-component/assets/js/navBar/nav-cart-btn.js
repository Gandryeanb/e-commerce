Vue.component("vue-nav-cart-btn",{
    data : () => {
        return {
            isAlreadyLogin : false,
            buyable : true,

            items : [],
            cart : []
        }
    },
    props : ["logStatus","infoCart"],  
    created() {
        let token = window.localStorage.getItem('token')
        if (token) {
            this.isAlreadyLogin = true
        }
    },
    watch : {
        logStatus : function (val) {
            this.isAlreadyLogin = val 
        },
        infoCart :function () {
            
            this.cart = this.infoCart
        }
    },
    computed : {
        totalPriceCart : {

            set : function () {
                let res = 0

                for (let i = 0; i < this.cart.length; i++) {
                    res += this.cart[i][0].price * this.cart[i][1] 
                }

                return res
            },
            get : function () {
                let res = 0

                for (let i = 0; i < this.cart.length; i++) {
                    res += this.cart[i][0].price * this.cart[i][1] 
                }

                return res  
            }
            
        }
    },
    methods : {
        shopCart : function() {
            $('#cart-modal').modal('setting', 'transition', 'fly up').modal('show');
        },
        submitCheckOut : function () {
            
            let token = window.localStorage.getItem('token')
            if (token) {
                let self = this
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
                    self.cart = []
                    this.totalPriceCart = 0
                    this.categories = []
                    this.items = []
                    this.$emit("refreshItem",true)
                })
                .catch(error => {
                    this.cart = []
                    console.log('gagal create transaction');
                    console.log(error);
                })

            } else {
                console.log('you need to login first');
                
            }
        }

    },
    template : `
    <div>
        <div class="ui left floated vertical animated teal button" id="cart-btn" tabindex="0" v-bind:class="{disabled : !isAlreadyLogin}" v-on:click="shopCart">
            <div class="hidden content">Cart</div>
            <div class="visible content">
                <i class="shop icon"></i>
            </div>
        </div>

        <div id="cartForm">
            <div class="ui small modal" id="cart-modal">
                <div class="header">
                    <i class="shop icon"></i> Your Cart
                </div>
                <div class="content">
                    <div class="ui form">
                        <div class="fields">
                            <div class="nine wide field">
                                <h4>Item name</h4>
                            </div>
                            <div class="two wide field">
                                <h4>Amount</h4>
                            </div>
                            <div class="five wide field">
                                <h4>Total Price</h4>
                            </div>
                        </div>
                        <div class="fields" v-for="items in cart">
                            <div class="nine wide field">
                                <input name="itemName" placeholder="Item Name" type="text" readonly v-model="items[0].name">
                            </div>
                            <div class="two wide field">
                                <input name="buyAmount" placeholder="amount" type="number" v-model="items[1]">
                            </div>
                            <div class="five wide field">
                                <input name="buyAmount" placeholder="price" type="text" readonly v-model="items[0].price * items[1]">
                            </div>
                        </div>
                        <div class="fields">
                            <div class="eleven wide field">

                            </div>
                            <div class="five wide field">
                                <h4>Total :</h4>
                                <input name="buyAmount" placeholder="price" type="text" readonly v-model="totalPriceCart">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="actions">
                    <div class="ui black deny button">
                        Back
                    </div>
                    <div v-on:click="submitCheckOut()" class="ui teal deny labeled icon button" v-if="buyable">
                        Pay with pray
                        <i class="dollar sign icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})