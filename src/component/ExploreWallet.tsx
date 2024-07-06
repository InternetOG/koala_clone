import Button from "./homepage/Button"

function ExploreWallet() {
  return (
    <section className="grid justify-center mt-14 ">
        <div className=" grid justify-center grid-cols-1csm">
          <img src="./src/assets/homepage/Koala_logo.png" alt="koala_logo" />
        </div>
        <div className="mt-2 text-center">
          <h2 className=" text-2xl font-extrabold"> Explore with your Koala Wallet</h2>
          <p className=" font-medium mt-3">Enter the Crypto Ecosystem Today</p>
          <Button />
        </div>
    </section>
  )
}

export default ExploreWallet