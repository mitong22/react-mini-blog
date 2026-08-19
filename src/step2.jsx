
import { useState } from 'react'

function App() {
  const [isOn, setIsOn] = useState(false)

  return (
    <main>
      <header>
        <p>STEP2: BOOLEAN STATE</p>
        <h1>전등 스위치</h1>
        <p>
          true와 false를 저장하고 이전 상태를 반대로 바꾸는
          토글 패턴을
          연습합니다.
        </p>
      </header>

      <section aria-labelledby="lamp-title">
        <div>
          <span aria-hidden="true">
            {isOn ? '💡' : '⚫'}
          </span>
          <p id="lamp-title">
            전등이 <strong>{isOn ? '켜졌습니다' : '꺼졌습니다'}</strong>
          </p>
        </div>

        <button type="button" aria-pressed={isOn} 
          onClick={() => setIsOn((previousIsOn) => !previousIsOn)}>
            전등 {isOn ? '끄기':'켜기'}
        </button>
      </section>

      <aside>
        <h2>핵심 코드</h2>
        <p>
          <code> setIsOn(previousIsOn = &gt; !previousIsOn)</code> 
          처럼 이전 상태를 받아 반대값을 반환합니다.
        </p>
      </aside>


    </main>

  )
}

export default App;