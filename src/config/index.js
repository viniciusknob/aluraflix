const URL_DOMAIN_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://vknobflix.herokuapp.com';

export default {
  URL_DOMAIN_BACKEND,
};
