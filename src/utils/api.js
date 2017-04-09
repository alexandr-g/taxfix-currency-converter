import axios from 'axios';

let api = {
  getRates() {
    return axios.get('https://txf-ecb.glitch.me/rates')
  }
};

export default api;