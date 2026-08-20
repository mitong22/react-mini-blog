import { useRef, useState } from "react";

function App(){
  
  const [keyword, setKeyword] = useState('React useRef 학습');
  const searchInputRef = useRef(null)

  function selectAllText(){
    searchInputRef.current?.select();
  }
  
  function clearAndFocus(){
    setKeyword('');
    searchInputRef.current?.focus();
  }

  return(
    <main>
      <header>
        <p>STEP2: INPUT METHODS</p>
        <h1>검색어 선택과 초기화</h1>
        <p> 
          입력 값은 state로 렌더링하고, focus와 텍스트 선택처럼 DOM에서만 할 수 있는 동작은 ref로 처리합니다.
        </p>
      </header>

      <section>
        <div>
          <label htmlFor="keyword">검색어</label>
          <input ref={searchInputRef} id="keyword" type="search" value={keyword} 
            onChange={(event) => setKeyword(event.target.value)} />
        </div>

        <div>
          <button type="button" onClick={selectAllText}>
            전체 텍스트 선택
          </button>

          <button type="button" onClick={clearAndFocus}>
            지우고 다시 입력
          </button>
        </div>

        <div aria-live="polite">
          <p>현재 검색어: {keyword || '없음'}</p>
        </div>
      </section>

      <aside>
        <h2>역할 구분</h2>
        <p>
          화면에 보여 줄 입력 값은 state에 저장하고, 
          <code>focus()</code>와 <code>select()</code>호출에 필요한 DOM 노드만 ref에 저장합니다.
        </p>
      </aside>
    </main>
  )
}

export default App