console.log('we connected?');

let autoUpgrades = [
  {
    name: 'digestion',
    price: 200,
    quantity: 0,
    multiplier: 2
  },
  {
    name: 'planet express',
    price: 500,
    quantity: 0,
    multiplier: 10
  }
]

let clickUpgrades = [
  {
    name: 'ham',
    price: 20,
    quantity: 0,
    multiplier: 5
  },
  {
    name: 'leela',
    price: 150,
    quantity: 0,
    multiplier: 10
  }
]


// SECTION draw

function updateBlackMatter() {
  console.log('update black matter');
  let blackMatterElem = document.getElementById('black-matter');
  // let drawClick = document.getElementById('leela-total');

  // @ts-ignore
  blackMatterElem.innerText = lordNibblerTotal;
  // @ts-ignore
  // drawClick.innerText = clickGrandTotal;
}

function drawClickDarkMatter() {
  let darkMatter = document.getElementById('click-total')
  // @ts-ignore
  darkMatter.innerText = darkMatterClick;

}



// SECTION math

let lordNibblerTotal = 0;
let darkMatterClick = 0;

let darkMatterAuto = 0;


function mine() {
  lordNibblerTotal++
  lordNibblerTotal += darkMatterClick;
  console.log("count:", lordNibblerTotal);
  updateBlackMatter()
}

function clickModifyHam(name) {
  let click = clickUpgrades.find(click => click.name == name);
  let priceHam = document.getElementById('ham-price')
  // let darkMatter = document.getElementById('ham-total')
  console.log('more bang for my click');
  // @ts-ignore
  if (click.quantity > 0) {
    // @ts-ignore
    darkMatterClick += click.multiplier;
    // @ts-ignore
  } if (click.quantity >= 1) {
    console.log('it costs more');
    // @ts-ignore
    click.price *= 2
    // @ts-ignore
    console.log('cost:', click.price);
  }
  // @ts-ignore
  priceHam.innerText = click.price;
  // // @ts-ignore
  // darkMatter.innerText = darkMatterClick;
  drawClickDarkMatter()
  updateBlackMatter()
}

function clickModifyLeela(name) {
  let click = clickUpgrades.find(click => click.name == name);
  let priceLeela = document.getElementById('leela-price')
  // let darkMatter = document.getElementById('leela-total')
  console.log('more bang for my click');
  // @ts-ignore
  if (click.quantity > 0) {
    // @ts-ignore
    darkMatterClick += click.multiplier;
    // @ts-ignore
  } if (click.quantity >= 1) {
    console.log('it costs more');
    // @ts-ignore
    click.price *= 2
    // @ts-ignore
    console.log('cost:', click.price);
  }
  // @ts-ignore
  priceLeela.innerText = click.price;
  // // @ts-ignore
  // darkMatter.innerText = darkMatterClick;
  drawClickDarkMatter()
  updateBlackMatter()
}


// SECTION click upgrades

function buyHam(name) {
  console.log('buying ham');
  // check if we can afford
  // if yes, then increase lordNibblerTotal and the multiplier
  // also decrease the after purchase since it was purchased
  let ham = clickUpgrades.find(ham => ham.name == name)
  let drawQty = document.getElementById('ham-qty')
  console.log(ham);
  // @ts-ignore
  if (lordNibblerTotal >= ham.price) {
    // @ts-ignore
    ham.quantity++
    // @ts-ignore
    console.log('ham:', ham.quantity);
    // @ts-ignore
    lordNibblerTotal -= ham.price;
    // @ts-ignore
  } else {
    window.alert('Hurry, mine more black matter!')
  }
  // @ts-ignore
  drawQty.innerText = ham.quantity
  clickModifyHam(name)
}

function buyLeela(name) {
  console.log("buying leela");
  let leela = clickUpgrades.find(leela => leela.name == name)
  let drawQty = document.getElementById('leela-qty')
  console.log(leela);
  // @ts-ignore
  if (lordNibblerTotal >= leela.price) {
    // @ts-ignore
    leela.quantity++
    // @ts-ignore
    lordNibblerTotal -= leela.price
  } else {
    window.alert('Nibbler we need more dark matter!')
  }
  // @ts-ignore
  drawQty.innerText = leela.quantity
  clickModifyLeela(name)
}


// SECTION interval auto upgrades
// need price to subtract from the interval
// add to quantity

// NOTE 
// function drawDarkInterval() {
//   let autoUpgrade = autoUpgrades.find(auto => auto.name);

//   console.log('update total');
//   let clickDigest = document.getElementById('digest-total')
//   let clickPlanet = document.getElementById('planet-total')

//   let digestQty = document.getElementById('digest-qty');
//   let planetQty = document.getElementById('planet-qty');



//   // @ts-ignore
//   clickDigest.innerText = darkMatterAuto;
//   // @ts-ignore
//   clickPlanet.innerText = darkMatterAuto;
//   // @ts-ignore
//   digestQty.innerText = autoUpgrade.quantity;
//   // @ts-ignore
//   planetQty.innerText = autoUpgrade.quantity;
// }


// darkMatterAuto
function stopIntervalDigest() {
  // let darkMatterAuto = 0;

  console.log('dont start interval digest');
  let autoUpgrade = autoUpgrades.find(auto => auto.name);

  let digestQty = document.getElementById('digest-qty');
  let clickDigest = document.getElementById('digest-total')

  let digestionInterval = setInterval(() => {
    console.log("digestion interval set");
    // @ts-ignore
    lordNibblerTotal += 2;
  }, 3000)

  // @ts-ignore
  if (lordNibblerTotal < autoUpgrade.price) {
    clearInterval(digestionInterval);
  } else {
    // @ts-ignore
    lordNibblerTotal -= autoUpgrade.price;
    // @ts-ignore
    darkMatterAuto += autoUpgrade.multiplier;
    // @ts-ignore
    autoUpgrade.quantity++
    // @ts-ignore
    console.log('digest', autoUpgrade.quantity);
  }
  // @ts-ignore
  digestQty.innerText = autoUpgrade.quantity;
  // @ts-ignore
  clickDigest.innerText = darkMatterAuto;
  // drawDarkInterval()
  updateBlackMatter()
}

function upgradeDigest() {

}

function stopIntervalPlanet() {
  // let darkMatterAuto = 0;

  console.log('do not start interval planet');
  let autoUpgrade = autoUpgrades.find(auto => auto.name);
  let planetQty = document.getElementById('planet-qty');
  let clickPlanet = document.getElementById('planet-total');

  let planetInterval = setInterval(() => {
    console.log("digestion interval set");
    // @ts-ignore
    lordNibblerTotal += 10;
  }, 3000)

  // @ts-ignore
  if (lordNibblerTotal < autoUpgrade.price) {
    clearInterval(planetInterval);
  } else {
    // @ts-ignore
    lordNibblerTotal -= autoUpgrade.price;
    // @ts-ignore
    darkMatterAuto += autoUpgrade.multiplier;
    // @ts-ignore
    autoUpgrade.quantity++
  }
  // @ts-ignore
  planetQty.innerText = autoUpgrade.quantity;
  // @ts-ignore
  clickPlanet.innerText = darkMatterAuto;
  // drawDarkInterval()
  updateBlackMatter()
}

stopIntervalDigest()
stopIntervalPlanet()

