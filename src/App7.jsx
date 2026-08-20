import { useEffect, useState } from "react";

const PRODUCTS = [
    '기계식 키보드',
    '무선 마우스',
    'USB 마이크',
    '27인치 모니터',
    '노트북 거치대',
    '웹캠'
]

function App(){
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            setDebouncedQuery(query.trim())
        }, 600);

        return () => {
            window.clearTimeout(timeoutId)
        }

    }, [query])

    const results = PRODUCTS.filter((product) => product.toLowerCase().includes(debouncedQuery.toLocaleLowerCase()));

    return (
        <main>
            <header>
                <p>STEP5: DEBOUNCE</p>
                <h1>지연 검색</h1>
                <p>입력이 바뀔 때 timeout을 예약하고 다음 입력이 들어오면 이전 timeout을 cleanup에서 취소합니다</p>
            </header>

            <section>
                <div>
                    <label htmlFor="search">상품 검색</label>
                    <input id="search" type="search" value={query} placeholder="상품명을 입력하세요."
                        onChange={(event) => setQuery(event.target.value)} />
                </div>

                <div>
                    <span>현재 입력: {query || '없음'} </span>
                    <span>검색 적용: {debouncedQuery || '전체 상품'}</span>
                </div>

                <ul aria-live="polite">
                    {results.map((product) => (
                        <li key={product}>{product}</li>
                    ))}
                </ul>

                {results.length === 0 && (<p>검색 결과가 없습니다.</p>)}
            </section>

            <aside>
                <h2>핵심 내용</h2>
                <p>각 Effect는 해당 랜더링의 query 값을 기억합니다. cleanup이 이전 timeout을 지우므로 
                    마지막 입력만 600ms 뒤 적용됩니다.</p>
            </aside>
        </main>
    )
}

export default App