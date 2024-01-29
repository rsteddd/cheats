import { Outlet, Link } from "react-router-dom";
import styles from './Layout.module.css'

const Layout = () => {
    return (
        <>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/counter">Counter</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/modal">Modal</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/quiz">Quiz</Link>
                    </li>
                </ul>
                <Outlet/>
        </>
    )
};

export default Layout;