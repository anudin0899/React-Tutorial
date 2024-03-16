import { useEffect } from "react";
import { useRef } from "react";

const areEqual = (prevDeps, nextDeps) => {

    //console.log("prevDeps - ", prevDeps, "nextDeps - ", nextDeps);

    if (prevDeps === null) return false;
    if (prevDeps.length !== nextDeps.length) return false;

    for (let i = 0; i < prevDeps.length; i++) {
        if (prevDeps[i] !== nextDeps[i]) {
            return false;
        }
    }
    return true;
};

//pass callback and dependencies
const useCustomMemo = (cb, deps) => {
    //console.log("cb - ", cb, "deps - ", deps);
    // variable or state -> cached value
    const memorizedRef = useRef(null);
    //console.log("memorizedRef - ",memorizedRef.current);
    // change in dependencies
    if (!memorizedRef.current || !areEqual(memorizedRef.current.deps, deps)) {
        memorizedRef.current = {
            value: cb(),
            deps
        };
    }

    //cleanup logic
    useEffect(() => {
        return () => {
            memorizedRef.current = null;
        };
    }, []);
    //return the memorized value
    return memorizedRef.current.value;
};


export default useCustomMemo;