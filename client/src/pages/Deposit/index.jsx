import React, { useContext, useState } from "react";
import Input from "../../Components/Input";
import axios from "axios";
import { Context } from "../../Context/Context";
import Navbar from "../../Components/Nav";

const Deposit = () => {
  const [depositAmount, setDepositAmount] = useState(0);
  const { id, setBalance, setOperations, operations } = useContext(Context);

  const handleDeposit = async (e) => {
    if (depositAmount > 0) {
      await axios
        .post(`/api/v1/operations/${id}`, {
          amount: Math.abs(depositAmount),
        })
        .then(() => {
          setBalance((prev) => prev + +depositAmount);
          setOperations([
            ...operations,
            {
              amount: depositAmount,
              created_at: new Date()
                .toISOString()
                .slice(0, 19)
                .replace("T", " "),
            },
          ]);
          e.target.value = "";
        });
    }
  };

  const handleOnChange = (e) => {
    e.target.value = Math.abs(e.target.value);
    setDepositAmount(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="info">
        <div className="card">
          <h1>Deposet</h1>
          <Input
            type="number"
            min="0"
            placeholder="Amount"
            onChange={(e) => handleOnChange(e)}
          />
          <Input
            type="button"
            value="Deposit"
            onClick={() => handleDeposit()}
          />
        </div>
      </div>
    </>
  );
};

export default Deposit;
