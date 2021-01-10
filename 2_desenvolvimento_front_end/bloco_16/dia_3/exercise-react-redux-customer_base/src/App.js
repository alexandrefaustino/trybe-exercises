import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import NewClients from './components/NewClients';
import ListClient from './components/ListClients';

function App() {
  return (    
    <BrowserRouter>      
        <Route exact path="/newClients" component={NewClients}/>
        <Route exact path="/login" component={Login}/>     
        <Route exact path="/" component={Home} />
        <Route exact path="/registered" component={ListClient} />      
    </BrowserRouter>         
  );
}

export default App;
    