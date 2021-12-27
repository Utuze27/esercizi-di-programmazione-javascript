/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var ThisYear = 2018;
var BirthYear = 1991;

var How_old_are_you = ThisYear - BirthYear;
console.log(How_old_are_you);

var Century = 2018 + 73;
console.log(Century);

var Missing_Years = 100 - 27;
console.log(Missing_Years);
