import React, { useContext, useState } from "react";
import Input from "../../Components/Input";
import { Context } from "../../Context/Context";
import axios from "axios";
import Navbar from "../../Components/Nav";

const Withdraw = () => {
  const { id, balance, setBalance, setOperations, operations } =
    useContext(Context);
  const [withdrawError, setWithdrawError] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  const handleWithdraw = async (e) => {
    if (withdrawAmount > balance) {
      setWithdrawError("You don't have enough balance");
      return;
    } else {
      if (withdrawAmount > 0) {
        setWithdrawError("");
        await axios
          .post(`/api/v1/operations/${id}`, {
            amount: withdrawAmount * -1,
          })
          .then((res) => {
            console.log(res.data);
            setBalance(res.data.balance);
            setBalance(balance - withdrawAmount);
            setOperations([
              ...operations,
              {
                amount: withdrawAmount,
                created_at: new Date()
                  .toISOString()
                  .slice(0, 19)
                  .replace("T", " "),
              },
            ]);
            e.target.value = "";
          });
      }
    }
  };

  const handleOnChange = (e) => {
    e.target.value = Math.abs(e.target.value);
    setWithdrawAmount(e.target.value);
  };
  return (
    <>
      <Navbar />
      <div className="info">
        <div className="card">
          <h1>Withdraw</h1>
          <Input
            type="number"
            placeholder="Amount"
            min="0"
            onChange={(e) => handleOnChange(e)}
          />
          <Input type="button" value="Withdraw" onClick={handleWithdraw} />
          {withdrawError && <p className="error">{withdrawError}</p>}
        </div>
      </div>
    </>
  );
};

export default Withdraw;
