<template>
  <div id="app">
    <div style="width:100%; height:100vh; display:flex;">
      <div style="flex:1;"></div>
      <div style="width:400px; padding:10px;">
        <div style="width:100%; height:150px; background-color:black; opacity:0.7; border-radius:10px; color:white; display:flex; align-items:center; justify-content:center;">
          <span>여기는 시간 표시하는 곳</span>
        </div>
      </div>
    </div>
    <StartupList/>
    <TaskBar />
  </div>
</template>

<script>
import TaskBar from './components/TaskBar'
import StartupList from './components/StartupList'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    // Store.setState('isOpen', false);
  },
  components: {
    StartupList,
    TaskBar
  }
}
</script>

<style>
body,.startup-box-wrap::before {
  background:url('./assets/background.jpg') 0 / cover fixed;
  margin:0;
}

.startup-box-wrap::before {
  content: '';
  margin: -35px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  filter: blur(20px);
  z-index: -1;
}

.startup-box-wrap {
  position: relative;
  background: hsla(0,0%,100%,.3);
  font-size: 20px;
  line-height: 1.5;
  width: 60%;
  box-shadow: 5px 3px 30px black;
  overflow: hidden;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
