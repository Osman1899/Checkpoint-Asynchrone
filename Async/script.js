//fonction asynchrone iterateWithAsyncAwait qui prend un tableau de valeurs et enregistre chaque valeur avec un délai de 1 seconde entre les journaux.
async function iterateWithAsyncAwait(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Utilisation de await pour attendre 1 seconde avant de continuer
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(arr[i]);
  }
}

//créez une fonction asynchrone waitCall qui simule la récupération de données à partir d'une API. Utilisez wait pour attendre la réponse de l'API, puis enregistrez les données.
async function waitCall() {
  try {
    // Simulation de l'appel à une API avec un délai de 2 secondes
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Données récupérées de l'API (simulées ici)
    const data = { id: 1, name: "John Doe" };

    // Enregistrement des données
    console.log("Données récupérées:", data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
  }
}

// Appel de la fonction waitCall
waitCall();

//modifiez la fonction waitCall pour gérer les erreurs avec élégance. Si l'appel d'API échoue, détectez l'erreur et enregistrez un message d'erreur convivial.
async function waitCall() {
  try {
    // Simulation de l'appel à une API avec un délai de 2 secondes
    await new Promise((resolve, reject) => setTimeout(reject, 2000));

    // Données récupérées de l'API (simulées ici)
    const data = { id: 1, name: "John Doe" };

    // Enregistrement des données
    console.log("Données récupérées:", data);
  } catch (error) {
    console.error(
      "La récupération des données a échoué. Veuillez réessayer plus tard."
    );
  }
}

// Appel de la fonction waitCall
waitCall();

//fonction chainedAsyncFunctions qui appelle séquentiellement trois fonctions asynchrones distinctes. Chaque fonction doit enregistrer un message après un délai de 1 seconde. Chaînez ces fonctions en utilisant wait .
async function chainedAsyncFunctions() {
  async function firstAsyncFunction() {
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log("Première fonction asynchrone");
        resolve();
      }, 1000)
    );
  }

  async function secondAsyncFunction() {
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log("Deuxième fonction asynchrone");
        resolve();
      }, 1000)
    );
  }

  async function thirdAsyncFunction() {
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log("Troisième fonction asynchrone");
        resolve();
      }, 1000)
    );
  }

  await firstAsyncFunction();
  await secondAsyncFunction();
  await thirdAsyncFunction();
}

// Appel de la fonction chainedAsyncFunctions
chainedAsyncFunctions();

//créez une fonction asynchrone concurrentRequests qui effectue deux appels d'API simultanément à l'aide de Promise.all() . Enregistrez les résultats combinés une fois les deux demandes résolues.
async function concurrentRequests() {
  try {
    const [result1, result2] = await Promise.all([
      fetch("https://api.example.com/endpoint1"),
      fetch("https://api.example.com/endpoint2"),
    ]);

    const data1 = await result1.json();
    const data2 = await result2.json();

    console.log("Résultat de la première requête:", data1);
    console.log("Résultat de la deuxième requête:", data2);

    // Enregistrer les résultats combinés ou effectuer d'autres opérations
  } catch (error) {
    console.error("Une erreur s'est produite:", error);
  }
}

// Appel de la fonction concurrentRequests
concurrentRequests();

//écrivez une fonction parallelCalls qui prend un tableau d'URL et récupère les données de chaque URL simultanément à l'aide de Promise.all() . Enregistrez les réponses une fois que toutes les demandes sont terminées.

async function parallelCalls(urls) {
  try {
    // Créer un tableau de promesses pour chaque appel d'API
    const promises = urls.map((url) => fetch(url));

    // Attendre que toutes les promesses soient résolues
    const responses = await Promise.all(promises);

    // Récupérer les données de chaque réponse
    const responseData = await Promise.all(
      responses.map((response) => response.json())
    );

    // Enregistrer ou traiter les données de chaque réponse
    responseData.forEach((data, index) => {
      console.log(`Résultat de la requête ${index + 1}:`, data);
    });

    // Autres opérations à effectuer une fois toutes les demandes terminées
  } catch (error) {
    console.error("Une erreur s'est produite:", error);
  }
}

// Exemple d'utilisation de la fonction parallelCalls avec un tableau d'URL
const urls = [
  "https://api.example.com/data1",
  "https://api.example.com/data2",
  "https://api.example.com/data3",
];
parallelCalls(urls);
