// /hooks/useData.js
import { useEffect, useState } from "react";
import axios from "axios";

export default function useData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/get-data");
      setData(response.data);
    }
    fetchData();
  }, []);

  return data;
}
