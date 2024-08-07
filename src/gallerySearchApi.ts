import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com";

interface Data {
  results: ImageData[];
  total_pages: number;
  total: number;
}
export interface ImageData {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
  user: {
    first_name: string;
    bio: string;
  };
}

export const searchImagesAPI = async (
  images: string,
  currentPage: number
): Promise<Data> => {
  const res = await axios.get("/search/photos", {
    params: {
      query: images,
      page: currentPage,
      per_page: 20,
    },
    headers: {
      Authorization: "Client-ID wpSGSIYGpBg3AAJP_g-cBnJbxv37a4QgmQ7vTWIbvoQ",
    },
  });

  return res.data;
};
