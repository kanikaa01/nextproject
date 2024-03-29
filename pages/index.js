import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props){
    return(
        <>
           <Hero/>
           <FeaturedPosts posts={props.posts} />
        </>
    )
}

export async function getStaticProps() {
   const featuredPosts = await getFeaturedPosts();
   return {
     props: {
       posts: featuredPosts,
     },
   };
 }
  
export default HomePage;

