const form = document.forms[0];
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
let nameCss;

form.addEventListener('change', handleChange);

const handleStyle = {
  element: btn,
  innerText: function(value) {
    this.element.innerText = value;
  },
  color: function(value) {
    this.element.style.color = value;
  },
  backgroundColor: function(value) {
    this.element.style.backgroundColor = value;
  },
  width: function(value) {
    this.element.style.width = value + 'px';
  },
  height: function(value) {
    this.element.style.height = value + 'px';
  },
  border: function(value) {
    this.element.style.border = value;
  },
  borderRadius: function(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily: function(value) {
    this.element.style.fontFamily = value;
  },
  fontSize: function(value) {
    this.element.style.fontSize = value + 'px';
  },
}

function handleChange(event) {
  const target = event.target;
  const name = target.name;
  const value = target.value;

  switch(name) {
    case 'className':
      nameCss = '.' + value;
    break;
    case 'idName':
      nameCss = '#' + value;
    break;
  }

  savedStorage(name, value);; // Salvando no localstorage

  if(handleStyle[name]) {
    handleStyle[name](value);
    showCss();
  }
}

function savedStorage(key, value) {
  localStorage[key] = value;
}

// Usar localstorage
function usedStorage() {
  const keys = Object.keys(localStorage);
  keys.forEach(item => {
    if(handleStyle[item]) {
      handleStyle[item](localStorage[item]);
      form.elements[item].value = localStorage[item];
    };
  });

  if(localStorage["className"]) {
    nameCss = '.' + localStorage["className"];
    form.elements['className'].value = localStorage["className"];
  } else if (localStorage["idName"]) {
    nameCss = '#' + localStorage["idName"];
    form.elements['idName'].value = localStorage["idName"];
  }
  showCss();
}
usedStorage();

function showCss() {
  const styled = btn.style.cssText.split('; ').join(';</span><span>');
  if(nameCss)
    cssText.innerHTML = nameCss + ' { <span>' + styled + '\r}';
  else 
    cssText.innerHTML = '<span>' + styled;
}