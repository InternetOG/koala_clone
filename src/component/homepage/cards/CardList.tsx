import { cardArr } from "./cardArray"

function CardList() {
    const cards = cardArr.map(card => {
        return (
            <div key={card.heading} className="grid justify-center max500:mt-5">
                <div className="grid justify-center p-5 bg-slate-700 border-2 border-solid border-transparent rounded-2xl " key={card.heading}>
                    <div className="text-center">
                        <h2 className=" text-2xl font-bold">{card.heading}</h2>
                        <p className=" mt-3 font-medium">{card.paragraph}</p>
                        <img className=" mt-3" src={`koala_clone/src/assets/homepage/${card.img}`} alt={`${card.heading}`} />
                    </div>
                </div>
            </div>
        )
    })
  return (
    <section className="grid justify-center max500:grid-cols-1c min500:grid-cols-2c min500:gap-6 min800:mt-14">
        {cards}
    </section>
  )
}

export default CardList