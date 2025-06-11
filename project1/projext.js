let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');
const quotes=[{
    quote:`"The purpose of our lives is to be happy."`,
    person:'Dalai Lama'
},
{
    quote:`"Get busy living or get busy dying." `,
    person:'Stephan king'
},
{
    quote:`“Action is the foundational key to all success.”`,
    person:'Pablo Picaso',
},];
btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})
