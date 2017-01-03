<template>
  <div id="app">
    {{ msg }}
    <StartupList/>
    <TaskBar />
  </div>
</template>

<script>
import TaskBar from './TaskBar.vue'
import StartupList from './StartupList.vue'
import Store from './store'



export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    Store.setState('isOpen', false);
  },
  components : {
    StartupList,
    TaskBar
  }
}
</script>

<style>

body {
  background-image:url('./assets/background.jpg');
  margin:0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
