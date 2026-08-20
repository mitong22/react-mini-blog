import { useEffect, useRef, useState } from "react";

 적다 말앗음~~~ 
function App(){
  const inputRef = useRef(null);
  const [checkedvalue, setCheckedValue] = useState('아직 확인하지 않았습니다');

  useEffect(() => {
    inputRef.current?.focus();
  })

  function inspectInput(){
    const currentValue = inputRef.current?.value ?? '';
    setCheckedValue(currentValue || '입력 값이 비어 있습니다.');
  }

  return(
    <main>
      <label htmlFor="username">사용자 이름</label>
      <input ref={inputRef} id="username" type="text"  />
    </main>

  )


}