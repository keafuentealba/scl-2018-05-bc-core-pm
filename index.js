window.actions = {
  execute: () => {
    let offsetEntry = document.getElementById("offsetNumber").value;
    let option1 = document.getElementById("translatorOptions1").checked;
    let option2 = document.getElementById("translatorOptions2").checked;
    let textReturn = document.getElementById('translator').value;
    if(option1 == true){
        document.getElementById('translator').value = cipher.encode(textReturn, offsetEntry);
    }//se asigno al valor del elemento id translator el resultado de la funcion cipher.encode
    else if (option2 == true) {
      cipher.decode(textReturn, offsetEntry);
    }
    else {
      alert('no llenaste los campos');
    }

  },
  clean: () => {// valores en limpio
    document.getElementById("offsetNumber").value = '';
    document.getElementById("translatorOptions1").checked = false;
    document.getElementById("translatorOptions2").checked = false;
    document.getElementById('translator').value = '';
  }
}
