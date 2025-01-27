class UserService {
  constructor(logger) {
    this.logger = logger; // dependency is injected via the constructor
  }

  createUser(username) {
    this.logger.log(`User ${username} has been created`);
  }
}

module.exports = UserService;