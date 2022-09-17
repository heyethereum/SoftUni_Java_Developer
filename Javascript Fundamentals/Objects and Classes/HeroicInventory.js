function heroicInventory(heroArr) {
  // Write your code here
  return JSON.stringify(
    heroArr.reduce((acc, hero) => {
      let [name, level, items] = hero.split(" / ");
      level = Number(level);
      items = items ? items.split(", ") : []; // check if hero has got items
      acc.push({ name, level, items });
      return acc;
    }, [])
  );
}

console.log(
  heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
); //[{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]
