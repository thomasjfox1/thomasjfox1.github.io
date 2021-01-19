import Link from 'next/link';

import ActiveLink from './ActiveLink';

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
  // {
  //   label: 'Photography',
  //   link: '/photography',
  // },
];

const Navigation = () => {
  return (
    <nav>
      <Link href='/'>
        <h2 className={styles['title']}>Thomas J. Fox</h2>
      </Link>
      <ul className={styles['nav-list']}>
        {navItems.map(item => {
          return (
            <li 
              className={styles['nav-item']}
              key={item.link}
            >
              <ActiveLink 
                activeClassName={styles['active-link']}
                href={item.link}
              >
                <a>{item.label}</a>
              </ActiveLink>
            </li>
          );
        })}
      </ul>
    </nav>
  )
};

export default Navigation;