let valores = [0, 4, 3, 6, 7, 9, 8, 5]

let org = valores.sort()

/* console.log(`\n ${valores}\n`) */

/* console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])
console.log(valores[7]) */

/* for(let pos = 0 ; pos < valores.length ; pos ++ ){
    console.log(`A posição ${pos} tem como valor ${valores[pos]}`)
} */

for(let pos in valores ){
    
    console.log(`A posição ${pos} tem como valor ${valores[pos]}`)
}

console.log(org)