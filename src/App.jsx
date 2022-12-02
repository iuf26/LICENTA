import './App.css';
import {colorBlack,colorBlackLighter,colorPurple,colorPurpleElectric,purpleElectric} from './assets/styles/colors';

function App() {
  return (
    <div style={{backgroundColor: colorBlack}}>
     Primary
     <div style={{backgroundColor: colorPurpleElectric}}>
      some
     </div>
     <div style={{backgroundColor:"#3DE5CC"}}>
      some
     </div>
    </div>
  );
}

export default App;
