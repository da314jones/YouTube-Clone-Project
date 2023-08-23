const URL = import.meta.env.VITE_BASE_API_URL
fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL}`);