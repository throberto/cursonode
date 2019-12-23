function soma(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x + 500);
    }, 3000);
  });
}

soma(200)
  .then(resolve => {
    console.log("Resolvido, resultado: " + resolve);
  })
  .catch(reject => {
    console.log(reject);
  });
