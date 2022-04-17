
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Welcome to dLand"
       // description="Create, explore and trade in the virtual world owned by its users."
        description="dLand is a 3D virtual world browser-based platform. Users may buy virtual plots of land in the platform as NFTs via the $DLND cryptocurrency, which uses the Ethereum blockchain."
        showBtn
        mockupImg={assets.land}
        banner="banner"
      />
      <SectionWrapper 
        title="Trade"
        //description="Buy and sell LAND, Estates in the dLand backed by the ethereum blockchain."
        description="To trade in dLand the first step is to open an account with dDex, deposit funds, select DLND token from the platform list, and lastly Buy or Sell $DLND."
        mockupImg={assets.crypto}
        reverse
      />

      <SectionWrapper 
        title="dDAO"
        //description="Determine the future of the virtual world. Via the DAO, you decide and vote on how the world works."
        description="The dLand DAO is a decision-making tool for $DLND and NFT LAND holders in dLand's virtual world. Through votes in the DAO, the community can issue grants and control the LAND smart contracts to mint more land or not."
        mockupImg={assets.dao}
        banner="banner04"
      />

      <SectionWrapper 
        title="dDEX"
        //description=" Trade directly from your crypto wallets and earn $DLND token."
        description= "$DLND is dLand’s cryptocurrency and has a fixed supply. As it’s an ERC-20 token (fungible token), it can be bought and traded on dDex like Uniswap or Sushiswap and can earn LP tokens $LPDLND.  In the metaverse, it can be used to pay for LAND, collectibles, or gaming, and more."
        mockupImg={assets.exchange}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="dLand is built using ethereum which runs on all users' devices. It's deployed on decentralised server using freeze."
        mockupImg={assets.bounce}
        reverse
      />
      <SectionWrapper 
        title="Creative way to showcase the store"
        description="The Marketplace is the go-to place to trade and manage all your dLand on-chain assets. Sell parcels and Estates of LAND. Set your own price in $DLND and an expiration date for the offer. Buy parcels and Estates that are for sale. Transfer your dLand assets to another user."
        mockupImg={assets.market}
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