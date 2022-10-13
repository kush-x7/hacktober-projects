document.addEventListener("DOMContentLoaded", () => {
  const adviceButton = document.querySelector(".advice-generator-button");

  let generateAdvice = async (id) => {
    const randomAdvice = await fetch(`https://api.adviceslip.com/advice/${id}`);
    const adviceText = await randomAdvice.json();
    console.log(adviceText);

    let advice = document.querySelector(".advice");
    let adviceID = document.querySelector(".advice-number");
    advice.innerHTML = `&#8220;${adviceText.slip.advice}&#8221;`;
    adviceID.innerHTML = adviceText.slip.id;
  };

  adviceButton.addEventListener("click", async () => {
    adviceButton.removeEventListener("click", generateAdvice);
    let id = Math.floor(Math.random() * 100 + 1);
    let result = await generateAdvice(id);
    adviceButton.addEventListener("click", generateAdvice);
  });

  if (window.innerWidth > 550) {
    document
      .getElementsByClassName("divider")[0]
      .setAttribute("src", "./images/pattern-divider-desktop.svg");
  } else {
    document
      .getElementsByClassName("divider")[0]
      .setAttribute("src", "./images/pattern-divider-mobile.svg");
  }
});
