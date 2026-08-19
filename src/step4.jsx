import { useState } from "react";

function App(){
    
    const [name, setName] = useState('');
    const [people, setPeople] = useState(1);
    const [meal, setMeal] = useState('한식');
    const [agreed, setAgreed] = useState(false);

    const canReserve = name.trim().length > 0 && agreed
    
    return(
        <main>
            <header>
                <p>STEP4: MULTIPLE STATES</p>
                <h1>예약 신청서</h1>
                <p>
                    서로 독립적인 입력값을 여러 개의 useState로 나누어 관리합니다.
                </p>
            </header>

            <section>
                <div>
                    <div>
                        <label htmlFor="guest-name">예약자 이름</label>
                        <input id="guest-name" value={name} placeholder="이름" 
                        onChange={(event) => setName(event.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="people">예약 인원</label>
                        <input id="people" type="number" min="1" max="8" value={people}
                        onChange={(event) => setPeople(Number(event.target.value))} />
                    </div>

                    <div>
                        <label htmlFor="meal">식사 종류</label>
                        <select id="meal" value={meal} 
                        onChange={(event) => setMeal(event.target.value)}>

                        <option>한식</option>
                        <option>중식</option>
                        <option>양식</option>
                        </select>
                    </div>

                    <label>
                        <input type="checkbox" checked={agreed} 
                        onChange={(evnet) => setAgreed(event.target.checked)}/>
                        예약 안내에 동의합니다.
                    </label>
                </div>

                <div aria-live="polite">
                    <h2>예약 미리보기</h2>
                    <dl>
                        <div>
                            <dt>예약자</dt>
                            {/* <dd>{name.trim() || '미입력'}</dd> */}
                            <dd>{ function(){
                                if(name.trim().length ===0){
                                    return '미입력';
                                }else{
                                    return '';
                                }}()}</dd>
                            {/* 잴 바깥 괄호()가 function 즉시 실행  */}
                        </div>
                        <div>
                            <dt>인원</dt>
                            <dd>{people}명</dd>
                        </div>
                        <div>
                            <dt>식사</dt>
                            <dd>{meal}</dd>
                        </div>
                    </dl>
                    <p>
                        {canReserve? '예약할 수 있습니다' : '이름과 동의를 확인하세요'}
                    </p>
                </div>
            </section>

            <aside>
                <h2>핵심 내용</h2>
                <p>
                    이름, 인원, 식사, 동의 여부처럼 독립적으로 바뀌는 값은 각각의 useState로 관리할 수 있습니다.
                </p>
            </aside>

        </main>
    )
}

export default App;