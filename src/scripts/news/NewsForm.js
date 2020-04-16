import { saveNews } from "./NewsDataProvider.js";


const eventHub = document.querySelector(".container")
const newsFormTarget = document.querySelector(".dashboard__newsForm");



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
              <input type="password" id="articleAddress"></input>

              </fieldset> 
              </form>
              <button id="Save_Article">Save</button>
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
      
  
     // Make a new object representation of article information
            const newArticle = {
                title: articleTitle,
                synopsis: articleSynopsis,
                url: articleAddress,
                timestamp: Date.now(),
                
            }
    
                // Change API state and application state 
                saveNews(newArticle) 
            }
            const newNewsArticle = new CustomEvent("newNewsArticle");
        eventHub.dispatchEvent(newNewsArticle)
        })
        
        