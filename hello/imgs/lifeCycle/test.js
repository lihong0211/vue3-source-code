const target = {
  a: 1
}
const b = target['b'] || (target['b'] = [])
console.log(b)