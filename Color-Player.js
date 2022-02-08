const prompt = require('prompt-sync')();

const num = prompt('You Want to combining or deconstructing?One for combining two for the next');

if (num===1){
    console.log('Plese choose your colors')
    const color=prompt("Colors?")

    if (color=='red + blue'){
        console.log('purple')
    }else if (color=='red + yellow'){
        console.log('purple')
    }else if (color=='blue + yellow'){
        console.log('green')
    }else
    console.log('error')

}else if (num===2){
    console.log('Plese choose your colors')
    const color=prompt("Colors?")

    if (color=='purple'){
        console.log('red+blue')
    }else if (color=='purple'){
        console.log('red+yellow')
    }else if (color=='green'){
        console.log('blue+yellow')
    }else
    console.log('error')

}else{
    console.log('That is not an option my good sir')
    
}


