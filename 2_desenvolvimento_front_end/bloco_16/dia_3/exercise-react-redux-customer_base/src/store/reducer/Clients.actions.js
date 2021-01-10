const ADDCLIENTS = 'ADDCLIENTS'
export function addClients (name, idade, email, senha) { 
  return {
    type: ADDCLIENTS,
    payload: {name, idade, email, senha}
  }  
}
