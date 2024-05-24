import config from "@/config";

const fetchBlog = async (params) => {
  const reqOption = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  const request = await fetch(
    `${config.api}/api/blogs?populate=*${params}`,
    reqOption
  );
  const response = await request.json();

  return response;
};

export default fetchBlog;
