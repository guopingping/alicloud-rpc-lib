var _crypto = require('crypto')

exports.createHmac = function (algorithm, data, key, encoding) {
    return _crypto.createHmac(algorithm, key).update(data).digest(encoding);
}


function md5(Str) {
    var md5sum = _crypto.createHash('md5')
    md5sum.update(new Buffer(Str))
    return md5sum.digest('hex')
}
exports.md5 = md5;
