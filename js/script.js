/*
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal (ad esempio).
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva. */

/* --------------------------------------------
PSEUDO CODICE 
-------------------------------------------- */
/*
- creo un array di path di immagini contenute nella mia cartella
- creo elementi in js corrispondenti agli elementi html
- creo una variabile di valore zero che utilizzerò per l'src dell'immagine
- assegno la variabile creata al src dell'immagine (in questo modo aprendo il sito ho già un immagine mostrata)
- creo due eventi click (uno per il tasto alto, uno per il tasto basso):
-> premendo il pulsante in basso:
   ° devo aumentare il valore dell'indice di un'unità
   ° mostro nel DOM l'immagine contenuta nella lista nella posizione corrispondente al valore dell'indice
-> premendo il pulsante in alto:
   ° devo diminuire il valore dell'indice di un'unità
   ° mostro nel DOM l'immagine contenuta nella lista nella posizione corrispondente al valore dell'indice
*/


// creo un array di path di immagini contenute nella mia cartella
const images = ['/img/01.webp', '/img/02.webp', '/img/03.webp', '/img/04.webp', '/img/05.webp'];

// creo elementi in js corrispondenti agli elementi html
const startArrowElement = document.getElementById("start-arrow");
const endArrowElement = document.getElementById("end-arrow");
const carouselActiveImgElement = document.getElementById("carousel-active-img");

// creo una variabile di valore zero che utilizzerò per l'src dell'immagine
let indexSrc = 0;

// assegno la variabile creata al src dell'immagine (in questo modo aprendo il sito ho già un immagine mostrata)
carouselActiveImgElement.src = images [indexSrc];

// creo due eventi click (uno per il tasto alto, uno per il tasto basso)

/* -> premendo il pulsante in basso:
   ° devo aumentare il valore dell'indice di un'unità
   ° mostro nel DOM l'immagine contenuta nella lista nella posizione corrispondente al valore dell'indice */
endArrowElement.addEventListener('click', function () {

    //devo aumentare il valore dell'indice di un'unità
    indexSrc++;

    //condizione di ciclicità infinita
    if (indexSrc > images.length - 1) {
        indexSrc = 0;
    }

    //mostro nel DOM l'immagine contenuta nella lista nella posizione corrispondente al valore dell'indice
    carouselActiveImgElement.src = images [indexSrc];
})

/* -> premendo il pulsante in alto:
   ° devo diminuire il valore dell'indice di un'unità
   ° mostro nel DOM l'immagine contenuta nella lista nella posizione corrispondente al valore dell'indice */
startArrowElement.addEventListener('click', function () {

    //devo diminuire il valore dell'indice di un'unità
    indexSrc--;

    //condizione di ciclicità infinita
    if (indexSrc < 0) {
        indexSrc = images.length - 1;
    }

    //mostro nel DOM l'immagine contenuta nella lista nella posizione corrisponde al valore dell'indice */
    carouselActiveImgElement.src = images [indexSrc];
})