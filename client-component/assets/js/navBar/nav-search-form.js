Vue.component ('vue-nav-search-form',{
    data : () => {
        return {
            valKeyUpItem : "",
            items : []
        }
    },
    watch : {
        valKeyUpItem : function () {
            this.searchItemKeyUp()
            if (this.valKeyUpItem !== "") {
            }
        },
    },
    methods : {
        searchItemKeyUp: function () {
            let self = this
            
            if (this.valKeyUpItem !== '') {
                axios({
                    method : "get",
                    url : `http://localhost:3000/item/search/${this.valKeyUpItem}`
                })
                .then (response => {
                    let tmp = []
                    for (let i = 0; i < response.data.data.length; i++) {
                        tmp.push(response.data.data[i])
                    }
                    self.items = tmp
                    this.$emit("keyUp",self.items)
                })
                .catch(err => {
                    console.log(err)
                })
            } else {

                axios({
                    method: 'get',
                    url: 'http://localhost:3000/item'
                })
                .then(response => {
                    let tmp = []
                    for (let i = 0; i < response.data.data.length; i++) {
                        tmp.push(response.data.data[i])
                    }
                    self.items = tmp
                    this.$emit("keyUp",self.items)
                })
                .catch(err => {
                    console.log(err);
                })
                
            }
        }
    },
    template : `
    <div class="ten wide column" id="logo-header">
        <div class="ui large form">
            <div class="field">
                <div class="ui icon input">
                    <input class="" placeholder="Search your item.." type="text" v-model="valKeyUpItem">
                    <i class="search link icon"></i>
                </div>
            </div>
        </div>
    </div>
    `
})