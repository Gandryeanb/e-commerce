Vue.component('vue-nav-logout-btn',{
    data : () => {
        return {
            
        }
    },
    methods : {
        logout : function () {
            window.localStorage.removeItem('token')
            this.$emit("logged-out",false)
        }
    },
    template : `
    <div class="ui right floated animated teal button" tabindex="0" v-on:click="logout">
        <div class="hidden content">
            <i class="arrow right icon"></i>
        </div>
        <div class="visible content">
            Logout
        </div>
    </div>
    `
})