'use strict';

const
  redis = require('redis'),
  redisPort = 6379,
  redisHost = '127.0.0.1',
  redisDb = redis.createClient(redisPort, redisHost)
;


redisDb.on('error', err => {
  console.log('ERROR:', err);
});

redisDb.on('connect', () => {
  console.log("CONNECTED");
});


redisDb.set('myKey2', 'myValue2', function callback(err, reply){
  if (err) return err;
  console.log('data wrote:', reply);
});

redisDb.get('myKey', function callback(err, reply){

  if (err) return err;
  console.log('got data:', reply);

});


// redisDb.hmset('frameworks', {
//   'javascript': 'AngularJS',
//   'css': 'Bootstrap',
//   'node': 'Express'
// }, function callback(err, reply){
//
//   if (err) return err;
//   console.log('wrote object:', reply);
//
// });
//
//
// redisDb.lpush(['frameworks', 'Val2', 'Val3', 'Val4'], function callback(err, reply){
//
//   if (err) return err;
//   console.log('DONE LPUSH', reply);
//
//   redisDb.lrange('frameworks', 0, -1, function callback(err, reply){
//
//     if (err) return err;
//     console.log('RETRIEVED NEW KEY:', reply);
//
//   });
//
// });





//
// redisDb.sadd(
//   ['tags', 'angular', 'backbone', 'emberjs'],
//   function(err, reply){
//     console.log('DONE');
//   }
// );
//
//
//
// redisDb.smembers('tags', (err, reply) => {
//
//   if (err) return err;
//   console.log('SET OF TAGS:', reply);
//
// });
//
//
// redisDb.exists('key', (err, reply) => {
//
//   if (reply == 1){
//     console.log(reply, 'exists');
//   } else {
//     console.log(reply, 'does not exists')
//   }
//
// });





//
// redisDb.set('key60', 60, () => {
//   redisDb.expire('key60', 30);
// });



redisDb.exists('key60', (err, reply) => {
  console.log('key60 EXISTANCE:', reply);
});

// redisDb.set("string key", "string val", redis.print);






