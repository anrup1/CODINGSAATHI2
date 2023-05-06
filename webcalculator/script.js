function appendToAnswer(value) {
    document.getElementById("answer").value += value;
  }
  
  function clearAnswer() {
    document.getElementById("answer").value = "";
  }
  
  function calculateAnswer() {
    var answer = eval(document.getElementById("answer").value);
    document.getElementById("answer").value = answer;
  }
  