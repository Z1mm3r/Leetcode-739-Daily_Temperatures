var dailyTemperatures = function(temperatures) {

    let output = new Array(temperatures.length);
    
    //using this as a stack of [temp,index]
    let stack = []

    //Go through all elements in array
    for(let i = 0; i < temperatures.length; i++){
        //Does our stack have elements?  is the current input element  hotter than previous days?
        //If this temp is higher, keep popping until its not.
        while(stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]){
            //Pop the stack
            let test = stack.pop();
            //set the number of days since the index.
            output[test[1]] = i - test[1];
        }
        //Add current element to stack.
        stack.push([temperatures[i],i]);        
    }

    //Anything left in the stackd defaults to 0.
    while(stack.length > 0){
        let val = stack.pop()
        output[val[1]] = 0;
    }
    return output;
};
