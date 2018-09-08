<template>
<div class='col-sm-6 col-md-4'>
    <div class="panel panel-success">
        <div class="panel-heading">
            <h3 class="panel-title">
                NAME:{{stock.name}}
                <small>(price :{{stock.price | currency}}) | Quantity : {{stock.quantity}}</small>
            </h3>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" class="form-controll" placeholder="Quantity" v-model="quantity" v-bind:class="{danger:insuficentQuantity}"/>
                </div>
                <div class="pull-rig">
                    <button class="btn btn-success" v-on:click="sellStock" v-bind:disabled ="insuficentQuantity || quantity <= 0 || Number.isInteger(quantity)">
                        {{ insuficentQuantity ? 'insufficent' : 'Sell'}}
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
import {mapActions} from 'vuex'
export default {

    props:['stock'],
    data(){
        return{
            quantity:0
        }
    },
    computed:{
       insuficentQuantity(){
           return this.quantity > this.stock.quantity
       }
    },
    methods:{
          ...mapActions({
               sellStockstate: 'sellStock'
        }),
        sellStock(){
          
            const order={
                stockId:this.stock.id,
                stockPrice:this.stock.price,
                quantity:this.quantity
            }
           this.sellStockstate(order)
           this.quantity =0
        }
    }
}
</script>
