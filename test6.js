//Qestion 2

//Fill the blanks in the code below that uses a modern approach to make an AJAX request to update the "user" data at the location : https://reqres.in/api/users/2, using the Ojbect : {name : "Beth Smith"}. Onnce the request has completed, ensure that the JSON formatted data is correctly converted to an Object and ouput to the console.

//You can assume that the API at the server "http://reqres.in/api/" follows the normal REST HTTP methos for performing CRUD operations.

var myRequest = new Request ('https://reqres.in/api/users/2', {
    method : 'post',
    body : JSON.stringify({name : 'Beth Smith'}),
    headers : {
        "Content-Type" : "application/json"
    }
});


//Code used to execute the above request, convert the JSON response to an Object and write it to the console
fetch(myRequest).then((res) => {
    return res.json();
}).then((json) => {
    console.log(json);
});

//Question 3
//Define routes (server.js) in the space below to help create part of a "WEB API" that allows a clinet to perform "CRUD" operations using a pre-built dataService module with the given methods (right) (NOTE : each method returns a "promise" that resolves with JSON data where appropriate). For our rutes, we simply need to work with the methods and return the data to the client- we do not need to handle promise "rejections" (using "catch")

//Route definition
//Return a specific student to the clinet(JSON format ) using the route "/api/students/studentid" 
app.get('/api/students/:studentId', (req, res) => {
    dataService.getStudentById(req.params.studentId).then((data) => {
        res.json(data);
    });
});

//Update a student (data sent in the body of the request) using the route "/api/students/userid"
//When successful, return the JSON formatted object : {message : 'success'}
app.put('/api/studnets/userid', (req, res) => {
    dataService.updateSudentById(req.params.userid, req.body).then((data) => {
        res.json({message : 'success'});
    });
});


//Delete a student using the route "/api/students/studnetId" When successful,return the JSON formatted object : {message : 'success'}
app.delete('/api/studnets/studentId',(req, res) => {
    dataService.deleteStudentById(req.params.studentId).then((data) => {
        res.json({message : 'success'});
    });
});



//-----------------------------------------

//Qeustion 4
//For eacth of the below questions, fill in the blanks for the missing pices of a server.js file that uses the 3rd party module form question 1 part f. The variable used with teh require statemnt for the moduels is "sessionMiddleware"

//a) The following code adds "sessionMiddleware" as middleware for our Express 'app', using the standard configuration properties.

app.use(sessionMiddleware({
    cookieName : 'session',
    secret : 'test5_web322',
    duration : 2*60*1000,
    activeDuration : 1000*60
}));

//b) the following ode adds an "ensureLogin" middleware function that invokes the next()methods only if there is an active session for the user. If there is not, the user will be redirected to the "/login" route using res.redirect();

function ensureLogin(req, res, next) {
    if(!req.session.user){
        res.redirect('/login');
    } else {
        next();
    }
};

//c) The following code specifies a 'logout' route that clears the session and redirects the user to the '/login' route using res.redirect();
app.get('/logout', (req, res) => {
    req.session.reset();
    res.redirect('/login');
});