function randomP2() {
    clearOutcome();
    setupLabRay();
    let url = jnLinkFormat(getDrawPrompt());
    document.getElementById("drawP").innerHTML = url;
    document.getElementById("idDescription").textContent = `Will generate a real or fake Petpet Color/Species`;
  }
  function uniqueP2() {
    document.getElementById("idDescription").innerHTML =`Should generate a Petpet Color/Species combo that doesn't exist on site<br>(unless TNT releases a new combo before I can update)`;
    clearOutcome();
    setUpArray();
    let url = jnLinkFormat(getUniqueDrawPrompt());
    document.getElementById("drawP").innerHTML = url;
  }
  function p2labRay() {
    document.getElementById("idDescription").textContent =`The Petpet Laboratory is in beta.`;
    setupLabRay();
    let url = onLabRayP2Button(1);
    document.getElementById("drawP").innerHTML = p2LabRayGreeting(1) + url +'<button onclick="Zap()" type="button" class="btn btn-primary">Zap the poor Petpet!</button><br>';
  }
  function Zap() {
    setupLabRay();
    let url = onLabRayP2Button(0);
    let z = getZapCount();
    let newText = p2LabRayGreeting(0) + url + '<button onclick="Zap()" type="button" class="btn btn-primary">Zap the poor Petpet!</button>';
    newText += `   <button onclick="Restart()" type="button" class="btn btn-danger">Restart!</button><br>`+ z;
    document.getElementById("drawP").innerHTML = newText;
  }
  function Restart() {
    let url = onRestart(1);
    document.getElementById("drawP").innerHTML = p2LabRayGreeting(1) + url +'<button onclick="Zap()" type="button" class="btn btn-primary">Zap the poor Petpet!</button><br>';
  }