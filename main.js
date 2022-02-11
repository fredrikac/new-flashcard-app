const flashcards = document.getElementsByClassName('flashcards')[0];
const createBox = document.getElementsByClassName('create-box')[0];
const question = document.getElementById('question');
const answer = document.getElementById('answer');
let contentArray = localStorage.getItem('items')?
JSON.parse(localStorage.getItem('items')): [];

//Knapparna
const newBtn = document.getElementById('newBtn');
const delBtn = document.getElementById('delBtn');
const saveBtn = document.getElementById('saveBtn');
const closeBtn = document.getElementById('closeBtn');

newBtn.addEventListener('click', ()=> {
    showCreateCardBox();
})

delBtn.addEventListener('click', ()=>{
    delFlashcards();
})

saveBtn.addEventListener('click', ()=>{
    if(question.value !== '' && answer.value !== ''){
        addFlashcard();
    }else{
        alert('Du måste fylla i båda fälten innan du sparar!')
    }
})

closeBtn.addEventListener('click', ()=> {
    hideCreateBox();
})

contentArray.forEach(divMaker);//för varje item i contentArray, kör funktionen divMaker

//Functions
function divMaker(text){
    const div = document.createElement('div');
    const h2_question = document.createElement('h2');
    const h2_answer = document.createElement('h2');
    const showAnswerBtn = document.createElement('button');

    div.className = 'flashcard';


    h2_question.classList.add('flashcardquestion');
    h2_question.innerHTML = `Fråga: <br> ${text.my_question} `;
    showAnswerBtn.classList.add('flashcardbutton');
    showAnswerBtn.innerHTML = 'Visa';

    h2_answer.classList.add('flashcardanswer');
    h2_answer.innerHTML = `Svar:  <br> ${text.my_answer}`;

    div.appendChild(h2_question);
    div.appendChild(h2_answer);
    div.appendChild(showAnswerBtn);

    showAnswerBtn.addEventListener('click', function() {
        if(h2_answer.style.display == 'none'){
            h2_answer.style.display = 'block';
            showAnswerBtn.innerHTML = 'Dölj';
        }else {
            h2_answer.style.display = 'none'
            showAnswerBtn.innerHTML = 'Visa';
        }
    });

    flashcards.appendChild(div);
}


//funktion för knappen Nytt kort
function showCreateCardBox(){
    createBox.style.display = 'block';
}

//funktion för knappen Ta bort alla
function delFlashcards(){
    localStorage.clear();//tömmer local storage
    flashcards.innerHTML = '';//tömmer själva kortet
    contentArray = [];//tömmer arrayen
}

//funktion för knappen Spara
function addFlashcard(){
 const flashcard_info = {
     'my_question' : question.value,
     'my_answer' : answer.value
 }   

    contentArray.push(flashcard_info);//pusha in objektet i arrayen
    localStorage.setItem('items', JSON.stringify(contentArray)); //lägg till arrayen i local storage
    divMaker(contentArray[contentArray.length -1]);
    question.value = '';//töm inputfälten
    answer.value = '';
}


//funktion för knappen Stäng
function hideCreateBox(){
    createBox.style.display = 'none';
}

