let signup = ()=> {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
   
    // console.log(email.value)
    // console.log(password.value)
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((result)=> {
        console.log(result)
    })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      })
}


// for sign in 
let signIn = ()=> {
    let email = document.getElementById("login-email")
    let password = document.getElementById("login-password")
   
    // console.log(email.value)
    // console.log(password.value)
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((result)=> {
        console.log("user login Successfully")
        console.log(result)
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        
      });
}
