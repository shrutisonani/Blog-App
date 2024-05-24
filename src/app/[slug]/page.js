import style from "./style.module.sass";
import config from "@/config";
import fetchBlog from "@/components/helpers/fetch-blog";

const BlogDetails = async (props) => {
  const blogs = await fetchBlog(`&filters[slug][$eq]=${props.params.slug}`);
  if (blogs.data.length == 0) return null;

  const blog = blogs.data[0];
  let content;
  {
    blog.attributes.Content.map((blog) =>
      blog.children.map((data) => {
        content = data.text;
      })
    );
  }

  return (
    <div className="container pb-80">
      <div className="row mb-50">
        <div className="col col_9">
          <div className={`h6 mb-20 c-orange`}>{blog.attributes.Category}</div>
          <h2>{blog.attributes.Title}</h2>
        </div>
      </div>

      <img
        className={`${style.featureImage} mb-50`}
        src={`${config.api}${blog.attributes.FeaturedImage.data.attributes.url}`}
        alt="thumbnail"
        width="1280"
        height="387"
      />

      <div className="row">
        <div
          className="col col_9"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

export default BlogDetails;
