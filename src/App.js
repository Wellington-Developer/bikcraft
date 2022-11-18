import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import { Header } from './Components/Header/Header';
import { Introduction } from './Components/Introduction/Introduction';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={<Introduction />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
