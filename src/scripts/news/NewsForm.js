

const newsFormTarget = document.querySelector(".dashboard__newsForm");
const eventHub = document.querySelector(".container")

export const NewArticleButton = () => {
    const render = () => {
      newsFormTarget.innerHTML = `
          <section id="newsArticle_button">
          <button id="News_Article_Button">New Article</button>
          </section>
          `
        }
  render()
  }







  newsFormTarget.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "News_Article_Button") {
      const addNews = new CustomEvent("addNewArticleClicked");
      eventHub.dispatchEvent(addNews);
    }
  });
  
  eventHub.addEventListener("userLoggedIn", (customEvent) => {
    loginTarget.classList.add("invisible");
  });