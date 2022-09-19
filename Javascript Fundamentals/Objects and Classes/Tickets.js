function tickets(ticketArr, sortCrit) {
  // Write your code here
  const objArr = ticketArr.map((ticket) => {
    let [destination, price, status] = ticket.split("|");
    price = Number(price);
    const Ticket = { destination, price, status };
    return Ticket;
  });

  return sortCrit === "price"
    ? objArr.sort((a, b) => a - b)
    : objArr.sort((a, b) => a[sortCrit].localeCompare(b[sortCrit]));
}

console.log(
  tickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "price"
  )
);
