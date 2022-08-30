import { useState, useEffect, useCallback } from "react";
import useFecth from "hooks/useFetch";

export default function Trips({}) {
  const [url, setUrl] = useState("https://the-one-api.dev/v2/book");
  // if we want to call the data docs so we can
  // const { data: docs } = useFecth(url);
  const { data, isPending, error } = useFecth(url, { type: "GET" });

  return (
    <div>
      <button
        className="hover:bg-red-300 border-2 border-black"
        onClick={() => setUrl("https://the-one-api.dev/v2/book")}
      >
        book url
      </button>
      <button
        className="hover:bg-red-300 border-2 border-black"
        onClick={() => setUrl("https://the-one-api.dev/v2/movie")}
      >
        movie url
      </button>
      <button
        className="hover:bg-red-300 border-2 border-black"
        onClick={() => setUrl("https://the-one-api.dev/v2/moviettttt")}
      >
        url not valid
      </button>
      {isPending && <div>Loading trips....</div>}
      <ul>{JSON.stringify(data)}</ul>
      {error && <span>{error}</span>}
      {/* <ul>
        {data &&
          data.docs &&
          data.docs.map((doc, ind) => <li key={ind}>{JSON.stringify(doc)}</li>)}
      </ul> */}
    </div>
  );
}
