import React from "react";
import Deximage from "../images/dexgraphic.png";
import Nftimage from "../images/nftmarketgraphic.png";
import Layer1image from "../images/layer1.png";
const Servicedetails = ({handleClose}) => {
  return (
    <div>
      {" "}
      <div className="p-10 md:px-24 md:pt-24 sm:p-10 bg-gradient-to-t from-[#000120] to-[#220056]">
        <section className="about-us container mx-auto">
          <h2
            className='" bigHeading pt-4 font-bold xl:text-5xl lg:text-4xl md:text-4xl text-3xl lg:leading-[2.5rem] 2xl:leading-[3.7rem] sm:px-10"'
            style={{ display: "flex", justifyContent: "center" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
              {" "}
              Our Products{" "}
            </span>
          </h2>
          <p
            className="text-white sm:px-10 pt-8 pb-12"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Learn more about our Vision behind HAAWKS and our Mission towards
            greatness.
          </p>

          <br />
          <div
            style={{ maxWidth: "1200px", margin: "auto" }}
            className="flex flex-wrap"
          >
            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <h2 className="smallHeading text-4xl text-[#4CC9F0] pb-10 font-bold">
                DEX
              </h2>
              <p className="smallHeading text-white text-xl font-bold pb-10">
                Multi Chain DEX{" "}
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]" />
                  Our Decentralised Exchange is going to revolutionise token
                  swaps with its secure and transparent framework. We will also
                  be offering features such as real-time pricing data, order
                  book updates, margin trading for more advanced traders and
                  access to an array of crypto assets not available through
                  traditional exchanges. Our Dex will provide unparalleled
                  security compared to traditional exchange methods while
                  bringing maximum flexibility - making them the future of token
                  swapping in this ever-evolving crypto market.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]" />
                  With the Dex market overcrowded, we're taking a united
                  approach and innovating our products for seamless integration
                  with improved user-friendliness. We are launching our product
                  with must-have features but have big ambitions of becoming one
                  of the most comprehensive offerings on the market.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]" />
                  Haawks Dex is pushing the boundaries of decentralised
                  exchanges with a comprehensive suite of features. Users will
                  gain access to liquidity pooling, swapping options and
                  variable rewards for providing assets in our permission-less
                  exchange — not just Haawks Tokens but partner tokens as well!
                  With an initial target price set by participants themselves,
                  you can benefit from the dual rewards on offer at exclusive
                  launch pools hosted by some selected partners. Join us today
                  and explore what's possible with Haawks Dex!
                </li>
              </ul>
              <br />
            </div>

            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <img
                className="py-8 md:pt-20"
                src={Deximage}
                style={{ width: "100%" }}
                alt="Vision "
              />
            </div>
          </div>
          <br />
          <br />
          <div
            style={{ maxWidth: "1200px", margin: "auto" }}
            className="flex flex-wrap-reverse"
          >
            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <p className="smallHeading text-white text-xl font-bold pb-10">
                Swapping{" "}
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Our
                  Haawks Dex will initially launch with Beginner mode, which
                  provides basic 1:1 swapping of crypto assets by utilising our
                  Automated Market Maker (AMM) through liquidity pools. Later,
                  we will introduce advanced features such as limit orders,
                  trading charts, and stable-coin swaps as part of the Pro mode
                  in Haawks Dex.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>0.25
                  - 0.3% FEES on all swaps except stablecoin swap.
                </li>
              </ul>
              <br />
              <p className="smallHeading text-white text-xl font-bold pb-10">
                Liquidity Pool
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]" />
                  Haawks is a permissionless decentralised exchange (DEX) that
                  offers users access to three different types of liquidity
                  pools:
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]" />
                  Verified Pools - These pools will contain the most popular and
                  in- demand assets, as determined by the Haawks team. Users
                  will be able to stake their liquidity provider (LP) tokens to
                  earn farming incentives in Haawks tokens, which can offset
                  impermanent loss as well as provide increased rewards.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]" />
                  Partner Pools - These pools will also be verified, but may
                  contain assets from new or recently launched projects. Once
                  verified by the Haawks team, these projects will have the
                  opportunity to partner with Haawks and launch exclusive pools
                  with dual rewards in both Haawks and Partner tokens.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]" />
                  Unverified Pools - These pools will be permissionless,
                  allowing any community member to create them with any assets
                  and set the target price by providing initial liquidity.
                  However, these pools will be considered very risky and will
                  not qualify for farming incentives. A disclaimer will be
                  provided to users.
                </li>
              </ul>
              <br />
            </div>

            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <p className="smallHeading text-white text-xl font-bold pb-10">
                Liquidity Farming
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Both
                  Verified and Partner pools are eligible for Liquidity Farming.
                  Upon providing liquidity to a specific pool, users contribute
                  an equal ratio of assets. By staking their LPs, they can earn
                  Farming rewards. However, the price fluctuations of one or
                  both assets may lead to impermanent loss. This occurs when one
                  asset's price in a pool moves higher or lower compared to the
                  other asset. The pool automatically rebalances both assets to
                  a 1:1 ratio periodically, resulting in fewer tokens in one
                  asset and more tokens in another asset when withdrawing pool
                  assets. We are trying to mitigate the risk of impermanent loss
                  by offering Farming incentives to attract users to provide
                  liquidity for our pools. The more liquidity we have for a
                  pool, the lower the slippage will be during the transaction.
                </li>
              </ul>
              <br />
              <p className="smallHeading text-white text-xl font-bold pb-10">
                Staking
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>At
                  the outset, we are planning to introduce a single asset
                  staking service exclusively for the Haawks token.
                  Subsequently, we may consider expanding the range of tokens
                  and integrating additional features as per the exigencies of
                  the market.
                </li>
              </ul>
              <br />
              <p className="smallHeading text-white text-xl font-bold pb-10">
                {" "}
                Liquidity Staking
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Our
                  implementation of liquid staking will provide users with the
                  ability to enter and exit the staking of Haawks tokens with
                  ease. This feature will allow users to earn a 10% fee in
                  Ethereum from swapping fees, while also enabling us to target
                  a 10-15% APR for rewards in Haawks tokens.
                </li>
              </ul>
            </div>
          </div>
          <br />
          <br />
          <div
            style={{ maxWidth: "1200px", margin: "auto" }}
            className="flex flex-wrap-reverse"
          >
            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <p className="smallHeading text-white text-xl font-bold pb-10">
                Locked Staking
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>The
                  locked staking feature provides users with the capability to
                  stake their Haawkz tokens for a duration ranging from 6 months
                  to 4 years. The staking duration affects the variable rewards
                  received, which range from 20% to 100% APR in Haawks tokens.
                  Moreover, exclusive stakers will receive 40% of swapping fees
                  in ETH.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>
                  Furthermore, the Haawks team will conduct community voting in
                  different stages of the project to gather feedback from users
                  for future products and services. To participate in these
                  voting and create partner pools, users must have staked 1000
                  or more Haawks tokens for one or more years.
                </li>
              </ul>
              <br />
            </div>

            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <p className="smallHeading text-white text-xl font-bold pb-10">
                Stablecoin Swap (Phase-2)
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Our
                  platform will offer an exclusive stablecoin swap with low
                  slippage and fees compared to standard swaps. We will begin by
                  launching pools for DAI, USDT, and USDC, with the possibility
                  of adding other stablecoins in the future. .05% fees for
                  stable swap
                </li>
              </ul>
              <br />
              <p className="smallHeading text-white text-xl font-bold pb-10">
                Asset Lending and Borrowing (Phase-2)
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>At
                  the outset, we are planning to introduce a single asset
                  staking service exclusively for the Haawks token.
                  Subsequently, we may consider expanding the range of tokens
                  and integrating additional features as per the exigencies of
                  the market.
                </li>
              </ul>
              <br />
            </div>
          </div>
          <br />
          <br />
          <div
            style={{ maxWidth: "1200px", margin: "auto" }}
            className="flex flex-wrap-reverse"
          >
            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <p className="smallHeading text-white text-xl font-bold pb-10">
                Concentrated Liquidity (Phase-3)
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>As
                  part of our long-term plan, we aim to introduce concentrated
                  liquidity pools in the style of Uniswap V3. These pools will
                  provide our users with a platform that offers reduced slippage
                  and increased farming rewards.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>
                  Concentrated liquidity pools are characterised by fixed price
                  ranges and reward users only when the trading price of the
                  asset falls within the user-defined range.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>50%
                  of fees are to be burnt and the rest 50% distributed to staked
                  users.
                </li>
              </ul>
              <br />
            </div>

            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <p className="smallHeading text-white text-xl font-bold pb-10">
                Mutlichain Strategy
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>We
                  will launch all the products on Polygon after thorough
                  testing. Once all product functions are stable and perform as
                  required, we will begin launching on other EVM chains as
                  necessary based on demand.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>In
                  the long run Haawkz Team will be developing Layer 1 solution
                  and all our dapps will be running on top of our Layer-1
                  solution, yet interoperable with many other popular chains.
                </li>
              </ul>
              <br />
            </div>
          </div>
          <br />
          <br />
          <div
            style={{ maxWidth: "1200px", margin: "auto" }}
            className="flex flex-wrap-reverse"
          >
            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <img
                className="py-8 md:pt-20"
                src={Nftimage}
                style={{ width: "90%" }}
                alt="Mission "
              />
            </div>

            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <h2 className="smallHeading text-4xl text-[#4CC9F0] pb-10 font-bold">
                NFT Marketplace
              </h2>
              <p className="smallHeading text-white text-xl font-bold pb-10">
                Details
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Our
                  NFT Marketplace is a platform designed to allow users to
                  trade, buy, and sell NFTs without intermediaries or central
                  authorities. We believe that NFTs have the potential to
                  revolutionise the way we think about ownership and value, and
                  we are committed to providing a secure and transparent
                  environment for users to engage in NFT transactions.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Our
                  Marketplace provides a high level of security, as all trades
                  are conducted through public blockchains initially on Polygon
                  and later on other EVMs. This feature allows users to monitor
                  and verify all trades, ensuring that the NFT trading process
                  is entirely transparent. We believe that this level of
                  transparency is essential to building trust and confidence in
                  the NFT market, which is still in its early stages of
                  development.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>In
                  addition to the security and transparency provided by our
                  Marketplace, we are also committed to providing a
                  user-friendly platform that is accessible to everyone.
                </li>
              </ul>
              <br />
            </div>
          </div>
          <br />
          <br />
          <div
            style={{ maxWidth: "1200px", margin: "auto" }}
            className="flex flex-wrap-reverse"
          >
            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>We
                  understand that many people are still new to the world of
                  NFTs, and we believe that it is our responsibility to make the
                  process as simple as possible. With this in mind, we have
                  designed our Marketplace to be easy to use, with intuitive
                  navigation and clear instructions for every step of the
                  trading process.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>To
                  ensure the quality of NFTs traded on our Marketplace, we will
                  initially launch our own set of NFTs. Once these have been
                  established on the platform, we will subsequently open the
                  Marketplace to other NFT collections, after verifying them
                  with the Haawks Team. This process will ensure that users can
                  trade NFTs with confidence, knowing that they are of high
                  quality and have been thoroughly vetted.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>In a
                  later phase, we plan to launch a permissioned NFT Launchpad
                  for selected sectors, such as sports and music. Any NFT
                  project can apply, but only those selected by the Haawks Team
                  can launch on our platform. This feature will provide users
                  with the opportunity to engage with high-quality NFTs, curated
                  by our team of experts.
                </li>
              </ul>
              <br />
            </div>

            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>We
                  believe that the future of NFTs is bright, and we are
                  committed to providing the infrastructure necessary to support
                  the growing demand for NFT trading. Our Marketplace will
                  provide users with a secure and transparent environment for
                  NFT transactions, enabling them to trade with confidence. We
                  will also provide NFT staking services for our native and
                  partner NFTs (NFTs launched at our Launchpad), allowing users
                  to earn rewards for staking their NFTs.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Based
                  on demand, we may develop an exclusive NFT lending/borrowing
                  platform in the future, providing users with even more
                  opportunities to engage with NFTs. We are committed to staying
                  at the forefront of the NFT market, and we look forward to
                  providing our users with the best possible experience.
                </li>
              </ul>
              <br />
            </div>
          </div>
          <br />
          <br />
          <div
            style={{ maxWidth: "1200px", margin: "auto" }}
            className="flex flex-wrap-reverse"
          >
            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <p className="smallHeading text-white text-xl font-bold pb-10">
                Derivatives
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Our
                  cryptocurrency derivative exchange provides an extensive range
                  of trading opportunities for seasoned traders. Our platform
                  facilitates the buying and selling of financial instruments,
                  including futures, options, and perpetual swaps, which are all
                  derivatives of an underlying asset.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>With
                  the use of these instruments, traders can potentially
                  capitalize on the volatility of the cryptocurrency market
                  while managing their risk exposure. Derivatives can be
                  utilised to lock in profits or minimize losses, and they
                  provide exposure to price movements without requiring
                  ownership of the underlying asset.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Our
                  derivatives exchange offers several technical advantages over
                  other forms of trading, such as increased flexibility and
                  lower transaction costs. Furthermore, derivatives enable
                  traders to create intricate strategies to manage their
                  risk-reward profile.
                </li>
              </ul>
              <br />
            </div>

            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <p className="smallHeading text-white text-xl font-bold pb-10">
                {" "}
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Our
                  derivatives exchange is an excellent technical solution for
                  traders to access the cryptocurrency market and gain exposure
                  to various digital assets while leveraging derivative
                  instruments to potentially maximise profits. By trading
                  derivatives, traders can potentially take advantage of price
                  movements in either direction and create complex technical
                  strategies to achieve their investment goals.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>We
                  are designing the exchange to offer a secure platform for
                  trading digital assets with an intuitive user interface and
                  sophisticated tools to assist traders in making informed
                  decisions. We are committed to providing an efficient and
                  reliable experience while maintaining the highest levels of
                  security.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>We
                  believe that our derivatives exchange will be a valuable
                  addition to the cryptocurrency market, offering unique access
                  and opportunities not available elsewhere. Our team includes
                  finance, engineering and security professionals who are
                  dedicated to building a market-leading product that meets the
                  needs of our customers. We look forward to working with you in
                  this exciting endeavour.
                </li>
              </ul>
              <br />
            </div>
          </div>
          <br />
          <br />
          <div
            style={{ maxWidth: "1200px", margin: "auto" }}
            className="flex flex-wrap-reverse"
          >
            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <p className="smallHeading text-white text-xl font-bold pb-10">
                Futures DEX
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>LONG
                  and SHORT trading with 10x leverage is a powerful way to
                  strategically increase your profits in bitcoin and other
                  crypto assets. With 10x leverage you can amplify the potential
                  of a trade by up to ten times the amount of money you put into
                  it, enabling profit potential that would usually be out of
                  reach.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>The
                  FUTURES DEX is a platform that allows traders to invest in
                  various markets, including commodities, currencies, and
                  indices. One of the key features of the platform is the
                  ability to go long or short with 10x leverage, which allows
                  traders to increase their exposure to the market and
                  potentially earn greater profits. Going long means buying an
                  asset in the hopes that its value will increase while going
                  short means selling an asset in the hopes that its value will
                  decrease. The ability to go both long and short provides
                  traders with more flexibility and allows them to profit
                  regardless of market conditions. With 10x leverage, traders
                  can invest a smaller amount of capital and still see
                  significant returns, but it is important to note that leverage
                  also magnifies losses, so traders must be careful when using
                  it.
                </li>
              </ul>
              <br />
            </div>

            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <p className="smallHeading text-white text-xl font-bold pb-10">
                Margin Trade
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>
                  Margin trading involves borrowing funds from a broker and
                  using those funds to trade. In this method, traders are given
                  the ability to open larger positions with smaller amounts of
                  capital.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>One
                  of the strategies that traders employ in margin trading is the
                  use of leverage. Leverage is a tool that enables traders to
                  amplify their returns by borrowing money from the broker. The
                  amount of leverage that a trader can access depends on their
                  account's margin requirements. If a trader has a margin
                  requirement of 10%, they can borrow up to 10 times their
                  trading account balance to open a larger position.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>There
                  are two types of margin available for traders: Cross Margin
                  and Isolated Margin. Cross Margin combines all the funds in a
                  trader's account, which means that the trader has a larger
                  pool of funds to draw from. This reduces the risk of
                  liquidation, which is when the trader's position is
                  automatically closed because they have insufficient funds to
                  maintain it. An isolated margin, on the other hand, allows
                  traders to isolate the risk of a single trade by allocating a
                  fixed margin amount to the trade.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>This
                  reduces the risk of liquidation, which is when the trader's
                  position is automatically closed because they have
                  insufficient funds to maintain it. An isolated margin, on the
                  other hand, allows traders to isolate the risk of a single
                  trade by allocating a fixed margin amount to the trade.
                </li>
              </ul>
              <br />
            </div>
          </div>
          <br />
          <br />
          <div
            style={{ maxWidth: "1200px", margin: "auto" }}
            className="flex flex-wrap"
          >
            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <h2 className="smallHeading text-4xl text-[#4CC9F0] pb-10 font-bold">
                Future Plans
              </h2>
              <p className="smallHeading text-white text-xl font-bold pb-10">
                HAAWKS Cricket (Metaverse Game like Stick Cricket)
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]" />
                  Metaverse Gaming has taken the world by storm, and Haawks
                  Cricket aims to capitalise on this trend by combining the best
                  of cricket, casual gaming, and web3 technology. Players who
                  hold our native cricket NFTs will be able to compete against
                  others in thrilling virtual matches. The metaverse provides
                  players with a casual experience where they can develop their
                  batting and bowling skills while connecting with friends,
                  family, and other cricket fans.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]" />
                  Haawks Cricket offers a unique metaverse experience that is
                  both casual and entertaining. Players will compete and
                  collaborate to become the best metaverse cricketer possible!
                  With its unique environment, Haawks Cricket is sure to be a
                  hit with cricket fans worldwide.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]" />
                  All users can participate by acquiring two NFTs: one for the
                  batsman and one for the bowler. Special tournaments will be
                  conducted regularly, and users who win matches will be
                  rewarded with Haawks Tokens, stablecoins, or both.
                </li>
              </ul>
              <br />
            </div>

            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <h2 className="smallHeading text-4xl text-[#4CC9F0] pb-10 font-bold">
                {"_"}
              </h2>

              <p className="smallHeading text-white text-xl font-bold pb-10">
                Asset Tokenisation of Real Estate
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]" />
                  With real estate asset tokenisation, crypto investors can now
                  easily own a fraction of any given property. Asset
                  tokenisation is the process of converting a physical or
                  digital asset into crypto tokens on the blockchain, and it
                  allows for more efficient management and trading among
                  multiple owners. Crypto tokens representing ownership in a
                  piece of real estate can be bought and sold with crypto and
                  are held securely on the blockchain.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]" />
                  Asset tokenisation also allows for fractional ownership,
                  meaning that investors can easily own a portion of the
                  physical property without outright purchasing it. This opens
                  up more opportunities for crypto investors to diversify their
                  portfolios, as well as for traditional real estate owners to
                  tap into crypto markets.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]" />
                  With crypto investors now able to directly own a part of any
                  property they desire, the crypto investment landscape looks
                  set to benefit immensely from this new form of digital
                  ownership. While crypto asset tokenisation is still in its
                  early stages, we can expect to see more real estate tokenised
                  in the future. This will open up a whole new set of
                  opportunities for crypto investors and could revolutionise the
                  way we own and trade real estate.
                </li>
              </ul>
              <br />
            </div>
          </div>
          <br />
          <br />
          <div
            style={{ maxWidth: "1200px", margin: "auto" }}
            className="flex flex-wrap-reverse"
          >
            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <img
                className="py-8 md:pt-20"
                src={Layer1image}
                style={{ width: "100%" }}
                alt="Mission"
              />
            </div>

            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <h2 className="smallHeading text-4xl text-[#4CC9F0] pb-10 font-bold">
                Layer 1 Blockchain
              </h2>
              <p className="smallHeading text-white text-xl font-bold pb-10">
                Overview
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>The
                  next-generation blockchain protocol Haawks connects a network
                  of blockchains with specific purposes, enabling them to work
                  together efficiently at scale.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>
                  Haawks will provide a decentralized solution to address
                  real-world problems and enable growth in each sector.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>The
                  blockchain will offer upgradeability, transparent governance,
                  cross- chain composability, and other features that make it
                  superior to existing networks.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>
                  Multimodal sharding will allow for each chain to be
                  specialized for a particular use case rather than
                  one-size-fits-all.
                </li>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>
                  Transactions will be processed simultaneously due to the
                  ability to link several chains together in the network.
                </li>
              </ul>
              <br />
            </div>
          </div>
          <br />
          <br />
          <div
            style={{ maxWidth: "1200px", margin: "auto" }}
            className="flex flex-wrap-reverse"
          >
            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <p className="smallHeading text-white text-xl font-bold pb-10">
                Community Driven Blockchain
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>Every
                  Haawkz holder may submit a protocol modification proposal or
                  cast a vote on one that has already been made. Also, they can
                  support the election of council members who speak for
                  uninvolved parties under the Haawks style of government. With
                  no official governance process and no stakeholder power,
                  Haawks blockchain will be entirely driven by the community. It
                  will also remove these hurdles by allowing anybody who owns
                  Haawks coin to participate in governance.
                </li>
              </ul>
              <br />
            </div>

            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <p className="smallHeading text-white text-xl font-bold pb-10">
                Cross-Chain Compatibility
              </p>
              <ul>
                <li className="text-gray-100 pb-5">
                  <i className="fa-solid fa-check px-1 text-[#4CC9F0]"></i>
                  Haawks will be designed in such a way that they will be
                  cross-chain compatible, allowing shards to communicate between
                  different shards of chain, enhancing the future of blockchain
                  bridging. Haawks will form multimodal blockchain shards, which
                  will be protected by Haawks NUCLEUS Chain.
                </li>
              </ul>
              <br />
            </div>
          </div>
          <div className="flex justify-center">
            {" "}
            <p
              style={{ cursor: "pointer" }}
              className="my-4 text-center md:my-16 mx-8 px-14 md:px-24 py-3 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
              onClick={handleClose}
            >
              Go Back
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Servicedetails;
