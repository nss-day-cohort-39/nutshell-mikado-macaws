Tim George: This module is where the news is listed. 

import { useNews, getNews, deleteNews } from "./NewsDataProvider.js";
import { newsArticle } from "./News.js";

const eventHub = document.querySelector(".container")
const newsListTarget = document.querySelector(".dashboard__newsList")


//rendering the news due to New Article being added
eventHub.addEventListener("newsStateChanged", customEvent => {

    renderNews()
})

//Listens for the delet button being clicked then renders new news list
newsListTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNews--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        deleteNews(id).then(renderNews)
    }
})

export const renderNews = () => {

    getNews().then(() => {
        //Stored the value of the arrays in variables
        const newsArray = useNews()
       
    
    newsListTarget.innerHTML = newsArray.map(
        newsObject => {
        
                return newsArticle(newsObject)
        }).join("") //turning data into strings from objects
    })
}




