var agora = new Date()
var hr = agora.getHours()
var min = agora.getMinutes()
var sg = agora.getSeconds()
console.log(`\nAgora são exatamente ${hr} horas e ${min} minutos ${sg} segundos..`)

if (hr < 5 ) {

    console.log('\nBoa Madrugada!\n')

} else if (hr > 4 && hr < 12){

    console.log('\nBom Dia!!\n')

}else if(hr <= 18){
    
    console.log('\nBoa Tardee!!!\n')

}else{
    console.log('\nBoa Noitee!!\n')
}