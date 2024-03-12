import express from "express";
const app = express();

app.get('/', (request, response) => {
    response.send('<h1>WELCOME TO THE HOME PAGE</h1>')
})

app.get('/student', (request, response) => {
    const studentInf = `
    <h2>Student name: Artan</h2>
    <h2>Student lastname: Aliu</h2>
    <h2>Academy: Qin Shift Academy</h2>
    <h2>Subject: Java Script & Node.Js</h2>
    `;
    response.send(studentInf);
});

app.listen(3000, () => {
    console.log('Server running at 3000');
})