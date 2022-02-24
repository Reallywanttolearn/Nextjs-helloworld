import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Themas, I'm a teacher at Yadika Soreang Vocational High
          School,🚀 from Indonesia , currently teaching Frontend Web Development
          and Freelancer too (You can reach me via email) 👨🏽‍💻, Beside's
          programming, most of my free time i spend with my little family 👪, i
          enjoy gaming 🕹️ and watching movies 📽️
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
