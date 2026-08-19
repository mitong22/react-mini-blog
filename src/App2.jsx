import './App.css'
import { useState, useEffect } from 'react';

function App(){
  console.log('컴포턴트 start'); // 브라우저가 react코드를 다 다운받은 상태(흰색(공백) 화면)에서 react code를 한줄한줄 읽고있음
  
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  // 랜더링이 발생할 때 마다 매번 실행: []가 없는 경우~
  /* useEffect(() => {

    console.log("랜더링 될 때 마다 수행됩니다. 재 시도 횟수: "+count);

    return() => { // 이 코드는 useEffect가 사라질 때(unmount) 수행: X랜더링 될때가 아님X

    } 
  },[count]);*/
  // });
  // }, []);
  // []을 추가하면 최초 랜더링 시 한번만 수행
  // []안에 state변수를 작성 시 [state 변수] state 값이 변경 시에만 작동: 의존성 배열
  // [stateA, stateB] 등의 여러개 변수 작성 시 stateA or stateB 변경 시 or조건으로 동작

  // 이 밖에 코드도 랜더링이 발생할 때 마다 매번 실행되는데 왜 useEffect를 쓰지?
  
  useEffect(() => { // 랜더링 다 끝난 후~
    console.log('[] 랜더링')
  },[]);

  useEffect(() => { // 랜더링 다 끝난 후~
    console.log('항상 랜더링')
  });
  

  // console.log('|| 항상 랜더링')

  /*useEffect(() => {
    console.log('최초 랜더링');
  },[])

  useEffect(() => {
    console.log('count 변경 감지');
  },[count]);

  useEffect(() => {
    console.log('name 변경 감지');
  },[name])*/

 
  
  function handleCountUpdate(){
    setCount(count+1);
  };

  function handleInputChange(){
    setName(event.target.value);
  }

  
  console.log('컴포턴트 end');

  return (
    <div>
      <button type="button" onClick={handleCountUpdate}>
        update
      </button>
      <span>count: {count}</span>
      <br></br>
      <input type="text" value={name} onChange={handleInputChange}/>
      <span>name: {name}</span>
    </div>
  );
}

export default App;