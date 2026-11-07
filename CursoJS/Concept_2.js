

// var is function scoped, meaning it is accessible within the function it is declared in,
// and also within any nested blocks. However, if a variable is declared with var inside
//  a block (like an if statement), it will still be accessible outside of that block,
//  which can lead to unexpected behavior.

function varExample(){
    var x =1
    if(true){
        var x = 2
        console.log(x) // 2
    }
}

// let is block scoped, meaning it is only accessible within the block it is declared in.
function letExample(){
    let y = 1
    if(true){
        let y = 2
        console.log(y) // 2
    }
    console.log(y)
} 

// const is also block scoped, but it cannot be reassigned after its initial assignment.
function constExample(){
    const z = 1
    if(true){
        const z = 2
        console.log(z) // 2
    }   
    console.log(z) // 1
}

letExample();
constExample();