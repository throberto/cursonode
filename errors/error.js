function execute() {
  executeTo();
}

function executeTo() {
  throw new Error("Ah não, deu erro!");
}

function init() {
  try {
    executeTo();
  } catch (error) {
    console.log(error.message);
  }
}

init();
