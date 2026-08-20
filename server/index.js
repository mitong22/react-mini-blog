import Datastore from '@seald-io/nedb'
import express from 'express'

const port = Number(process.env.STEP11_API_PORT ?? 3011)
const app = express()
const students = new Datastore()

const INITIAL_STUDENTS = [
  {
    studentId: 1,
    name: '김민지',
    course: 'React 기초',
    progress: 80,
  },
  {
    studentId: 2,
    name: '이도윤',
    course: 'useEffect 실습',
    progress: 65,
  },
  {
    studentId: 3,
    name: '박서연',
    course: 'Express API',
    progress: 40,
  },
]

await students.insertAsync(INITIAL_STUDENTS)

app.get('/api/step11/students', async (_request, response, next) => {
  try {
    const documents = await students.findAsync({}).sort({ studentId: 1 })
    const result = documents.map((document) => ({
      studentId: document.studentId,
      name: document.name,
      course: document.course,
      progress: document.progress,
    }))

    response.json(result)
  } catch (error) {
    next(error)
  }
})

app.use((error, _request, response, _next) => {
  console.error(error)
  response.status(500).json({
    message: '서버에서 학생 데이터를 조회하지 못했습니다.',
  })
})

app.listen(port, () => {
  console.log(`Step 11 API server: http://localhost:${port}`)
})