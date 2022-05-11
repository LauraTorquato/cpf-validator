function validationCPF(cpf) {
  if (cpf.length != 11) {
    return false;
  } else {
    var num = cpf.substring(0, 9);
    var digits = cpf.substring(9, 11);

    var soma = 0;
    for (var i = 10; i > 1; i--) {
      soma += num.charAt(10 - i) * i;
    }

    var resultCPF = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultCPF != digits.charAt(0)) {
      return false;
    }

    soma = 0;
    num = cpf.substring(0, 10);

    for (var k = 11; k > 1; k--) {
      soma += num.charAt(11 - k) * k;
    }

    resultCPF = soma % 11 > 2 ? 0 : 11 - (soma % 11);

    if (resultCPF != digits.charAt(1)) {
      return false;
    }

    return true;
  }
}

function validation() {
  document.getElementById("success").style.display = "none";
  document.getElementById("error").style.display = "none";

  var cpf = document.getElementById("cpf_digitado").value;

  var result = validationCPF(cpf);

  if (result) {
    document.getElementById("success").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
}
