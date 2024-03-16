let topScores = document.querySelector('#top-scores');

if (scores.length > 0) {
  scores = scores.slice(0, 10)

  for (let i = 0; i < scores.length; i++) { //Taulukko pisteitten näyttämiseksi
    const tr = topScores.insertRow()
    const td = tr.insertCell()
    td.innerHTML = `${i + 1}. ${scores[i].toFixed(3)}`
  }

} else {
  topScores.innerHTML = 'Ei tallennettuja pisteitä.';
}