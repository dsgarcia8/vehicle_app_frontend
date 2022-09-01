import './App.css';
import { Header } from './components/Header'
import { DriverIdField } from './components/DriverIdField';
import { VehicleView} from './views/VehicleView'

function App() {

  return (
    <>
      <Header/>
      <DriverIdField/>
      <VehicleView></VehicleView>
    </>
  );
}

export default App;
