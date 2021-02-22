import Head from "next/head";
import BlogItem from "../../components/Blog/BlogItem";
import MainImageBlog from "../../components/Blog/MainImageBlog";
import blogItems, { IBlog } from "../../data/blog";
import styles from "../../styles/Blog.module.scss";
const Blogs = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/personal/bee.svg" />
        <title>Blog | Nam Nguyen</title>
      </Head>
      <div className={styles["blog"]}>
        <MainImageBlog />
        <section className="container">
          {blogItems.map((blogItem: IBlog, index: number) => (
            <BlogItem key={index} blog={blogItem} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Blogs;
