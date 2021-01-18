import styles from './Layout.module.scss';

const Layout = ({ Navigation, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles['nav-container']}>
        <Navigation />
      </div>
      <div className={styles['content-container']}>
        {children}
      </div>
    </div>
  );
};

export default Layout;