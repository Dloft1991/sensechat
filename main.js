
// function input() {
//     document.getElementById("chat-input") = " ";
// }
function Post() {
    UserInput = document.getElementById("chat-input").value;

    console.log(UserInput)
    // console.log("Button response Working")
    document.getElementById("chat-script").innerHTML(UserInput);
}
