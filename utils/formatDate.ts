export const formatDate = (date: string) => {
  const dateTime = new Date(date);
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth();
  const day = dateTime.getDay();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();

  return `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day} / ${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
