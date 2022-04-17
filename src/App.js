
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Welcome to dLand"
        description="Create, explore and trade in the virtual world owned by its users."
        showBtn
        mockupImg={assets.land}
        banner="banner"
      />
      <SectionWrapper 
        title="Trade"
        description="Buy and sell LAND, Estates in the dLand backed by the ethereum blockchain."
        mockupImg={assets.crypto}
        reverse
      />

      <SectionWrapper 
        title="DAO"
        description="Determine the future of the virtual world. Via the DAO, you decide and vote on how the world works."
        mockupImg={assets.dao}
        banner="banner04"
      />

      <SectionWrapper 
        title="DEX"
        description=" Trade directly from your crypto wallets and earn $DLND token."
        mockupImg={assets.exchange}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="dLand is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.bounce}
        reverse
      />
      <SectionWrapper 
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.land1}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <span className="bold">Vineet Kumar</span>
        </p>
      </div>
    </>
  );
}

export default App;