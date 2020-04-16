import { useNews, getNews, deleteNews } from "./NewsDataProvider.js";
import { newsArticle } from "./News.js";

eventHub.addEventListener("newsStateChanged", customEvent => {

    renderNews()
})

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNews--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        deleteNews(id).then(renderNews)
    }
})

export const renderNews = () => {

    getNews().then(() => {
        //Stored the value of the arrays in variables
        const newsArray = useNews()
       
    
    contentTarget.innerHTML = newsArray.map(
        newsObject => {
        //iterate array with a map to convert objects into HTML and selecting where it will populate
        const chosenNews = newsArray.find(
            news => news.id === newsObject) 
          
             //Matching the selected park id from dropdown to its itinerary object id 
                return newsArticle(newsObject) //HTML representation once elements are selected from the dropdown and populated into itinerary
    }
        ).join("") //turning data into strings from objects
    })
}



const eventHub = document.querySelector(".container")
const newsFormTarget = document.querySelector(".dashboard__newsForm");
const newsListTarget = document.querySelector(".dashboard__newsList")

eventHub.addEventListener("newNewsArticle", event => {
    const allNews = useNews()
    newsRender(allNews)
})

export const renderNews = news => {
    newsListTarget.innerHTML = newsArticle(news)
}
