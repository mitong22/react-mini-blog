import { useEffect, useState } from "react";

function Timer(){
    const [timer, setTimer] = useState(0)
    useEffect( () => {
        
        const timerId = window.setInterval(() => {
            console.log('타이머가 돌아가는 중,,,')
            setTimer((prevTimer) => prevTimer + 1)
        },1000)

        return () => {
            window.clearInterval(timerId);
            console.log('timer가 종료됩니다.')
        }
    },[])


    return <p>타이머를 시작합니다. {timer}초 입니다.</p>
}



export default Timer