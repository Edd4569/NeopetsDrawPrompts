const drawP = document.getElementById("drawP");
const desc = document.getElementById("idDescription");
const album = document.getElementById("abc");
const grid = document.getElementById("grid");
const p2Zone = document.getElementById("p2ZoneDiv");

function randomP2() {
  clearOutcome();

  setupLabRay();
  let url = jnLinkFormat(getDrawPrompt());
  drawP.innerHTML = url;
  desc.textContent = `Will generate a real or fake Petpet Color/Species`;
  album.style.display = 'none';
}

function uniqueP2() {
  desc.innerHTML =`Should generate a Petpet Color/Species combo that doesn't exist on site<br>(unless TNT releases a new combo before I can update)`;
  clearOutcome();
  setUpArray();
  let url = jnLinkFormat(getUniqueDrawPrompt());
  drawP.innerHTML = url;
  album.style.display = 'none';
 }

function p2labRay() {
  desc.textContent =`The Petpet Laboratory is in beta.`;
  setupLabRay();
  let url = onLabRayP2Button(1);
  drawP.innerHTML = p2LabRayGreeting(1) + url +'<button onclick="Zap()" type="button" class="btn btn-primary">Zap the poor Petpet!</button><br><br>';
}

function Zap() {
  setupLabRay();
  let url = onLabRayP2Button(0);
  let z = getZapCount();
  let newText = p2LabRayGreeting(0) + url + '<div class=buttonBox><button onclick="Zap()" type="button" class="btn btn-primary">Zap the poor Petpet!</button>';
  newText += `   <button onclick="Restart()" type="button" class="btn btn-danger">Restart!</button>`;
  newText += `   <button onclick="toggleHideGreyscaleCards()" type="button" class="btn btn-info">Show/Hide!</button><br></div>` + z;
  drawP.innerHTML = newText;
  album.style.display = 'block';
}

function Restart() {
  let url = onRestart(1);
  drawP.innerHTML = p2LabRayGreeting(1) + url +'<button onclick="Zap()" type="button" class="btn btn-primary">Zap the poor Petpet!</button><br>';
}

function p2Album(){ 
  p2Zone.innerHTML = `<div id="grid" class="grid-container"></div>`
}
