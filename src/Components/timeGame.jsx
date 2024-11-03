import { useEffect, useRef, useState } from "react";
import History_game from "./history";

function TimeGame() {
  const [score, setScore] = useState(0);
  const [starttime, setstarttime] = useState(0);
  const [reftime, setreftime] = useState(0);
  const [isrunning, setIsrunnig] = useState(false);
  const [buttonType, setbuttonType] = useState(true);
  const [history, sethistory] = useState([])
  const isInter = useRef();
  let timer=new Date();
  useEffect(() => {
    if (isrunning) {
      isInter.current = setInterval(() => {
        setreftime(Date.now() - starttime);
      }, 1);
    }

    return () => {
      clearInterval(isInter.current);
    };
  }, [isrunning]);

  function start() {
    setstarttime(Date.now() - reftime);
    setIsrunnig(true);
    setbuttonType(false);
  }

  function stop() {
    setIsrunnig(false);
    setScore(Math.floor((1000/(3000-reftime))*1000))
    sethistory([...history,{scor:Math.floor((1000/(3000-reftime))*1000),date:timer.toUTCString()}])
    setreftime(0);
    setbuttonType(true);
  }

  function display() {
    let second = Math.floor((reftime / 1000) % 60);
    let miliseconds = reftime % 1000;

    second = String(second).padStart(2, 0);
    miliseconds = String(miliseconds).padStart(3, 0);

    return <>{`${second}:${miliseconds}`}</>;
  }

  return (
    <>
      <div className="p-4">
        <div>
          <div>
            <div className="text-xl">
              <h3 className="text-justify">
                The Challage is that you have to stop the watch as close as 3
                seconds. if you are over 3 seconds you are out. Based on your
                time you will get a score.
              </h3>
            </div>
            <div className="text-center mt-8">
              <div className="py-4">
                <h1 className="text-6xl md:text-8xl">{display()}</h1>
              </div>
              <div className="flex justify-center items-center gap-10 mt-5">
                <button
                  className={`btn ${
                    buttonType ? "btn-info" : "btn-error"
                  } text-white px-6 md:px-16 text-xl font-semibold`}
                  onClick={buttonType?start:stop}
                >
                  {buttonType?'Start':'Stop'}
                </button>
              </div>
              <div className="block mt-10 text-3xl">
                <h1>
                  Your Score is: <span>{score}</span>
                </h1>
              </div>
            </div>
          </div>
          <History_game history={history}/>
        </div>
      </div>
    </>
  );
}

export default TimeGame;
