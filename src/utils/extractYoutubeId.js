export const extractYouTubeID = (url) => {
  const match = url.match(
    /(?:youtube\.com\/(?:.*v=|shorts\/)|youtu\.be\/)([^&?/#\s]{11})/
  );

  return match ? match[1] : null;
};
