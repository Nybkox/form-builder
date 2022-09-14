import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormBuilder from './FormBuilder';

const App = () => (
  <div className="App">
    <FormBuilder />
    <ToastContainer />
  </div>
);

export default App;
