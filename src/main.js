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
      if((window.scrollY > document.body.scrollHeight - window.innerHeight * 1.2) && this.movieDBService.page < this.movieDBService.totalPages && !this.movieDBService.isProcessing) {
        this.movieDBService.loadNextPage();
      }
    });
  }

  searchButtonClickHandler(searchText) {
    const movieItems = document.getElementById('MoviesWrapper');
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

const app = new Main();
