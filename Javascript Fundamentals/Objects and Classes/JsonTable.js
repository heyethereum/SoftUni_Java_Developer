function jsonTable(employeeData) {
  // Write your code here
  let html = ["<table>"];
  for (const data of employeeData) {
    const { name, position, salary } = JSON.parse(data);
    html.push("<tr>");
    html.push(`<td>${name}</td>`);
    html.push(`<td>${position}</td>`);
    html.push(`<td>${salary}</td>`);
    html.push("</tr>");
  }
  html.push("</table>");

  console.log(html.join("\n"));
}

jsonTable([
  '{"name":"Peter","position":"Director", "salary":100000}',
  '{"name":"Ted","position":"Lecturer","salary":1000}',
  '{"name":"George","position":"Lecturer","salary":1000}',
]);
