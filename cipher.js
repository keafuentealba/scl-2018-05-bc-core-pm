window.cipher = {
  encode: (textReturn, offsetEntry) => {
    let i;// variable contador con "i" de referencia.
    let resultado = '';//
    for (i = 0; i < textReturn.length; i++){
      let x = textReturn.toUpperCase().charCodeAt(i);//textReturn convertido a mayus y obtiene cod del caracter en la posicion "i"
      let resultadoFormula = (x - 65 + offsetEntry) % 26 + 65;//formula
      resultado += String.fromCharCode(resultadoFormula);//concatena a resultado el caracter que representa el num result de la formula
    }
    return resultado;
  },

  decode: (textReturn, offsetEntry) => {
    let i;
    let resultado = '';
    for (i = 0; i < textReturn.length; i++){
      let x = textReturn.toUpperCase().charCodeAt(i);
      let resultadoFormula = (x - 65 - offsetEntry) % 26 + 65;
      resultado += String.fromCharCode(resultadoFormula);

    }
    return resultado;
  }
}
