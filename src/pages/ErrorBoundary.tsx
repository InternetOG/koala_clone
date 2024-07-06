import { Link, useRouteError } from "react-router-dom"
import Header from "../component/Header"
import Footer from "../component/Footer"
import "../App.css"

function ErrorBoundary() {

    interface obj<T> {
        statusText: T,
        name: T
    }

    const error = useRouteError() as obj<string>
    
  return (
    <>
        <Header />
        <section className=" grid justify-center max-w-4xl my-10 mx-auto text-center">
            <div className="grid justify-center">
                <img src="./src/assets/errorboundary/koala_error.svg" alt="" />
            </div>

            <div>
                <h1 className="mt-10 text-4xl font-extrabold">Page {error.statusText}</h1> 
                <p className="mt-4 font-medium">we couldn't find you were looking for.</p>
                <p className="mt-1 ">Let's take you back home.</p>
            </div>
            
            <div className="grid justify-center mt-6">
                <Link to="/" className="w-24 p-2 border-2 border-solid border-transparent rounded-full bg-gray-800">
                    <button>Home</button>
                </Link>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default ErrorBoundary