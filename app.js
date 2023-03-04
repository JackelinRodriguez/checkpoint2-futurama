console.log('we connected?');

let autoUpgrades = [
  {
    name: 'digestion',
    price: 20,
    quantity: 0,
    multiplier: 1
  },
  {
    name: 'planet express',
    price: 20,
    quantity: 0,
    multiplier: 1
  }
]

let clickUpgrades = [
  {
    name: 'ham',
    price: 5,
    quantity: 0,
    multiplier: 2
  },
  {
    name: 'leela',
    price: 10,
    quantity: 0,
    multiplier: 4
  }
]


// SECTION draw

function updateBlackMatter(name) {
  console.log('update black matter');
  let blackMatterElem = document.getElementById('black-matter');
  // @ts-ignore
  blackMatterElem.innerText = lordNibblerTotal
}

// NOTE in progress
function drawUpgradeQty(name) {
  // update stat-qty on page 
  let drawQty = clickUpgrades.find(qty => qty.name == name);
  let qtyElem = document.getElementById('ham-qty')
  console.log('stats should be updating');
  // @ts-ignore
  if (drawQty.quantity > 0) {
    // @ts-ignore
    qtyElem.innerText = drawQty.quantity
  }

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

function clickModify(name) {
  let click = clickUpgrades.find(click => click.name == name);
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
}


// SECTION click upgrades

function buyHam(name) {
  console.log('buying ham');
  // check if we can afford
  // if yes, then increase lordNibblerTotal and the multiplier
  // also decrease the after purchase since it was purchased
  let ham = clickUpgrades.find(ham => ham.name == name)
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
  clickModify(name)
  drawUpgradeQty(name)
  updateBlackMatter()
}

function buyLeela(name) {
  console.log("buying leela");
  let leela = clickUpgrades.find(leela => leela.name == name)
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
  clickModify(name)
  updateBlackMatter()
}


// SECTION interval auto upgrades
// BOTH WORK JUST HATE HOW IT KEEPS GOING IN BACKGROUND

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
