import axios from "axios";

export const getStudentRestaurants = async (): Promise<any> => {
  const response = await axios.get(
    "https://data.zagreb.hr/dataset/8b4ab584-5b5a-4d70-9cf3-24897645ad6b/resource/e1caf1d1-ecdf-4d5c-8020-6798c45a188d/download/data.geojson",
  );

  return response.data;
};

export const fetchGeoJsonData = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};
