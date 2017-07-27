export default class MovieItem {

    constructor(movie, elementId, baseUrl, size) {
      this.elementId = elementId || 'MoviesWrapper';
      this.baseUrl = baseUrl || 'https://image.tmdb.org/t/p/';
      this.size = size || 'w500';
      this.movie = movie;
    }

    renderMovieItem() {
      const parent = document.getElementById(this.elementId);
      const wrapper = document.createElement('div');
      const title = document.createElement('h3');
      const overview = document.createElement('p');

      wrapper.style.backgroundImage = `url(${this.baseUrl}${this.size}${this.movie.poster_path})`;
      title.innerHTML = this.movie.title;
      overview.innerHTML = this.movie.overview;

      wrapper.appendChild(title);
      wrapper.appendChild(overview);
      parent.appendChild(wrapper);
    }
}
