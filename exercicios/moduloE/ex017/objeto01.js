let array = [1, 2, 3, 4, 5]

let menor = array[0]
let maior = array[0]

for(let pos in array){
    if(array[pos] > maior)
        maior = array[pos]
    if(array[pos] < menor)
        menor = array[pos]
}

console.log(menor, maior)

 let amigo = {
    nome:"José",
    idade:"18",
    sexo:"M",
    peso: 58,
    engordar(p=0){
        console.log('engordou')
        this.peso += p
    }

}

amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso} Kg`) 