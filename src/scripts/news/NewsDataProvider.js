// Tim George: This is the dataProvider for news. It gets the news. Saves the news. Deletes the news. 
//             In both the Post and Delete the eventHub is informed that the state has changed.


let news = [];

  const dispatchStateChangeEvent = () => {
    const newsStateChangedEvent = new CustomEvent("newsStateChanged");
  
    eventHub.dispatchEvent(newsStateChangedEvent);
  };
  

const eventHub = document.querySelector(".container");

export const useNews = () => news.slice();

export const getNews = () => {
  return fetch("http://localhost:3000/news")
    .then((response) => response.json())
    .then((parsedNews) => {
      news = parsedNews;
    });
};

export const saveNews = (news) => {
    return fetch("http://localhost:3000/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(news),
    })
      .then(getNews)
      .then(dispatchStateChangeEvent);
    };

    //deletes itineraries
    export const deleteNews = newsId => {
      return fetch(`http://localhost:3000/news/${newsId}`, {
        method: "DELETE"
      })
      .then(getNews)
      .then(dispatchStateChangeEvent)
}