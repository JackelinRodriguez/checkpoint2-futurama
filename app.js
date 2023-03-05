console.log('we connected?');

let autoUpgrades = [
  {
    name: 'digestion',
    price: 200,
    quantity: 0,
    multiplier: 1
  },
  {
    name: 'planet express',
    price: 300,
    quantity: 0,
    multiplier: 1
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

function updateBlackMatter(name) {
  console.log('update black matter');
  let blackMatterElem = document.getElementById('black-matter');
  let drawClick = document.getElementById('leela-total');

  // @ts-ignore
  blackMatterElem.innerText = lordNibblerTotal;
  // @ts-ignore
  drawClick.innerText = clickGrandTotal;
}

// NOTE in progress
function drawUpgradeQty(name) {
  // update stat-qty on page 
  // @ts-ignore
  drawClick.innerText = clickGrandTotal;

}


// SECTION math

let lordNibblerTotal = 0;
let clickGrandTotal = 0;

function mine() {
  lordNibblerTotal++
  lordNibblerTotal += clickGrandTotal;
  console.log("count:", lordNibblerTotal);
  updateBlackMatter()
}

function clickModifyHam(name) {
  let click = clickUpgrades.find(click => click.name == name);
  let priceHam = document.getElementById('ham-price')
  console.log('more bang for my click');
  // @ts-ignore
  if (click.quantity > 0) {
    // @ts-ignore
    clickGrandTotal += click.multiplier;
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
  updateBlackMatter()
}

function clickModifyLeela(name) {
  let click = clickUpgrades.find(click => click.name == name);
  let priceLeela = document.getElementById('leela-price')
  console.log('more bang for my click');
  // @ts-ignore
  if (click.quantity > 0) {
    // @ts-ignore
    clickGrandTotal += click.multiplier;
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
// need price to subtract from the interval. maybe split into two functions

function buyAutoDigestion(name) {
  console.log("buying auto");
  let digestion = clickUpgrades.find(digestion => digestion.name == name)
  console.log(digestion);
  // @ts-ignore
  if (lordNibblerTotal >= digestion.price) {
    // @ts-ignore
    digestion.quantity++
    // @ts-ignore
    lordNibblerTotal -= digestion.price

  } else {
    window.alert('You need more dark matter!')
  }
  // clickModify(name)
  updateBlackMatter()
}


function autoDigestion(name) {
  let autoStat = autoUpgrades.find(auto => auto.name == name)
  // @ts-ignore
  if (lordNibblerTotal >= autoStat.price) {
    // @ts-ignore
    lordNibblerTotal -= autoStat.price;

    // setInterval(() => {
    //   console.log("digestion interval set");
    //   lordNibblerTotal += 1;
    //   updateBlackMatter()
    // }, 3000)
  }
}


// let digestionInterval = setInterval(() => {
//   console.log("digestion interval set");
//   lordNibblerTotal += 1;
//   updateBlackMatter()
// }, 3000)

// let planetExpressInterval = setInterval(() => {
//   console.log('planet express interval set');
//   lordNibblerTotal += 1;
//   updateBlackMatter()
// }, 3000)

// function stopInterval() {
//   clearInterval(digestionInterval);
//   clearInterval(planetExpressInterval);
// }
