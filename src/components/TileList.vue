<template>
  <div style="padding:5px; color:white;">
      <div style="font-size:14px; text-align:left; margin-left:5px;">
          자주 접속하는 사이트
      </div>
      <div style="margin-top:15px;">
          <div class="tile-box-wrap">
              <div class="tile-box">
                  <div style="display:flex; height:100%; flex-direction:column; justify-content: center;">
                      <div style="font-size:14px;">
                          화요일
                      </div>
                      <div style="font-size:50px; line-height:1;">
                          10
                      </div>
                  </div>
              </div>
          </div>
          <div class="tile-box-wrap">
              <div class="tile-box">
                  Hello
              </div>
          </div>
          <div class="tile-box-wrap">
              <div class="tile-box">
                  Hello
              </div>
          </div>
          <div class="tile-box-wrap">
              <div class="tile-box">
                  Hello
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'hello vue'
    }
  }
}
</script>
<style>
.tile-box-wrap {
    float:left;
    width:100px;
    height:100px;
    margin:5px;
}
.tile-box {
    width:100%;
    height:100%;
    background-color:gray;
    -webkit-transition-duration: 0.3s; /* Safari */
    transition-duration: 0.3s;
}

.tile-box-wrap:hover .tile-box {
    width:90px;
    height:90px;
    margin:5px;
    cursor:pointer;
}
</style>
