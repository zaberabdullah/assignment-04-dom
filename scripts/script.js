// console.log('connected')

let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectCount = document.getElementById('rejectCount');


const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectFilterBtn = document.getElementById('reject-filter-btn');


const allCardSection = document.getElementById('allCards');
const filterSection = document.getElementById('filtered-section');

const noJobsContainer = document.getElementById('no-jobs-container')



function calculateCount(){
    const allCards = document.getElementById('allCards').children.length;
    total.innerText = allCards;


    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectedList.length;
}

calculateCount();


function check(list){
    if (list.length === 0){
        noJobsContainer.classList.remove('hidden');
        filterSection.classList.add('hidden');
    } else {
        noJobsContainer.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }
}


function toggleStyle(id){
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white', 'bg-gray-300', 'text-black', 'bg-white', 'text-gray-500');
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white', 'bg-gray-300', 'text-black', 'bg-white', 'text-gray-500');
    rejectFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white', 'bg-gray-300', 'text-black', 'bg-white', 'text-gray-500');


    allFilterBtn.classList.add('bg-gray-300', 'text-black');
    interviewFilterBtn.classList.add('bg-gray-300', 'text-black');
    rejectFilterBtn.classList.add('bg-gray-300', 'text-black');


    const selected = document.getElementById(id);

    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('bg-[#3B82F6]', 'text-white');

    
    if (id === 'all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    } else{
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }

    currentStatus = id;

    if (id === 'all-filter-btn') {
        noJobsContainer.classList.add('hidden');
        allCardSection.classList.remove('hidden');
    }
    else if( id === 'interview-filter-btn'){
        check(interviewList);
    }
    else if(id === 'reject-filter-btn'){
        check(rejectedList);
    }

}

