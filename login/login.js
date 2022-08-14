window.addEventListener("load", () => {
  const submitButton = document.querySelector("#submit-button");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const user = document.getElementById("username");
    const username = user.value;
    const pass = document.getElementById("password");
    const password = pass.value;
    console.log("hello world");
    console.log(user);
    console.log(pass);
    if (username === "sam" && password === "123") {
      location.assign(
        "file:///C:/Users/Richard/Desktop/proj%201/landing%page/successful_login.html"
      );
    } else {
      alert("LOGIN FAILED!");
    }
  });
});
