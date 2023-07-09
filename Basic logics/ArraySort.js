const arr = ["questopia", "code", "lavan"];

arr.sort((a, b) => {
  return -a.localeCompare(b);
});

console.log(arr);
