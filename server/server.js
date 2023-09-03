const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "registration_db",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log(" MySQL Database connected");
  }
});

// Route to handle form submission and save data to MySQL
app.post("/register", (req, res) => {
  const registrationData = req.body;
  console.log(registrationData);

  const sqlquery = "INSERT INTO registrations SET ?";
  db.query(sqlquery, registrationData, (err, result) => {
    if (err) throw err;
    console.log("Registration data inserted:", result);
    res.send("Registration successful!");
  });
});



app.post("/signup", (req, res) => {
  const signupData = req.body;

  const sqlquery = "INSERT INTO signup SET ?";
  db.query(sqlquery, signupData, (err, result) => {
    if (err) {
      if (err.code === "1452") {
        return res.status(400).json({ error: "Invalid msId. This user does not exist. Contact Admin" });
      }
      return res.status(500).json({ error: "An error occurred while processing your request. Contact Admin" });
    }
    console.log("signup data inserted:", result);
    res.send("signup successful!");
  });
});

app.get('/getSignUpData', (req , res) => {
  const sqlQuery = 'SELECT * FROM signup';

  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'An error occurred while fetching data' });
    } else {
      res.json(results);
    }
  });
});


app.post("/checkLogin", (req, res) => {
  const { username, password } = req.body;

  const query = `
    SELECT r.first_name, r.last_name, s.msId
    FROM signup AS s
    JOIN registrations AS r ON r.ms_id = s.msId
    WHERE s.username = ? AND s.password = ?
  `;

  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      res.status(500).json({ error: "An error occurred while checking login." });
      return;
    }

    if (results.length > 0) {
      const userData = results[0];
      res.json({ valid: true, msId: userData.msId, firstName: userData.first_name, lastName: userData.last_name });
    } else {
      res.json({ valid: false });
    }
  });
});


app.post("/save_muscle_building", (req, res) => {
  const muscleBuildingData = req.body;

  const sqlquery = "INSERT INTO muscle_building SET ?";
  db.query(sqlquery, muscleBuildingData, (err, result) => {
    if (err) throw err;
    console.log("Registration data inserted:", result);
    res.send("Registration successful!");
  });
});

app.post("/save_cardio", (req, res) => {
  const cardiostrengthData = req.body;

  const sqlquery = "INSERT INTO cardio_exercise SET ?";
  db.query(sqlquery, cardiostrengthData, (err, result) => {
    if (err) throw err;
    console.log("Registration data inserted:", result);
    res.send("Registration successful!");
  });
});

app.post("/save_yoga_stretching", (req, res) => {
  const stretchyogaData  = req.body;

  const sqlquery = "INSERT INTO exercise_reports SET ?";
  db.query(sqlquery, stretchyogaData , (err, result) => {
    if (err) throw err;
    console.log("Registration data inserted:", result);
    res.send("Registration successful!");
  });
});

app.get('/getregistrations', (req, res) => {
  const query = 'SELECT * FROM registrations';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching registrations:', err);
      res.status(500).json({ error: 'Error fetching registrations' });
    } else {
      res.json(results);
    }
  });
});


const currentDate = new Date().toISOString().split('T')[0];

app.get("/daily-muscle-report/:msId", (req, res) => {
  const msId = req.params.msId;

  // Fetch muscle exercise data from the database for the specified msId and today's date
  const query = `
    SELECT * 
    FROM muscle_building 
    WHERE msId = ? AND DATE(date_of_exercise) = ?;
  `;

  db.query(query, [msId, currentDate], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred" });
    } else {
      res.json(results);
    }
  });
});

// Route to fetch weekly muscle exercise report
app.get('/weekly-muscle-report/:msId', (req, res) => {
  const { msId } = req.params;
  const query = `
    SELECT exerciseName, SUM(sets) AS totalSets, SUM(reps) AS totalReps, SUM(weight) AS totalWeight
    FROM muscle_building
    WHERE msId = ? AND date_of_exercise BETWEEN DATE_SUB(CURDATE(), INTERVAL 7 DAY) AND CURDATE()
    GROUP BY exerciseName
  `;
  
  db.query(query, [msId], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Error fetching data' });
    } else {
      res.json(results);
    }
  });
});

// Route to fetch monthly muscle exercise report
app.get('/monthly-muscle-report/:msId', (req, res) => {
  const { msId } = req.params;
  const query = `
    SELECT exerciseName, SUM(sets) AS totalSets, SUM(reps) AS totalReps, SUM(weight) AS totalWeight
    FROM muscle_building
    WHERE msId = ? AND date_of_exercise BETWEEN DATE_SUB(CURDATE(), INTERVAL 30 DAY) AND CURDATE()
    GROUP BY exerciseName
  `;
  
  db.query(query, [msId], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Error fetching data' });
    } else {
      res.json(results);
    }
  });
});


app.get('/getMuscleBuildingData', (req, res) => {
  const query = `
    SELECT * 
    FROM muscle_building;
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.json(results);
    }
  });
});



// Endpoint to fetch cardio exercise data
app.get('/getCardioExerciseData', (req, res) => {
  // Fetch cardio exercise data from the database
  const query = `
    SELECT * 
    FROM cardio_exercise;
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.json(results);
    }
  });
});


app.get("/getYogaExerciseData", (req, res) => {
  // Fetch yoga exercise data from the database
  const query = `
    SELECT *
    FROM exercise_reports
    WHERE exercise_name IN ('Yoga', 'Stretching');
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred" });
    } else {
      res.json(results);
    }
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
