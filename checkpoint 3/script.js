"use script"

var killcount = 0;
var watergun = 0;
var exterminator = 0;
var bugBomb = 0;

function update() {
  document.getElementById('text').value = killcount;
  document.title = killcount +  "Ants killed";
  document.getElementById('ammountOfGuns').innerHTML = "You own " + watergun "water guns"
  document.getElementById('costWaterGun').innerHTML = ((watergun +1) * 15) + "quarters"

  document.getElementById('ammountOfExterminatrs').innerHTML = "You've hired " + exterminator "exterminators"
  document.getElementById('costExterminator').innerHTML = ((exterminator +1) * 90) + "quarters"

  document.getElementById('ammountOfGuns').innerHTML = "You've used " + bugBomb "bug Bombs"
  document.getElementById('costWaterGun').innerHTML = ((bugBomb +1) * 15) + "quarters"
}
function add() {
  killcount = killcount + 1
  // document.getElementById('text').value = killcount;
  // document.title = killcount +  "Ants killed";
  update()
}
function buyWaterGun() {
  if (killcount >= ((watergun + 1) * 15)) {
    killcount = killcount - ((watergun + 1) * 15);
    watergun = watergun + 1;
    update()
  }
}

function buyEterminator() {
  if (killcount >= ((exterminator + 1) * 90)) {
    killcount = killcount - ((exterminator + 1) * 90);
    exterminator = exterminator + 1;
    update()
  }

  function buyBugBomb() {
    if (killcount >= ((bugBomb + 1) * 125)) {
      killcount = killcount - ((bugBomb + 1) * 125);
      bugBomb = bugBomb + 1;
      update()
    }

function timer() {
  killcount = killcount + watergun;
  update()
}
setInterval(timer, 500)
