const {sum2Smaller} = require('./sum2Smaller');

document.getElementById("app").innerHTML = `
  <form>
  <input/>
  <button>submit</button>
  </form>
`;

const input = document.querySelector("input");
const form = document.querySelector("form");

// input.value = "-3, -4, -10, -2, 0, 2, 4, 6, -5, 10";

form.addEventListener("submit", e => {
  e.preventDefault();
  const value = input.value;
  const arr = value
    .replace(/\s+/g, "")
    .split(",")
    .slice(0, 100)
    .map(item => {
      return parseInt(item, 10);
    })
    .filter(el => el);
  console.log(sum2Smaller(arr));
});
// btn.click();