import { API_KEY, API_URL } from './config';

class Services {
  getDataTransfom = (data) => {
    return data.map((itemData) => {
      const {
        id,
        name,
        description,
        price,
        full_background: fullBackground,
      } = itemData;

      return {
        id,
        name,
        description,
        price,
        fullBackground,
      };
    });
  };

  getData = () => {
    return fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then(({ featured }) => this.getDataTransfom(featured));
  };
}

export default Services;
