const arrayTask = ['finanças', 'ler à bíblia', 'organizar guarda roupa', 'pegar carteira de doador'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
      {arrayTask.map((item, index) => {
        return <p key={index}>{task(item)}</p> 
        }) 
      }
    </div>
  );
}

export default App;
