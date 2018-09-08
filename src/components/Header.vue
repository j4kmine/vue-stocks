<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <router-link to="/portoflio" activeClass="active" tag="li"><a>Portofolio</a></router-link>
        <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
      </ul>
      <strong class="navbar-text navbar-right">Funds : {{funds | currency}}</strong>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" v-on:click="endDay">End Day</a></li>
        <li class="dropdown" v-bind:class="{open:isDropDownOpen}" v-on:click="isDropDownOpen = !isDropDownOpen" >
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" v-on:click="saveData">Save</a></li>
            <li><a href="#" v-on:click="loadData">Load Data</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>
<script>
import {mapActions} from 'vuex'
export default{ 
    data(){
      return{
        isDropDownOpen:false
      }
    }, 
    computed:{
        funds(){
            // console.log(this.$store.getters.stock)
            return this.$store.getters.funds
        }
    },
    methods:{
      ...mapActions([
        'randomizeStock',
        'loadData'
      ]),
      endDay(){
        this.randomizeStock()
      },
      saveData(){
        const data={
          funds:this.$store.getters.funds,
          stockPortofolio:this.$store.getters.stockPortofolio,
          stocks:this.$store.getters.stock
        }
        this.$http.put('data.json',data)
      },
      fetchData(){
        this.loadData()
      }
    }
}
</script>
