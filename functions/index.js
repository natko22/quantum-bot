/* eslint-disable object-curly-spacing */
/* eslint-disable keyword-spacing */
/* eslint-disable quotes */

// Import the Firebase Admin SDK

// Export the functions for deployment
const { addMessage } = require("./api/addMessages");
exports.addMessage = addMessage;
