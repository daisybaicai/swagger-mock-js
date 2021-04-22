function UpperCase(value) {
  return value.toUpperCase();
}

export function parsingObjectsToResponse(content, prefix = '/api') {
  let res = {};
  Object.keys(content.paths).forEach((path) => {
    const methods = content.paths[path];
    Object.keys(methods).forEach((method) => {
      const method_uppercase = UpperCase(method);
      const keyName = `${method_uppercase} ${prefix}${path}`;
      const { responses } = methods[method];
      // 暂时只处理200的情况
      const reponse_200 = responses["200"];
      res[keyName] = reponse_200;
    });
  });
  return res;
}
