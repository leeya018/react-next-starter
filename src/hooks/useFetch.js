import { useEffect, useState, useRef } from "react";

const useFecth = (url, _options) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  //   when we are using the object or arr as dependencies ,
  // we will get an infinte loop
  //  so the useRef is  solution that we can use
  //  so the object ref will not change on each reneder
  const options = useRef(_options).current;
  //  useEffec cannotbec aassync
  //  but the funcitno inside that hook can be async

  useEffect(() => {
    console.log(options);
    // we can  define the funciton insried so we not nede the callback as wrap
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await fetch(url, { signal: controller.signal });
        // if the url is not valid , we will still get a res obj
        // so we check if res is ok . if not
        //  we throw err and we will not try to update the state
        //  and also we can output the correct reason for fail in log
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        console.log(err.name);
        // this err invoke only in the cleanup
        // when we unmount from it while trying to update the state
        if (err.name === "AbortError") {
          console.log("The fetch was aborted ");
        } else {
          setIsPending(false);
          setError("could not fetch the data ");
          console.log(err.message);
        }
      }
    };
    fetchData();

    return () => {
      //   the cleanup funcitno handle unmouynt err by controller abort obj
      controller.abort();
    };
  }, [url, options]);

  return { data, isPending, error };
};

export default useFecth;
