<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div>
        {{ msg }}
        <div class="task-bar" style="display:flex;">
            <div style="width:50px; cursor:pointer;">
                <img src="./assets/start_logo.png" style="width:100%;" v-on:click="onStartup"/>
            </div>
        </div>
    </div>
</template>
<style>
    .task-bar {
        width:100%;
        height:50px;
        background-color:#010409;
        position:fixed;
        bottom:0;
    }
</style>
<script>

    import Store from './store'

    export default{
        data() {
            return hello
        },
        methods : {
            onStartup : function() {
                Store.setState('isOpen', !Store.state.isOpen);
            }
        }
    }
</script>
