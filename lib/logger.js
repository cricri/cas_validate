var get_logger = function(label) {
  var format = function(prefix, msg) {
    return ((prefix ? prefix+' ' : '')+label+': '+msg);
  };

  return {
    info: format.bind(null, null),
    debug: format.bind(null, 'debug'),
    error: format.bind(null, 'ERROR')
  };
};

module.exports = get_logger;
