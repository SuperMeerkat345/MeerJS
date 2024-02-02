//Start of code

function print(input) {
    console.log(input);
}

//start runtime functions

function wholeTest(n) { 
    let result = (n - Math. floor(n)) !== 0; 
    return result;
}

function undefinedTest(n) {
    let result = (n) !== undefined; 
    return result;
}

function Counter(counting, countingInteval, startPoint, endPoint, printVals, runFunction, runFunctionInterval) {
    this.countingInterval = countingInteval;
    this.startPoint = startPoint;
    this.endPoint = endPoint;
    this.counting = counting;
    this.printVals = printVals;
    this.runFunction = runFunction;
    this.runFunctionInterval = runFunctionInterval;

    this.count = startPoint;
};

Counter.prototype.start = function(){
    while(this.counting && this.count < this.endPoint){
        this.count += this.countingInterval;
        if(this.printVals){
            console.log(this.count);
        }
        if(undefinedTest(this.runFunction) && wholeTest(this.count/this.runFunctionInterval))       {
            this.runFunction();
        }
    }            
};

function arrayIterate(array, runFunctionI, functionIntervalI, runFunctionJ, functionIntervalJ, printxy){
    let x = 0;
    let y = 0;
    for(let i = 0; i < array; i++){
        if(undefinedTest(runFunctionI) && undefinedTest(functionIntervalI)){
            if(wholeTest(x/functionIntervalI)){
                runFunctionI();
            }
            for(let j = 0; j < array[i]; j++){
                if(undefinedTest(runFunctionI) && undefinedTest(functionIntervalI)){
                    if(wholeTest(y/functionIntervalJ)){
                        runFunctionJ();
                        if(undefinedTest(printxy)){
                            if(printxy == true){
                                console.log(array[i][j]);
                            }
                        }
                    }
                }
                y++;
            }
        }
        x++;
    }
}

module.exports = { print, Counter, wholeTest, undefinedTest, arrayIterate };
