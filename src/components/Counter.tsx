import React,{useState} from "react";

interface IState {
  count: number;
}



export default function Counter(): JSX.Element {
 const [count, setCounter] = useState(0);
const state: IState = { count: 0 };

const increment = (): any => {
  console.log(state);
     setCounter(count+1);


};

const decrement = (): any => {
  console.log(state);
  setCounter(count -1);

};
  return (
    <div>
      <div className = 'inline-flex items-center justify-center w-[136px] h-[48px] border-[1px] border-[#f2f2f2] gap-[29px]'>
        <button className = 'w-4' onClick={decrement}>-</button>
        <div className = 'leading-[25px] text-[16px] font-[400]' key={count}>{count}</div>
        <button  className = 'w-4' onClick={increment}>+</button>
      </div>
    </div>
  );
}