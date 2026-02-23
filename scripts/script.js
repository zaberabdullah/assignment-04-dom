// console.log('connected')

let interviewList = [];
let rejectedList = [];
let currentStatus = "all-filter-btn";

let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectCount = document.getElementById("rejectCount");
let allFilterBtn = document.getElementById("all-filter-btn");
let interviewFilterBtn = document.getElementById("interview-filter-btn");
let rejectFilterBtn = document.getElementById("reject-filter-btn");

const allCardSection = document.getElementById("allCards");
const filterSection = document.getElementById("filtered-section");
const noJobsContainer = document.getElementById("no-jobs-container");

function calculateCount() {
  const allCards = document.getElementById("allCards").children.length;
  total.innerText = allCards;

  interviewCount.innerText = interviewList.length;
  rejectCount.innerText = rejectedList.length;
}

calculateCount();

function check(list) {
  if (list.length === 0) {
    noJobsContainer.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else {
    noJobsContainer.classList.add("hidden");
    filterSection.classList.remove("hidden");
  }
}

function toggleStyle(id) {
  allFilterBtn.classList.remove("bg-[#3B82F6]", "text-white", "bg-gray-300", "text-black", "bg-white", "text-gray-500");
  interviewFilterBtn.classList.remove(
    "bg-[#3B82F6]",
    "text-white",
    "bg-gray-300",
    "text-black",
    "bg-white",
    "text-gray-500",
  );
  rejectFilterBtn.classList.remove(
    "bg-[#3B82F6]",
    "text-white",
    "bg-gray-300",
    "text-black",
    "bg-white",
    "text-gray-500",
  );

  allFilterBtn.classList.add("bg-white", "text-black");
  interviewFilterBtn.classList.add("bg-white", "text-black");
  rejectFilterBtn.classList.add("bg-white", "text-black");

  const selected = document.getElementById(id);

  selected.classList.remove("bg-white", "text-black");
  selected.classList.add("bg-[#3B82F6]", "text-white");

  if (id === "all-filter-btn") {
    allCardSection.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else {
    allCardSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
  }

  currentStatus = id;

  if (id === "all-filter-btn") {
    noJobsContainer.classList.add("hidden");
    allCardSection.classList.remove("hidden");
  } else if (id === "interview-filter-btn") {
    check(interviewList);
    renderCards(interviewList, "interview");
  } else if (id === "reject-filter-btn") {
    check(rejectedList);
    renderCards(rejectedList, "reject");
  }
}

allCardSection.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-success")) {
    const parenNode = event.target.parentNode.parentNode;
    // console.log(parenNode)

    const companyName = parenNode.querySelector(".company-name").innerText;
    const jobTitle = parenNode.querySelector(".job-title").innerText;
    const salaryInfo = parenNode.querySelector(".salary-info").innerText;
    const status = parenNode.querySelector(".status-badge").innerText;
    const jobDescription = parenNode.querySelector(".job-description").innerText;

    parenNode.querySelector(".status-badge").innerText = "INTERVIEW";

    const cardInfo = {
      companyName,
      jobTitle,
      salaryInfo,
      status,
      jobDescription,
      status: "INTERVIEW",
    };

    const jobExist = interviewList.find((item) => item.companyName == cardInfo.companyName);

    if (!jobExist) {
      interviewList.push(cardInfo);
    }
    rejectedList = rejectedList.filter((item) => item.companyName != cardInfo.companyName);

    if (currentStatus == "interview-filter-btn") {
      renderCards(interviewList, "interview");
    }

    calculateCount();
  } else if (event.target.classList.contains("btn-error")) {
    const parenNode = event.target.parentNode.parentNode;

    const companyName = parenNode.querySelector(".company-name").innerText;
    const jobTitle = parenNode.querySelector(".job-title").innerText;
    const salaryInfo = parenNode.querySelector(".salary-info").innerText;
    const status = parenNode.querySelector(".status-badge").innerText;
    const jobDescription = parenNode.querySelector(".job-description").innerText;

    parenNode.querySelector(".status-badge").innerText = "REJECTED";

    const cardInfo = {
      companyName,
      jobTitle,
      salaryInfo,
      status,
      jobDescription,
      status: "REJECTED",
    };

    const jobExist = rejectedList.find((item) => item.companyName == cardInfo.companyName);

    if (!jobExist) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter((item) => item.companyName != cardInfo.companyName);

    if (currentStatus == "reject-filter-btn") {
      renderCards(rejectedList, "reject");
    }
    calculateCount();
  }
});

function renderCards(list, type) {
  filterSection.innerHTML = "";

  const badgeColor = type == "interview" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";

  for (let job of list) {
    let div = document.createElement("div");
    div.className = "w-[80%] mx-auto my-5";
    div.innerHTML = `      
    <div class="bg-white p-6 rounded-lg border border-gray-100 shadow-sm space-y-3">
          <div class="flex justify-between items-start">
            <div>
              <h2 class="text-xl font-bold text-black">${job.companyName}</h2>
              <p class="text-gray-400 font-medium text-lg">${job.jobTitle}</p>
            </div>
          </div>

          <div class="flex items-center gap-2 text-sm text-gray-400 mt-2">
            <span>${job.salaryInfo}</span> 
          </div>

          <div>
            <span class="${job.badgeColor} px-4 py-2 rounded text-base font-bold uppercase">${job.status}</span>
            <p class="text-gray-600 mt-4">${job.jobDescription}</p>
          </div>
        </div>
        `;
    filterSection.appendChild(div);
  }
}
