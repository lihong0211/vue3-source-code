import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

const app = createApp(App)

// app.config = {
//   errorHandler: (err, vm, info) => {
//     console.log(err, vm, info)
//   },
//   warnHandler: (msg, vm, trace) => {
//     console.log(msg, vm, trace)
//   },
//   globalProperties: {
//     foo: 'bar',
//     $report: () => {
//       console.log('$report')
//     }
//   }
//   // ...
// }

app.mount('#app')
