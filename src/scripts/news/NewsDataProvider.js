let users = [];

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

  const dispatchStateChangeEvent = () => {
    const usersStateChangedEvent = new CustomEvent("usersStateChanged");
  
    eventHub.dispatchEvent(usersStateChangedEvent);
  };
  