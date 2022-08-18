const content = null || document.getElementById("content");
const API = "https://rickandmortyapi.com/api/";
const options = {
  method: "GET",
};

async function fecthData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

//Funcion recursiva: se invoca a si misma
(async () => {
  try {
    const characters = await fecthData(`${API}/character`);
    console.log(characters);
    let view = `
      ${characters.results
        .map(
          (character) => `
            <div class="flex flex-col justify-center items-center 
              rounded-lg bg-violet-200 border-md border-grey-200 p-4 text-center">
                <img class="rounded-full w-3/4 mx-auto" src=${character.image} />
                <h3 class="text-md text-black font-bold">
                ${character.name}
                </h3>
                <p class="text-sm text-black">
                Specie: ${character.species}
                </p>
                <p class="text-sm text-black">
                Status: ${character.status}
                </p>
            </div>  
      `
        )
        .join("")}
      `;
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();
