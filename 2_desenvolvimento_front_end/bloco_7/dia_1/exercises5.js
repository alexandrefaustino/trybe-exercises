let clickCount = 0;
const getButtonClick = document.querySelector('.buttonClick');
const getDivCount = document.querySelector('.clicks');

getButtonClick.addEventListener('click', function () {
  clickCount += 1;
  getDivCount.innerText = clickCount;
});

