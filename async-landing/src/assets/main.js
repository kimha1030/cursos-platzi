import fetch from "node-fetch";
const API = "https://rickandmortyapi.com/api/";
const options = {
  method: "GET",
  //aqui van los headers
};

async function fecthData(urlApi) {
  const response = await fetch(urlApi, options);
  //empleamos el metodo fetch para hacer la peticion de los datos
  const data = await response.json();
  //transformamos el response a json
  return data;
  //retornamos la informacion que nos trae la api
}

//procedemos a consumir la api para obtener todos los episodios
const consumirApi = async (urlApi) => {
  try {
    //accedemos a todos los episodios usando await para que el codigo espere
    //dicha solicitud
    const episodes = await fecthData(`${API}/episode`);
    //accedo al objeto que contiene los episodios
    console.log(episodes);
    //ya que tenemos los episodios, buscamos el primero con el id del episode
    const episode = await fecthData(`${API}/episode/${episodes.results[0].id}`);
    //accedo al nombre del primer episodio
    console.log(episode);
    //ahora ya tengo el episodio, quiero filtrarlo por personaje
    //por lo que uso el id del episodio
    const first_character = await fecthData(`${API}/character/${episode.id}`);
    //accedo al nombre del primer personaje
    console.log(first_character.name);
  } catch (error) {
    //en caso de error, se imprime el error en pantalla
    console.error(error);
  }
};

consumirApi(API);
