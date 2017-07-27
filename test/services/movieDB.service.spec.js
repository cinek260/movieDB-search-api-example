import 'isomorphic-fetch';
import { expect } from 'chai';
import MovieDBService from '../../src/services/movieDB.service.js';

describe("MovieDBService test", () => {
  let movieDBService;

  beforeEach(() => {
    movieDBService = new MovieDBService();
  });

  describe("MovieDBService test", () => {
    it("searchMoviesByName function should reject promise if no name entered and return appropriate message", () => {
      return movieDBService.searchMoviesByName().catch(({message}) => {
        expect(message).to.eql('Movie name is not defined');
      })
    })
    it("searchMoviesByName function should reject promise if name is empty string and return appropriate message", () => {
      return movieDBService.searchMoviesByName().catch(({message}) => {
        expect(message).to.eql('Movie name is not defined');
      })
    })
    it("searchMoviesByName function should resolve promise if entered name is star wars and return appropriate message", () => {
      return movieDBService.searchMoviesByName('star wars').then(({message}) => {
        expect(message).to.eql('Movies found');
      })
    })
    it("searchMoviesByName function should get data from defined page", () => {
      return movieDBService.searchMoviesByName('star wars', 2).then(() => {
        expect(movieDBService.page).to.eql(2);
      })
    })
    it("searchMoviesByName function should get data from 1 page if page is not defined", () => {
      return movieDBService.searchMoviesByName('star wars').then(() => {
        expect(movieDBService.page).to.eql(1);
      })
    })
  })
})
