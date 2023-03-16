function checkLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "mimin" && password == "mimin123") {
        alert("Selamat Datang " + username + ", Anda Administrator");
    } else if (username == "budi" && password == "budi123") {
        alert("Selamat Datang " + username + ", Anda Operator");
    } else {
        alert("Maaf Anda Gagal Login");
    }
}

function kosongin(){
	//tangkap request form
	let username  = document.getElementById("username");
	username.username.value = "";
}







// function checkLogin() {
//     let username = document.getElementsByName("username")[0].value;
//     let password = document.getElementsByName("password")[0].value;
//     if (username == "mimin" && password == "mimin123") {
//         alert("Selamat Datang Mimin, Anda Administrator");
//     } else if (username == "budi" && password == "budi123") {
//         alert("Selamat Datang Budi, Anda Operator");
//     } else {
//         alert("Maaf Anda Gagal Login");
//     }
// }




// function checkLogin() {
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;

//   if (username === "mimin" && password === "mimin123") {
//     alert("Selamat Datang Mimin, Anda Administrator");
//   } else if (username === "budi" && password === "budi123") {
//     alert("Selamat Datang Budi, Anda Operator");
//   } else {
//     alert("Maaf Anda Gagal Login");
//   }
// }
