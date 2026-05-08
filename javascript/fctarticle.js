async function getData(link) {
    const response = await fetch(link);

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    return await response.json();
}

async function genererBoites(link) {
    const data = await getData(link);
    const articles = document.getElementById('professeurs');
    for (let i = 0; i < data.length; i++) {
        let personne = data[i];
        articles.innerHTML +=
            `<div class="divProfesseur" onclick="ouvertureBoite(${i}, '${link}')">
                <img src= "${personne.image}" alt="Photo de ${personne.nom}" class="imgArticle" onerror="this.src='../image/image-base.png'">
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
    document.getElementById('image').onerror = "this.src='../image/image-base.png'";
    document.getElementById('role').textContent = personne.role;
    document.getElementById('biographie').textContent = personne.bio;
    document.getElementById('boiteProfesseur').style.display = 'flex';
}