<template>
  <transition name="fade">
    <div v-if="isOpen">
      <div class="startup-box-wrap">
        <div class="startup-box">
          <div style="display:flex; height:100%;">
            <div style="width:50px; height:100%;"></div>
            <div style="flex:1; height:100%;">
              <AppList />
            </div>
            <div style="flex:2; height:100%;">
              <TileList />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import AppList from './AppList.vue'
import TileList from './TileList.vue'

export default {
  computed: {
    isOpen () {
      return this.$store.getters.isMenuOpen
    }
  },
  components: {
    AppList,
    TileList
  }
}
</script>
<style>

 .startup-box-wrap {
   position: fixed;
   background-color: black;
   bottom: 50px;
   width: 700px;
   height: 500px;
 }

 .startup-box {
   background-color: black;
   width: 100%;
   height: 100%;
   position: absolute;
   opacity: 0.7;
 }

 .fade-enter-active,
 .fade-leave-active {
   transition: opacity .5s
 }

 .fade-enter,
 .fade-leave-active {
   opacity: 0
 }
</style>
