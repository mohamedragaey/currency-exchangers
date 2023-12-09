"use client";
import React from "react";
import Header from "@/components/App-header";
import Converter from "@/components/converter";
import { getData, getSymbols } from "@/services/api";

export default function Home() {
  const [symbols, setSymbols] = React.useState<any>([]);
  React.useEffect(() => {
    getData();
    getSymbolsKeys();
  }, []);

  const getSymbolsKeys = () => {
    getSymbols().then((result: any) => {
      const currencyKeys = Object.keys(result.symbols);
      setSymbols(currencyKeys);
    });
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <section
        aria-labelledby="Main content aria"
        className="p-3 bg-white mt-3"
      >
        <h1 className="text-3xl">Currency Exchanger</h1>
        <Converter symbols={symbols} />
      </section>
    </main>
  );
}
