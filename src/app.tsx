export function App() {
  return (
    <div className="flex flex-col">
      <Card />
    </div>
  )
}

function Card() {
  return (
    <div className="p-4">
      <div className="border border-black rounded overflow-hidden">
        <div className="aspect-square bg-gray-200 border-b border-black" />
        <div className="p-2">
          <h2>Card Component</h2>
          <p>This is a card component.</p>
        </div>
      </div>
    </div>
  )
}
