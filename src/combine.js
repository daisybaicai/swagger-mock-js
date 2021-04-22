export function combineResponseSchema(responses, schemas) {
  let res = {};
  Object.keys(responses).forEach((path) => {
    const key = responses[path].schema.originalRef;
    const finalSchema = schemas[key];
    res[path] = finalSchema;
  });
  return res;
}
