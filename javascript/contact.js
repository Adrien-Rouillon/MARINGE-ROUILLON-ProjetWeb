const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // On bloque le rechargement immédiat

        const res = confirm("Etes-vous sûr de vouloir envoyer le message ?");

        if (res === true) {
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message-text').value;

            // 3. Envoyer au serveur Node
            fetch('http://localhost:3000/commentaire', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    nom: name,
                    email: email,
                    texte: message,
                    date: new Date().toLocaleString() 
                }),
            })
            .then(response => {
                if (!response.ok) throw new Error('Erreur serveur');
                return response.text();
            })
            .then(data => {
                alert("Succès : " + data); 
                contactForm.reset(); // Vide tout le formulaire d'un coup
            })
            .catch(error => {
                console.error('Erreur:', error);
                alert("Le serveur ne répond pas. Lancez-vous bien 'node serveur.js' ?");
            });

        } else {
            // Si l'utilisateur annule
            alert("Envoi annulé. Vous pouvez continuer à modifier votre message.");
        }
    });
}