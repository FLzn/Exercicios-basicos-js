/*
Criar function que receba uma string em celsius ou farenheit

C = (F - 32) * 5/9

F = C * 9/5 + 32


*/

function recebeTemperatura(temperatura){
    const celsiusExist = temperatura.toUpperCase().includes("C")
    const fahreinheitExist = temperatura.toUpperCase().includes("F")

    if(!celsiusExist && !fahreinheitExist){
        console.log("Temperaturas inválidas!")
    }else if(celsiusExist && !fahreinheitExist){
        temperatura = temperatura.toUpperCase().replace("C", "")
        const formula_f = Number((temperatura * 9)/5 + 32)
        console.log(`${formula_c.toFixed(2)}ºF`)
    }else if(!celsiusExist && fahreinheitExist){
        temperatura = temperatura.toUpperCase().replace("F", "")
        const formula_c = Number((temperatura - 32) * 5/9)
        console.log(`${formula_c.toFixed(2)}ºC`)
    }else{
        console.log("Chega aqui nem fodendo")
    }
}

recebeTemperatura("93.2F")
