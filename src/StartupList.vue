<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <transition name="fade">
        <div v-if="state.isOpen">
            <div class="startup-box">this is template body</div>
        </div>
    </transition>
</template>
<style>
    .startup-box {
        position:fixed;
        background-color:black;
        bottom:50px;
        width:500px;
        height:500px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
<script>
    import Store from './store'

    export default{
        data(){
            return{
                state : Store.state
            }
        }
    }
</script>
