import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Context/Context";
import Navbar from "../../Components/Nav";
import "./info.css";
import axios from "axios";

const Info = () => {
  const { id } = useContext(Context);
  const [balance, setBalance] = useState(0);
  const [operations, setOperations] = useState([]);
  console.log(id, 124);

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
  }, [id]);

  // const handleWithdraw = async (e) => {
  //   if (withdrawAmount > balance) {
  //     setWithdrawError("You don't have enough balance");
  //     return;
  //   } else {
  //     await axios
  //       .post(`/api/v1/operations/${id}`, {
  //         amount: withdrawAmount * -1,
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //         setBalance(res.data.balance);
  //         setBalance(balance - withdrawAmount);
  //         setOperations([
  //           ...operations,
  //           {
  //             amount: withdrawAmount,
  //             created_at: new Date()
  //               .toISOString()
  //               .slice(0, 19)
  //               .replace("T", " "),
  //           },
  //         ]);
  //         e.target.value = "";
  //       });
  //   }
  // };

  // const handleDeposit = async (e) => {
  //   await axios
  //     .post(`/api/v1/operations/${id}`, {
  //       amount: Math.abs(depositAmount),
  //     })
  //     .then(() => {
  //       setBalance((prev) => prev + +depositAmount);
  //       setOperations([
  //         ...operations,
  //         {
  //           amount: withdrawAmount,
  //           created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
  //         },
  //       ]);
  //       e.target.value = "";
  //     });
  // };

  return (
    <>
      <Navbar />
      <div className="info">
        <div className="card">
          <h1>Balance</h1>
          <h1>You current Blance is : {balance}</h1>
        </div>
          {/* <div className="card">
            <h1>Withdraw</h1>
            <Input
              type="number"
              placeholder="Amount"
              onChange={(e) => setWithdrawAmount(e.target.value)}
            />
            <Input type="button" value="Withdraw" onClick={handleWithdraw} />
            <p className="error">{withdrawError}</p>
          </div> */}
        {/* <div className="card">
          <h1>Deposet</h1>
          <Input
            type="number"
            placeholder="Amount"
            onChange={(e) => setDepositAmount(e.target.value)}
          />
          <Input type="button" value="Deposit" onClick={handleDeposit} />
        </div> */}
      </div>
      <div className="card ope">
        <h1>Operations</h1>
        <div className="operations">
          {operations.map((operation) => {
            return (
              <ul key={operation.id}>
                <li>{operation.amount}</li>
                <li>{operation.created_at}</li>
                {operation.amount > 0 ? <li>Deposit</li> : <li>Withdraw</li>}
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Info;
