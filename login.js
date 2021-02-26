function addUser(){
    username = document.getElementById("user_name").value;
    localStorage.setItem("Username",username);
    console.log("add user");
    window.location="room.html";
}