import { useState } from "react";
import Trips from "@/features/trips";
export default function Homepage() {
  const [showTrips, setShowTrips] = useState(true);
  return (
    <div>
      <h1>tnintsieo</h1>
      <button
        className="border-2 border-red-800"
        onClick={() => setShowTrips(false)}
      >
        hide trips
      </button>
      {showTrips && <Trips />}
    </div>
  );
}
