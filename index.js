import Freecurrencyapi from "@everapi/freecurrencyapi-js";
const api = new Freecurrencyapi(
  "fca_live_GsUYuY50mInNhufoHiliz1YdD2RFBmSooupjJghn"
);

export async function ConvertCurrency(fromCurrency, toCurrency, amount) {
  try {
    const res = await api.latest({
      base_currency: fromCurrency,
      currencies: toCurrency,
    });
    const multiplier = res.data[toCurrency];
    return amount * multiplier;
  } catch (error) {
    console.error("Error fetching currency data:", error);
    throw new Error("Currency conversion failed.");
  }
}
