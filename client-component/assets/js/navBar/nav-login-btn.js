Vue.component("vue-nav-login-btn", {
    data: () => {
        return {
            valEmailLogin: "",
            valPassLogin: ""
        }
    },
    methods: {
        login: function () {
            
            $('#login-modal').modal('setting', 'transition', 'fly up').modal('show');
        },
        resetForm : function() {
            
            this.valEmailLogin = ""
            this.valPassLogin = ""
        },
        submitLogin: function () {
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
                    self.valEmailLogin = ""
                    self.valPassLogin = ""
                    
                    this.$emit("logged-in",true)

                    window.localStorage.setItem('token', response.data.token)
                } else {
                    console.log('wrong email or password');
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    template: `
    <div>
        <div class="ui right floated animated teal button" id="login-btn" tabindex="0" v-on:click="login">
            <div class="hidden content">
                <i class="arrow right icon"></i>
            </div>
            <div class="visible content">
                Login
            </div>
        </div>

        <div id="loginForm">
            <div class="ui mini modal" id="login-modal">
                <div class="header">
                    Login
                </div>
                <div class="content">
                    <form class="ui large form">
                        <div class="field">
                            <div class="field">
                                <label>Email</label>
                                <input name="fname" placeholder="Email" type="text" id="login-form" v-model="valEmailLogin">
                            </div>
                            <div class="field">
                                <label>Password</label>
                                <input name="lname" placeholder="Password" type="password" id="register-form" v-model="valPassLogin">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="actions">
                    <div v-on:click="resetForm" class="ui black deny button">
                        Nope
                    </div>
                    <div v-on:click="submitLogin" class="ui teal deny labeled icon button">
                        Submit
                        <i class="checkmark icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})