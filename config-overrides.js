const {
    override,
    fixBabelImports,
    addLessLoader,
  } = require("customize-cra");
  
  
  module.exports = override(
    addLessLoader({
      javascriptEnabled: true
    })
  );