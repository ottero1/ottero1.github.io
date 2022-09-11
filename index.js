let contatore = 0;

function ottieniRisposta(numeroDomanda) {
  if (document.getElementById("question-" + numeroDomanda).checked) {
    contatore = contatore + 1;
  }
}

function ottieniTutteRisposte() {
  for (let i = 1; i <= 69; i++) {
    ottieniRisposta(i);
  }

document.getElementById("results").innerHTML=contatore
}

document.getElementById("results-button").onclick = ottieniTutteRisposte;
