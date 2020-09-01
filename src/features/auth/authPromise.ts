export function authPromise(
  username: string,
  password: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "john.doe" && password === "1234") {
        resolve("john.doe");
      } else {
        reject("Invalid username or password");
      }
    }, 1000);
  });
}
