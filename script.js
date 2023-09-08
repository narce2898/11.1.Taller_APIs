// URL de la API de Rest Countries para obtener información sobre un país (ejemplo: Uruguay)
const apiUrl = 'https://restcountries.com/v3.1/name/Uruguay';

// Realiza una solicitud GET a la API utilizando fetch
fetch(apiUrl)
  .then((response) => {
    // Verifica si la respuesta es exitosa (código de estado 200)
    if (!response.ok) {
      throw new Error(`Error en la solicitud. Código de estado: ${response.status}`);
    }
    // Convierte la respuesta JSON en un objeto JavaScript
    return response.json();
  })
  .then((data) => {
    const countryInfo = data[0];
    const countryInfoElement = document.getElementById('country-info');

    // Construye el contenido HTML con la información del país
    const html = `
        <p><strong>Nombre:</strong> ${countryInfo.name.common}</p>
        <p><strong>Capital:</strong> ${countryInfo.capital}</p>
        <p><strong>Población:</strong> ${countryInfo.population}</p>
        <p><strong>Idioma:</strong> ${Object.values(countryInfo.languages).join(', ')}</p>
    `;

    // Inserta el contenido en el elemento 'country-info'
    countryInfoElement.innerHTML = html;
  })
  .catch((error) => {
    console.error(error);
  });

