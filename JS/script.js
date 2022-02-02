function verificar(){
    var n1 = document.querySelector('.input1')
    var n2 = document.querySelector('.input2')
    var n3 = document.querySelector('.input3')
    var n4 = document.querySelector('.input4')
    var resultado = document.querySelector('.resultado')

    var tn1 = Number(n1.value)
    var tn2 = Number(n2.value)
    var tn3 = Number(n3.value)
    var tn4 = Number(n4.value)

    var media = (tn1 + tn2 + tn3 + tn4) / 4

    var img = document.createElement('img')
        img.setAttribute('id', 'foto')

    if(media > 10){
       resultado.innerHTML = 'Notas digitadas invalidas'
       document.body.style.background = '#00FFFF'
    }else if(media >= 6){
         //aprovado
         resultado.innerHTML = `<p>Sua média é ${media} Parabéns você foi <strong>aprovado</strong></p>`
         img.setAttribute('src', 'aprovado.png')
         document.body.style.background = '#32CD32'

    }else if(media < 6){
        //reprovado
        resultado.innerHTML = `<p>Sua média é ${media} você foi <strong>reprovado</strong></p>`
        img.setAttribute('src', 'reprovado.png')
        document.body.style.background = '#FF0000'
    }else{
        resultado.innerHTML = 'Verifique as notas inseridas'
    }
    resultado.style.textAlign = 'center'
    resultado.appendChild(img)
}