var button = document.getElementById("btn"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "clicks " + count;
};
