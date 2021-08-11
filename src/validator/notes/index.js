/* eslint-disable linebreak-style */
const { NotePayLoadSchema } = require('./schema');

const NotesValidator = {
  validateNotePayLoad: (payload) => {
    const validationResult = NotePayLoadSchema.validate(payload);
    if (validationResult.error) {
      throw new Error(validationResult.error.message);
    }
  },
};

module.exports = NotesValidator;
