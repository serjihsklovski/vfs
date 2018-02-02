const Config = require('./config');

module.exports = env => Config.load(env.profile);
