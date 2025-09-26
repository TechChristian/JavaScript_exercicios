function isPalindrome(x) {
  // transforma o número recebido (x) em string
  // exemplo: 121 -> "121" ,   -121 -> "-121"
  let str = x.toString();          

  // pega a string, divide em um array de caracteres, inverte e junta de novo
  // "121" -> ['1','2','1'] -> ['1','2','1'] -> "121"
  // "-121" -> ['-','1','2','1'] -> ['1','2','1','-'] -> "121-"
  let reversed = str.split("").reverse().join(""); 

  // compara a string original com a string invertida
  if (str === reversed) {
    return true;   // se forem iguais → é palíndromo
  } else {
    return false
}
};