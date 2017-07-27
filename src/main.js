import { MovieDBService } from './services/main';
import { SearchForm, MovieItem } from './components/main';

class Main {
  constructor() {
    this.renderMovieItems = this.renderMovieItems.bind(this);
    this.searchButtonClickHandler = this.searchButtonClickHandler.bind(this);
    this.loadOnScroll = this.loadOnScroll.bind(this);
    this.movieDBService = new MovieDBService(this.renderMovieItems);
    this.searchForm = new SearchForm(this.searchButtonClickHandler);
    this.initialrender();
    this.loadOnScroll();
  }

  loadOnScroll() {
    window.addEventListener('scroll', () => {
      // fired api call when scrolling to bottom of page && there are any movies left && not any incomplete api call
      if((window.scrollY > document.body.scrollHeight - window.innerHeight * 1.2) && this.movieDBService.page < this.movieDBService.totalPages && !this.movieDBService.isProcessing) {
        this.movieDBService.searchMoviesByName(this.movieDBService.name, this.movieDBService.page + 1);
      }
    });
  }

  searchButtonClickHandler(searchText) {
    const movieItems = document.getElementById('MoviesWrapper');
    // Remove previous movies
    while (movieItems.firstChild) {
      movieItems.removeChild(movieItems.firstChild);
    }
    return this.movieDBService.searchMoviesByName(searchText)
  }

  initialrender() {
    this.searchForm.renderInput();
    this.searchForm.renderButton();
  }

  renderMovieItems() {
    this.movieDBService.movies.forEach(movie => {
      const movieItem = new MovieItem(movie);
      movieItem.renderMovieItem();
    })
  }
}


// Start an app;
new Main();
