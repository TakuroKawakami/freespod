<template>
  <div id="app">

    <div class="timer-result">
      <p>{{ m }} : {{ s }} : {{ ms }}</p>
    </div>
    
    <div class="timer-button">
<!--v-bindで'disable'クラスを付与する-->
      <button class="start" 
              @click="start"
              v-bind:class="{ 'disable': timerState }"
              >START</button>
      <button class="stop"
              @click="stop">STOP</button>
      <button class="reset"
              @click="reset">RESET</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: 0 ,
      pastTime: 0 ,
      timerObj: null,
//timerStateを追加
      timerState: false
    };
  },
  methods:{
    countUp(){
      return this.pastTime = Date.now() - this.startTime
    },
    start(){
      this.startTime = Date.now()
//timerStateをtrueにする。
      this.timerState = true
      var self = this
      this.timerObj = setInterval(function(){
        self.countUp()
      },10)
    },   
    stop(){
      clearInterval( this.timerObj )
//timerStateをfalseにする。
      this.timerState = false
      this.startTime = 0
    },
    reset(){
      this.stop()
      this.pastTime = 0
      this.timerObj = null
    }
  },
  computed:{
    m(){
      var m = Math.floor( this.pastTime / 60000 % 60 )
      return ( '0' + m ).slice(-2)
      },
    s(){
      var s = Math.floor( this.pastTime / 1000 % 60 )
      return ( '0' + s ).slice(-2)
      },
    ms(){
      var ms = Math.floor( this.pastTime / 10 )
      return ( '0' + ms ).slice(-2)
      }
  }
};
</script>

<style>

a,
button {
  color: #fff;
}

button {
  background: none;
  border: solid 1px;
  border-radius: 2em;
  font: inherit;
  padding: 0.75em 2em;
}

.start {
    background-color: #6ca7ad;
}

.stop {
    background-color: #bf7aba;
}

.reset {
    background-color: #936cad;
}

/*
スタートボタンを無効化する。
*/
.disable {
    pointer-events: none;
    background-color: gray;
  }
  
.timer-result{
    font-size: 60px;
    margin-top: 60px;
    text-align: center;
    color: #2c3e50;
  }

.timer-button {
    text-align: center;
}

</style>