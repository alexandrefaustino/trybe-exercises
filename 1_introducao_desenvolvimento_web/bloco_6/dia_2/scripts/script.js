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
const inputs = document.getElementsByTagName('input');

window.onload = function () {
  for (let key in estadosObject) {
    const tagOption = document.createElement('option');
    tagOption.value = key;
    tagOption.innerText = estadosObject[key];
    estados.appendChild(tagOption);
  }
}

function stopDefAction(event) {
    event.preventDefault();
}

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

document.getElementById('enviar').addEventListener('click', function(event) {
  stopDefAction(event);
  const divForm = createDiv();
  const tagH1 = createH1();
  tagH1.innerText = 'Dados do Candidato';
  const tagP = createParagraph();
  tagP.innerText = `Nome: ${nome.value} \n Email: ${email.value} \n CPF: ${cpf.value} \n Endereço: ${endereco.value} \n Cidade: ${cidade.value} ${estados.value}`;
  divForm.appendChild(tagH1);
  divForm.appendChild(tagP);  
});

document.getElementById('limpar').addEventListener('click', function(event) {
  for (let index = 0; index < inputs.length; index += 1) {
    inputs[index].value = "";
  }
});


