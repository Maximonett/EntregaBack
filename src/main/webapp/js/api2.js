fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const usuario = data.results[0];
        console.log("Datos del usuario:", usuario); // Verifico que estamos obteniendo los datos 

        const nombre = usuario.name.first;
        const apellido = usuario.name.last;
        const mail = usuario.email;
        const password = usuario.login.password;
        const date = new Date(usuario.dob.date).toISOString().slice(0, 10); // Formato YYYY-MM-DD Chat GPT
        const country = usuario.location.country;

        console.log("Nombre:", nombre);
        console.log("Apellido:", apellido);
        console.log("Email:", mail);
        console.log("Contraseña:", password);
        console.log("Fecha de nacimiento:", date);
        console.log("País:", country);

        document.getElementById('nombre').value = nombre;
        document.getElementById('apellido').value = apellido;
        document.getElementById('email').value = mail;
        document.getElementById('password').value = password;
        document.getElementById('fechaNacimiento').value = date;

        // Seleccionar país en el select
        const countryOptions = document.getElementById('pais').options;
        for (let i = 0; i < countryOptions.length; i++) {
            if (countryOptions[i].text.toLowerCase() === country.toLowerCase()) { // las hace minusculas a ambas para poder comparar si es el mism
                countryOptions[i].selected = true;  // como eran iguales TRUE
                break;
            }
        }
    })
    .catch(error => {
        console.log("No se obtuvieron datos: ", error);
    });


    