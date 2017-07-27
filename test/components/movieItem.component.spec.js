import { expect } from 'chai';
import MovieItem from '../../src/components/movieItem.component.js';

describe("MovieItem test", () => {
  const movie = {
    title: 'star wars',
    overview: 'star wars overview',
    poster_path: '/poster.jpg',
  }

  const movieItem = new MovieItem(movie);

  describe("MovieItem test", () => {
    it("MovieItem should pass movie object in constructor and keep it in movie property", () => {
      expect(movieItem.movie).to.eql(movie);
    })
  })
})
