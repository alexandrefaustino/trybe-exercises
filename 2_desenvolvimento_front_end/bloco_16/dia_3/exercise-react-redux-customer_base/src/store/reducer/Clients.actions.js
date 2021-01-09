const ADDCLIENTS = 'ADDCLIENTS'
export function addClients (name, idade, email) { 
  return {
    type: ADDCLIENTS,
    payload: {name, idade, email}
  }  
}
