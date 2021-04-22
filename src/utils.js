export function isObject(schema) {
  return schema.type === "object";
}

export function isArray(schema) {
  return schema.type === "array";
}

export function isReferenceObject(item) {
  const arr = Object.keys(item);
  return arr.includes("$ref") | arr.includes("originalRef");
}

export function isDefaultType(schema) {
  return ["integer", "string", "number"].includes(schema.type);
}

export function isNumber(type) {
  return ["integer", "number"].includes(type);
}
