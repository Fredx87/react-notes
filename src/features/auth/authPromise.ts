export interface User {
  username: string;
  firstName: string;
  lastName: string;
}

export function authPromise(username: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "john.doe" && password === "1234") {
        resolve({
          username: "john.doe",
          firstName: "John",
          lastName: "Doe",
        });
      } else {
        reject("Invalid username or password");
      }
    }, 1000);
  });
}
