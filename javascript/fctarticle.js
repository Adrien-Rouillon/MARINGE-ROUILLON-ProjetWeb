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

///////////////////////////////////////////////////////////////// Verifier dupliqué de p

async function ouvertureBoiteArticle(index, link) {
    const data = await getData(link);
    const article = data[index];
    let p = '';
    for (const para of article.texte) {
        p += `<p>${para}</p>`;
    }
    document.getElementById('articleTitre').textContent = article.titre;
    document.getElementById('image').src = article.image;
    document.getElementById('articleDate').textContent = article.date;
    document.getElementById('articleTexte').innerHTML = p;
    document.getElementById('boiteArticle').style.display = 'flex';
}

async function genererBoites(link) {
    const data = await getData(link);
    const articles = document.getElementById('professeurs');
    for (let i = 0; i < data.length; i++) {
        let personne = data[i];
        articles.innerHTML +=
            `<div class="divProfesseur" onclick="ouvertureBoite(${i}, '${link}')">
                <img src= "${personne.image}" alt="Photo de ${personne.nom}" class="imgArticle" onerror="this.src='../image/imagetest.jpeg'">
                <div onclick="">
                    <h2>${personne.nom} ${personne.prenom}</h2>
                </div>
            </div>`;
    }
}

async function ouvertureBoite(index, link) {
    const data = await getData(link);
    const personne = data[index];
    document.getElementById('nom').textContent = personne.nom + " " + personne.prenom;
    document.getElementById('image').src = '../image/imagetest.jpeg';
    document.getElementById('image').onerror = "this.src='../image/imagetest.jpeg'";
    document.getElementById('role').textContent = personne.role;
    document.getElementById('biographie').textContent = personne.bio;
    document.getElementById('boiteProfesseur').style.display = 'flex';
}