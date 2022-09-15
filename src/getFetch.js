export const getFetch = async (url) => {
  try {
    const response = await fetch(url);
    if (response) {
      return response.json();
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};
