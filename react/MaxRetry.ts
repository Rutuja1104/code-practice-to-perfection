// You are given an async function fetchUser(id) that may randomly 
// throw an error simulating a service being temporarily unavailable (HTTP 503). 


// Your task:
// Write a function fetchWithRetry(id, maxRetries) that retries up to 
// maxRetries times with exponential backoff (500ms, 1s, 2s …). 
// If all retries are exhausted, return null.



// Simulated async fetch — randomly throws to mimic service unavailability
async function fetchUser(id: number) {
  if (Math.random() < 0.3) throw new Error("Service unavailable");
  return { id, profile: `user_${id}` };
}

// TODO: implement fetchWithRetry(id, maxRetries = 4)

const delay = async (time: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time)
  })


}

async function fetchWithRetry(id: number, maxRetries: number = 4) {
  let attempt = 0;
  while (attempt < maxRetries) {
    try {
      const response = await fetchUser(id);
      return response;
    } catch (error) {
      attempt++;
      if (attempt >= maxRetries) {
        return null;
      }
      const backoff = 500 + Math.pow(2, attempt);
      await delay(backoff);


    }
  }

  return null;


}

// Test
fetchWithRetry(42, 4).then(console.log);

// Quite Loud