import { useEffect, useState } from "react";
import Card from "../card/Card";

import "./Entries.css";

function Entries() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  // const [count, setCount] = useState(0);
  // const [sortAscending, setSortAscending] = useState(true);

  const currentRecord = entries.slice(currentPage * 10 - 10, currentPage * 10);

  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then((data) => {
        setEntries(data.entries);
        setLoading(false);
      })
      .catch((err) => {
        alert("Failed to load data");
      });
  }, []);

  if (loading) {
    return <div>Loading data from source......</div>;
  }

  function showPrevious() {
    if (currentPage <= 1) {
      alert("No previous data to show");
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage - 1);
    }
  }

  function showNext() {
    const page = Math.floor(entries.length / 10) + (entries.length % 10 > 0 ? 1 : 0);
    console.log(page);
    console.log(entries.length);

    if (currentPage >= page) {
      alert("There is no data to show");
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage + 1);
    }
  }

  function sortAscending() {
    entries.sort((a, b) => a.API.localeCompare(b.API));
    setEntries([...entries]);
  }

  function sortDescending() {
    entries.sort((a, b) => b.API.localeCompare(a.API));
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
          {currentRecord.map((entry, index) => (
            <div key={index}>
              <Card props={entry} />
            </div>
          ))}
        </ul>
      </div>
      <div className="footer">
        <button onClick={showPrevious}>prev</button>
        <p>{currentPage}</p>
        <button onClick={showNext}>next</button>
      </div>
    </div>
  );
}

export default Entries;
