<template>
    <div class="search-bar">
        <div style="display: flex;height: 100%;">
            <div style="flex:1;">
                <input type="text" placeholder="search...">
            </div>
        </div>
    </div>
</template>
<style>

    .search-bar {
        height: 100%;
        width: 250px;
    }

    .search-bar input {
        width:230px;
        height:100%;
        border:0;
        background-color:#363636;
        outline:none;
        padding:0 10px;
        font-size:15px;
        color:white;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
