function realizarOperacion() {
    var opcion = document.getElementById("opcion").value;
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = 0;

    if (opcion == "1") {
        resultado = num1 + num2;
    } else if (opcion == "2") {
        resultado = num1 - num2;
    } else if (opcion == "3") {
        resultado = num1 * num2;
    } else if (opcion == "4") {
        resultado = num1 / num2;
    } else if (opcion == "5") {
        resultado = Math.pow(num1, num2);
    } else if (opcion == "6") {
        resultado = Math.sqrt(num1);
    } else if (opcion == "7") {
        resultado = Math.log(num1);
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    }
