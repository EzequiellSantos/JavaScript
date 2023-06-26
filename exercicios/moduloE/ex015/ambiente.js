let num = [5, 4, 1, 3, 2, 0]


let slc = num.indexOf(1)


console.log(`\n O nosso vetor é o ${num} organizado e com um numero a mais \n`)
console.log(`\nO número ${num[0]} é o primeiro do vetor\n`)

if(slc === -1){
    console.log('\nEsse número não existe no vetor\n')
}else{
    console.log(`\nO valor 2 tem a posição ${slc} no vetor\n`)
}

let del = num.shift()

if(del > -1){
    num.splice(del, 1)
}

console.log(` >> ${num}`)