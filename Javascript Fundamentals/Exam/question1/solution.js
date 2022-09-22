function solve() {
  // TODO ...
  const addBtn = document.querySelector("button");
  const input = document.querySelectorAll("input");
  const name = input[0];
  const age = input[1];
  const kind = input[2];
  const currentOwner = input[3];
  const sections = document.querySelector("#adoption");

  function clearInputs() {
    input.forEach((element) => (element.value = ""));
  }

  addBtn.addEventListener("click", openSection);
  function openSection(e) {
    e.preventDefault();
    if (e.target == addBtn) {
      console.log(name.value);
      if (
        !name.value ||
        !age.value ||
        !kind.value ||
        !currentOwner.value ||
        isNaN(age.value)
      ) {
        clearInputs();
        return;
      }
    }
    const firstSectionUL = sections.querySelector("ul");
    const li = document.createElement("li");
    const firstSectionP = document.createElement("p");
    const firstSectionNameStrong = document.createElement("strong");
    const firstSectionAgeStrong = document.createElement("strong");
    const firstSectionKindStrong = document.createElement("strong");
    const firstSectionSpan = document.createElement("span");
    const contactBtn = document.createElement("button");

    firstSectionNameStrong.innerHTML = name.value;
    firstSectionAgeStrong.innerHTML = age.value;
    firstSectionKindStrong.innerHTML = kind.value;
    firstSectionSpan.innerHTML = currentOwner.value;
    contactBtn.innerText = "Contact with owner";

    firstSectionP.appendChild(firstSectionNameStrong);
    firstSectionP.innerHTML += ` is a `;
    firstSectionP.appendChild(firstSectionAgeStrong);
    firstSectionP.innerHTML += ` year old `;
    firstSectionP.appendChild(firstSectionKindStrong);
    firstSectionSpan.innerHTML = `Owner: ${currentOwner.value}`;
    li.appendChild(firstSectionP);
    li.appendChild(firstSectionSpan);
    li.appendChild(contactBtn);
    firstSectionUL.appendChild(li);
    clearInputs();
    contactBtn.addEventListener("click", contactOwner);

    function contactOwner(e) {
      e.preventDefault();
      li.removeChild(contactBtn);
      const contactDiv = document.createElement("div");
      const contactInput = document.createElement("input");
      contactInput.setAttribute("type", "text");
      contactInput.placeholder = "Enter your names";
      const adoptBtn = document.createElement("button");
      adoptBtn.innerText = "Yes! I take it!";
      contactDiv.appendChild(contactInput);
      contactDiv.appendChild(adoptBtn);
      li.appendChild(contactDiv);
      adoptBtn.addEventListener("click", adopt);

      function adopt(e) {
        e.preventDefault();
        if (!contactInput.value) return;
        const adoptSection = document.getElementById("adopted");
        firstSectionUL.removeChild(li);
        const adoptedLi = li;
        const adoptedSpan = adoptedLi.querySelector("span");
        adoptedSpan.innerHTML = `New Owner: ${contactInput.value}`;
        adoptedLi.removeChild(contactDiv);
        const checkedBtn = document.createElement("button");
        checkedBtn.innerHTML = "Checked";
        adoptedLi.appendChild(checkedBtn);
        const adoptedUL = adoptSection.querySelector("ul");
        adoptedUL.appendChild(adoptedLi);

        checkedBtn.addEventListener("click", () => adoptedLi.remove());
      }
    }
  }
}

{
  /* <section id="adoption">
   <h2>Find a new friend from here:</h2>
   <ul>
      <li>
         <p>
            <strong>Tom</strong>
            " is a "
            <strong>0.3</strong>
            " year old "
            <strong>cat</strong>
         </p>
         <span>Owner: Jim King</span>
         <button>Contact with owner</button>
      </li>
      <li>...</li>
   </ul>
</section> */
}

{
  /* <ul>
   <li>
      <p>
        <strong>Tom</strong>
        " is a "
        <strong>0.3</strong>
        " year old "
        <strong>cat</strong>
      </p>
      <span>Owner: Jim King</span>
      <div>
         <input placeholder="Enter your names">
         <button>Yes! I take it!</button>
      </div>
   </li>
   <li>...</li>
</ul> */
}

{
  /* <section id="adopted">
   <h2>Buddies with a new home:</h2>
   <ul>
      <li>
         <p> 
            <strong>Tom</strong>
            " is a "
            <strong>0.3</strong>
            " year old "
            <strong>cat</strong>
         </p>
         <span>New Owner: Lara Smith</span>
         <button>Checked</button>
      </li>
   </ul>
</section> */
}
