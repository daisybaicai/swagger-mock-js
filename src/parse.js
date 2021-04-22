import { defaultAttributes } from "./common";
import { isReferenceObject, isNumber } from "./utils";
import { handleSchema, findSchema } from "./schema";

export function parseObject(obj, schema) {
  let res = {};
  Object.keys(obj.properties).forEach((key) => {
    const item = obj.properties[key];
    if (isReferenceObject(item)) {
      const referenceObj = findSchema(schema, item.$ref || item.originalRef);
      const parsedObj = handleSchema(referenceObj, schema, key);
      res[key] = parsedObj;
    }
    res[key] = handleSchema(item, schema, key);
  });
  return res;
}

export function parseArray(obj, schema, key) {
  if (isReferenceObject(obj.items)) {
    const referenceObj = findSchema(
      schema,
      obj.items.$ref || obj.items.originalRef
    );
    const parsedObj = handleSchema(referenceObj, schema, key);
    return [parsedObj];
  }
  return "default array";
}

export function parseDefault(obj, key) {
  const { type } = obj;
  if (Object.keys(defaultAttributes).includes(key)) {
    return defaultAttributes[key];
  }
  if (isNumber(type)) {
    return 123;
  }
  return String(key + "-mock-key");
}
