
import './App.css';
import { Footer } from './components/Footer';

import { Tasklist }  from "./components/Tasklist";
export default function App() {
  const info = "Random";

  return (
    <div className="app">
  <Tasklist  info={info  }/>
  <Footer />
    </div>
  ); 
    }