// Simulating an asynchronous operation using Promise
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({
          name: "Poorvika",
          role: "Frontend Developer"
        });
      } else {
        reject("Failed to fetch user data");
      }
    }, 2000);
  });
}

// Using Promises
fetchUserData()
  .then(function (data) {
    console.log("Promise resolved:", data);
  })
  .catch(function (error) {
    console.error("Promise rejected:", error);
  });

// Using async / await
async function getUser() {
  try {
    const user = await fetchUserData();
    console.log("Async/Await result:", user);
  } catch (error) {
    console.error("Error:", error);
  }
}

getUser();
