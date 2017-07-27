export default class SearchForm {

    constructor(buttonClickHandler) {
      this.inputText = '';
      this.elementId = 'SearchForm';
      this.buttonClickHandler = buttonClickHandler;
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleButtonClick = this.handleButtonClick.bind(this);
      this.message = '';
    }

    handleInputChange({target: {value}}) {
      this.inputText = value;
    }

    handleButtonClick() {
      this.buttonClickHandler(this.inputText).then(({message}) => {
        this.message = message;
        this.renderMessage();
      }).catch(({message}) => {
        this.message = message;
        this.renderMessage();
      })
    }

    renderInput() {
      const parent = document.getElementById(this.elementId);
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = 'Enter movie name here';
      input.onchange = this.handleInputChange;
      parent.appendChild(input);
    }

    renderButton() {
      const parent = document.getElementById(this.elementId);
      const button = document.createElement('button');
      button.innerHTML = 'Search movies';
      button.onclick = this.handleButtonClick;
      parent.appendChild(button);
    }

    renderMessage() {
      const parent = document.getElementById(this.elementId);
      const message = document.createElement('p');
      message.innerHTML = this.message;
      parent.appendChild(message);
      setTimeout(() => {
        parent.removeChild(message);
        this.message = '';
      }, 3000)
    }
}
