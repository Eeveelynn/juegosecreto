function calcularIMC() {
    let altura = prompt('ingrese su altura');
    let peso = prompt('ingrese su peso en kg');
    var IMC = peso / altura*altura;
    return ('advice'(`tu imc es ${IMC}``)
}