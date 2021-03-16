function flatArray(arr) {

    const flattened = []
    
    for(const elm of arr){
      if(!Array.isArray(elm)){
        flattened.push(elm)
      }else{
        flattened.push(...flatArray([].concat(...elm)))
      }
    }

    return flattened
  }

  module.exports = flatArray