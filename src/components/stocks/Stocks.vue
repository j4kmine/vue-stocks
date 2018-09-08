<template>
    <div>
        <app-stock v-for="(stock,index) in stocks" v-bind:stock="stock"  v-bind:key="index"></app-stock>
    </div>
</template>
<script>
import Stock from './Stock.vue'
export default{
    components:{
        appStock:Stock
    },
    computed:{
        stocks(){
            // console.log(this.$store.getters.stock)
            return this.$store.getters.stock
        }
    }
}
</script>
