//moduels


//Start of code

function print(input) {
    console.log(input);
}

//start runtime functions (wtf does that mean)
//returns true if even
function evenTest(n){
    let result = n % 2 == 0;
    return result;
}

//returns true if odd
function oddTest(n){
    let result = n % 2 == 1;
    return result;
}

//returns true if whole
//false if not
function wholeTest(n) { 
    let result = (n - Math.floor(n)) == 0; 
    return result;
}

//returns false if undefined
//returns true if defined
function definedTest(n) {
    let result = (n) !== undefined; 
    return result;
}

function log(b, x){
    let result = Math.log(x) / Math.log(b);
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
        if(definedTest(this.runFunction) && wholeTest(this.count/this.runFunctionInterval))       {
            this.runFunction();
        }
    }            
};

function arrayIterate(array, runFunctionI, functionIntervalI, runFunctionJ, functionIntervalJ, printxy){
    let x = 0;
    let y = 0;
    for(let i = 0; i < array; i++){
        if(definedTest(runFunctionI) && definedTest(functionIntervalI)){
            if(wholeTest(x/functionIntervalI)){
                runFunctionI();
            }
            for(let j = 0; j < array[i]; j++){
                if(definedTest(runFunctionI) && definedTest(functionIntervalI)){
                    if(wholeTest(y/functionIntervalJ)){
                        runFunctionJ();
                        if(definedTest(printxy)){
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

//done but not tessted so use at own peril

function interestSimple(i, p, r, t){
    if(i == "" || i == " " || i == "?"){
        return p*r*t;
    }
    if(p == "" || p == " " || p == "?"){
        return i/(r*t); 
    }
    if(r == "" || r == " " || r == "?"){
        return i/(p*t);
    }
    if(t == "" || t == " " || t == "?"){
        return i/(p*r);
    }
}

// in progress semi-functional not tested

function interestCompound(y, a, r, n, t, continuous){
    if(continuous){
        //y=ae^rt
        if(y == "" || y == " " || y == "?" || y == false){
            return a*Math.exp(r*t);
        }
        if(a == "" || a == " " || a == "?" || a == false){
            return y/(Math.exp(r*t)); 
        }
        if(r == "" || r == " " || r == "?" || r == false){
            return y/(a*Math.exp(t));
        }
        if(t == "" || t == " " || t == "?" || t == false){
            return y/(a*Math.exp(r));
        }

    }
    if(continuous == false || definedTest(continous) == false){
        //the formula is y=a(1+r/n)^n*t
        if(y == "" || y == " " || y == "?" || y == false){
            return a*Math.pow(1+r/n, n*t);
        }
        if(a == "" || a == " " || a == "?" || a == false){
            return y/Math.pow(1+r/n, n*t);
        }
        if(r == "" || r == " " || r == "?" || r == false){
            return "iaintdoinallat";
        }
        if(n == "" || n == " " || n == "?" || n == false){
            return "iaintdoinallat";
        }
        if(t == "" || t == " " || t == "?" || t == false){
            return "iaintdoinallat";
        }
    }
}

function help(command){
    commands = {
        help: "help(command); // prints the definition of a command like: help(\"print\"); for the specified command or use help(\"*\"); for every command",
        print: "print(input); // prints the input, same function as console.log()",
        Counter: "Counter(counting, countingInteval, startPoint, endPoint, printVals, runFunction, runFunctionInterval); || Children: Counter.start() // Creates a new object that jsut counts, idk what the parameters do cuz i forgot and i didn't add comments so gl with that",
        wholeTest: "wholeTest(n); // tests if 'n' is a whole number, returns true if whole",
        definedTest: "definedTest(n); // tests if 'n' is defined, returns true if defined",
        arrayIterate: "arrayIterate(array, runFunctionI, functionIntervalI, runFunctionJ, functionIntervalJ, printxy); // idk wat da parameters mean because i forgto",
        interestSimple: "interestSimple(i, p, r, t); // calculates simple iterest using the formula i=prt if you don't know how to use it search it up, bdw this function assumes that you are adding 1 to r before plugging it in so if your equation has a growth of 4% then you plug in 1.04 as r",
        interestCompound: "interestCompound(y, a, r, n, t, continuous); // calculates compound interest using y=ae^rt if continuous it true, if continuous is false then uses the formula y=a(1+r/n)^(n*t)"
    //remember to add a comma
    };
    commandNames = [
        "help",
        "print",
        "Counter",
        "wholeTest",
        "definedTest",
        "arrayIterate",
        "interestSimple",
        "interestCompound",
        "*",
        "**"
    ];
    switch (command) {
        case "help": 
            print(commands.help);
            break;
        case "print": 
            print(commands.print);
            break;
        case "Counter":
            print(commands.Counter);
            break;
        case "wholeTest":
            print(commands.wholeTest);
            break;
        case "definedTest":
            print(commands.definedTest);
            break;
        case "arrayIterate":
            print(commands.arrayIterate);
            break;
        case "interestSimple":
            print(commands.interestSimple);
            break;
        case "interestCompound":
            print(commands.interestCompound);
            break;
        case "*":
            print(commandNames);
            break;
        case "**":
            print(commands);
            break;
        default:
            print("you put in the wrong command dumbass try again and make sure that you are putting it in the right format: help(\"print\"); (remember the quotation makrs)");
      }
    
}


module.exports = { print, Counter, wholeTest, definedTest, arrayIterate, interestSimple, interestCompound, help };
