const jsonServer = require('json-server');
const auth = require('json-server-auth');

const app = jsonServer.create();
const router = jsonServer.router('db.json');

// /!\ Bind the router db to the app
app.db = router.db;

const rules = auth.rewriter({
    "/api/*": "/$1",
    "/users*": "/600/users$1"
  });

app.use(rules);
app.use(auth);
app.use(router);
app.listen(4000);