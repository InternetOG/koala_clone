

function Download() {
  return (
    <main className=" max-w-4xl my-0 mt-10 mx-auto">
      <section className="grid justify-center">
        <div className="grid justify-center grid-cols-[minmax(5ch,_30ch)]">
          <img src="./src/assets/download/koala_desktop.png" alt="" />
        </div>
        <div className="text-center">
          {/* 
            Values suitable for h1 below
              font-size: clamp(1.5rem, 0.25rem + 4vw, 2.5rem);
              font-size: clamp(1.6rem, 0.475rem + 3.6vw, 2.5rem); 
          */}
          <h1 className=" font-extrabold text-[clamp(1.6rem,_-0.475rem_+_3.6vw,_2.5rem)]"> Download Koala Wallet</h1>
          <p className=" font-medium text-sm"> Start your crypto journey today with the safe and easy to use Koala Wallet. Available for mobile and web! </p>
        </div>
      </section>

      {/* Mobile section */}
      <section className="mt-8">
        <div className=" grid gap-8">
          <section className="bg-[#333654] rounded-xl p-2 min800:grid min800:grid-cols-2 min800:p-8">

            <div className="grid items-center">
              <div>
                <div className="flex gap-2">
                  <div>
                    <img src="./src/assets/download/mobile.svg" alt="" />
                  </div>
                  <h2 className="text-xl font-bold">Mobile</h2>
                </div>
                <div className="min800:grid grid-cols-[minmax(20ch,_30ch)]">
                  <p className=" my-1 text-sm font-medium"> Manage your crypto assets on the go with Koala Wallet for mobile! </p>
                </div>
              </div>
            </div>

            <div className="grid max800:justify-start min800:justify-end max800:mt-2">
              <div className="flex gap-2 max-w-[400px]">
                <a href="https://apps.apple.com/us/app/koala-wallet/id1627486259" className="grid items-center">
                  <img src="./src/assets/download/appstore.png" alt="app_store" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.eucalyptuslabs.kowallet" className="grid items-center">
                  <img src="./src/assets/download/googleplay.png" alt="google_store" />
                </a>
              </div>
            </div>

          </section>
          
          {/* Browser Extension section */}
          <section className="bg-[#333654] rounded-xl p-2 min800:grid min800:grid-cols-2 min800:p-8">

            <div className="grid items-center">
              <div>
                <div className="flex gap-2">
                  <div>
                    <img src="./src/assets/download/desktop.svg" alt="" />
                  </div>
                  <h2 className="text-xl font-bold"> Browser Extension </h2>
                </div>
                <div className="min800:grid grid-cols-[minmax(20ch,_30ch)]">
                  <p className=" my-1 text-sm font-medium"> Quick access to all your crypto assets from your favorite browser! </p>
                </div>
              </div>
            </div>

            {/* Browser Extension */}
            {/* <div className="grid max800:justify-start min800:justify-end">
              <div className="flex gap-2 max-w-[400px]">
                <div className="grid items-center border-2 border-[#5E6096] rounded-xl p-2 min800:py-0 max-h-16">
                  <a href="" >
                    <img src="./src/assets/download/chrome.png" alt="app_store" />
                  </a>
                </div>
                <div className="grid items-center border-2 border-[#5E6096] rounded-xl p-2 min800:py-0 max-h-16">
                  <a href="">
                    <img src="./src/assets/download/edge.png" alt="google_store" />
                  </a>
                </div>
                <div className="grid items-center border-2 border-[#5E6096] rounded-xl p-2 min800:py-0 max-h-16">
                  <a href="">
                    <img src="./src/assets/download/brave.png" alt="google_store" />
                  </a>
                </div>

                
                
              </div>
            </div> */}

            {/* Browser Extension */}
            <div className="grid max800:justify-start min800:justify-end max800:mt-2">
              <div className="grid items-center">
                <div>
                  <div className="flex gap-2 max-w-[400px]">
                    <div className="grid items-center border-2 border-[#5E6096] rounded-xl p-2  max-h-16">
                      <a href="https://chromewebstore.google.com/detail/koala-wallet/lnnnmfcpbkafcpgdilckhmhbkkbpkmid" >
                        <img src="./src/assets/download/chrome.png" alt="app_store" />
                      </a>
                    </div>
                    <div className="grid items-center border-2 border-[#5E6096] rounded-xl p-2  max-h-16">
                      <a href="https://chromewebstore.google.com/detail/koala-wallet/lnnnmfcpbkafcpgdilckhmhbkkbpkmid">
                        <img src="./src/assets/download/edge.png" alt="google_store" />
                      </a>
                    </div>
                    <div className="grid items-center border-2 border-[#5E6096] rounded-xl p-2 max-h-16">
                      <a href="https://chromewebstore.google.com/detail/koala-wallet/lnnnmfcpbkafcpgdilckhmhbkkbpkmid">
                        <img src="./src/assets/download/brave.png" alt="google_store" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </div>
      </section>
    </main>
  )
}

export default Download