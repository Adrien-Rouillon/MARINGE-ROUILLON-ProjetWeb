const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

    
        const nouveauCom = {
            nom: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            texte: document.querySelector('#message-text').value,
            date: new Date().toLocaleString()
        };

 
        let liste = JSON.parse(localStorage.getItem('commentaires')) || [];


        liste.push(nouveauCom);
        localStorage.setItem('commentaires', JSON.stringify(liste));

        alert("Message enregistré dans le navigateur !");
        contactForm.reset();
    });
}