import { Calendar } from './components/Calendar.jsx';
import { CountrySelect } from './components/CountrySelect';
import './index.css';

export const App = () => {
  return (
    <div className="App">
      <Calendar />
      <CountrySelect />
    </div>
  );
};
