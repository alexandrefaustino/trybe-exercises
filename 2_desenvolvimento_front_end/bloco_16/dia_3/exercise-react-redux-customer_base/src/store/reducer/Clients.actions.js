const ADDCLIENTS = 'ADDCLIENTS'
export function addClients (obj) { 
  return {
    type: ADDCLIENTS,
    payload: [obj]
  }  
}
