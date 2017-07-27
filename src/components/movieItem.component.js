export default class MovieItem {

    constructor(movie) {
      this.elementId = 'MoviesWrapper';
      this.baseUrl = 'https://image.tmdb.org/t/p/';
      this.size = 'w500';
      this.movie = movie;
    }

    renderMovieItem() {
      const parent = document.getElementById(this.elementId);
      const wrapper = document.createElement('div');
      const title = document.createElement('h3');
      const overview = document.createElement('p');

      wrapper.style.backgroundImage = this.movie.poster_path ? `url(${this.baseUrl}${this.size}${this.movie.poster_path})` : '';
      wrapper.className = 'movie-item';
      title.innerHTML = this.movie.title;
      overview.innerHTML = this.movie.overview;

      wrapper.appendChild(title);
      wrapper.appendChild(overview);
      parent.appendChild(wrapper);
    }
}
