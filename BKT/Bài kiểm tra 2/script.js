let rs = document.getElementById("result");
function numberOneTriangle(n) {
  if (n < 1 || n > 10) {
    console.log(`Nhập số trong khoảng từ 1-10`);
  } else {
    let result = "";
    for (let i = 1; i <= n; i++) {
      result += "* ".repeat(i).trim() + "\n";
      let e = document.createElement("p");
      e.innerHTML = "* ".repeat(i).trim() + "\n";
      rs.append(e);
    }
    console.log(result);
  }
}
numberOneTriangle(7);
