<template>
  <div>
    {{ msg }}
    <div class="task-bar" style="display:flex;">
        <div style="width:50px; cursor:pointer;">
            <img src="./../assets/start_logo.png" style="width:100%;" v-on:click="onStartup"/>
        </div>
        <SearchBar />
    </div>
  </div>
</template>
<script>
import SearchBar from './SearchBar'

export default{
  data () {
    return {
      msg: 'hello'
    }
  },
  methods: {
    onStartup () {
      this.$store.commit('changeMenu')
        // Store.setState('isOpen', !Store.state.isOpen);
    }
  },
  components: {
    SearchBar
  }
}
</script>
<style>
 .task-bar {
      width:100%;
      height:50px;
      background-color:#010409;
      position:fixed;
      bottom:0;
  }
</style>
