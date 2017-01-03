<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div v-if="isOpen">
        <div class="startup-box">this is template body</div>
    </div>
</template>
<style>
    .startup-box {
        position:fixed;
        background-color:black;
        bottom:50px;
        width:500px;
        height:500px;
    }
</style>
<script>
    import Store from './store'

    export default{
        data(){
            return{
                isOpen : Store.state.isOpen
            }
        }
    }
</script>
