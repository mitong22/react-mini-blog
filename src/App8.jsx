import { useEffect, useState } from "react";

const PRESETS = [5, 10, 20];

function App(){
    const [duration, setDuration] = useState(10)
    const [secondsLeft, setSecondsLeft] = useState(10)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        if(!isRunning){
            return undefined;
        }

        const timeoutId = window.setTimeout(() => {
            setSecondsLeft((previousSeconds) => Math.max(previousSeconds -1 ,0))
        },1000);
        
        return () => {
            window.clearTimeout(timeoutId)
        }
    },[isRunning, secondsLeft])

    function chooseDuration(nextDuration){
        setDuration(nextDuration);
        setSecondsLeft(nextDuration);
        setIsRunning(false)
    };

    function resetTimer(){
        setSecondsLeft(duration);
        setIsRunning(false);
    };

    const progress = ((duration - secondsLeft) / duration) * 100

    return (
        <main>
            <header>
                <p>STEP6: CONDITIONALEFFECT</p>
                <p>
                    실행 여부와 남은 시간에 따라 Effect가 timeout을 만들지 결정합니다.
                    의존성이 바뀔 때 마다 이전 timeout은 정리됩니다.
                </p>
            </header>

            <section>
                <div aria-label="타이머 시간 선택">
                    {PRESETS.map((preset)=> {
                        <button key={preset} type="button" onClick={() => chooseDuration(preset)}>
                        {preset} 초
                    </button>
                    })}
                </div>

                <div>
                    <output aria-live="polite">
                        {secondsLeft}
                    </output>
                    <span>
                        {secondsLeft === 0? '완료!' : isRunning ? '진행중' : '대기중'}
                    </span>
                    <progress value={progress} max={100} aria-label={`진행률 ${Math.round(progress)}%`}/>
                </div>
                
                <div>
                    <button type="button" disabled={secondsLeft === 0}
                        onClick={()=>setIsRunning((previous) => !previous)}>
                        {isRunning ? '일시정지' : '시작'}
                    </button>
                    <button type="button" onClick={resetTimer}>
                        다시시작
                    </button>
                </div>
            </section>
       

        <aside>
            <h2>핵심 내용</h2>
            <p>
                Effect 안에서 사용한 <code>isRunning</code>과 
                <code>secondsLeft</code>를 모두 의존성에 포함합니다. 
                실행할 작업이 없을 때에는 일찍 반환할 수 있습니다.
            </p>
        </aside>
        </main>
    )
}

export default App;