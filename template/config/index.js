const WebpackMerge = require('webpack-merge');

module.exports = {
  load: (profile, env) => WebpackMerge(require('./base-config')(env), require(`./${profile}-config`)(env)),
};
