import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './Components/Calculator/Calculator';
import Quotes from './Components/Quotes/quotes';
import Home from './Components/Home';
import Nav from './Components/Nav';

const category = 'family';

const App = () => (
  <>
    <BrowserRouter>
      <>
        <Nav />
        <Routes>
          <>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />

            <Route path="calculator" element={<Calculator />} />
            <Route path="quote" element={<Quotes category={category} />} />
          </>
        </Routes>
      </>
    </BrowserRouter>
  </>
);

export default App;
