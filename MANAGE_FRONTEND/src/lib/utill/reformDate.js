const reformDate = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const reform_date = `${year}-${month}-${day}`;
  return reform_date;
};

export default reformDate;
