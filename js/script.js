// Week 1 =============================================

// const skinName1 = "AK-47";
// const skinValue1 = 3300;
// const isAvailable1 = true;

// const skinName2 = "AWP";
// const skinValue2 = 4100;
// const isAvailable2 = true;

// const skinName3 = "Facas";
// const skinValue3 = 27000;
// const isAvailable3 = false;

// const media = (skinValue1 + skinValue2 + skinValue3) / 3
// console.log(media);

// const isTrue = isAvailable1 && isAvailable2 && isAvailable3
// console.log(isTrue);

// Week 2 ============================================

// const boxItem1 = ['Revolução neon', 'Linhas vermelhas', 'Patrocínios']
// const boxitem2 = ['Asiimov', 'Redline', 'Neo Noir']
// const boxItem3 = ['Karambit', 'Damascus steel', 'Butterfly Knife']

// console.log(`${skinName1.toUpperCase()} ${skinValue1} ${isAvailable1} ${boxItem1}
// ${skinName2.toUpperCase()} ${skinValue2} ${isAvailable2} ${boxitem2}
// ${skinName3.toUpperCase()} ${skinValue3} ${isAvailable3} ${boxItem3}` )

// Week 3 ================================================

const box1 = {
  skinName: 'Linhas Vermelhas',
  image: '../img/ak-linhas-vermelhas.png',
  skinValue: 117.99,
  isAvailable: true,
  boxItem: ['Revolução neon', 'Linhas vermelhas', 'Patrocínios'],
  report: ''
}
// 
const box2 = {
  skinName: 'Revolução neon',
  image: '../img/revolucao-neon.png',
  skinValue: 375.45,
  isAvailable: true,
  boxItem: ['Asiimov', 'Redline', 'Neo Noir'],
  report: ''
}

const box3 = {
  skinName: 'Patrocínios',
  image: '../img/patrocinios.webp',
  skinValue: 312.35,
  isAvailable: false,
  boxItem: ['Karambit', 'Damascus steel', 'Butterfly Knife'],
  report: ''
}

const box4 = {
  skinName: 'Asiimov',
  image: '../img/awp-asiimov.png',
  skinValue: 499.99,
  isAvailable: false,
  boxItem: ['Karambit', 'Damascus steel', 'Butterfly Knife'],
  report: ''
}

const box5 = {
  skinName: 'Neo noir',
  image: '../img/awp-neo-noir.webp',
  skinValue: 1989.95,
  isAvailable: false,
  boxItem: ['Karambit', 'Damascus steel', 'Butterfly Knife'],
  report: ''
}

const box6 = {
  skinName: 'Karambit',
  image: '../img/faca-karambit.webp',
  skinValue: 3599.0,
  isAvailable: false,
  boxItem: ['Karambit', 'Damascus steel', 'Butterfly Knife'],
  report: ''
}

const box7 = {
  
  skinName: 'Damascus steel',
  image: '../img/faca-damascus-steel.png',
  skinValue: 11.899,
  isAvailable: false,
  boxItem: ['Karambit', 'Damascus steel', 'Butterfly Knife'],
  report: ''
}

const boxes = [box1, box2, box3, box4, box5, box6, box7]

// boxes.push(box1, box2, box3)
// console.log(boxes);

// // Week 4 ===========================================
// if(box1.isAvailable) boxes.push(box1)
// else(console.log('Objeto não adicionado'))

// if(box2.isAvailable) boxes.push(box2)
// else(console.log('Objeto não adicionado'))

// if(box3.isAvailable) boxes.push(box3)
// else(console.log('Objeto não adicionado'))

// // Week 5 ==========================================

// for(i in boxes) {
//   boxes[i].boxItem = boxes[i].boxItem.join(', ')
// }

// for(i in boxes) {
//   boxes[i].report = `${boxes[i].skinName}
//   ${boxes[i].skinValue}
//   ${boxes[i].isAvailable}
//   ${boxes[i].boxItem}`
//   console.log(boxes[i].report);
// }

// // Week 6 ===================================================

// const returnReport = (object) => {
//   return object.report
// }
// console.log(returnReport(box1));

// const returnObject = (array, string) => {
//   let resposta = []
//   for(i in array) {
//     if(array[i].skinName.toUpperCase() === string.toUpperCase()) {
//       resposta.push(array[i])
//     }
//   }
//   if(resposta.length > 0) {
//     return resposta
//   } else {
//     return 'Item não encontrado'
//   }
// }

// console.log(returnObject(boxes, 'Caixa de luvas'));

// Week 7 ====================================================

const containerItems = document.querySelector('#container--items')
const inputValue = document.querySelector('#inputValue')

const listItems = array => {
  for (i in array) {
    containerItems.innerHTML += `<ul class="menu--items">
    <li class="item">
      <img class="skin--item" src="${array[i].image}" alt="">
      <span>${array[i].skinName}<br>
        A Partir De: <span class="price">${array[i].skinValue}</span></span>
    </li>
  </ul>`
  }

  const skinSearch = _ => {
    
    for (i in boxes) {
      if (inputValue.value.toLowerCase() === boxes[i].skinName.toLocaleLowerCase() || +inputValue.value === boxes[i].skinValue){
        containerItems.innerHTML = ''
        containerItems.insertAdjacentElement(
          'afterbegin',
          (containerItems.innerHTML = `<ul class="menu--items">
          <li class="item">
            <img class="skin--item" src="${boxes[i].image}" alt="">
            <span>${boxes[i].skinName}<br>
              A Partir De: <span class="price">${boxes[i].skinValue}</span></span>
          </li>
        </ul>`)
        )
      }
    }
    
  }
  skinSearch()
}
listItems(boxes)