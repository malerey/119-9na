import Card from './Card'

const cards = [
  {
    title: "Card 1",
  },
  {
    title: "Card 2",
  },
  {
    title: "Card 3",
  },
  {
    title: "Card 4",
  },
  {
    title: "Card 5",
  },
  {
    title: "Card 6",
  },
  {
    title: "Card 7",
  },
  {
    title: "Card 8",
  },
  {
    title: "Card 9",
  },
  {
    title: "Card 10",
  },
  {
    title: "Card 11",
  },
  {
    title: "Card 12",
  },

]

const Main = () => {
  return (
    <main>
      <h1>Soy Main</h1>
      <section>
      {
        cards.map(card => <Card title={card.title}/>)
      }
      </section>
    </main>
  )
}

export default Main
