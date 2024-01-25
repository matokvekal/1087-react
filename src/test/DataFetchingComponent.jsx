import React, { useState } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const jsonData = await response.json();
    setData(jsonData);
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data && (
        <div>
          <h2>Title: {data.title}</h2>
          <p>Body: {data.body}</p>
        </div>
      )}
    </div>
  );
}

export default DataFetchingComponent;
