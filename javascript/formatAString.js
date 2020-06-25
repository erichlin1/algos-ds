/*
 * Given: An array containg hashes of name.
 * Return: a string formatted as a list of names separated by commas except for the 
 * two names, which should be separated by an ampersand.  *
 */

/* Solution #1 */

function list(names) {
    let solution = '';
    let comma = ', ';
    let and = ' & ';
    const namesLen = names.length - 1;
    for (let i = 0; i <= namesLen; i++) {
        solution += `${names[i].name}`; 
        if (i === namesLen - 1) {
            solution = solution + and;
        } else if (i !== namesLen) {
            solution = solution + comma;
        }
    }
    return solution;    
};
/* Solution #2 */

function list(names){
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      } 
      else {
        return prev + ', ' + current.name;
      }
    }, '');
   }

