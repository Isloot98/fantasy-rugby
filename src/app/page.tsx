// Home component

import HomeNav from "./components/homepageNav";
import styles from "./home.module.css"; // Import module.css

export default async function Home() {
  return (
    <div
      className={`grid grid-cols-3 mt-4 w-full bg-my-image ${styles.container}`}
    >
      <div className="ml-32">
        <h1>Shelford RFC Fantasy Rugby</h1>
        <img
          src="https://images.pitchero.com/club_logos/24186/cbKZQRG6RFKdSjAv3jJu_Shelford_5.png"
          className="w-64"
        />
      </div>
      <div className="w-full">
        <HomeNav />
      </div>
    </div>
  );
}
