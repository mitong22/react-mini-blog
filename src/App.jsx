import { Component } from 'react'
import './App.css'

// import step1 from './step1.jsx'
import step2 from './step2.jsx'
import step3 from './step3.jsx'
import step4 from './step4.jsx'
// import step5 from './step5.jsx'
// import step6 from './step6.jsx'
// import step7 from './step7.jsx'
// import step8 from './step8.jsx'
// import step9 from './step9.jsx'
// import step10 from './step10.jsx'

const LESSONS = [
  // {title: '기본 카운터', component: step1},
  {title: '전등 스위치', component: step2},
  {title: '실시간 자기 소개', component: step3},
  {title: '기본 카운터', component: step4},
  // {title: '기본 카운터', component: step5},
  // {title: '기본 카운터', component: step6},
  // {title: '기본 카운터', component: step7},
  // {title: '기본 카운터', component: step8},
  // {title: '기본 카운터', component: step9},
  // {title: '기본 카운터', component: step10}
]

function getStepNumber(){
  const stepNumber = Number(
    new URLSearchParams(window.location.search).get('step')
  )

  if(Number.isInteger(stepNumber) && stepNumber >= 1 && stepNumber <= LESSONS.length){
    return stepNumber
  }

  return 1;
}

function App(){
  const stepNumber = getStepNumber();
  console.log("************************************");
  console.log(stepNumber);

  
  const Lesson = LESSONS[stepNumber -1].component

  console.log("************************************");
  console.log(Lesson);

  return (
    <>
      <header>
        <h1> React UseStat 10단계</h1>
        <p>링크를 눌러 한 프로젝트 안에서 원하는 useState 예제를 바로 실행합니다.</p>
      </header>

      <nav aria-label="useState 학습단계">
        <ol>
          {LESSONS.map((lesson, index) => {
            const linkStep = index + 1

            return (
              <li key={lesson.title}>
                <a href={'?step='+linkStep} aria-current={stepNumber === linkStep? 'page': undefined}>
                  step{linkStep}.jsx: {lesson.title}
                </a>
              </li>
            )
          })}
        </ol>
      </nav>
      <hr/>
      <Lesson/>
      </>
  )
}

export default App;