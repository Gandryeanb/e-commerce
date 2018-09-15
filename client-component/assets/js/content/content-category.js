Vue.component('vue-content-category',{
    data : () => {
        return {
            categories : [],
        }
    },
    props :["fnRefresh"],
    watch : {
        fnRefresh : function() {
            this.loadDataItemUnfiltered()
        }
    },
    created : function () {
        this.loadDataItems()
    },
    mounted : function () {
        this.loadDataItemUnfiltered()
    },
    methods : {
        loadDataItemUnfiltered: function () {
            let self = this
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
                this.$emit("allCategories",tmp)
            })
            .catch(err => {
                console.log(err);
            })
        },
        loadDataItems: function () {
            let self = this
            
            axios({
                method: 'get',
                url: 'http://localhost:3000/item/category'
            })
            .then(response => {
                for (let i = 0; i < response.data.data.length; i++) {
                    self.categories.push([response.data.data[i][0].categoryId.name, response.data.data[i].length, response.data.data[i][0].categoryId._id]);
                }
            })
            .catch(err => {
                console.log(err);
            })
        },
        selectedCategory: function (id) {
            axios({
                method: "get",
                url: `http://localhost:3000/item/category/${id}`
            })
            .then(response => {
                let self = this
                let tmp = []
                for (let i = 0; i < response.data.data.length; i++) {
                    tmp.push(response.data.data[i])
                }
                self.items = tmp //emit
                this.$emit("selectedCategories",tmp)
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    template : `
    <div class="ui small vertical menu">
        <div class="item">
            <h3>Categories</h3>
        </div>
        <a class="item" v-on:click="loadDataItemUnfiltered()">
            <div class="ui small teal label">100++</div>
            All
        </a>
        <a class="item" v-for="category in categories" v-on:click="selectedCategory(category[2])">
            <div class="ui small teal label">{{category[1]}}</div>
            {{category[0]}}
        </a>
    </div>
    `
})