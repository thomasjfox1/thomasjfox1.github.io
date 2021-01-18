import Link from 'next/link';

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
    <>
      <ul>
        {allPostsData.map(({ id, date, title, rating }) => (
          <li key={id}>
            {title}
            <br />
            <Link href={`/reading/${id}`}>{id}</Link>
            <br />
            {date}
            <br />
            {rating}
          </li>
        ))}
      </ul>
    </>
  );
};
