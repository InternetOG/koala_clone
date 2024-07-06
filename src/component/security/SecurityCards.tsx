
function SecurityCards() {
  return (
    <main className="max-w-3xl my-0 mx-auto mt-10">
            <section className="grid justify-center text-center">
                <div>
                    <h1 className=" font-extrabold text-4xl">Security</h1>
                    <p className=" text-xl font-semibold max-w-md mt-5">Take control of your crypto asset security and experience true financial freedom with Koala Wallet</p>
                </div>
            </section>

            <section className="grid mt-10 gap-4">
                <article className="relative grid  border-2 border-solid border-transparent rounded-2xl bg-blue-700 p-8">
                    <div>
                        <h2 className=" font-bold text-[1.2rem]">Security Audit </h2>
                        <p className="mt-2 max-w-[50ch] font-medium"> 
                            Both Koala Wallet mobile and browser extension, have been extensively
                            and repeatedly audited by Re4Sec. They have found zero critical, high, or
                            even medium security issues. All suggestions have been addressed in the
                            latest version of the app by our stellar developer team.
                            security-audit
                        </p>
                    </div>
                    <div className="absolute w-96 right-0 bottom-0">
                        <img  className="" src="./src/assets/security/security-audit.svg" alt="" />
                    </div>
                </article>

                <div className="grid justify-center gap-4 max500:grid-cols-1 min500:grid-cols-2">
                    <article className="relative grid border-2 border-solid border-transparent rounded-2xl bg-blue-700 p-8">
                        <div>
                            <h2 className=" font-bold text-[1.2rem]"> Your Keys, Your Coins </h2>
                            <p className="mt-2 max-w-[50ch] font-medium"> 
                                Your Koala Wallet is non-custodial, this means you and only you have access to your funds and private keys.
                            </p>
                        </div>
                        <div className="absolute w-28 right-0 bottom-0">
                            <img  className="" src="./src/assets/security/your-keys.svg" alt="" />
                        </div>
                    </article>

                    <article className="relative grid  border-2 border-solid border-transparent rounded-2xl bg-blue-700 p-8">
                        <div>
                            <h2 className=" font-bold text-[1.2rem]"> Your Privacy is Our Priority </h2>
                            <p className="mt-2 max-w-[50ch] font-medium"> 
                                Your Koala Wallet never stores or tracks your personal information, account addresses or asset balances. 
                            </p>
                        </div>
                        <div className="absolute w-40 right-0 bottom-0">
                            <img  className="" src="./src/assets/security/your-privacy.svg" alt="" />
                        </div>
                    </article>

                    <article className="relative grid  border-2 border-solid border-transparent rounded-2xl bg-blue-700 p-8">
                        <div>
                            <h2 className=" font-bold text-[1.2rem]"> Increased Security Measures </h2>
                            <p className="mt-2 max-w-[50ch] font-medium"> 
                                Koala Wallet has prevented screenshots on sensitive screens such as those which show your phrase or require password entry.
                                increased-security
                            </p>
                        </div>
                        <div className="absolute w-32 right-0 bottom-0">
                            <img  className="" src="./src/assets/security/increased-security.svg" alt="" />
                        </div>
                    </article>

                    <article className="relative grid  border-2 border-solid border-transparent rounded-2xl bg-blue-700 p-8">
                        <div>
                            <h2 className=" font-bold text-[1.2rem]"> Protect Your Assets </h2>
                            <p className="mt-2 max-w-[50ch] font-medium"> 
                                Your coins are protected with biometrics and a pin every time you access your wallet.
                                protected-your-assets
                            </p>
                        </div>
                        <div className="absolute w-32 right-0 bottom-0">
                            <img  className="" src="./src/assets/security/protect-your-assets.svg" alt="" />
                        </div>
                    </article>

                    <article className="relative grid  border-2 border-solid border-transparent rounded-2xl bg-blue-700 p-8">
                        <div>
                            <h2 className=" font-bold text-[1.2rem]"> Secure Keyboard Input </h2>
                            <p className="mt-2 max-w-[50ch] font-medium"> 
                                We built our own secure keyboard with the ability of randomizing keys, offering users the ultimate level of protection. 
                            </p>
                        </div>
                        <div className="absolute w-32 right-0 bottom-0">
                            <img  className="" src="./src/assets/security/secure-keyboard.svg" alt="" />
                        </div>
                    </article>

                    <article className="relative grid  border-2 border-solid border-transparent rounded-2xl bg-blue-700 p-8">
                        <div>
                            <h2 className=" font-bold text-[1.2rem]"> World Class Support </h2>
                            <p className="mt-2 max-w-[50ch] font-medium"> 
                                Our support team is built with passionate and knowledgable consultants. Available to help 24 hours a day, 7 days a week. 
                            </p>
                        </div>
                        <div className="absolute w-32 right-0 bottom-0">
                            <img  className="" src="./src/assets/security/world-class.svg" alt="" />
                        </div>
                    </article>
                </div>

                <article className="relative grid  border-2 border-solid border-transparent rounded-2xl bg-[#712090] p-8 text-center">
                    <div className="relative grid justify-center">
                        <h2 className=" font-bold text-[1.2rem]"> Bug Bounty Program  </h2>
                        <p className="mt-2 max-w-[60ch] font-semibold"> 
                            Your security is Koala Wallet's top priority. We strive to provide a highly secure wallet, continually improved by our Bug Bounty Program, which works closely with a community of security researchers.
                        </p>
                        <div className="mt-4">
                            <a href="" className=" bg-[#171826] p-2 rounded-full  font-bold">
                                <button>Explore Our Bug Bounty Program</button>
                            </a>
                        </div>
                    </div>
                    <div className="absolute w-48 right-0 bottom-0">
                        <img  className="" src="./src/assets/security/bug-bounty1.svg" alt="" />
                    </div>
                </article>
                
            </section>
        </main>
  )
}

export default SecurityCards