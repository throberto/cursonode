function sum(x) {
  return new Promise((resolve, reject) => {
    if (Number(x) == NaN || Number(x) == undefined || typeof x != "number") {
      reject("parâmetro inválido.");
    }

    setTimeout(() => {
      resolve(x + 500);
    }, 3000);
  });
}

async function main() {
  try {
    const result = await sum(230);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

main();
