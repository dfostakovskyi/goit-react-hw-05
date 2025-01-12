// src\components\AccessToken\AccessToken.jsx

import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTE4YTA3ZDAwZDZmOTA1YTdjMTFjNjdiZTVlMDg5NyIsIm5iZiI6MTczNjYzODA1Mi4yNzQsInN1YiI6IjY3ODJmZTY0ZWU4NGZhNGRlZjdiNTYxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vBEc8pH1T5ECosm0hqjfXzATAHoPKJXMfKMYa9F_Y1M",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export default AccessToken;
