// FILE: script.js

// complete the TODO comments

// Get references to page elements
const button = document.getElementById("makeSmoothie");
const outputDiv = document.getElementById("output");

// Helper function to display messages on the page
function showMessage(message) {
  const p = document.createElement("p");
  p.textContent = message;
  outputDiv.appendChild(p);
}

// Helper function that returns a Promise that resolves after a delay
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* =========================
   PART 1 — PROMISE FUNCTIONS
========================= */

// Step 1: Get ingredients
function getIngredients() {
  // TODO:
  // 1. Show message: "Gathering ingredients..."
  // 2. Wait 2 seconds using wait()
  // 3. Resolve with "Ingredients ready"

  return new Promise((resolve, reject) => {
    showMessage("Gathering ingredients...");
    wait(2000)
    .then(() => resolve(showMessage("Ingredients ready")));
  });
}

// Step 2: Blend smoothie
function blendSmoothie() {
  // TODO:
  // 1. Show message: "Blending smoothie..."
  // 2. Wait 3 seconds
  // 3. Sometimes FAIL (see assignment instructions)
  // 4. Otherwise resolve with "Smoothie blended"

  return new Promise((resolve, reject) => {
    showMessage("Blending special smoothie...");
    wait(3000);
    if(Math.floor(Math.random() * 11) <= 3){
      wait(3000)
        .then(() => reject(showMessage("ERROR: The blender broke")));
    }
    else{
      wait(3000)
        .then(() => resolve(showMessage("Special smoothie blended")));
    }
  });
}

// Step 3: Pour smoothie
function pourSmoothie() {
  // TODO:
  // 1. Show message: "Pouring into cup..."
  // 2. Wait 1 second
  // 3. Resolve with "Smoothie is ready!"

  return new Promise((resolve, reject) => {
    showMessage("Pouring into cup...");
    wait(1000)
      .then(() => resolve(showMessage("Special smoothie is ready!")));
  });
}

/* =========================
   PART 2 — PROMISE CHAIN VERSION
========================= */

function makeSmoothieWithPromises() {
  outputDiv.innerHTML = ""; // Clear previous messages

  // TODO: Chain the steps in order using .then()
  // getIngredients()
  //   .then(...)
  //   .then(...)
  //   .then(...)
  //   .catch(...)

  getIngredients()
    .then(() => blendSmoothie())
    .then(() => pourSmoothie())
    .catch(() => showMessage("There was an error"));
}

/* =========================
   PART 3 — ASYNC/AWAIT VERSION
========================= */

async function makeSmoothieAsync() {
  outputDiv.innerHTML = ""; // Clear previous messages

  // TODO:
  // Use try/catch
  // await getIngredients()
  // await blendSmoothie()
  // await pourSmoothie()
  // Show final success message
  // Catch and display any errors

  try {
    const ingredientsResponse = await getIngredients();
    showMessage(ingredientsResponse);
    const blendResponse = await blendSmoothie();
    showMessage(blendResponse);
    const pourResponse = await pourSmoothie();
    showMessage(pourResponse);
  } catch (err) {
    showMessage("There was a problem");
  }

}

button.addEventListener("click", makeSmoothieWithPromises);
