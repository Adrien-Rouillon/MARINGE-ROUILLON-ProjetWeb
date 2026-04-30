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
        let p = '';
        for (const para of article.texte) {
            p += `<p>${para}</p>`;
        }
        articles.innerHTML +=
            `<div class="divArticle" onclick="ouvertureBoiteArticle(${i}, '${link}')">
                <img src= "${article.image}" alt="Image Article ${article.id}" class="imgArticle">
                <div class="textArticle" onclick="">
                    <h2>${article.titre}</h2>
                    <p>${p}</p>
                </div>
            </div>`;
    }
}

async function ouvertureBoiteArticle(index, link) {
    const data = await getData(link);
    const article = data[index];
    let p = '';
    for (const para of article.texte) {
        p += `<p>${para}</p>`;
    }
    document.getElementById('articleTitre').textContent = article.titre;
    document.getElementById('articleImage').src = article.image;
    document.getElementById('articleDate').textContent = article.date;
    document.getElementById('articleTexte').innerHTML = p;
    document.getElementById('boiteArticle').style.display = 'flex';
}
