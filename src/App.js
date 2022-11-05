import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact'

export default function App  ()  {
return (
<Router>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
</Router>)
}
