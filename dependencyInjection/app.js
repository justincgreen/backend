const Logger = require('./logger');
const UserService = require('./userService');

// Create an instance of Logger
const logger = new Logger();

// Inject the logger into UserService
const userService = new UserService(logger);

// Use the UserService
userService.createUser('Bassy');