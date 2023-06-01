import Calculator from './Components/Calculator/Calculator';
import Quotes from './Components/Quotes/quotes';

const category = 'family';

const App = () => (
  <>
    <Calculator />
    <Quotes category={category} />
  </>
);

export default App;
