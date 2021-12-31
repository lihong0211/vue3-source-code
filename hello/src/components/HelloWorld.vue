<template>
  <div class="hello">
    <!-- <button @click="changeDate"> {{test}} </button>
    <h1 @click="sayHello">{{ state.msg }}</h1>
    <h1 @click="reactiveUpdate">{{ state.test }}</h1>
    <button @click="doWatch">触发watch</button>
    <h1>a:{{ a }} b:{{ b }} c.d:{{ c.d }} e:{{ e }} f:{{ f }}</h1> -->
    <h1>{{ age }}</h1>
    <button @click="plusOne"> age + 1 </button>
    
  </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
export default {
  emits: ['welcome'],
  setup () {
    debugger
    const state = reactive({
      msg: 'hello',
      test: 'test'
    })
    const age = ref(18)
    function plusOne () {
      age.value++
    }

    function reactiveUpdate () {
      state.msg = 'reactive-msg'
    }

    onMounted(() => { 
      debugger
      console.log('component mounted')
    }) 
  
    return {
      state, age, plusOne, reactiveUpdate
    }
  },
  data() {
    return {
      test: 'test1',
      a: 1,
      b: 2,
      c: {
        d: 4
      },
      e: 5,
      f: 6
    }
  },
  methods: {
    sayHello: function() {
      debugger
      this.$emit('welcome')
    },
    doWatch () {
      this.a = this.a * 2,
      this.c.d = this.c.d * 2
      this.e = this.e * 2
      this.f = this.f * 2
    },
    changeDate () {
      debugger
      this.test = 'new-test'
    }
  },
  watch: {
    // 侦听顶级 property
    a(val, oldVal) {
      console.log(`new: ${val}, old: ${oldVal}`)
    },
    // 字符串方法名
    // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    c: {
      handler(val, oldVal) {
        console.log('c changed')
      },
      deep: true
    },
    // 侦听单个嵌套 property
    'c.d': function (val, oldVal) {
      // do something
    },
    // 该回调将会在侦听开始之后被立即调用
    e: {
      handler(val, oldVal) {
        console.log('e changed')
      },
      immediate: true
    },
    // 你可以传入回调数组，它们会被逐一调用
    f: [
      function handle2(val, oldVal) {
        console.log('handle2 triggered')
      },
      {
        handler: function handle3(val, oldVal) {
          console.log('handle3 triggered')
        }
        /* ... */
      }
    ]
  },
  computed: {
    // 仅读取
    aDouble() {
      return this.a * 2
    },
    // 读取和设置
    aPlus: {
      get() {
        return this.a + 1
      },
      set(v) {
        this.a = v - 1
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
