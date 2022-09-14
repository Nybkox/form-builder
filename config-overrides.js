const { aliasWebpack, aliasJest } = require('react-app-alias');
const { useBabelRc, override } = require('customize-cra');

const options = {};

module.exports = override(useBabelRc(), aliasWebpack(options));
module.exports.jest = aliasJest(options);
