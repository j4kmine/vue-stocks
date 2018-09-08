<template>
    <div>
        <h1>mm</h1>
        <app-stock v-for="(stock,index) in stocks" :stock="stock" v-bind:key="index"></app-stock>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Stock from './Stock.vue'

export default{
    computed:{
        ...mapGetters({
            stocks : 'stockPortofolio'
        })
    },
    components: {
        appStock:Stock
    }

}
</script>