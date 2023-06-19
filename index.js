const countriesAPI = "https://restcountries.com/v2/all";
const totalLanguagesElement = document.getElementById("total-languages");

fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    const languages = new Set();

    data.forEach(country => {
      if (country.languages) {
        country.languages.forEach(language => {
          languages.add(language.name);
        });
      }
    });

    const totalLanguages = languages.size;
    totalLanguagesElement.textContent = `Total Languages: ${totalLanguages}`;
  })
  .catch(error => {
    console.error("Error fetching countries data:", error);
    totalLanguagesElement.textContent = "Error retrieving data";
  });
