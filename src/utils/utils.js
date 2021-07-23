export const getSerializedErrorMessages = (errors) =>
  Object.entries(errors).flatMap(([subject, subjectErros]) =>
    subjectErros.map((error) => `${subject} ${error}`)
  );
