<template>
  <HelloWorld :msg="msg" @welcome="welcome"/>
  <!-- <div>{{msg}}</div> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: 'hello-vue3',
    }
  },
  methods: {
    welcome: function () {
      console.log('hellow')
    }
  }
}
</script>

<style>
#app {
}
</style>
