import style from "./style.module.sass";

const BlogDetails = () => (
  <div className="container pb-80">
    <div className="row mb-50">
      <div className="col col_9">
        <div className={`h6 mb-20 c-orange`}>Product Reviews</div>
        <h2>How to add featured images in wordpress </h2>
      </div>
    </div>

    <img
      className={`${style.featureImage} mb-50`}
      src="/blog-thumbnail.png"
      alt="thumbnail"
      width="1280"
      height="387"
    />

    <div className="row">
      <div className="col col_9">
        <p>
          Animations are a powerful tool to enhance user experience, and when it
          comes to creating animations in React, Framer Motion is a popular
          library of choice. In this blog post, we’ll explore cool animations
          you can create in React using Framer Motion.
        </p>
        <p>
          Framer Motion is a versatile animation library for React, known for
          its simplicity and powerful animations.
        </p>
        <p>
          Now, let’s dive into four cool animations you can create in React
          using Framer Motion!
        </p>
        <p>
          This is a really simple yet fun effect to add to your buttons. It adds
          a fun touch to your buttons by scaling them when tapped. To add this,
          we can make use of the whileTap property. We can scale the button up
          or down within this property:
        </p>
        <p>
          Text typing animations, created with Framer Motion, add a playful
          touch to engage users, useful for loading messages and chat
          simulations. To achieve this effect, we will take a sentence we want
          to display and convert it into an array of words. Next, we will map
          this array out and add an animation and transition on the opacity, as
          well as a delay that creates the typing effect.
        </p>
      </div>
    </div>
  </div>
);

export default BlogDetails;
