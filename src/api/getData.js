const user = "MrPerales";
const API = `https://api.github.com/users/${user}/repos`;
export async function getData() {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
