import Link from 'next/link';

import styles from './Navigation.module.scss';

const navItems = [
  {
    label: 'About',
    link: '/',
  },
  {
    label: 'Reading',
    link: '/reading',
  },
  {
    label: 'Photography',
    link: '/photography',
  },
];

const Navigation = () => {
  return (
    <nav>
      <Link href='/'>
        <h2>Thomas J. Fox</h2>
      </Link>
      <ul className={styles['nav-list']}>
        {navItems.map(item => {
          return (
            <li 
              className={styles['nav-item']}
              id={item.link}
            >
              <Link href={item.link}>
                <a>{item.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
};

export default Navigation;