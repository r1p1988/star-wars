export const getDate = (userDate) => {
  const date = new Date(userDate);

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-GB", options);
  return formattedDate;
};
