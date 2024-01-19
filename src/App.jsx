import { useState, useEffect } from "react";

function App() {

  const [calc, setcalc] = useState("");
  const [result, setresult] = useState("");

  const operators = ["/", "*","+","-", "."];

  useEffect(() => {
    console.log(calc)

  }, [calc])

  const updateCalc = (value)=>{
    
    //La cadena inicial esta vacia y Si operators incluye un signo de operacion
    let Inicial = calc === "" && operators.includes(value)
    //Si operators incluye un signo de operacion y operators incluye un valor que sea el ultimo caracter de la cadena calc
    let Operacion = operators.includes(value) && operators.includes(calc.slice(-1));

    if (Inicial || Operacion){

      return
    }

    setcalc(calc + value);

    if(!operators.includes(value)){

      setresult(eval(calc + value).toString())
    }

  }

  const createDigits = () =>{

    const digits = [];

    for (let i = 1; i < 10; i++) {

      digits.push(<button onClick={()=> {updateCalc(`${i}`)}} key={i}>{i}</button> )
    }

    return digits;
  }

  const calculate = () =>{
    setcalc(eval(calc).toString())
  }

  const deleteCalc = () =>{
    if(!calc == "" ){

      let value = ""

      setcalc(value);
      setresult(value);
    }
  }

  return (
    <div className ="App">
      <div className="calculator">
 
        <div className="display">

          {calc || "0"}
          <br />
          {result ? <span>({result})</span> : ""}
          

        </div>

        <div className="operators">

          <button onClick={()=> {updateCalc('/')}}>/</button>
          <button onClick={()=> {updateCalc('*')}}>*</button>
          <button onClick={()=> {updateCalc('+')}}>+</button>
          <button onClick={()=> {updateCalc('-')}}>-</button>
          <button onClick={deleteCalc }>DEL</button>
          
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={()=> {updateCalc('0')}}>0</button>
          <button  onClick={()=> {updateCalc('.')}}>.</button> 
          
          <button onClick={calculate}>=</button>

        </div>

      </div>
    </div>
  )
}

export default App
