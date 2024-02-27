import { useState } from "react";
import axios from "axios";

const View = () => {
  const [region, setRegion] = useState([]);

  const getList = () => {
    axios.get("http://localhost:3001/EMS").then((res) => {
      console.log(res.data);
      setRegion(res.data);
    });
  };

  return (
    <div>
      View page 입니다.
      <button>
        <a href="/admin">Admin</a>
      </button>
      <div>
        <button onClick={getList}>list get</button>
        <ul>
          {region.map((item) => (
            <li key={item.id}>{item.region}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export { View };
