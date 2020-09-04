let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim"
};

let newInfo = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
};


for(let chave in info, newInfo){
  if(info[chave] !== "Sim" &&  newInfo[chave] !=="Sim"){
    console.log(`${info[chave]} e ${newInfo[chave]}`);  
  } else {
    console.log("Ambos recorrents");
  }      
}