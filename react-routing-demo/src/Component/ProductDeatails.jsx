import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

function ProductDeatails() {

  let [data, setData] = useState({});
  let { id } = useParams();

  

  async function getData(id) {
    let res = await fetch(`http://localhost:3000/posts/${id}`);

    try {
      let data = await res.json();

      setData({ ...data });
      // console.log(data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div>
      <h1>ProductDeatails</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td>{data.price}</td>
            <td>{data.id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductDeatails;
