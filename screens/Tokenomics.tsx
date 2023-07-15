import React from "react";
import CardCarousel from "../components/CardCarousel";
import { styles } from "../resources/stylesheets";
import { View } from "react-native";

export default function Tokenomics() {
  const cards = [
    {
      title: "Introduction",
      description:
        "Shibaku ($BAKU) is a revolutionary token built off Ethereum that embodies the spirit of a" +
          " bad ass Shiba Inu with an attitude. With a 1% tax on each transaction, $BAKU aims to support various marketing initiatives " +
          "within the community. This white paper outlines " +
          "the key features, goals, and vision of Shibaku, as well as the roadmap for its future development.",
    },
    {
      title: "Supply",
      description:
        "🚀Total Supply: 69,420,000 $BAKU\n" +
          "\n" +
          "🚀1% Tax \n" +
          "Community Initiatives: 1% of each transaction is allocated to community initiatives, including marketing, " +
          "partnerships, and charitable buybacks. This ensures the growth and expansion of Shibaku's presence within the crypto space and beyond.",
    },
    {
      title: "Tax",
      description:
        "🌌 Transparency and Security: Shibaku operates on the Ethereum Chain, benefiting from its robust security " +
          "and decentralized infrastructure. Smart contract audits will be conducted to ensure the integrity of the token " +
          "and provide confidence to our community.",
    },
    {
      title: "Liquidity Lock",
      description:
        "🔐 Secured LP Tokens: Safeguarding your investment is paramount to us. We've taken strategic measures to lock" +
          " our liquidity pool (LP) tokens in Unicrypt, ensuring stability and providing you with peace of mind. Rest assured " +
          "that your journey with $BAKU will be protected by advanced security protocols.",
    },
    {
      title: "Join",
      description:
        "🌟 Join the $BAKU Movement: The Shib has barked, and it's time to answer the call. Prepare to be captivated" +
          " by the magic of Shibaku as he blazes a trail of excitement across the Ethereum Network. " +
          "Learn more about our mission, tokenomics, and the boundless opportunities that await you in our Telegram channel.",
    },
  ];

  return (
    <View style={styles.container}>
      <CardCarousel cards={cards} />
    </View>
  );
}
