import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';


const Match = () => {
  const qBank = [
    {
      question:
        " what is your name ?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "099099"
    },
    {
      question:
        "Which one of the following river flows between Vindhyan and Satpura ranges?",
      answers: [" Narmada", "Mahanadi", " Son", " Netravati"],
      correct: "Narmada",
      questionId: "093901"
    },
    {
      question:
        "Th e Central Rice Research Station is situated in?The Central Rice Research Station is situated in?",
      answers: ["Chennai", "Cuttack", "Bangalore", "Quilon"],
      correct: "Cuttack",
      questionId: "009032"
    },
    {
      question:
        "Who among the following wrote Sanskrit grammar?",
      answers: ["Kalidasa", "Charak", "Panini", "Aryabhatt"],
      correct: "Panini",
      questionId: "090083"
    },
    {
      question:
        " Which among the following headstreams meets the Ganges in last?",
      answers: ["Alaknanda", "Pindar", "Mandakini", "Bhagirathi"],
      correct: "Bhagirathi",
      questionId: "01010104   "
    },
    {
      question:
        "The metal whose salts are sensitive to light is?",
      answers: ["Zinc", "Silver", "Copper", "Aluminum"],
      correct: "Silver",
      questionId: "092295"
    },
    {
      question:
        "Patanjali is well known for the compilation of –",
      answers: ["Yoga Sutra", "Panchatantra", " Brahma Sutra", "Ayurveda"],
      correct: "Yoga Sutra",
      questionId: "099096"
    },


  ];
  const [state, setstate] = useState(qBank);
  const [checkes, setCheckes] = useState([]);
  const[check,setCheck]=useState(true)
  const [time,settime]=useState(true)
  console.log(state);

  let [counter, setCounter] = useState(60);
  useEffect(() => {
    const _timer = setInterval(() => {
      if (counter == 0) {
        clearInterval(_timer);
         setCheck(false)
         } else {
        setCounter(counter - 1);
        }
      console.log(_timer);
    }, 1000);
    return () => clearInterval(_timer) ; 
  },[counter]);

  let [counters, setCounters] = useState(1);
  useEffect(() => {
    const _timer = setInterval(() => {
      if (counters == 0) {
        clearInterval(_timer);
        setCheck(false)

      } else {
        setCounters(counters - 1);
      }
    }, 60000);
    return () => clearInterval(_timer);
  }, [counters]);

return (
    <div>
    <h1> MCQ'S Questions</h1>
     {time ? 
        <h1>Time Left {counters}:{counter}sec.<br />
          <br />
          {(counter == 0) && <div>Your time's up</div>}</h1>:null} 
    {check ? (<div>
        {state.map((item, i) => {
          return (
            <div>{i+1}.  {item.question}
              {item.answers.map((items, i) => {
                return (
                  <ul type="none">
                    <li> <input

                      type="checkbox"
                      name="name1"
                      onClick={() => {
                        state.map((value,i)=>{
                          if(value.correct===items){
                            console.log(items)
                            return(
                              checkes.push(items)
                            )}
                          setCheckes(checkes)
                          console.log(checkes)
                        })
                       }}/>{items}</li>
                  </ul>
                )
              })}
          </div>)
        })}
       <button onClick={()=>{
         setCheck(false);
         settime(false);
        }}>Show Result</button>
      </div>
      ):(
        <div><h1> Your score is {checkes.length} / 7 ....</h1></div>
      )
   }
   <Link to ="/Contact">Contact</Link>
   </div>
  )
}

export default Match
