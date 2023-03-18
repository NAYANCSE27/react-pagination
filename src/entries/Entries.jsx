import { useEffect, useState } from "react";
import Card from "../card/Card";

import "./Entries.css";

function Entries() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then((data) => {
        setEntries(data.entries.slice(0, 10));
        // console.log(data);
      })
      .catch((err) => {
        alert("Failed to load data");
        console.error(err);
      });
  }, []);

  return (
    <div className="list">
      <ul>
        {entries.map((entry, index) => (
          <div key={index}>
            <Card props={entry} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Entries;
