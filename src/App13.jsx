import { useRef, useState } from "react";

function App(){
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const [submittedName, setSubmittedName] = useState('');

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  function updateField(event){
    const {name, value} = event.target;
    setForm((previousForm) => ({
      ...previousForm,
      [name]: value
    })) // 뭐냐 이코드;;
  }

  function moveToNextInput(event, nextInputRef){
    if(event.key === 'Enter'){
      event.preventDefault();
      setSubmittedName(form.name.trim() || '이름 없음')
    }
  }

  return (
    <main>
      <header>
        <p>STEP4: MULTIPLE INPUT REFS</p>
        <h1>Enter로 다음 입력 이동</h1>
        <p>
          새 입력창에 각각 ref를 연결하고 enter를 누르면 다음 DOM INPUT으로 focus를 이동합니다.
        </p>
      </header>

      <section>
        <form onSubmit={submitForm}>
          <div>
            <label htmlFor="name">이름</label>
            <input ref={nameRef} id="name" value={form.name} name="name"
              onChange={updateField} onKeyDown={(event) => moveToNextInput(event, emailRef)}/>
          </div>

          <div>
            <label htmlFor="email">이메일</label>
            <input ref={emailRef} id="email" name="email" type="email" value={form.email}
              onChange={updateField} onKeyDown={(evnet) => moveToNextInput(evnet, phoneRef)}/>
          </div>

          <div>
            <label htmlFor="phone">전화번호</label>
            <input ref={phoneRef} id="phone" name="phone" type="tel" value={form.phone}
              onChange={updateField} />
          </div>

          <button type="submit">입력 완료</button>
        </form>

        {submittedName && (
          <div role="status">
            <p> {submittedName}님의 입력을 확인했습니다.</p>
          </div>
        )}
      </section>
      
      <aside>
        <h2>핵심 내용</h2>
        <p>
          Hook을 반복문 안에서 만들지 않고 필요한 DOM ref를 컴포넌트 최상위에 각각 선언합니다.
        </p>
      </aside>
    </main>
  )
}

export default App