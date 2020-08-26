import { useState } from "react";

const Prices = (props) => {
  const [coinData, setCoinData] = useState({
    currency: props.bpi.bpi.USD.code,
    rate: props.bpi.bpi.USD.rate,
  });

  const coinDataArray = Object.entries(props.bpi.bpi);

  const onDropdownChange = (num) => {
    return {
      currency: coinDataArray[num][1].code,
      rate: coinDataArray[num][1].rate,
    };
  };

  return (
    <article>
      <section>
        <p>your preferred exchange currency:</p>
        <select
          onChange={(selected) =>
            setCoinData(onDropdownChange(selected.target.value))
          }
        >
          <option value="0">USD</option>
          <option value="1">GBP</option>
          <option value="2">EUR</option>
        </select>
      </section>
      <p>
        <strong>1 Bitcoin (BTC)</strong> is currently equal to{" "}
        <strong>
          {coinData.currency} {coinData.rate}
        </strong>
      </p>
    </article>
  );
};

export default Prices;
