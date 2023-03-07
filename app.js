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
  console.log("Dark Matter:", lordNibblerTotal);
  updateBlackMatter()
}

function clickModifyHam(name) {
  let click = clickUpgrades.find(click => click.name == name);
  let priceHam = document.getElementById('ham-price')
  console.log('more bang for my click');
  // @ts-ignore
  if (click.quantity > 0) {
    // @ts-ignore
    darkMatterClick += click.multiplier;
  }
  // @ts-ignore
  priceHam.innerText = click.price;
  drawClickDarkMatter()
  updateBlackMatter()
}

function clickModifyLeela(name) {
  // add clicks from leela to lordNibbler
  let click = clickUpgrades.find(c => c.name == name);
  let priceLeela = document.getElementById('leela-price')
  console.log('more bang for my click');
  // @ts-ignore
  if (click.quantity > 0) {
    // @ts-ignore
    darkMatterClick += click.multiplier
  }
  // @ts-ignore
  priceLeela.innerText = click.price;
  drawClickDarkMatter()
  updateBlackMatter()
}



// SECTION click upgrades

function buyHam(name) {
  console.log('buying ham');
  // check if we can afford
  // if yes, then increase lordNibblerTotal and the price
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
  } if (ham.quantity >= 1) {
    // @ts-ignore
    lordNibblerTotal -= ham.price;
    // @ts-ignore
    ham.price *= 2;
    // @ts-ignore
    console.log('it costs more', ham.price);
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
  // @ts-ignore
  if (lordNibblerTotal >= leela.price) {
    // @ts-ignore
    leela.quantity++
    // @ts-ignore
    console.log('leela', leela.quantity);
    // @ts-ignore
  } if (leela.quantity >= 1) {
    // @ts-ignore
    lordNibblerTotal -= leela.price;
    // @ts-ignore
    leela.price *= 2;
    // @ts-ignore
    console.log('cost:', leela.price);
  } else {
    window.alert('Nibbler we need more dark matter!')
  }
  // @ts-ignore
  drawQty.innerText = leela.quantity
  clickModifyLeela(name)
}


// SECTION interval auto upgrades
// need to subtract price from lord nibbler
// need to add to upgrade qty
function buyDigest(name) {
  console.log('buying digestion');
  let digest = autoUpgrades.find(digest => digest.name == name);
  let drawQty = document.getElementById('digest-qty');
  // @ts-ignore
  if (lordNibblerTotal >= digest.price) {
    // @ts-ignore
    digest.quantity++
    // @ts-ignore
  } if (digest.quantity >= 1) {
    // @ts-ignore
    lordNibblerTotal -= digest.price;
    // @ts-ignore
    digest.price *= 2;
  } else {
    window.alert('Get more dark matter to help Nibbler digest!')
  }
  // NOTE here is the modify function to be made
}

function buyPlanetExpress(name) {
  console.log('buying planet express');
  let planet = autoUpgrades.find(planet => planet.name == name);
  let drawQty = document.getElementById('planet-qty');
  // @ts-ignore
  if (lordNibblerTotal >= planet.price) {
    // @ts-ignore
    planet.quantity++
    // @ts-ignore
  } if (planet.quantity >= 1) {
    // @ts-ignore
    lordNibblerTotal -= planet.price;
    // @ts-ignore
    planet.price *= 2;
  } else {
    window.alert('Good News! You need more dark matter.')
  }
  // NOTE here is the modify function to be made
}

function autoModifyDigest(name) {
  let auto = autoUpgrades.find(a => a.name == name);
  let priceAuto = document.getElementById('digest-price')
}










// switch statment for interval??

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



// FIXME move interval to run when the page loads
// It can run all the time, and the logic to add or not add can be handled by the quantity of the upgrade

// // SECTION intervals
// let digestionInterval = setInterval(() => {
//   console.log("digestion interval set");
//   // @ts-ignore
//   lordNibblerTotal += 2;
// }, 3000)

// let planetExpressInterval = setInterval(() => {
//   console.log("planet express interval set");
//   // @ts-ignore
//   lordNibblerTotal += 10;
// }, 3000)



