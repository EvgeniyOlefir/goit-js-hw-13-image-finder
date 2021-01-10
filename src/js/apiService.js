const BASE_URL = 'https://pixabay.com/api';
const KEY = '19835867-453b8f011636e79a7f079d8e7';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 12;
  }

  fetchImages() {
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&key=${KEY}`;

    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => hits);
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
