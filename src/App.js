import {useState} from "react";

const Display = ({counter}) => (
        <div>
            <h1>{counter}</h1>
        </div>
    )

const Button = ({handleClick, text}) => (
        <>
            <button onClick={handleClick}>{text}</button>
        </>
    )



function App() {
 const [counter, setCounter] = useState(0)

    console.log('rendering with counter', counter)

    const increaseByOne = () => setCounter(counter+1);
    const decreaseByOne = () => setCounter(counter-1);
    const setToZero = () => setCounter(0)


    return (
    <div>
        <Display counter={counter}/>
        <Button handleClick={increaseByOne} text={'plus'}/>
        <Button handleClick={decreaseByOne} text={'minus'}/>
        <Button handleClick={setToZero} text={'zero'}/>
        <Button handleClick={()=> setCounter(counter+10)} text={'+10'}/>
    </div>
  );
}

export default App;
