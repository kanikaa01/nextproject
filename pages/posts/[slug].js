import Head from 'next/head';
import { Fragment } from 'react';

import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles , getAllPosts} from '../../lib/posts-util';

function PostDetailPage(props) {
  // console.log(props);
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}


/** Server Side Code **/
export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = await getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const postFilenames = await getAllPosts();
  const slugs = postFilenames.map((fileName) => fileName.slug);

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;