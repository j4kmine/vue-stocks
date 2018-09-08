<template>
<div class='col-sm-6 col-md-4'>
    <div class="panel panel-success">
        <div class="panel-heading">
            <h3 class="panel-title">
                NAME:{{stock.name}}
                <small>(price :{{stock.price | currency}})</small>
            </h3>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" class="form-controll" placeholder="Quantity" v-model="quantity" v-bind:class="{danger:insufficentFunds}"/>
                </div>
                <div class="pull-rig">
                    <button class="btn btn-success" v-on:click="buyStocks" 
                            v-bind:disabled ="insufficentFunds || quantity <= 0 || Number.isInteger(quantity)">
                        {{ insufficentFunds ? 'insufficent' : 'Buy'}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style protected>
.danger{
    border:1px solid red
}
</style>
<script>
export default {
    props:['stock'],
    data(){
        return{
            quantity:0
        }
    },
    computed:{
        funds(){
            return this.$store.getters.funds
        },
        insufficentFunds(){
            return this.quantity * this.stock.price > this.funds
        }
    },
    methods:{
        buyStocks(){
            const order={
                stockId:this.stock.id,
                stockPrice:this.stock.price,
                quantity:this.quantity
            }
            console.log(order)
            this.$store.dispatch('buyStock',order)
            this.quantity = 0
        }
    }
}
</script>
