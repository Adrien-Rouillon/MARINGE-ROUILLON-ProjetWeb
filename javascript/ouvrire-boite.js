async function getData(link) {
    const response = await fetch(link);

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    return await response.json();
}

async function ouvrir_boite(num) {
    const data = await getData("../json/articles.json");
    const infoArticle = data[num]

    document.getElementById('articleTitre').textContent = infoArticle.titre;
    document.getElementById('articleImage').src = infoArticle.image;
    document.getElementById('articleDate').textContent = infoArticle.date;
    document.getElementById('articleTexte').textContent = infoArticle.texte;

    document.getElementById('boiteArticle').style.display = 'flex';
}
