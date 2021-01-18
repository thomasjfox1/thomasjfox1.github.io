import BookList from '../components/BookList';

import { getSortedPostsData } from '../utils/mdPosts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Reads ({ allPostsData }) {
  return (
    <BookList books={allPostsData}/>
  );
};
