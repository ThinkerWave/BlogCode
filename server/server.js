var express    = require('express');
var mysql      = require('mysql');
var dbconfig   = require('./config/database.js');
var bodyParser = require('body-parser');

const multiparty = require('multiparty');
var connection = mysql.createConnection(dbconfig);
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// configuration ===============================================================
app.set('post', process.env.PORT || 5000);
app.set('add', process.env.PORT || 5000);

app.get('/', function(req, res){
  res.send('Root');
});

app.get('/api/post', function(req, res){
console.log(req)
  connection.query('SELECT * from post order by id desc', function(err, rows) {
    if(err) throw err;
    console.log('The solution is: ', rows);
    res.send(rows);
  });
});

app.get('/api/postAdm/', function(req, res){
  var id = req.params.id;
      connection.query('SELECT * from post where id=?',req.query.id, function(err, rows) {
      if(err) throw err;
      console.log('The solution is: ', rows);
      res.send(rows);
    });
  });
  

  app.get('/api/comment/', function(req, res){
    var id = req.params.id;
        connection.query('SELECT * from COMMENT where POSTID=?',req.query.id, function(err, rows) {
        if(err) throw err;
        console.log('The solution is: ', rows);
        res.send(rows);
      });
    });
    

  app.get('/api/postAdmRecent/', function(req, res){
    var id = req.params.id;
        connection.query('SELECT * from post order by id desc WHERE rownum<=2', function(err, rows) {
        if(err) throw err;
        console.log('The solution is: ', rows);
        res.send(rows);
      });
    });
    

app.get('/api/add', function(req, res){
  console.log(req)
  console.log('저장')
    connection.query('SELECT * from post', function(err, rows) {
      if(err) throw err;
      console.log('The solution is: ', rows);
      res.send(rows);
    });
    });

app.post('/api/add', function(req, res){
console.log(req)
  var data = {
    'title':req.body.title,
    'main': req.body.main,
    'category':req.body.category
  }
  connection.query('Insert into post set ?',data, function(err, rows) {
    console.log('인서트 시작')
    if(err) throw err;
    console.log('The solution is: ', rows);
    res.send(rows);
  });
});


app.post('/api/addComment', function(req, res){
  console.log(req)
    var data = {
      POSTID : req.body.POSTID,
      PRVCOMMENTID :req.body.PRVCOMMENTID,
      CONTENT :req.body.CONTENT,
      AUTHOR : req.body.AUTHOR,
      EMAIL :req.body.EMAIL
    }
    connection.query('Insert into COMMENT set ?',data, function(err, rows) {
      console.log('인서트 시작')
      if(err) throw err;
      console.log('The solution is: ', rows);
      res.send(rows);
    });
  });


  app.post('/api/DeletePost', function(req, res){
    var data = {
      ID : req.body.ID
    }
    connection.query('Delete from post where id = ?',data.ID, function(err, rows) {
      console.log('삭제 시작')
      if(err) throw err;
      console.log('The solution is: ', rows);
      res.send(rows);
    });
    }
   
    );
app.listen(app.get('post'), function () {
  console.log('Express server listening on port ' + app.get('post'));
});