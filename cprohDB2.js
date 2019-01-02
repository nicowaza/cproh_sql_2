var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE DATABASE IF NOT EXISTS nba CHARACTER SET 'utf8'", function (err, result) {
    if (err) throw err;
    console.log("database created");
  });

  con.query("CREATE TABLE IF NOT EXISTS nba.players (playerID INT NOT NULL UNIQUE, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, number INT, position VARCHAR(255) NOT NULL, height INT, age INT, teamID VARCHAR(255) NOT NULL)", function (err, result) {
    if (err) throw err;
    console.log("Table players created");
  });

  con.query("CREATE TABLE IF NOT EXISTS nba.teams (teamID VARCHAR(50) NOT NULL UNIQUE, name VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, state VARCHAR(255), division VARCHAR(255), conference VARCHAR(255))", function (err, result) {
    if (err) throw err;
    console.log("Table teams created");
  });

  con.query("CREATE TABLE IF NOT EXISTS nba.stats (teamID VARCHAR(50) NOT NULL UNIQUE, playerID VARCHAR(255) NOT NULL, pointsAverage INT, minutesAverage INT, fieldGoalPercentage INT, threePointsPercentage INT, freeThrowPercentage INT)", function (err, result) {
    if (err) throw err;
    console.log("Table stats created");
  });

  con.query("INSERT INTO nba.players (playerID, firstname, lastname, number, position, height, age, teamID) VALUES (1,'Derrick', 'Rose', 23, 'G', 190, 30, 'MIN'), (2, 'Kevin','Durant', 35, 'SF', 206, 30, 'GSW'), (3, 'LeBron', 'James', 23, 'PF', 203, 34, 'LAL'), (4, 'Stephen', 'Curry', 23, 'G', 191, 30, 'GSW')", function (err, result) {
      if (err) throw err;
      console.log("records inserted");
    });
});