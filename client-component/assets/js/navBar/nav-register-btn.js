Vue.component ('vue-nav-register-btn',{
    data : () => {
        return {

        }
    },
    methods : {
        register : function () {
            $('#register-modal').modal('setting', 'transition', 'fly up').modal('show');
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
                                <input name="fname" placeholder="First Name" type="text">
                            </div>
                            <div class="field">
                                <label>Last name</label>
                                <input name="lname" placeholder="Last Name (optional)" type="text">
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="two fields">
                            <div class="field required">
                                <label>Email</label>
                                <input name="fname" placeholder="Email" type="text">
                            </div>
                            <div class="field required">
                                <label>Password</label>
                                <input name="lname" placeholder="Password" type="password">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="actions">
                <div class="ui black deny button">
                    Nope
                </div>
                <div class="ui teal deny right labeled icon button">
                    Submit
                    <i class="checkmark icon"></i>
                </div>
            </div>
        </div>

    </div>
    `
})