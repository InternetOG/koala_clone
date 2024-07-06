import Platforms from "./Platforms"
import CardList from "./cards/CardList"
import Button from "./Button"
import ExploreWallet from "../ExploreWallet"

function MainIntro() {
  return (
    <main className="max800:mt-10 min800:mt-16 min800:max-w-4xl min800:my-0 min800:mx-auto">
      <section className="min800:grid min800:grid-cols-test max800:text-center">
        <div className="">
            <div className="">
              <h3 className="bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text"> Your Keys, your coins, your koala wallet </h3>
              <h1 className="mt-3 text-5xl font-extrabold"> Your Passport to the <span className="bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">Crypto Ecosystem </span></h1>
              <p className="mt-5"> Koala Wallet makes it easier than ever to buy, send, receive, and safely store your crypto assets. </p>
              {/* I havn't pointed the link below to the right page */}
              <Button />
            </div>
            <Platforms/>
        </div>
        <div className="max800:mt-8 flex max800:justify-center min800:justify-end">
          <img className="w-4/6" src="./src/assets/homepage/phone-index.dac45385.png" alt="" />
        </div>
      </section>

      <CardList />
      <ExploreWallet />
    </main>
  )
}

export default MainIntro