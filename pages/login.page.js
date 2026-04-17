class LoginPage {
  constructor(page) {
    this.page = page;

    // define selectors here
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = '#login';
    this.errorMessage = '.error';
  }

  async goto() {
    await this.page.goto('https://example.com/login');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }
}

module.exports = { LoginPage };