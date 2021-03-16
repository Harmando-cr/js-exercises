// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.


function binaryAgent(str) {
    const strArray = str.split(" ")
    let response = ''

    function charFromBinary(str){

        return String.fromCharCode(
            [...str].reverse().reduce(
                (acc,elm,index) => acc + (elm * Math.pow(2,index))
            ,0)
        )
    }
  
    for(const char of strArray){
      response = response + charFromBinary(char)
    }
  
    return response;
  }

  module.exports = binaryAgent