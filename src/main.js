import { MovieDBService } from './services/main';

const movieDBService = new MovieDBService();

movieDBService.searchMoviesByName().then(({message}) => {
  console.log('message: ', message)
}).catch(({message}) => {
  console.log('Error message: ', message)
})
