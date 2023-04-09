function mygcd(x) {
  if(x % 2 ==0) {
    return x / 2
  }
  if(mygcd(x) / x != 1 {
    return mygcd(x)
  }
} 
console.log(mygcd(12))
