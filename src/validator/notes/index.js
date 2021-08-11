/* eslint-disable linebreak-style */
const InvarianError = require('../../exceptions/InvariantError');
const { NotePayLoadSchema } = require('./schema');

const NotesValidator = {
  validateNotePayLoad: (payload) => {
    const validationResult = NotePayLoadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvarianError(validationResult.error.message);
    }
  },
};

module.exports = NotesValidator;
