// Seleção em Regexp

// flag G => Global
// flag I => Maisculo e Minusculo
// Character Class => [ab]
// caratre espeial => . [Seleciona literal]
// \.
// ^ negar

const frase = 'JavaScript';
const fraseNova = frase.replace(/a/gi, 'o');

console.log( fraseNova );

const frase2 = 'WLorem ipsum dolor sit amet consectetur adipisicing elit. Tempore porro atque in voluptatibus voluptates enim provident omnis ipsam incidunt hic dolorum culpa, est saepe iure, nulla cum perferendis doloribus labore.Tenetur aut quasi consequatur sapiente hic. Quis sunt dolorum placeat quas officiis sit velit libero inventore totam beatae illo, architecto asperiores odit debitis eius nisi impedit doloremque reiciendis! Autem, incidunt?';

const regexp = frase2.replace(/[\w]/gi, 'CÚ');

console.log(regexp);

const frase3 = 'Vaaai aaaaali por favor2'
const quantificador = frase3.replace(/a{2,}/g, 'a');
console.log(quantificador);

// Ou
const frase4 = 'tamanho e lobo e brasil e brazil e geral';
const ouUmouOutro = /tamanho|lobo|bra[s-z]il|geral/gi;
console.log( frase4.replace(ouUmouOutro, 'BB') );

// Captura de grupos
const email = 'alex.ferreira1796@gmail.com';
const regexEmail = /(\w.+)@(\w.+)/gi // Tudo que é alfanumerico e ponto ao inifnito, seguido de ? seguido de Tudo que é alfanumerico e ponto ao inifnito global e maisculo e minsuculo

console.log( email.replace(regexEmail, '$1@hotmail.com') );