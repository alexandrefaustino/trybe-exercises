const estadosObject = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
}

const nome = document.getElementById('name');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const endereco = document.getElementById('endereco');
const cidade = document.getElementById('cidade');
const estados = document.getElementById('estados');
const data = document.getElementById('date');
const inputs = document.getElementsByTagName('input');

window.onload = function () {
  for (let key in estadosObject) {
    const tagOption = document.createElement('option');
    tagOption.value = key;
    tagOption.innerText = estadosObject[key];
    estados.appendChild(tagOption);
  }
}

data.DatePickerX.init({
  format: 'dd/mm/yyyy'
});
  
function createDiv() {
  const divForm = document.createElement('div');
  divForm.classList.add('divForm');
  document.getElementById('body').appendChild(divForm);
  return divForm;
}

function createParagraph() {
  const tagP = document.createElement('p');
  return tagP;  
}

function createH1() {
  const tagH1 = document.createElement('h1');
  return tagH1;  
}

function insertDatabasesInTagP(tag, divForm, ta) {
  tag.innerText = `
    Nome: ${nome.value} \n 
    Email: ${email.value} \n 
    CPF: ${cpf.value} \n 
    Endereço: ${endereco.value} \n 
    Cidade: ${cidade.value} ${estados.value} \n
    Data de ínicio: ${data.value}`;   
  divForm.appendChild(tag);  
}

document.getElementById('enviar').addEventListener('click', function(event) {
  const divForm = createDiv();
  const tagH1 = createH1();
  tagH1.innerText = 'Dados do Candidato';
  divForm.appendChild(tagH1);
  const tagP = createParagraph();  
  insertDatabasesInTagP(tagP, divForm);
});

document.getElementById('limpar').addEventListener('click', function(event) {
  for (let index = 0; index < inputs.length; index += 1) {
    inputs[index].value = "";
  }
});

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      maxLength: 40,
      minLength: 3
    },
    email: {
      required: true,
      email: true
    },
    cpf: {
      required: true,
      maxLength: 11,
      minLength: 11
    },    
    endereco: {
      required: true,
      maxLength: 200      
    }, 
    cidade: {
      required: true,
      maxLength: 28
    },
    estados: {
      required: true
    },
    resumo: {
      required: true,           
      maxLength: 1000
    },
    cargo: {
      required: true,           
      maxLength: 40
    },
    descCargo: {
      required: true,           
      maxLength: 500
    },
    data: {
      required: true
    },
  },  
  messages: {    
    name: {    
      required:  'Campo obrigatório',  
      maxLength: 'O campo deve conter no máximo :value characters',
      minLength: 'O campo deve conter no mínimo :value characters',
    },
    email: {
      required: 'Campo obrigatório',
      email :   'Por favor, insira um e-mail válido', 
    },
    cpf: {
      required:  'Campo obrigatório',
      maxLength: 'O campo deve conter no máximo :value números',
      minLength: 'O campo deve conter no mínimo :value números',
    },
    endereco: {    
      required:  'Campo obrigatório',  
      maxLength: 'O campo deve conter no máximo :value characters',      
    },
    cidade: {    
      required:  'Campo obrigatório',  
      maxLength: 'O campo deve conter no máximo :value characters',      
    }, 
    estados: {    
      required:  'Campo obrigatório',      
    },     
    resumo: {    
      required:  'Campo obrigatório',  
      maxLength: 'O campo deve conter no máximo :value characters',      
    },
    cargo: {    
      required:  'Campo obrigatório',  
      maxLength: 'O campo deve conter no máximo :value characters',      
    },
    descCargo: {    
      required:  'Campo obrigatório',  
      maxLength: 'O campo deve conter no máximo :value characters',      
    },
    data: {    
      required:  'Campo obrigatório',        
    },
  }, 
});


