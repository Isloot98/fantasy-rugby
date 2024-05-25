import Link from "next/link";
import styles from "./HomeNav.module.css"; // Assuming you saved your CSS in HomeNav.module.css

const HomeNav = () => {
  return (
    <div className={`${styles.container}`}>
      <ul className={`${styles.ul} `}>
        <li className={`${styles.li} `}>
          <Link href="/teams">My Team</Link>
        </li>
        <li className={`${styles.li} `}>
          <Link href="/upcoming">Upcoming Matches</Link>
        </li>
        <li className={`${styles.li} `}>
          <Link href="/stats">View Player Stats</Link>
        </li>
        <li className={`${styles.li}`}>
          <Link href="/head2head">Head to Head</Link>
        </li>
        <li className={`${styles.li} `}>
          <Link href="/leagues">View Leagues</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeNav;
