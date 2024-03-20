// coumpound intrest

//add event listner to btn
document.getElementById("btn").addEventListener("click", btnClicked);

//event
function btnClicked() {
  //input
  let p = +document.getElementById("p").value;
  let i = +document.getElementById("i").value;
  let n = +document.getElementById("n").value;

  //process
  let a = p * (1 + i) ** n;
  //output
  document.getElementById("output").innerHTML = a;
}
