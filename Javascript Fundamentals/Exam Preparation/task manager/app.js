function solve() {
  const addBtn = document.querySelector("#add");
  const task = document.getElementById("task");
  const description = document.getElementById("description");
  const date = document.getElementById("date");
  const sections = document.querySelectorAll("section");

  addBtn.addEventListener("click", openSection);

  function openSection(e) {
    e.preventDefault();

    const target = e.target;
    if (target == addBtn) {
      if (!task.value || !description.value || !date.value) return;
    }
    const firstSectionDivs = sections[1].querySelectorAll("div");
    const openDiv = firstSectionDivs[1];
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const descriptionParagraph = document.createElement("p");
    const dateParagraph = document.createElement("p");
    const btnDivOpen = document.createElement("div");
    const startBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    startBtn.innerHTML = "Start";
    deleteBtn.innerHTML = "Delete";

    h3.innerHTML = task.value;
    descriptionParagraph.innerHTML = "Description: " + description.value;
    dateParagraph.innerHTML = "Due Date: " + date.value;
    btnDivOpen.className = "flex";
    startBtn.className = "green";
    deleteBtn.className = "red";
    btnDivOpen.appendChild(startBtn);
    btnDivOpen.appendChild(deleteBtn);

    article.appendChild(h3);
    article.appendChild(descriptionParagraph);
    article.appendChild(dateParagraph);
    article.appendChild(btnDivOpen);
    openDiv.appendChild(article);

    startBtn.addEventListener("click", inProgressSection);
    deleteBtn.addEventListener("click", () => article.remove());

    function inProgressSection(e) {
      e.preventDefault();
      const progressSection = sections[2];
      const progressDiv = progressSection.querySelector("#in-progress");
      openDiv.removeChild(article);

      const progressArticle = article;
      btnDivOpen.removeChild(startBtn);
      btnDivOpen.removeChild(deleteBtn);
      const progressDeleteBtn = document.createElement("button");
      const progressFinishBtn = document.createElement("button");
      progressDeleteBtn.innerHTML = "Delete";
      progressFinishBtn.innerHTML = "Finish";
      progressDeleteBtn.className = "red";
      progressFinishBtn.className = "green";
      btnDivOpen.appendChild(progressDeleteBtn);
      btnDivOpen.appendChild(progressFinishBtn);
      progressDiv.appendChild(progressArticle);

      progressDeleteBtn.addEventListener("click", () =>
        progressArticle.remove()
      );
      progressFinishBtn.addEventListener("click", finishSection);

      function finishSection(e) {
        e.preventDefault();
        const finishSectionDivs = sections[3].querySelectorAll("div");
        const finishDiv = finishSectionDivs[1];
        progressArticle.removeChild(btnDivOpen);
        progressDiv.removeChild(progressArticle);
        finishDiv.appendChild(progressArticle);
      }
    }
  }
}
