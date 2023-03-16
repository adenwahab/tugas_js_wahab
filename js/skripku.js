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
