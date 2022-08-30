import { useState, useEffect, useCallback } from "react";
import useFecth from "hooks/useFetch";

export default function Server({}) {
  const [url, setUrl] = useState("https://the-one-api.dev/v2/book");
  const [trips, setTrips] = useState([]);

  //  because this funcitn is outside of the dependency hook we need
  //  to put it in depenedncy
  // we wrap that in useCallback because then the function become like argument so it will not rerun again bcause of ref change
  //  depenedency of it is the url that chaeng
  const fetchTrips = useCallback(async () => {
    const res = await fetch(url);
    const json = await res.json();

    setTrips(json);
  }, [url]);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);

  console.log(trips);

  //   fetch("http://localhost:3000/trips")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  return (
    <div>
      <button
        className="hover:bg-red-300 border-2 border-black"
        onClick={() => setUrl("https://the-one-api.dev/v2/movie")}
      >
        change url
      </button>
    </div>
  );
}
