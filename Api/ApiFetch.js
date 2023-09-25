import { axiosInstance } from './AxiosSetup';

export const getOneVideo = async (videoId) => {
  const response = await axiosInstance.get(`/videos?id=${videoId}&part=snippet`);
  return response.data;
};

export const getVideosBySearchQuery = async (searchQuery) => {
  const response = await axiosInstance.get(`/search?q=${searchQuery}&part=snippet`);
  return response.data;
};

export const getCommentsByVideoId = async (videoId) => {
  const response = await axiosInstance.get(`/commentThreads?videoId=${videoId}&part=snippet`);
  return response.data;
};
