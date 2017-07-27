const API_KEY = 'f71778e8dddfdc4d88428b68181df3f0';
const API_URL = 'https://api.themoviedb.org/3';

export default class MovieDBService {

    constructor(processMovieData) {
      this.movies = [];
      this.page = 0;
      this.totalResults = 0;
      this.totalPages = 0;
      this.searchMoviesByName = this.searchMoviesByName.bind(this);
      this.processMovieData = processMovieData;
      this.name = '';
      this.isProcessing = false;
    }

    searchMoviesByName(name, page) {
      this.name = name;
      return new Promise((resolve, reject) => {
        if (name === undefined || name === '') {
          reject({message: 'Movie name is not defined'});
        } else {
          this.fetchMoviesByName(name, resolve, reject, page);
        }
      });
    }

    fetchMoviesByName(name, resolve, reject, page) {
      this.isProcessing = true;
      return fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${name}&page=${page || 1}`)
      .then(response => {
        if (response.status === 200) {
          response.json().then(movies => {
            this.movies = movies.results;
            this.page = movies.page;
            this.totalResults = movies.total_results;
            this.totalPages = movies.total_pages;
            resolve({message: 'Movies found'});
            this.processMovieData();
            this.isProcessing = false;
          })
          .catch(ex => {
            reject({
              message: 'Exception',
              exception: ex
            })
            this.isProcessing = false;
          });
        } else {
          reject({
            message: 'Response status not 200',
            status: response.status
          });
          this.isProcessing = false;
        }
      })
    }
}
