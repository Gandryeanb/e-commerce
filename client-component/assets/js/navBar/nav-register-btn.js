Vue.component ('vue-nav-register-btn',{
    data : () => {
        return {
            fname : "",
            lname : "",
            email : "",
            password : ""
        }
    },
    methods : {
        register : function () {
            $('#register-modal').modal('setting', 'transition', 'fly up').modal('show');
        },
        registSubmit : function () {
            let self = this
            let obj = {
                fname : this.fname,
                lname : this.lname,
                email : this.email,
                password : this.password
            }

            axios({
                method : 'post',
                url : "http://localhost:3000/user/register",
                data : obj
            })
            .then(response => {
                console.log('creating account success!')
            })
            .catch(response => {
                console.log('creating account failed!');
            })
        }
    },
    template : `
    <div class="ui right floated vertical animated teal button" id="register-btn" tabindex="0" v-on:click="register">
        <div class="hidden content">
            $0 Free
        </div>
        <div class="visible content">
            Register
        </div>

        <div class="ui tiny modal login" id="register-modal">
            <div class="header">
                Register
            </div>
            <div class="content">
                <form class="ui large form">
                    <div class="field">
                        <div class="two fields">
                            <div class="field required">
                                <label>First name</label>
                                <input name="fname" placeholder="First Name" type="text" v-model="fname">
                            </div>
                            <div class="field">
                                <label>Last name</label>
                                <input name="lname" placeholder="Last Name (optional)" type="text" v-model="lname">
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="two fields">
                            <div class="field required">
                                <label>Email</label>
                                <input name="fname" placeholder="Email" type="text" v-model="email">
                            </div>
                            <div class="field required">
                                <label>Password</label>
                                <input name="lname" placeholder="Password" type="password" v-model="password">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="actions">
                <div class="ui black deny button">
                    Nope
                </div>
                <div class="ui teal deny right labeled icon button" v-on:click="registSubmit">
                    Submit
                    <i class="checkmark icon"></i>
                </div>
            </div>
        </div>

    </div>
    `
})