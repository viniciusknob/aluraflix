import configs from '../config';

const URL_CATEGORIAS = `${configs.URL_DOMAIN_BACKEND}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then((response) => response.json());
}

export default {
  getAllWithVideos,
};
