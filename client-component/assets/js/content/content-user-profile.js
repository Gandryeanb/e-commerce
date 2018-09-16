Vue.component('vue-content-user-profile',{
    template : `
    <div>
    <div class="ui grid centered menu">
        <div class="one wide coloumn ">
            <div class="column" id="userPhoto">
                <img class="ui small rounded image" src="./assets/img/360x360.png">
            </div>
            <div class="column" style="margin-top : 10px;">
                <h3>{{userData.fname}}</h3>
            </div>
            <div class="column" style="margin-top : 10px;">
                <div class="column">
                    <span>Balance :</span>
                </div>    
            </div>   
            <div class="column meta">
                <span>Rp. </span>        
                <span>{{userData.deposit}}</span>        
            </div>    
            <div class="ui compact menu" style="margin-top : 15px; margin-bottom:20px;">
                <div class="link item" v-on:click="topUp">
                    <i class="credit card icon"></i>
                </div>
                <div class="link teal item" v-on:click="getTransactionUser">
                    <span>History</span>
                </div>
            </div>
        </div>
    </div>

    

    <div class="ui mini modal" id="topup">
        <div class="header">
            
        </div>
        <div class="image">
            <img src="./assets/img/360x360.png">
        </div>
        <div class="content">
            <h2>Rp.</h2>
            <h4>Item description :</h4>
            <p></p>
        </div>
        <div class="actions">
            <div class="ui black deny button">
                Nope
            </div>
            <div class="ui teal deny right labeled icon button">
                add to Cart
                <i class="shop icon"></i>
            </div>
        </div>
    </div>

    </div>
    `,
    data () {
        return {
            userData : '',
            transactionData : ''
        }
    },
    created () {
        this.getDataUser()        
    },
    mounted () {
    },
    methods : {
        getDataUser () {
            let token = window.localStorage.getItem('token')
            let self = this
            
            axios({
                method : 'get',
                url : 'http://localhost:3000/user',
                headers : {token}
            })
            .then(response => {
                self.userData = response.data.data[0]
            })
            .catch(response => {
                console.log(response.message);
            })
        },
        getTransactionUser() {
            let token = window.localStorage.getItem('token')
            let self = this
            
            axios ({
                method : 'get',
                url : `http://localhost:3000/transaction`,
                headers : {token}
            })
            .then(response => {
                self.transactionData = response.data.data
                this.transactionList()
            })
            .catch(response => {
                console.log(response.message);
            })

        },
        transactionList() {
            $('#transactionModal').modal('setting', 'transition', 'pulse').modal('show');
        },
        topUp() {
            $('.long.topup').modal('setting', 'transition', 'pulse').modal('show');
        }

    },
})