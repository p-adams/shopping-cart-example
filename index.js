
var ITEM = [{name: 'Anti-Hero', price: 49.99, stock: 3}];

vm = new Vue({
    el: "#app",
    data:{
       items: ITEM,
       price: ITEM[0].price,
       itemInCart: []
    },
    methods:{
        addToCart: function(item){
            item.stock > 0 ? item.stock -= 1: null
            this.itemInCart.push(item)
            
        },
        remove: function(item){
            this.itemInCart.splice(item, 1);
            item.stock++
   
        }
    },
    computed:{
        total() {
            return this.itemInCart.length * this.price
        },
        inStock(){
            return this.items[0].stock 
        },
        inCart(){
            return this.itemInCart.length
        }
    }
})
