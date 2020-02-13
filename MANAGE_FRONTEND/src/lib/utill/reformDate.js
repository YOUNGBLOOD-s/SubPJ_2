const reformDate = date => {
  const year = date.getFullYear();

  let month = date.getMonth() + 1;
  if (month > 0 && month < 10) {
    month = `0${month}`;
  }

  let day = date.getDate();
  if (day > 0 && day < 10) {
    day = `0${day}`;
  }

  const reform_date = `${year}-${month}-${day}`;
  return reform_date;
};

export default reformDate;
