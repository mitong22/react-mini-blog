# React useState: state 저장하고 변경하기

`useState`는 컴포넌트가 기억해야 하는 값을 저장하는 Hook입니다. setter로
state를 변경하면 React가 컴포넌트를 다시 렌더링하고 새로운 값을 화면에
반영합니다.

```jsx
const [state, setState] = useState(initialState)
```

- `state`: 현재 렌더링에서 사용하는 값
- `setState`: 다음 렌더링에 사용할 값을 전달하는 함수
- `initialState`: 첫 렌더링에서만 사용하는 초기값

이하 파일 경로는 Vite 프로젝트 루트를 기준으로 합니다.

---

## 1. 현재 시간 저장하기

먼저 현재 시간을 state로 저장하고 버튼을 누를 때 새 시간으로 변경합니다.

### 전체 코드: `src/App.jsx`

```jsx
import { useState } from 'react'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  function handleUpdateTime() {
    setCurrentTime(new Date())
  }

  return (
    <main>
      <h1>현재 시간</h1>
      <p>{currentTime.toLocaleTimeString('ko-KR')}</p>
      <button type="button" onClick={handleUpdateTime}>
        시간 갱신
      </button>
    </main>
  )
}

export default App
```

버튼을 누르면 `setCurrentTime`이 새로운 `Date` 객체를 저장합니다. state가
바뀌면서 컴포넌트가 다시 렌더링되고 화면의 시간도 갱신됩니다.

---

## 2. 배열 state에 항목 추가하기

배열을 직접 수정하지 않고 기존 항목을 펼친 새 배열을 setter에 전달합니다.

### 전체 코드: `src/App.jsx`

```jsx
import { useState } from 'react'

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: '김민지' },
    { id: 2, name: '이도윤' },
  ])

  function handleAddStudent() {
    const nextId = students.length + 1

    setStudents([
      ...students,
      { id: nextId, name: `학생 ${nextId}` },
    ])
  }

  return (
    <main>
      <h1>학생 목록</h1>
      <button type="button" onClick={handleAddStudent}>
        학생 추가
      </button>

      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </main>
  )
}

export default App
```

`students.push(...)`처럼 기존 배열을 직접 변경하지 않습니다. 전개 문법으로
새 배열을 만든 뒤 `setStudents`에 전달합니다.

---

## 3. 이전 state를 이용해 업데이트하기

다음 값이 이전 state에 의존한다면 setter에 업데이트 함수를 전달하는 방식이
안전합니다.

### 전체 코드: `src/App.jsx`

```jsx
import { useState } from 'react'

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: '김민지' },
    { id: 2, name: '이도윤' },
  ])

  function handleAddStudent() {
    setStudents((previousStudents) => {
      const nextId = previousStudents.length + 1

      return [
        ...previousStudents,
        { id: nextId, name: `학생 ${nextId}` },
      ]
    })
  }

  return (
    <main>
      <h1>학생 목록</h1>
      <button type="button" onClick={handleAddStudent}>
        학생 추가
      </button>

      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </main>
  )
}

export default App
```

`previousStudents`에는 React가 관리하는 최신 이전 값이 전달됩니다. 이전 배열을
기준으로 새 배열을 만들기 때문에 여러 업데이트가 이어져도 안전합니다.

---

## 4. 초기값 함수 사용하기

초기 데이터를 만드는 계산이 있다면 함수 자체를 `useState`에 전달할 수
있습니다.

### 전체 코드: `src/App.jsx`

```jsx
import { useState } from 'react'

function createInitialStudents() {
  console.log('초기 학생 목록 생성')

  return [
    { id: 1, name: '김민지' },
    { id: 2, name: '이도윤' },
  ]
}

function App() {
  const [students, setStudents] = useState(createInitialStudents)

  function handleAddStudent() {
    setStudents((previousStudents) => {
      const nextId = previousStudents.length + 1

      return [
        ...previousStudents,
        { id: nextId, name: `학생 ${nextId}` },
      ]
    })
  }

  return (
    <main>
      <h1>학생 목록</h1>
      <p>현재 학생 수: {students.length}명</p>
      <button type="button" onClick={handleAddStudent}>
        학생 추가
      </button>

      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </main>
  )
}

export default App
```

`useState(createInitialStudents())`처럼 함수를 바로 실행하지 않고
`useState(createInitialStudents)`처럼 함수 자체를 전달합니다. React는 초기
state가 필요할 때만 이 함수를 호출합니다.

개발 환경의 `StrictMode`에서는 초기값 함수가 순수한지 확인하기 위해 두 번
호출될 수 있습니다. 외부 데이터를 변경하지 않고 초기값만 반환하도록
작성합니다.

---

## 핵심 정리

- setter를 호출하면 다음 렌더링에 사용할 state가 예약됩니다.
- 객체와 배열 state는 직접 수정하지 않고 새 값으로 교체합니다.
- 이전 state로 다음 값을 계산할 때는 업데이트 함수를 전달합니다.
- 초기 계산이 필요하면 초기값 함수를 실행하지 말고 함수 자체를 전달합니다.
