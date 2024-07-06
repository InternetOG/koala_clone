
function Platforms() {
  return (
    <div>
        <div className="mt-5 grid justify-center min800:justify-start">
            <div className="bg-slate-700 border-2 border-solid border-transparent rounded-2xl p-5">
                <div>

                    <ul className="flex justify-center flex-wrap gap-2">
                        <a href="https://apps.apple.com/us/app/koala-wallet/id1627486259" target="_blank" rel="noopener noreferrer">
                            <li className="bg-slate-600 p-2 rounded-xl">
                                <img className="h-[32px] w-[32px]" src="https://koalawallet.io/_nuxt/logo-ios.4dd5023e.svg" alt="" />
                            </li>
                        </a>

                        <a href="https://play.google.com/store/apps/details?id=com.eucalyptuslabs.kowallet" target="_blank" rel="noopener noreferrer">
                            <li className="bg-slate-600 p-2 rounded-xl">
                                <img className="h-[32px] w-[32px]" src="https://koalawallet.io/_nuxt/logo-android.b783e713.svg" alt="" />
                                
                            </li>
                        </a>

                        <a href="https://chromewebstore.google.com/detail/koala-wallet/lnnnmfcpbkafcpgdilckhmhbkkbpkmid" target="_blank" rel="noopener noreferrer">
                            <li className="bg-slate-600 p-2 rounded-xl">
                                <img  className="h-[32px] w-[32px]" src="https://koalawallet.io/_nuxt/logo-chrome.292f2fd6.png" alt="" />
                            </li>
                        </a>

                        <a href="https://chromewebstore.google.com/detail/koala-wallet/lnnnmfcpbkafcpgdilckhmhbkkbpkmid" target="_blank" rel="noopener noreferrer">
                            <li className="bg-slate-600 p-2 rounded-xl">
                                <img className="h-[32px] w-[32px]" src="https://koalawallet.io/_nuxt/logo-brave.dafba1ae.png" alt="" />
                            </li>
                        </a>

                        <a href="https://chromewebstore.google.com/detail/koala-wallet/lnnnmfcpbkafcpgdilckhmhbkkbpkmid" target="_blank" rel="noopener noreferrer">
                            <li className="bg-slate-600 p-2 rounded-xl">
                                <img className="w-[32px]" src="https://koalawallet.io/_nuxt/logo-edge.87a4355b.png" alt="" />
                            </li>
                        </a>

                    </ul>

                </div>

                <div className="mt-2 grid justify-center">
                    <p>Available for <span>Mobile and Web</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Platforms