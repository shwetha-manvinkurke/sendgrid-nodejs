'use strict';

/**
 * Expose classes
 */
const Attachment = require('./attachment');
const EmailAddress = require('./email-address');
const Mail = require('./mail');
const Personalization = require('./personalization');
const ResponseError = require('./response-error');
const stats = require('./stats');

/**
 * Export
 */
module.exports = {
  Attachment,
  EmailAddress,
  Mail,
  Personalization,
  ResponseError,
  Stats,
};
