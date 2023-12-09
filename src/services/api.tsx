export const API_KEY = "cd1e6cb4b54064c053a1687495281967"; // Replace with your actual API key

export async function getData() {
  const res = await fetch(
    `http://data.fixer.io/api/latest?access_key=${API_KEY}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getSymbols() {
  const res = await fetch(
    `http://data.fixer.io/api/symbols?access_key=${API_KEY}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface convertCurrencyProps {
  fromCurrency: string;
  toCurrency?: string;
}

export const convertCurrency = async ({
  fromCurrency,
  toCurrency,
}: convertCurrencyProps) => {
  const apiUrl = `http://data.fixer.io/api/latest?access_key=${API_KEY}&base=${fromCurrency}&symbols=${toCurrency}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;

    // Handle the conversion result as needed
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
