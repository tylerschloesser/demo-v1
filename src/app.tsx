export function App() {
  return (
    <div>
      <Card />
    </div>
  )
}

function Card() {
  return (
    <div className="p-2">
      <div className="border border-black rounded">
        <div className="p-2">
          <h2>Card Component</h2>
          <p>This is a card component.</p>
        </div>
      </div>
    </div>
  )
}
