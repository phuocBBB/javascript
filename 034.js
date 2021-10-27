var database = [{
    username: 'phuoc',
    password: 'phuoc'
}];

var newsFeed = [{
        username: 'Bobby',
        timeline: 'So tired from all that learn'
    },
    {
        username: 'Sally',
        timeline: 'Javascript is sooo coool!'
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(username, password) {
    if (username === database[0].username && password === database[0].password) {
        console.log(newsFeed);;
    } else {
        alert('Sorry! wrong username or password!');
    }
}
signIn(userNamePrompt, passwordPrompt);