import { useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);
//this is comment
  async function fetchData(url) {
    try {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async function handlefetch() {
    let data = await fetchData("https://jsonplaceholder.typicode.com/posts");
    setData(data);
    console.log(data);
  }

  return (
    <>
      <div>Fetch -----------</div>
      <button onClick={handlefetch}>Fetch</button>
      <div>
        {data  && data?.length > 0 &&
        
          data.map((item) => (
            <div key={item.id}>
              {item.id} -{item.title}
            </div>
          ))}
      </div>
    </>
  );
}

export default Fetch;
