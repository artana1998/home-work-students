import express from "express";
import bodyParser from 'body-parser';
import fs from 'fs';
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>WELCOME TO THE SERVER</h1>')
});

app.get('/add_student', (req, res) => {
    res.send(`
    <form  method="POST" action="/all_students">
        <input type="text" name="studentName" placeholder="enter a student name" required>
        <button type="submit">Submit</button>
    </form>
    `);
});

app.post('/all_students', (req, res) => {
    const studentName = req.body.studentName;
    fs.appendFile('student.txt', `${studentName}\n`, err => {
        if (err) {
            console.error('error writing to file', err);
            res.status(500).send('Error writing to file');
        } else {
            console.log('student name writen to student');
            res.send('<h1>student addedd suscessfuly</h1>')
        }
    });
});

app.listen(3000, () => {
    console.log('Server running attttt 3000');
});