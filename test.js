let n = [
  [1, 2, 3],
  [4],
  [5,6]
]

let m = n.sort((a, b) => {
  console.log(a.length,b.length)
  return a.length - b.length
})
console.log(m,n)