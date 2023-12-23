var shadow = document.querySelector("div");
var toDoHeading = document.querySelector("section");
var addList = document.querySelector(".addList");
var addItem = document.querySelector(".addItem");
var inputValue = document.querySelector("#addpara");
var addItemhead = document.querySelector('#inputText');
var header = document.querySelector("header");
var todoCount = 0;
var newtodoCount = 0;

function popUp1() {
    console.log("popUp1")
  shadow.classList.add("shadow");
  addList.style.display = "flex";
}

document.querySelector(".close").addEventListener("click", () => {
  shadow.classList.remove("shadow");
  addList.style.display = "none";
});

document.querySelector(".close2").addEventListener("click", () => {
    shadow.classList.remove("shadow");
    addItem.style.display = "none";
  });

function popUp2() {
  console.log("popup2");
  todoCount++;
  shadow.classList.remove("shadow");
  addList.style.display = "none";
  document.querySelector("#noText").style.display = "none";

  //create the dynamic cards
  var toDoCard = document.createElement('div')
  var CardHeading = document.createElement('div')
  var boxLine = document.createElement('hr')
  var deleteBtn = document.createElement('div')
  var boxAddButton = document.createElement('div')


  //put the dynamicaaly create card inside section tag
  toDoHeading.appendChild(toDoCard);
  toDoCard.classList.add('box');
  //we have to assign uniqueIds to each boxes
  toDoCard.setAttribute('id',`box${todoCount}`);

toDoCard.appendChild(CardHeading);
//assign the input value to the cardheading
CardHeading.innerHTML = `${inputValue.value}`;
console.log(CardHeading.innerHTML);

CardHeading.addEventListener('click',()=>{
    var allItems = document.querySelectorAll('.box');

    //target toDoCard
    var card = CardHeading.parentNode; //contains toDoCard
    var cardVal = CardHeading.innerHTML;

    //hide the header
    header.style.display = 'none';
    card.style.display = 'block';
    toDoHeading.style.justifyContent = "center";

    //hide all other cards except the targetted card
    allItems.forEach((cards)=>{
        console.log(cards);
        console.log(card);
        //have to hide other cards and we have to display on the targeted card.
        if(cards!==card)
        cards.style.display = 'none';
    });
    document.querySelector('.upperbar').style.display = 'flex'
    document.querySelector('.text').innerHTML = `${cardVal}`;

    //back button in individual cards
    document.querySelector('.back').addEventListener('click',()=>{
        header.style.display = 'flex';
        toDoHeading.style.display = 'flex';
        toDoHeading.style.justifyContent = "space-between";

        document.querySelector('.upperbar').style.display = 'none';

        allItems.forEach((cards)=>{
            cards.style.display = 'block';
        });

    })

})

//delete cards 
toDoCard.appendChild(deleteBtn);
deleteBtn.classList.add('deleteClass');
deleteBtn.innerHTML=`<img src = "deleteimage.png">`;

deleteBtn.addEventListener('click',()=>{
    var cardDelete = deleteBtn.parentNode;
    cardDelete.style.display = "none";
    cardDelete.remove();
    todoCount--;
})

//add button cards
toDoCard.appendChild(boxAddButton);
boxAddButton.classList.add('AddBtn');
boxAddButton.innerHTML = `<img src="logo.svg">`;

boxAddButton.addEventListener('click',()=>{
    console.log("line 106, boxaddbutton")
    shadow.classList.add("shadow");
    addItem.style.display = 'flex';
    card = boxAddButton.parentNode;
    document.querySelector('#inputText').value = "";

})
}

document.querySelector('.ItemBtn').addEventListener('click',()=>{
    console.log("line 119, itemBtn")
    newtodoCount++;
    shadow.classList.remove('shadow');
    addItem.style.display = 'none';

    var todoDiv = document.createElement('div');
    var rowText = document.createElement('div');
    var MarkDown = document.createElement('div');

    //card targets 
    card.appendChild(todoDiv);
    todoDiv.appendChild(rowText);
    todoDiv.appendChild(MarkDown);

    todoDiv.setAttribute('id',`todoDiv${newtodoCount}`);
    todoDiv.classList.add('todoDiv');

    MarkDown.classList.add('MarkDown');


    rowText.innerHTML = `${addItemhead.value}`;

    MarkDown.innerHTML = `<h6>Mark</h6>`;

    MarkDown.addEventListener('click',()=>{
        var todoDivText = MarkDown.parentNode;
        todoDivText.classList.add('line');
        MarkDown.style.display = 'none';

    })

})

