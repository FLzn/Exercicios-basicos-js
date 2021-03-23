function notasEscolares(nota){
    let result
    if(nota >= 90){
        result = "A";
    }else if(nota >= 80 && nota <= 89){
        result = "B";
    }else if(nota >= 70 && nota <= 79){
        result = "C";
    }else if(nota >= 60 && nota <= 69){
        result = "D";
    }else{
        result = "F";
    }

    return result
}

console.log(notasEscolares(1))