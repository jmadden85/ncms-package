'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Ncms, app, auth, database) {

  app.get('/ncms/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/ncms/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/ncms/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/ncms/example/render', function(req, res, next) {
    Ncms.render('index', {
      package: 'ncms'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
