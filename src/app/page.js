import Card from "@/components/card/card";
import config from "@/config";

const fetchBlog = async () => {
  const reqOption = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  const request = await fetch(`${config.api}/api/blogs?populate=*`, reqOption);
  const response = await request.json();

  return response;
};

const Blog = async () => {
  const blogs = await fetchBlog();

  console.log("blog", blogs.data);
  return (
    <div className="container pb-80">
      <Card />
    </div>
  );
};

export default Blog;
