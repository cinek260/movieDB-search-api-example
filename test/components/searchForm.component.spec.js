import { expect } from 'chai';
import SearchForm from '../../src/components/searchForm.component.js';

describe("SearchForm test", () => {
  let searchForm;

  const buttonClickHandler = (text) => {
    return Promise((resolve, reject) => {
      if (text) {
        resolve({message: 'ok'});
      } else {
        reject({message: 'not ok'})
      }
    })
  }

  beforeEach(() => {
    searchForm = new SearchForm(buttonClickHandler);
  });

  describe("SearchForm test", () => {
    it("SearchForm should pass buttonClickHandler function in constructor and keep it in buttonClickHandler property", () => {
      expect(searchForm.buttonClickHandler).to.eql(buttonClickHandler);
    })

    it("handleInputChange function should update inputText property when fired", () => {
      searchForm.handleInputChange({ target: { value: 'new value'}});
      expect(searchForm.inputText).to.eql('new value');
    })
  })
})
