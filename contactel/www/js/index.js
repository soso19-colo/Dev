document.addEventListener("deviceready", loadContacts, false);

function loadContacts() {
    let options = new ContactFindOptions()
    // options.filter = "";
    options.multiple = true;
    options.hasPhoneNumber = true;
    let fields = ["name"]
    navigator.contacts.find(fields, showContacts, handleError, options)
}

function showContacts(contacts) {
    let code = ' ';
    for (let i = 0; i < contacts.length; i++) {
        code += `
            <li>
                <a href="#">
                    <img src="img/avatar.png" alt="profile photo">
                    <h1>${contacts[i].name.formatted}</h1>
                    <p>${contacts[i].phoneNumbers[0].value}</p>
                </a>
            </li>
        `;
        contactList.innerHTML = code;
        $('#contactList').listview('refresh');
    }
}

function handleError(error) {
    console.log(error)
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addButton").addEventListener("click", function(event) {
        event.preventDefault(); // Empêche le lien de déclencher une action par défaut
        
        // Cacher la première page
        document.getElementById("contactListPage").style.display = "none";
        // Afficher la deuxième page
        document.getElementById("addContactPage").style.display = "block";
    });

    
});

// Ajouter une fonction pour ajouter un nouveau contact à la liste
function addContactToList(firstName, lastName, phoneNumber) {
    // Utilisez une image par défaut
    let defaultAvatar = "./img/contact.jpg";
    // Créez un nouvel élément de liste HTML avec les données fournies
    let newContact = `
        <li>
            <a href="#">
                <img src="${defaultAvatar}" alt="photo de profil du contact">
                <div>
                    <h1>${firstName} ${lastName}</h1>
                    <p>${phoneNumber}</p>
                </div>
            </a>
        </li>
    `;
    // Ajoutez le nouvel élément de liste à la liste existante
    document.getElementById("contactList").innerHTML += newContact;
}

document.addEventListener("DOMContentLoaded", function() {
    // ...
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche le formulaire de se soumettre normalement
        
        // Récupérer les données du formulaire
       
        let firstName = document.getElementById("firstname").value; // Récupérer le prénom
        let lastName = document.getElementById("lastname").value; // Récupérer le nom de famille
        let phoneNumber = document.getElementById("phone").value;

        // Ajouter le nouveau contact à la liste
        addContactToList(firstName, lastName, phoneNumber);

        // Cacher la deuxième page
        document.getElementById("addContactPage").style.display = "none";
        // Afficher la première page
        document.getElementById("contactListPage").style.display = "block";

        // Réinitialiser le formulaire
        document.getElementById("contactForm").reset();
    });
});
