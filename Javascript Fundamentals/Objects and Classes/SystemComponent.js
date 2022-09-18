function system(components) {
  // Write your code here
  let obj = components.reduce((mainObj, input) => {
    let [systemName, component, subComponent] = input.split(" | ");

    return {
      ...mainObj,
      [systemName]: {
        ...(mainObj[systemName] || {}),
        [component]: [
          ...(mainObj[systemName]?.[component] || []),
          subComponent,
        ],
      },
    };
  }, {});

  console.log(obj);
}

system([
  "SULS | Main Site | Home Page",
  "SULS | Main Site | Login Page",
  "SULS | Main Site | Register Page",
  "SULS | Judge Site | Login Page",
  "SULS | Judge Site | Submittion Page",
  "Lambda | CoreA | A23",
  "SULS | Digital Site | Login Page",
  "Lambda | CoreB | B24",
  "Lambda | CoreA | A24",
  "Lambda | CoreA | A25",
  "Lambda | CoreC | C4",
  "Indice | Session | Default Storage",
  "Indice | Session | Default Security",
]);

function test() {
  let obj = {
    SULS: {
      "Main Site": ["Home Page", "Login Page", "Register Page"],
      "Judge Site": ["Login Page", "Submittion Page"],
      "Digital Site": ["Login Page"],
    },
    Lamba: {
      CoreA: ["A23", "A24", "A25"],
      CoreB: ["B24"],
    },
    Indice: { Session: ["Default Storage", "Default Security"] },
  };

  console.log(obj);
  console.log(obj["SULS"]["Main Site"]);
  console.log(obj["SULS"]["Main Site"][0]);
}
