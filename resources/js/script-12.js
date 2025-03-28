document.addEventListener('DOMContentLoaded', function () {
    
    const savedUsername = localStorage.getItem('username');
    const savedProfilePic = localStorage.getItem('profilePic');

    if (savedUsername && savedProfilePic) {
        displayUserData(savedUsername, savedProfilePic);
    } else {
        
        const defaultProfilePic = 'https://webcodem-media.github.io/resources/multimedia/imagen/perfil-predeterminado.jpg';
        const defaultUsername = 'Usuario';

        displayUserData(defaultUsername, defaultProfilePic);
    }
});

function chooseProfilePicture() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.addEventListener('change', function () {
        const file = this.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const profilePic = document.createElement('img');
                profilePic.src = e.target.result;
                profilePic.alt = 'Foto de perfil';
                profilePic.style.borderRadius = '50%';
                profilePic.style.width = '40px'; 
                profilePic.style.height = '40px';  
                profilePic.style.marginRight = '10px'; 

                const username = prompt('Ingresa tu nombre:');
                if (username) {
                   
                    localStorage.setItem('username', username);
                    localStorage.setItem('profilePic', e.target.result);

                    displayUserData(username, e.target.result);
                }
            };

            reader.readAsDataURL(file);
        }
    });

    input.click();
}

function displayUserData(username, profilePic) {
    
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = '';
    
    const img = document.createElement('img');
    img.src = profilePic;
    img.alt = 'Foto de perfil';
    img.style.borderRadius = '50%';
    img.style.width = '40px'; 
    img.style.height = '40px'; 
    img.style.marginRight = '10px';

    const span = document.createElement('span');
    span.textContent = username;

    userContainer.appendChild(img);
    userContainer.appendChild(span);
  
    img.onclick = span.onclick = chooseProfilePicture;
}
