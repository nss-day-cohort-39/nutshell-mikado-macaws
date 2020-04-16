// //Tim George: This is the module that deals with the news form. It listens for a click and then the news form populates 
//   with a save article button attatched to it. Event listener listens for a click on the Save Article button. When the
//   click is heard a new object representation of the article is sent to the database along with the ACTIVEUSER id
//   from/associated with SESSION Storage.

import { saveNews } from "./NewsDataProvider.js";


const eventHub = document.querySelector(".container")
const newsFormTarget = document.querySelector(".dashboard__newsForm");


//listening for a clicked news article on NewsArticleButton.js
  eventHub.addEventListener("addNewsArticleClicked", (CustomEvent) => {
    const NewsForm = () => {
      const render = () => {
        newsFormTarget.innerHTML = `
              <section id="news_Form">
              <h4>News</h4>
              <form>
              <fieldset>
              <label for="title_of_article">Title of Article:</label>
              <input type="text" id="articleTitle"></input>  
              
              
              <label for="article_synopsis">Article Synopsis:</label>
              <input type="text" id="synopsis"></input>
              
              <label for="article_address">URL:</label>
              <input type="text" id="articleAddress"></input>

              </fieldset> 
              </form>
              <button id="Save_Article">Save Article</button>
              </section>
              `
             }
       render()
    }
    NewsForm()
  })

  //event listener that listens for click on Save button to save article
  newsFormTarget.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "Save_Article") {
      const articleTitle = document.querySelector("#articleTitle").value;
      const articleSynopsis = document.querySelector("#synopsis").value;
      const articleAddress = document.querySelector("#articleAddress").value;
      let activeUser = sessionStorage.getItem('activeUser')
  
     // Make a new object representation of article information
            const newArticle = {
                title: articleTitle,
                synopsis: articleSynopsis,
                url: articleAddress,
                timestamp: Date.now(),
                userId: parseInt(activeUser)
              
               }
  
                // Change API state and application state 
                saveNews(newArticle) 
            }
            //letting the eventHub know that there is a new article that needs to populate
            const newNewsArticle = new CustomEvent("newNewsArticle");
        eventHub.dispatchEvent(newNewsArticle)
        })
        
        