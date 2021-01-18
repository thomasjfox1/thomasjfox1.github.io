import Link from 'next/link';

import styles from './Booklist.module.scss';

const BookList = ({ books }) => {
  return (
    <ul className={styles['book-list-container']}>
      {books.map(({ id, author, date, title, rating }) => (
        <li
          className={styles['list-item']}
          key={id}
        >
          <span>
            <Link href={`/reading/${id}`}>
              {title}
            </Link>
          </span>
          <span>
            {author}
          </span>
          <span>
            {date}
          </span>
          <span>
            {rating}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default BookList;