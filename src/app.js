// require('babel-register');
import { parsingObjectsToResponse } from "./response";
import { combineResponseSchema } from "./combine";
import { parsingSchema } from "./schema";
// const swaggerCombine = require("swagger-combine");
import swaggerCombine from 'swagger-combine'
import file from '../api-docs (44).json'
// const fs = require("fs");
import fs from 'fs'

swaggerCombine(file)
  .then((content) => {
    const responses = parsingObjectsToResponse(content);
    const schemas = parsingSchema(content);
    const composed = combineResponseSchema(responses, schemas);
    fs.writeFileSync(
      "./mock.js",
      `export default ${JSON.stringify(composed, "", 2)}`
    );
    console.log('success');
  })
  .catch((e) => {
    console.log("err", e);
  });
