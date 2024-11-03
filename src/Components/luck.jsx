import { useEffect, useState } from "react";
import Lists from "./lists";
import History_game from "./history";

function Luck() {
  const [value, setValue] = useState(Lists);
  const [issafe, setissafe] = useState(true);
  const [danvalue, setdanvalue] = useState([]);
  const [ran,setran] = useState(true)
  const [history,sethistory] = useState([])
  const [score,setScore] = useState(0)
  let time = new Date()

  useEffect(() => {
    let arr = []
    for (let i = 0; i < 5; i++) {
      let temp = Math.floor(Math.random() * (19 + 1))
      arr.push(temp)
    }
    setdanvalue(arr)
  },[ran]);

  function toggleHandle(i) {
    if(danvalue.includes(i) && issafe){
      sethistory([...history,{scor:score,date:time.toUTCString()}])
    }else if(issafe){
      setScore(s=>s+1)
    }
    let flag=0
    let temp;
    temp = value.map((val, index) => {
      if (i == index && !danvalue.includes(i)) {
        return { ...val, pressed: true };
      }else if(danvalue.includes(i) || flag==1){
        setissafe(false)
        flag=1
        setScore(0)
        return { ...val, pressed: true };
      }
      return val;
    });
    setValue(temp);
  }

  function changeHandler(){
    setissafe(true)
    let temp = value.map((val)=>{
      return {...val,pressed:false}
    })
    setValue(temp)
    setran(!ran)
  }

  return (
    <div className="duration-300">
      <div>
        <div className="text-center text-3xl">
          <h1>Try your luck!!</h1>
          <h1>Keep Mining</h1>
        </div>
        <div className="grid grid-cols-1 place-items-center mt-6">
          <div className=""></div>
          <div className="grid grid-cols-4 gap-4 h-full ">
            {value.map((val, index) => (
              <div
                className="btn"
                key={index}
                onClick={() => {toggleHandle(index)

                }}
              >
                <span className={val.pressed ? "hidden" : ""}>{val.value}</span>
                <div className={`text-xl ${val.pressed ? "" : "hidden"}`}>
                  <ion-icon
                    name={issafe ? "golf-outline" : "alert-outline"}
                  ></ion-icon>
                </div>
              </div>
            ))}
          </div>
          <div className={`mt-2 text-xl text-red-600 ${issafe?'hidden':''}`}>
            <p>Oops!! Try again</p>
          </div>
          <button className="btn mt-4 btn-ghost text-white hover:text-black" onClick={changeHandler}>Reset</button>
        </div>
        <History_game history={history}/>
      </div>
    </div>
  );
}

export default Luck;
