window.actions = {
  execute: () => {
    let offsetEntry = document.getElementById("offsetNumber").value;
    let option1 = document.getElementById("translatorOptions1").checked;
    let option2 = document.getElementById("translatorOptions2").checked;
    let textReturn = document.getElementById('translator').value;
    if(option1 == true){
      alert('cifrado');
    }
  },
  clean: () => {
    alert('limpia');
  
  }

}
