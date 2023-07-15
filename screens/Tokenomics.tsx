import React from "react";
import CardCarousel from "../components/CardCarousel";
import { styles } from "../resources/stylesheets";
import { View } from "react-native";

export default function Tokenomics() {
  const cards = [
    {
      title: "Introduction",
      description:
        "Welcome to the extraordinary realm of CelestialGold, a groundbreaking token designed to ignite your passion for" +
          " limitless possibilities. Brace yourself as we embark on an interstellar journey where astronomical gains await the intrepid explorers of the crypto universe.",
    },
    {
      title: "Supply",
      description:
        "🚀 Elevate Your Wealth: With a total supply of 69,420,000 CelestialGold tokens, our mission is to unlock the" +
          " true power of cosmic abundance. Imagine the exponential growth potential that lies within this carefully crafted treasure trove of digital assets.",
    },
    {
      title: "Tax",
      description:
        "🌌 Cosmic Marketing: We believe in the power of marketing to propel projects to new heights. That's why we implement" +
          " a visionary approach, leveraging a 1% marketing tax to fuel our relentless promotional campaigns. " +
          "Expect to witness an unparalleled buzz as CelestialGold lights up the crypto-sphere with its captivating allure.",
    },
    {
      title: "Liquidity Lock",
      description:
        "🔐 Secured LP Tokens: Safeguarding your investment is paramount to us. We've taken strategic measures to lock" +
          " our liquidity pool (LP) tokens in unicrypt, ensuring stability and providing you with peace of mind. Rest assured " +
          "that your journey through the cosmos will be protected by advanced security protocols.",
    },
    {
      title: "Ascend",
      description:
        "✨ Ascend to New Heights: CelestialGold offers an opportunity like no other. It's a chance to witness your wealth" +
          " soar to uncharted celestial realms, where financial freedom awaits those daring enough to seize it. " +
          "Embark on this celestial odyssey and experience the thrill of unprecedented growth.",
    },
    {
      title: "Discover",
      description:
        "💫 Discover the Unknown: Curiosity beckons, and our cosmic voyage is just the beginning. Explore the vast ecosystem" +
          " surrounding CelestialGold, where a thriving community of like-minded enthusiasts congregates. " +
          "Engage in discussions, share insights, and unveil the secrets of this celestial realm together.",
    },
    {
      title: "Join",
      description:
        "🌟 Join the CelestialGold Movement: The cosmos has spoken, and it's time to answer the call. Prepare to be captivated" +
          " by the magic of CelestialGold as it blazes a trail of excitement across the Binance Smart Chain. " +
          "Learn more about our mission, tokenomics, and the boundless opportunities that await you in our Telegram channel.",
    },
  ];

  return (
    <View style={styles.container}>
      <CardCarousel cards={cards} />
    </View>
  );
}
