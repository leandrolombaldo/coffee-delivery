export const ConvertNumberToReal = (number: number) => {
  const newNumber = number.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return newNumber.replace("R$", "").trim();
};
