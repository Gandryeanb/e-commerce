Vue.component('vue-content-user-profile',{
    template : `
    <div>
    <div class="ui grid centered menu">
        <div class="one wide coloumn ">
            <div class="column" id="userPhoto">
                <img class="ui small rounded image" src="./assets/img/360x360.png">
            </div>
            <div class="column" style="margin-top : 10px;">
                <h3>Gusti Andryean</h3>
            </div>
            <div class="column" style="margin-top : 10px;">
                <div class="column">
                    <span>Balance :</span>
                </div>    
            </div>   
            <div class="column meta">
                <span>Rp. </span>        
                <span>43200</span>        
            </div>    
            <div class="ui compact menu" style="margin-top : 15px; margin-bottom:20px;">
                <div class="link item">
                    <i class="credit card icon"></i>
                </div>
                <div class="link teal item">
                    <span>History</span>
                </div>
            </div>
        </div>
    </div>
    </div>
    `,
    data () {
        return {
            userData : ''
        }
    },
    created () {
        this.getData()
    },
    methods : {
        getData () {
            let token = window.localStorage.getItem('token')
            let self = this
            
            axios({
                method : 'get',
                url : 'http://localhost:3000/user',
                token : token
            })
            .then(response => {
                self.userData = response.data.data
            })
            .catch(response => {
                console.log(response);
            })
        }
    },
})