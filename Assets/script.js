
function updateTime() {
  const currentTime = document.getElementById('currentTime');
const now = dayjs();
let formattedTime = now.format('MMM-D h:mm:ss A');
currentTime.textContent = formattedTime;
}
updateTime();
const updateInterval = setInterval(updateTime, 1000);



function setTimeClass() {
  const elements = document.querySelectorAll(".time-block");
  const now = dayjs();
    

    elements.forEach(element => {
      const referenceHour = parseInt(element.dataset.referenceHour);
      const hour = now.hour();
      console.log(hour);
    console.log(referenceHour);

    let className;
    if (hour > referenceHour) {
    className = "past";
    } else if (hour === referenceHour) {
    className = "present";
    } else {
    className = "future";
  }
  console.log(className);
  
    element.classList.remove("past", "future", "present");
    element.classList.add(className);
    console.log(element);
  });
  console.log(elements);
  
  }

setTimeClass();
setInterval(setTimeClass, 60000);

const saveButtons = document.querySelectorAll(".saveBtn");

saveButtons.forEach(button => {
  button.addEventListener("click", function() {
  const dataToSave = [];

  for (let i = 0; i <= 8; i++) {
    const inputField = document.getElementById("hour" + i);
    const textToSave = inputField.value;
    console.log(textToSave);

    dataToSave.push(textToSave);
  }

    const jsonData = JSON.stringify(dataToSave);
    localStorage.setItem("savedData", jsonData);
  });
});

window.onload = function() {
  const savedDataString = localStorage.getItem("savedData");
  if (savedDataString) {
    const savedData = JSON.parse(savedDataString);

    for (let i = 0; i <= 8; i++) {
      const element = document.getElementById("hour" + i);
      if (element) {
        element.value = savedData[i];
      }
    }
  }
};
