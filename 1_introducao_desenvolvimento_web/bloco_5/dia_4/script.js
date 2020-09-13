
let articleText = document.getElementsByTagName('article')[0];
let textSection = document.getElementsByTagName('section');

window.onload = function() {
      articleText.style.backgroundColor = localStorage.getItem('background');
      articleText.style.color = localStorage.getItem('colorFont');
      articleText.style.lineHeight = `${localStorage.getItem('spaceLines')}px`;      
      for(let index = 0; index < textSection.length; index += 1)  {
        textSection[index].style.fontSize = `${localStorage.getItem('fontSize')}pt`;
        textSection[index].style.fontFamily = localStorage.getItem('fontFamily');        
      }
}

const selectColor = document.getElementById('colors');
const selectFontSize = document.getElementById('font-size');
const selectFontFamily = document.getElementById('font-family');
const selectColorFont = document.getElementById('color-font');
const selectSpaceLines = document.getElementById('spcace-lines');

const UpdateValueLocalStorage = {
  updateBackgroundColor(value) {
    localStorage['background'] = value;
  },
  updateFontSize(value) {
    localStorage['fontSize'] = (value);
  },
  updateFontFamily(value) {
    localStorage['fontFamily'] = (value);
  },
  updateColorFont(value) {
    localStorage['colorFont'] = (value);
  },
  updateSpaceLines(value) {
    localStorage['spaceLines'] = (value);
  }
}

function getRGBColor(color) {
  if (color === 'preta') return 'rgb(0, 0, 0)';
  if (color === 'branco') return 'rgb(255,255,255)';
  if (color === 'amarelo') return 'rgb(253, 236, 70)';
  if (color === 'azul') return 'rgb(182, 221, 244)';
  if (color === 'bege') return 'rgb(249, 242, 223)';
  if (color === 'vermelho') return 'rgb(238, 86, 90)';  
}

function getTypeFontFamily(fontFamily) {
  if (fontFamily === 'Times New Roman') return 'Times New Roman, Times, serif';
  if (fontFamily === 'Arial') return 'Arial, Helvetica, sans-serif';
  if (fontFamily === 'Courier New') return 'Courier New, Courier, monospace';
  if (fontFamily === 'Gill Sans') return 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif';
  if (fontFamily === 'Verdana') return 'Verdana, Geneva, Tahoma, sans-serif';
}

function getSelectText (selector) {
  let textSelect = selector.options[selector.selectedIndex].text;
  return textSelect;
}

selectColor.addEventListener('click', function() {
  let selectedTextColor = getSelectText(selectColor);
  let colorRGB = getRGBColor(selectedTextColor);
  articleText.style.backgroundColor = colorRGB;
  UpdateValueLocalStorage.updateBackgroundColor(colorRGB);
});

selectFontSize.addEventListener('click', function() {
  let selectedTextFontSize = getSelectText(selectFontSize);
  for(let index = 0; index < textSection.length; index += 1)  {
    textSection[index].style.fontSize = `${selectedTextFontSize}pt`;
  }
  UpdateValueLocalStorage.updateFontSize(selectedTextFontSize);
});

selectFontFamily.addEventListener('click', function() {
  let selectedTextFontFamily = getSelectText(selectFontFamily);
  let fontFamily = getTypeFontFamily(selectedTextFontFamily);
  for(let index = 0; index < textSection.length; index += 1)  {
    textSection[index].style.fontFamily = `${fontFamily}`;
  }
  UpdateValueLocalStorage.updateFontFamily(fontFamily);
});

selectColorFont.addEventListener('click', function() {
  let textSelect = getSelectText(selectColorFont);
  let colorFont = getRGBColor(textSelect);
  articleText.style.color = colorFont;
  UpdateValueLocalStorage.updateColorFont(colorFont);
});

selectSpaceLines.addEventListener('click', function() {
  let textSelect = getSelectText(selectSpaceLines);
  articleText.style.lineHeight = `${textSelect}px`;
  UpdateValueLocalStorage.updateSpaceLines(textSection);
});
