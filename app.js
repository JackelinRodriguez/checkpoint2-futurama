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
  // @ts-ignore
  blackMatterElem.innerText = lordNibblerTotal;

}

function drawClickDarkMatter() {
  let darkMatter = document.getElementById('click-total')
  let drawAutoClick = document.getElementById('auto-total');

  // @ts-ignore
  darkMatter.innerText = darkMatterClick;
  // @ts-ignore
  drawAutoClick.innerText = darkMatterAuto;
}



// SECTION math

let lordNibblerTotal = 0;
let darkMatterClick = 0;
let darkMatterAuto = 0;




function mine() {
  lordNibblerTotal++
  lordNibblerTotal += darkMatterClick;
  // lordNibblerTotal += darkMatterAuto;
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
    console.log('digest', digest.quantity);
    // @ts-ignore
    lordNibblerTotal -= digest.price;
    // @ts-ignore
    digest.price *= 2;
    // @ts-ignore
    console.log('price auto digest:', digest.price);
  } else {
    window.alert('Get more dark matter to help Nibbler digest!')
  }
  // @ts-ignore
  drawQty.innerText = digest.quantity
  autoModifyDigest()
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
    lordNibblerTotal -= planet.price;
    // @ts-ignore
    planet.price *= 2;
  } else {
    window.alert('Good News! You need more dark matter.')
  }
  // @ts-ignore
  drawQty.innerText = planet.quantity
  autoModifyPlanet()
}



function autoModifyDigest() {
  let darkMatterAuto = 0;
  let auto = autoUpgrades.find(a => a.name);
  let priceAuto = document.getElementById('digest-price')


  console.log("start interval");
  // @ts-ignore
  if (auto.quantity > 0) {
    // @ts-ignore
    darkMatterAuto += auto.multiplier
  }
  // @ts-ignore
  // autoUpgrades.forEach(a => {
  //   switch (a.name) {
  //     case 'digestion':
  //       darkMatterAuto += a.multiplier
  //       break
  //     case 'planet express':
  //       darkMatterAuto += a.multiplier
  //       break
  //   }
  // })

  console.log('auto clicks:', darkMatterAuto);
  lordNibblerTotal += darkMatterAuto;
  // @ts-ignore
  priceAuto.innerText = auto.price;
  drawClickDarkMatter()
  updateBlackMatter()
}

function autoModifyPlanet() {
  let darkMatterAuto = 0;
  let auto = autoUpgrades.find(a => a.name);
  let priceAuto = document.getElementById('planet-price')


  console.log("start interval");
  // @ts-ignore
  if (auto.quantity > 0) {
    // @ts-ignore
    darkMatterAuto += auto.multiplier
  }
  console.log('auto clicks:', darkMatterAuto);
  lordNibblerTotal += darkMatterAuto;
  // @ts-ignore
  priceAuto.innerText = auto.price;
  drawClickDarkMatter()
  updateBlackMatter()
}


// FIXME move interval to run when the page loads
// It can run all the time, and the logic to add or not add can be handled by the quantity of the upgrade



// SECTION interval
// setInterval(autoModifyDigest, 3000)
// setInterval(autoModifyPlanet, 3000)

