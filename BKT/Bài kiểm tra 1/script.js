const so_a = document.querySelector("#so_a");
const so_b = document.querySelector("#so_b");
const result = document.querySelector("#result");
const KQ = document.querySelector(".KQ");
function SNT(n) {
  if (n === 2 || n === 3) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

KQ.addEventListener("click", function () {
  let a = Number(so_a.value);
  let b = Number(so_b.value);
  let total = 0;
  for (let i = a; i <= b; i++) {
    if (SNT(i)) {
      total += i;
    }
  }

  result.value = total;
});
