import React from 'react';

import assets from '../assets';
import styles from '../styles/Global';

const FeatureCard = ({ iconUrl, iconText }) =>  (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>dLand has been developed using a Blockchain Technology</p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText="ReactJS" />
          <FeatureCard iconUrl={assets.javascript} iconText="JavaScript" />
          <FeatureCard iconUrl={assets.javascript} iconText="threeJs" />
          <FeatureCard iconUrl={assets.javascript} iconText="Hardhat" />
          <FeatureCard iconUrl={assets.javascript} iconText="Solidity" />
          <FeatureCard iconUrl={assets.javascript} iconText="Chai" />
          <FeatureCard iconUrl={assets.javascript} iconText="Alchemy" />
          <FeatureCard iconUrl={assets.javascript} iconText="IPFS" />
          <FeatureCard iconUrl={assets.javascript} iconText="Tailwind" />
          <FeatureCard iconUrl={assets.javascript} iconText="Ether.js" />
          <FeatureCard iconUrl={assets.javascript} iconText="Metamask" />
          <FeatureCard iconUrl={assets.javascript} iconText="Wallet Connect" />
          <FeatureCard iconUrl={assets.javascript} iconText="fleek" />
        </div>
      </div>
    </div>
  )
}

export default Features