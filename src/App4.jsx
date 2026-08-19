import { useEffect, useState } from "react";

// const THEMES = {
//   lavender:{
//     label: '라벤더',
//     background: '#f5f3ff',
//     coler '#312e81',
//   },
//   mint:{
//     label: '민트',
//     background: '#f5f3ff',
//     coler '#064e3b',
//   },
//   night:{
//     label: '나이트',
//     background: '#172033',
//     coler '#f8fafc'
//   }
// }

function App(){
  const [themeName, setThemeName] = useState();

  return (
    <main>
      <header>
        <p>STEP2: DOM SYNCHRONIZATION</p>
        <h1>페이지 테마 동기화</h1>
        <p>
          React 바깥의 document.body 스타일을 선택한 테마 상태와 동기화하고
          이전 스타일을 cleanup으로 복원합니다.
        </p>
      </header>

      <section>
        <div style={{background: theme.background}}>
          <span style={{color: theme.color}}>{theme.label} 테마</span>
        </div>

        <fieldset>
          <legend>테마 선택</legend>
            <div>
              {Object.entries(THEMES).map(([name, option])=>{
                <label key={name}>
                  <input type="radio" name="theme" value={name} checked={themeName === name}
                  onChange={(event) => setThemeName(event.target.value)}/>

                </label>

              })}
            </div>
        </fieldset>

      </section>
    </main>
  )
};