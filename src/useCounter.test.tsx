import { renderHook,act } from "@testing-library/react";
import useCounterHook from "./useCounterHook";


test("should increment",()=>{
    const {result}=renderHook(()=>useCounterHook());

    act(()=>{
        result.current.increment();
    })

    expect(result.current.count).toBe(1);

})