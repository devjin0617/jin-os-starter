<template>
    <div style="color:white;">
        <div style="padding:5px; text-align:left;">
            <div style="font-size:14px; margin-left:10px;">
                자주 접속하는 사이트
            </div>
            <div>
                <ul>
                    <li>
                        <div style="padding:3px 10px;">
                            <div style="display:flex; height:30px;">
                                <div style="width:30px;">
                                    <img src="./assets/icon/icon-jinblog.png" style="width:100%; height:100%;">
                                </div>
                                <div style="flex:1; margin-left:10px;">
                                    진블로그
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div style="padding:3px 10px;">
                            <div style="display:flex; height:30px;">
                                <div style="width:30px;">
                                    <img src="./assets/icon/icon-naver.png" style="width:100%; height:100%;">
                                </div>
                                <div style="flex:1; margin-left:10px;">
                                    네이버
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div style="padding:3px 10px;">
                            <div style="display:flex; height:30px;">
                                <div style="width:30px;">
                                    <img src="./assets/icon/icon-daum.png" style="width:100%; height:100%;">
                                </div>
                                <div style="flex:1; margin-left:10px;">
                                    다음
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div style="padding:3px 10px;">
                            <div style="display:flex; height:30px;">
                                <div style="width:30px;">
                                    <img src="./assets/icon/icon-grap.png" style="width:100%; height:100%;">
                                </div>
                                <div style="flex:1; margin-left:10px;">
                                    그랩
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style>
    li {
        display: block;
        margin-top:5px;
        margin-left:0;
    }
    li:hover {
        cursor:pointer;
        background-color: rgba(255,255,255,0.5);
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>
