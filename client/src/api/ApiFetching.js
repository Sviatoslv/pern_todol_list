export class ApiFetching {
  static async _fetching(url, method, data) {
    console.log('URL', url);
    
    const options = {
      method: method,
      headers: {'Content-Type': 'application/json'},
    };

    if (data) {
      options.body = JSON.stringify( data );
    }

    try {
      const response = await fetch(url, options);
      const data =  response.json();

      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
};
