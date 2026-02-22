// console.log('connected')

let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectCount = document.getElementById('rejectCount');

function calculateCount(){
    const allCards = document.getElementById('allCards').children.length;
    total.innerText = allCards;


    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectedList.length;
}

calculateCount();




