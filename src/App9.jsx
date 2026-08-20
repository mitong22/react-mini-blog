/*
실행 준비와 순서 - 현재 Vite 프로젝트 루트에서 실행합니다.
1. npm install
2. 첫 번째 터미널: npm run server
3. 두 번째 터미널: npm run dev
4. 브라우저: http://localhost:5173/

API 서버는 server/step11/index.js, Vite proxy는 vite.config.js에서 확인합니다.
*/

import { useEffect, useState } from 'react'

function App() {
  const [students, setStudents] = useState([])
  const [requestStatus, setRequestStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [requestKey, setRequestKey] = useState(0)

  // requestKey가 바뀌면 이전 요청을 취소하고 새 API 요청을 시작합니다.
  useEffect(() => {
    const controller = new AbortController()

    async function loadStudents() {
      setRequestStatus('loading')
      setErrorMessage('')

      try {
        const response = await fetch('/api/step11/students', {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error('학생 데이터를 불러오지 못했습니다.')
        }

        const nextStudents = await response.json()
        console.log(nextStudents);
        setStudents(nextStudents)
        setRequestStatus('success')
      } catch (error) {
        if (error.name === 'AbortError') {
          return
        }

        setStudents([])
        setErrorMessage(error.message)
        setRequestStatus('error')
      }
    }

    loadStudents()

    return () => {
      controller.abort()
    }
  }, [requestKey])

  return (
    <main>
      <header>
        <p>STEP 11 · EXPRESS API</p>
        <h1>학생 데이터 불러오기</h1>
        <p>
          Effect에서 Express API를 호출하고 NeDB collection의 조회 결과를
          화면 상태와 동기화합니다.
        </p>
      </header>

      <section aria-busy={requestStatus === 'loading'}>
        {requestStatus === 'loading' && <p>학생 데이터를 불러오는 중...</p>}

        {requestStatus === 'error' && (
          <p role="alert">{errorMessage}</p>
        )}

        {requestStatus === 'success' && (
          <ul>
            {students.map((student) => (
              <li key={student.studentId}>
                <strong>{student.name}</strong>
                {' · '}
                <span>{student.course}</span>
                {' · '}
                <span>진도율 {student.progress}%</span>
              </li>
            ))}
          </ul>
        )}

        <button
          type="button"
          disabled={requestStatus === 'loading'}
          onClick={() => setRequestKey((previousKey) => previousKey + 1)}
        >
          다시 불러오기
        </button>
      </section>

      <aside>
        <h2>핵심 내용</h2>
        <p>
          컴포넌트가 나타나거나 requestKey가 바뀌면 Effect가 GET 요청을 보내고,
          cleanup은 아직 끝나지 않은 이전 요청을 취소합니다.
        </p>
      </aside>
    </main>
  )
}

export default App