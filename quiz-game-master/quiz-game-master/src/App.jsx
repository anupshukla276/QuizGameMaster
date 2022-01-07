import { useEffect, useState ,useMemo} from "react";
import "./App.css";
import Trivia from "./Component/Trivia";
import Timer from "./Component/Timer";
import Start from "./Component/Start";
function App() {
  const[username,setUsername]=useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned,setEarned]=useState("₹ 0");
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },{
      id: 4,
      question: "The main river flowing in the state of Jammu and Kashmir is ?",
      answers: [
        {
          text: "Jhelum",
          correct: false,
        },
        {
          text: "Indus",
          correct: true,
        },
        {
          text: "Chenab",
          correct: false,
        },
        {
          text: "Nubra",
          correct: false,
        },
      ],
    },{
      id: 5,
      question: "Which among the following National Highways of India is the longest?",
      answers: [
        {
          text: "NH 1",
          correct: false,
        },
        {
          text: "NH 2",
          correct: true,
        },
        {
          text: "NH 3",
          correct: false,
        },
        {
          text: "NH 4",
          correct: false,
        },
      ],
    },{
      id: 6,
      question: "The four largest planets of the solar system in descending order are",
      answers: [
        {
          text: " Jupiter, Mercury, Saturn and Uranus",
          correct: false,
        },
        {
          text: "Jupiter, Mercury, Saturn and Uranus",
          correct: false,
        },
        {
          text: "Jupiter, Mercury, Saturn and Neptune",
          correct: false,
        },
        {
          text: "Jupiter, Saturn, Uranus and Neptune",
          correct: true,
        },
      ],
    },{
      id: 7,
      question: "The Paddy fields of India are located in the areas of annual rainfall?",
      answers: [
        {
          text: "120cm",
          correct: false,
        },
        {
          text: "140cm",
          correct: false,
        },
        {
          text: "100cm",
          correct: true,
        },
        {
          text: "110cm",
          correct: false,
        },
      ],
    },{
      id: 8,
      question: "The National highways system is the responsibility of",
      answers: [
        {
          text: " State Governments",
          correct: false,
        },
        {
          text: "State and Central Government",
          correct: false,
        },
        {
          text: "Central Government",
          correct: true,
        },
        {
          text: "A special Roads Authority",
          correct: false,
        },
      ],
    },{
      id: 9,
      question: "The largest of the planets is",
      answers: [
        {
          text: "Jupiter",
          correct: true,
        },
        {
          text: "Saturn",
          correct: false,
        },
        {
          text: "Uranus",
          correct: false,
        },
        {
          text: "Neptune",
          correct: false,
        },
      ],
    },{
      id: 10,
      question: "Who gave the slogan 'Inquilab Zindabad' ?",
      answers: [
        {
          text: "Subhash Chandra Bose",
          correct: false,
        },
        {
          text: "Bhagat Singh",
          correct: true,
        },
        {
          text: "Chandrashekhar Azad",
          correct: false,
        },
        {
          text: "Iqbal",
          correct: false,
        },
      ],
    },{
      id: 11,
      question: "Noakhali is situated in",
      answers: [
        {
          text: "Bangladesh",
          correct:true,
        },
        {
          text: "West Bengal",
          correct: false,
        },
        {
          text: "Tripura",
          correct: false,
        },
        {
          text: "Bihar",
          correct: false,
        },
      ],
    },{
      id: 12,
      question: "Who was the leader of the Bardoli Satyagraha?",
      answers: [
        {
          text: "Dr. Rajendra Prasad",
          correct: false,
        },
        {
          text: "Acharya J.B. Kriplani",
          correct: false,
        },
        {
          text: "Pandit Jawaharlal Nehru",
          correct: false,
        },
        {
          text: "Pandit Jawaharlal Nehru",
          correct: true,
        },
      ],
    },{
      id: 13,
      question: "Which of the following is indicated by the colour of a star?",
      answers: [
        {
          text: "Weight",
          correct: false,
        },
        {
          text: "Temperature",
          correct: true,
        },
        {
          text: "Distance",
          correct: false,
        },
        {
          text: "Size",
          correct: false,
        },
      ],
    },{
      id: 14,
      question: "Light year is a measurement of ?",
      answers: [
        {
          text: "Speed of aeroplanes",
          correct: false,
        },
        {
          text: "Speed of light",
          correct: false,
        },
        {
          text: "Stellar distances",
          correct: true,
        },
        {
          text: "Speed of rockets",
          correct: false,
        },
      ],
    },{
      id: 15,
      question: "First Train started in India?",
      answers: [
        {
          text: "1851",
          correct: false,
        },
        {
          text: "1852",
          correct:false ,
        },
        {
          text: "1853",
          correct: true,
        },
        {
          text: "1854",
          correct: false,
        },
      ],
    },
  ];

  const pyramidApp = useMemo(()=>[
    { id: 1, amount: "₹ 100" },
    { id: 2, amount: "₹ 200" },
    { id: 3, amount: "₹ 300" },
    { id: 4, amount: "₹ 500" },
    { id: 5, amount: "₹ 1000" },
    { id: 6, amount: "₹ 2000" },
    { id: 7, amount: "₹ 4000" },
    { id: 8, amount: "₹ 8000" },
    { id: 9, amount: "₹ 16000" },
    { id: 10, amount: "₹ 32000" },
    { id: 11, amount: "₹ 64000" },
    { id: 12, amount: "₹ 128000" },
    { id: 13, amount: "₹ 256000" },
    { id: 14, amount: "₹ 512000" },
    { id: 15, amount: "₹ 1024000" },
  ].reverse(),
  []);
    

  useEffect(()=>{
questionNumber>1 && setEarned(pyramidApp.find((m)=>m.id===questionNumber-1).amount);
  },[pyramidApp,questionNumber]);
  return (
    <div className="App">
      {username ?(
        <>
         <div className="main">
        {stop?(<h1 className="endText">You earned : {earned}</h1>):(
<>
<div className="top">
          <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
        </div>
        <div className="bottom">
          <Trivia data={data} 
          setStop={setStop}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber} />
        </div>
        </>
        )};
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {pyramidApp.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
        </>
      ):<Start setUsername={setUsername}/>}
      
     
    </div>
  );
  
}

export default App;
