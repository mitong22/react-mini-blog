import { useEffect, useState} from "react";

function App(){
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  })
  console.log(windowSize.width);

  useEffect(() => {
    function updateWinowSize(){
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateWinowSize()
    
    window.addEventListener('resize', updateWinowSize)

    return () => {
      window.removeEventListener('resize', updateWinowSize)
    }

  }, [])

  // 랜더링 나중에 계산(useEffect안에 있으면... 왜...?)
  const screenType = 
    windowSize.width < 640 ? '모바일' : windowSize.width < 1024 ? '태플릿' : '데스크탑';

  return (
    <main>
      <header>
        <p>STEP4: EVENT SUBSCRIPTION</p>
        <h1>창 크기 감지기</h1>
        <p>
          브라우저 resize 이벤트를 구독하여 창 크기를 상태에 반영하고 cleanup에서 구독해서 창크기를 반영하고 cleanup에서 같은 이벤트 핸들러를 제거합니다
        </p>
      </header>

      <section> 
        <div>
          <span>{screenType}</span>
          <output aria-live="polite">
            {windowSize.width} x {windowSize.height}
          </output>
          <p>브라우저 창의 크기를 바꿔보세요</p>
        </div>
      </section>

      <aside>
        <h2>핵심 내용</h2>
        <p>
          <code>addEventListener</code>로 구독했다면 cleanup에서 같은 함수로
          <code>removeEventListener</code>를 호출해야 중복 구독을 막을 수 있습니다.
        </p>
      </aside>
    </main>
  );                  
}

export default App