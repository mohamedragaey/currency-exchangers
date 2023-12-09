"use client";
import React from "react";
import SelectInput from "../SelectInput";
import NumberInput from "../NumberInput";
import { convertCurrency } from "@/services/api";
import SwapIcon from "../SwapIcon";

const Converter: React.FC<any> = ({ symbols }) => {
  const currencyOptions = Object.keys(symbols).map((currencyCode) => ({
    value: currencyCode,
    label: symbols[currencyCode],
  }));

  const [fromCurrency, setFromCurrency] = React.useState<string>("USD");
  const [toCurrency, setToCurrency] = React.useState<string>("EUR");

  const handleSelectChange = (selectedValue: string, type: "from" | "to") => {
    if (type === "from") {
      setFromCurrency(selectedValue);
    } else {
      setToCurrency(selectedValue);
    }
  };

  const [amount, setAmount] = React.useState<number>(0);

  const handleAmountChange = (newValue: number) => {
    setAmount(newValue);
  };

  const [convertedAmount, setConvertedAmount] = React.useState<number>(0);
  const handleCurrencyConverstion = () => {
    console.log(fromCurrency, toCurrency);

    convertCurrency({ fromCurrency, toCurrency }).then((result) => {
      setConvertedAmount(result?.rates * amount);
      console.log(result);
    });
  };

  const swapCurrencies = () => {
    let fromCurrencyTemp = toCurrency;
    let toCurrencyTemp = fromCurrency;

    // Update the state with the new values
    setFromCurrency(fromCurrencyTemp);
    setToCurrency(toCurrencyTemp);
  };

  return (
    <section>
      <div className="left"></div>
      <div className="right flex flex-col md:flex-row justify-between p-5 border my-5">
        <NumberInput
          label="Amount"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter an amount"
        />
        <div>
          <div className="flex flex-col gap-4">
            <div
              aria-labelledby="From - To Dropdowns"
              className="flex items-end gap-4"
            >
              <SelectInput
                label="From"
                options={currencyOptions}
                onChange={(value) => handleSelectChange(value, "from")}
                defaultValue="USD"
              />
              <button
                type="button"
                className="mb-2"
                onClick={() => swapCurrencies()}
              >
                <SwapIcon />
              </button>
              <SelectInput
                label="To"
                options={currencyOptions}
                onChange={(value) => handleSelectChange(value, "to")}
                defaultValue="EUR"
              />
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => handleCurrencyConverstion()}
            >
              Convert
            </button>
          </div>
          <section className="border p-5 mt-5">
            <label>Converted Value:</label>
            <span>{convertedAmount}</span>
          </section>
          <a href="/details" className="btn btn-default px-5 mt-5">
            More Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default Converter;
