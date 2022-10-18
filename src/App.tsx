import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Sticky from './components/sticky';
import Panel from './components/panel';
import cats from './images/cats.jpg';
import chubaka from './images/chubaka.jpg';
import dogs from './images/dogs.jpg';
import dyno from './images/dyno.jpg';
import planets from './images/planets.jpg';
import './app.css';

function App() {
  const resources = useMemo(() => ([cats, chubaka, dogs, dyno, planets]), []);
  const [ range, onChangeRange ] = useState<number[]>([0, 1, 2, 3, 4]);
  const [ color, onChangeColor ] = useState<string>('#efaefa');

  const randomizeMe = useCallback(() => {
    const newRange = [...range].sort(() => 0.5 - Math.random());
    onChangeColor(Math.floor(Math.random()*16777215).toString(16));
    onChangeRange(newRange);
  }, [range]);

  useEffect(() => {
    const timerId:NodeJS.Timeout = setInterval(randomizeMe, 52000);
    return () => clearInterval(timerId);
  }, [randomizeMe])

  return (
    <div className='wrapper'>
      <Sticky image={resources[range[0]]} position="top"/>
      <div className='middle'>
        <Panel image={resources[range[1]]}/>
        <div className='body' style={{ backgroundImage: `url(${resources[range[2]]})` }}>
          <button name="randomize" onClick={randomizeMe} style={{ backgroundColor: `#${color}`}} className='btn'>click me</button>
        </div>
        <Panel image={resources[range[3]]}/>
      </div>
      <Sticky image={resources[range[4]]} position="bottom"/>
    </div>
  );
}

export default App;
