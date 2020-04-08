
// function input() {
//     document.getElementById("chat-input") = " ";
// }
function Post() {
    UserInput = document.getElementById("chat-input").value;

    console.log(UserInput)
    // console.log("Button response Working")

    if (UserInput == "shit") {
        UserInput = " poop "
    } else if (UserInput == "fuck") {
        UserInput = " darn "
    } else if (UserInput == "bitch") {
        UserInput = " mean "
    } else {
        UserInput = document.getElementById("chat-input").value;
    }
    
    // document.getElementById("bubble").innerHTML = (UserInput);
    // document.getElementById("bubble").append(UserInput);
    $("ul").append($("<li></li").html(UserInput));
    
}

