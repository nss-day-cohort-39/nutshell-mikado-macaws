export const newsArticle = newsObject => {
    return `
        <article class="newsArticleList">
            <h3 class="articleTitle">${newsObject.title}</h3>
            <h4 class="articleDate">${new Date(newsObject.dt*1000).toLocaleDateString()}</h4>
            <div class="articleSummary">${newsObject.synopsis}></div>
            <div class="articleLink">${newsObject.url}<div>
            <button class="Delete_News_Article" id="deleteNews--${newsObject.id}>Delete Article</button>
        </article>
    `
}