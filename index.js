function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function randomFunction() {
        console.log("Woooo random function");
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Woooo anonymous function");
    }
}