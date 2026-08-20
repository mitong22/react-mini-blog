import {useState, useEffect, useRef} from 'react'

function App() {
  // console.log(countRef)
  const [count, setCount] = useState(0);
  const countRef = useRef(0); 
  // 최초 생성 시 초기값을 current에 넣어줌
  // 랜더링과 관계 없이 data를 들고 있음
  
  let countVar = 0;
  // 랜더링 시 data가 초기화 됨

  function increaseCountState(){
    setCount((previousCount) => previousCount + 1);
  }

  function increaseCountRef(){
    countRef.current = countRef.current + 1;
    // ??
    console.log("countRef: "+countRef.current);
  }

  function increaseCountVar(){
    countVar = countVar + 1;
    console.log("**********************")
    console.log("countVar: "+countVar)
  }

  console.log('App 렌더링 횟수: '+ count);

  return (
    <main>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button type="button" onClick={increaseCountState}>
        State 올리기
      </button>
      <button type="button" onClick={increaseCountRef}>
        Ref 올리기
      </button>
      <button type="button" onClick={increaseCountVar}>
        var 올리기
      </button>
    </main>
  )
}

export default App
