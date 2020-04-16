// // Tim George: This is the News Article button that is displayed on the DOM upon page render. 
// //             New Article button becomes invisible upon click
//                Click Event that gets dispatched to eventHub informing that newsArticle button was clicked



const newsFormTarget = document.querySelector(".dashboard__newsForm");
const eventHub = document.querySelector(".container")

//displays New Aricle Button and news on render (for now)
export const NewsArticleButton = () => {
    const render = () => {
      newsFormTarget.innerHTML = `
          <section id="newsArticle_button">
          <h4>News</h4>
          <button id="News_Article_Button">New Article</button>
          </section>
          `
        }
  render()
  }




//listening for a click event on the dashboard. When clicked it creates a new custom event called "addNews" and dispatches to the eventHub
  newsFormTarget.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "News_Article_Button") {
      const addNews = new CustomEvent("addNewsArticleClicked")
      eventHub.dispatchEvent(addNews)
    }
  })

  //hiding the News Article button when clicked
  eventHub.addEventListener("addNewsArticleClicked", (customEvent) => {
    document.getElementById("News_Article_Button").style.visibility="hidden";
  })