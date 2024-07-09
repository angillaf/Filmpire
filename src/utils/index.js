import axios from "axios";

const moviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_KEY,
  },
});

export const fetchToken = async () => {
  try {
    const { data } = await moviesApi.get("/authentication/token/new");
    const token = data.request_token;

    if (data.success) {
      localStorage.setItem("request_token", token);

      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    console.log("Sorry, your token could not be created.");
  }
};

export const getSectionId = async () => {
  const token = localStorage.getItem("request_token");

  if (token) {
    try {
      const response = await moviesApi.post("authentication/session/new");
    } catch (error) {}
  }
};