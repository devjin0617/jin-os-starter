<template>
  <div id="app">
    <div style="width:100%; height:90vh; display:flex;">
      <div style="flex:1;"></div>
      <div style="width:400px; margin:10px; display:flex; flex-direction: column;">

        <div style="width:100%; height:150px; background-color:black; opacity:0.7; border-radius:10px; color:white; display:flex; align-items:center; justify-content:center;">
          <div>
            <div style="font-size:20px; text-align:left;">{{ date }}</div>
            <div style="font-size:35px;">{{ time }}</div>
          </div>
        </div>

        <div style="margin-top:10px; width:100%; flex:1; background-color:black;border-radius:10px; color:white; display:flex; align-items:center; justify-content:center;">
          <div>
            <img src="./assets/fb_login.png" style="width:300px;">
          </div>
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
import Firebase from 'firebase'
import config from './config'

let fbApp = Firebase.initializeApp(config.firebase)
let db = fbApp.database()
let appsRef = db.ref('apps')

export default {
  name: 'app',
  firebase () {
    return {
      apps: appsRef
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      date: this.$moment().format('YYYY.MM.DD'),
      time: this.$moment().format('a h:mm:ss'),
      dateInterval: null,
      timeInterval: null
    }
  },
  created () {
    let vm = this
    // Store.setState('isOpen', false);
    this.dateInterval = setInterval(() => {
      vm.date = this.$moment().format('YYYY.MM.DD')
    }, 1000 * 60)
    this.timeInterval = setInterval(() => {
      vm.time = this.$moment().format('a h:mm:ss')
    }, 1000)
  },
  components: {
    StartupList,
    TaskBar
  },
  destroy () {
    if (this.dateInterval) {
      clearInterval(this.dateInterval)
      this.dateInterval = null
    }
    if (this.timeInterval) {
      clearInterval(this.timeInterval)
      this.timeInterval = null
    }
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
