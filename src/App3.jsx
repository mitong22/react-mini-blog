import Timer from './component/Timer.jsx';
import { useState } from 'react';

function App(){
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <input type="text" value={showTimer}/>
      <button type="button" onClick={ () => setShowTimer(!showTimer)}>
        toggle timer
      </button>
    {showTimer+""}
    </div>
  )
}

export default App;