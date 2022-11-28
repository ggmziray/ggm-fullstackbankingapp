import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [id, setId] = useState(1);
  const [balance, setBalance] = useState(0);
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    const getBlance = async () => {
      await axios.get(`/api/v1/operations/balance/${id}`).then((res) => {
        console.log(res.data);
        setBalance(res.data.balance);
      });
    };

    getBlance();

    const getOperations = async () => {
      await axios.get(`/api/v1/operations/${id}`).then((res) => {
        console.log(res.data);
        setOperations(res.data);
      });
    };

    getOperations();
  }, [id, operations]);
  return (
    <Context.Provider
      value={{ id, setId, balance, setBalance, operations, setOperations }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
