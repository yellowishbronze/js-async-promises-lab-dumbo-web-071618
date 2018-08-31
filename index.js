const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question

const div = document.querySelector(".question-container")

const appendQuestion = (asked) => { div.innerHTML  = asked.questionText
}

const askQuestionThen = (time) => {
  question =  questions[0];
  appendQuestion(question)

  return new Promise(function(resolve, reject) {
  setTimeout(resolve, time);
  });
}

const removeQuestion = () => {
  div.innerText = ''
}

const askQuestionThenRemoveQuestion = (time) => {
  return askQuestionThen(time)
  .then(removeQuestion )
}

const trueAndFalseButtons = () => {
return document.querySelector('.true-false-list').querySelectorAll('.btn')
}

const toggleTrueAndFalseButtons = () => {

  if (trueAndFalseButtons()[0].classList.contains("hide")){
    trueAndFalseButtons().forEach(function(btn){
     btn.classList.remove('hide')}
     )
  }else {
    trueAndFalseButtons().forEach((btn) => {
     btn.classList.add('hide')}
   )
  }
}


const displayQuestionOnClick = () => {
  toggleTrueAndFalseButtons();
  let ask = document.querySelector(".waves-effect")
  ask.addEventListener("click",
    askQuestionThenRemoveQuestion(5000),
 )
 toggleTrueAndFalseButtons();

}
