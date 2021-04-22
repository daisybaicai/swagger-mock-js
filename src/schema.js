import {
  isObject,
  isArray,
  isDefaultType,
} from "./utils";
import { parseArray, parseObject, parseDefault } from "./parse";

export function parsingSchema(content) {
  let res = {};
  Object.keys(content.definitions).forEach((schema) => {
    let schema_mock = handleSchema(
      content.definitions[schema],
      content,
      schema
    );
    res[schema] = schema_mock;
  });
  return res;
}

export function findSchema(schema, refs) {
  const deps = refs.replace(/\#/, "").split("/");
  if (deps.length === 1) {
    deps.unshift("definitions");
  }
  let finalObj = schema;
  deps.forEach((item) => {
    finalObj = finalObj[item];
  });
  return finalObj;
}

export function handleSchema(obj, schema, key) {
  if (isObject(obj)) {
    return parseObject(obj, schema);
  }
  if (isArray(obj)) {
    return parseArray(obj, schema);
  }
  if (isDefaultType(obj)) {
    return parseDefault(obj, key);
  }
}
