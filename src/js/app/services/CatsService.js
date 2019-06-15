/* global fetch:false */

class CatsService {
  _baseApiUrl = "https://api.thecatapi.com/v1/";

  async getResource(url) {
    const path = `${this._baseApiUrl}${url}`;
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`getResource() failed, HTTP status ${response.status}`);
    }

    return await response.json();
  }

  async getRandomCat() {
    const res = await this.getResource("images/search");
    return res;
  }

  async getAllBreeds() {
    const res = await this.getResource("breeds");
    return res;
  }

  async getSpecificBreed(id) {
    const res = await this.getResource(`images/search?breed_ids=${id}`);
    return res;
  }
}

export default CatsService;
