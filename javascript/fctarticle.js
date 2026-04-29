async function getData(link) {
    const response = await fetch(link);

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    return await response.json();
}

async function genererArticles(link) {
    const data = await getData(link);
    const articles = document.getElementById('articles');
    for (let i = 0; i < data.length; i++) {
        let article = data[i];
        articles.innerHTML +=
            `<div class="divArticle" onclick="ouvertureBoiteArticle(${i}, '${link}')">
                <img src= "${article.image}" alt="Image Article ${article.id}" class="imgArticle">
                <div class="textArticle" onclick="">
                    <h2>${article.titre}</h2>
                    <p>${article.texte}</p>
                </div>
            </div>`;
    }
}

async function ouvertureBoiteArticle(index, link) {
    const data = await getData(link);
    const article = data[index];
    document.getElementById('articleTitre').textContent = article.titre;
    document.getElementById('articleImage').src = article.image;
    document.getElementById('articleDate').textContent = article.date;
    document.getElementById('articleTexte').textContent = article.texte;
    document.getElementById('boiteArticle').style.display = 'flex';
}
