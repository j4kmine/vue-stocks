<template>
<div>
    <h1>Trade or View Portofolio</h1>
    <h3>{{funds | currency }}</h3>
</div>
</template>
<script>
export default {

        computed:{
            funds(){
                return this.$store.getters.funds
            }
        }
    
}
</script>
