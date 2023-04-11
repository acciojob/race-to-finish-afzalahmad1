window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
for (let i = 0; i < 5; i++) {
  const randomTime = Math.floor(Math.random() * 5) + 1;
  promises.push(new Promise((resolve, reject) => {
    // Insert your code here
    setTimeout(()=>{
      resolve(randomTime)
    },randomTime*1000)
  }));
}
Promise.any(promises).then(result => {
  document.getElementById("output").innerHTML = `The first promise resolved with ${result} seconds.`;
});

