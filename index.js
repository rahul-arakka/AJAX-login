console.log("You are on login Page");

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", handleBtn);


function handleBtn(e) {
    let Username = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    e.preventDefault();

    console.log('submit clicked');
  const xhr = new XMLHttpRequest();

  xhr.open('GET','admin.txt', true);


  xhr.onload = function () {
      console.log("on load");
    let dt = JSON.parse(this.responseText);

    // console.log(dt.username);
    // console.log(Username);
    
    if (this.status === 200 && dt.username === Username && dt.password === password) {
        console.log(this.status);
          alert("You are logged in as administrator");
    } else {
        console.log(this.status);
      alert(
        "You are not logged in as Administrator. You do not have rights to make any changes in the profile settings"
      );
    }
  };
    // params = `{"name":${Username},"password":${password}}`;
    xhr.send(params);
    // console.log(params);

}
