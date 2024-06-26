import Card from "@/components/card/card";
import config from "@/config";
import fetchBlog from "@/components/helpers/fetch-blog";

const Blog = async () => {
  const blogs = await fetchBlog("&filters[isFeatured][$eq]=true");
  if (blogs.data.length == 0) return null;
  const firstBlog = blogs.data[0];
  blogs.data.shift();
  return (
    <div className="container pb-80">
      <Card
        key={firstBlog.attributes.id}
        category={firstBlog.attributes.Category}
        thumbnail={`${config.api}${firstBlog.attributes.FeaturedImage.data.attributes.url}`}
        title={firstBlog.attributes.Title}
        summary={firstBlog.attributes.Summary}
        slug={`/${firstBlog.attributes.slug}`}
        className="mb-30"
      />

      <div className="row">
        {blogs.data.map((blog) => (
          <div className="col col_4 m-mw-100" key={blog.attributes.id}>
            <Card
              category={blog.attributes.Category}
              thumbnail={`${config.api}${blog.attributes.FeaturedImage.data.attributes.url}`}
              title={blog.attributes.Title}
              summary={blog.attributes.Summary}
              slug={`/${blog.attributes.slug}`}
              className="mb-30"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
