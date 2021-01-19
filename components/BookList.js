import Image from 'next/image';
import Link from 'next/link';

import styles from './BookList.module.scss';

const BookList = ({ books }) => {
  return (
    <ul className={styles['book-list-container']}>
      {books.map(({ id, author, date, title, rating, publish }) => (
        <li
          className={styles['list-item']}
          key={id}
        >
          <span className={styles['col-item']}>
            {publish ? 
              <Link href={`/reading/${id}`}>
                {title}
              </Link> :
              title
            }
          </span>
          <span className={styles['col-item']}>
            {author}
          </span>
          <span className={[styles['col-item'], styles['col-hide-mobile']].join(' ')}>
            {date}
          </span>
          <span className={styles['col-item']}>
            {[...Array(rating)].map((_, i) => <Image key={i} height={12} width={12} src='/star.svg'/>)}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default BookList;