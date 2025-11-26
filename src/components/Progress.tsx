import { useState } from "react"

export const ProgressBarComp = ()=>{
    const [bars,setBars] = useState<any>([]);

    const handleStartProgress = ()=>{
        let number = 0;
        if(bars.length > 5 ) return
        setInterval(() => {
              setBars([
    ...bars ,
    {
        key : Date.now(),
        value :number++
    }
   ])
        }, 1000);
 
    }

    return (
        <div className="mt-[100px]">
            <button onClick={handleStartProgress}>Start Progress</button>
            {
                bars.map((item :any)=>(
                    <div> {item.value}</div>
                ))
            }
        </div>
    )
}