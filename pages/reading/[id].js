import { getAllPostIds, getPostData } from '../../utils/mdPosts'

export default function Post({ postData }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      {postData.rating}
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}