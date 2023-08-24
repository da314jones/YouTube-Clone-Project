const URL = import.meta.env.VITE_BASE_API_URL
const URL2 = import.meta.env.VITE_BASE_API_URL
fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL2}`);

// Create
export function createVideos(videos) {
  // we need to specify what type of request we're making in fetch
  const options = {
    method: "POST",
    // body is a JSON version of our show object we got from state
    body: JSON.stringify(videos),
    // tell the server that this is JSON
    headers: {"Content-Type": "application/json"}
  }
  return fetch(`${URL}/videos`, options).then(res => res.json())
}

// Delete
export function destroyShow(id) {
  // options object

  const options = { method: "DELETE" }
  return fetch(`${URL}/shows/${id}`, options)
}

// Index/Get all
export function getAllVideos() {
  // this function hjits our Server at the /shows endpoint
  // and returns a PROMISE with some JSON inside
  return fetch(`${URL}/videos`).then(res => res.json())
}

// Show/Get one
export function getOneShow(id) {
  // gets data from the shows/:id route
  // beause we are getting one resource we need to tell the serve
  // WHICH ONE WE WANT
  return fetch(`${URL}/shows/${id}`).then(res => res.json())
}

// Update
export function updateShow(id, show) {
  const options = {
    method: "PUT",
    // body is a JSON version of our show object we got from state
    body: JSON.stringify(show),
    // tell the server that this is JSON
    headers: {"Content-Type": "application/json"}
  }
  return fetch(`${URL}/shows/${id}`, options).then(res => res.json())
}

// Movies

export function getAllMovies() {
  return;
}
