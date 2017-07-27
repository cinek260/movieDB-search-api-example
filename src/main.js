import { MovieDBService } from './services/main';
import { SearchForm } from './components/main';

const movieDBService = new MovieDBService();
const searchForm = new SearchForm(movieDBService.searchMoviesByName);

searchForm.renderInput();
searchForm.renderButton();
