export const createSerializedErrorMessages = (errors) =>
  Object.entries(errors).flatMap(([header, body]) =>
    body.map((error) => toCapitalized(`${header} ${error}.`))
  );

function toCapitalized(str) {
  return str.replace(
    /(^.)(.+)/,
    (_match, p1, p2) => `${p1.toUpperCase()}${p2}`
  );
}
