export const formatPrice = (num: number) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formatter.format(num / 100);
};
