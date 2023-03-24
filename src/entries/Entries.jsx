import { useEffect, useState } from "react";
import Card from "../card/Card";

import "./Entries.css";

function Entries() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState([]);
  const [count, setCount] = useState(0);
  // const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then((data) => {
        setEntries(data.entries.slice(count, count + 10));
        setLoading(false);
      })
      .catch((err) => {
        alert("Failed to load data");
      });
  }, []);

  useEffect(() => {
    setCurrentPage(entries.slice(count, count + 10));
  }, [count]);

  if (loading) {
    return <div>Loading data from source......</div>;
  }

  function sortAscending() {
    entries.sort((a, b) => a.Description.localeCompare(b.Description));
    setEntries([...entries]);
  }

  function sortDescending() {
    entries.sort((a, b) => b.Description.localeCompare(a.Description));
    setEntries([...entries]);
  }

  return (
    <div className="container">
      <div className="header">
        <h2>Displaying 10 elements from a large number of elements</h2>
        <button onClick={sortAscending}>Sort Ascending</button>
        <button onClick={sortDescending}>Sort Descending</button>
      </div>
      <div className="list">
        <ul>
          {entries.map((entry, index) => (
            <div key={index}>
              <Card props={entry} />
            </div>
          ))}
        </ul>
      </div>
      <div className="footer">
        <button>prev</button>
        <button>next</button>
      </div>
    </div>
  );
}

export default Entries;
