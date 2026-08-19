import { useState } from "react";

function App(){
    const [name, setName] = useState('')
    const trimName = name.trim();
    const displayName =  trimName || '아직 이름을 입력하지 않았어요'
    
    return(
        <main>
            <header>
                <p>STEP3: STRING STATE</p>
                <h1>실시간 자기 소개</h1>
                <p>
                    입력창의 value를 문자열 상태와 연결하고 onChange가 발생할 때마다 상태를 갱신합니다.
                </p>
            </header>

            <section>
                <div>
                    <label htmlFor="name">이름: </label>
                    <input name="name" type="text" value={name} maxLength={20} placeholder="이름을 입력하세요" autoComplete="off" 
                    onChange={(event) => setName(event.target.value)} />
                </div>

                <div aria-live="polite">
                    <p>안녕하세요!</p>
                    <strong>{displayName}</strong><br></br>
                    <span>{trimName.length} / 20자</span>
                </div>

                <button type="button" disabled={name.length ===0} onClick={()=> setName('')}>
                    입력 내용 지우기
                </button>
            </section>
            
            <aside>
                <h2>핵심 코드</h2>
                <p>
                    입력값은 <code>value={'{name}'}</code>으로 읽고, 
                    <code>onChange</code>에서 <code>setName</code>으로 변경합니다.
                </p>
            </aside>
        </main>
    )
}

export default App;