import clsx from 'clsx'
import { useState } from 'react'

export function App() {
  const cards = Array.from({ length: 100 }, (_, i) => i)
  return (
    <div
      className={clsx(
        'flex flex-col',
        'gap-4 p-4',
        'md:gap-8 md:p-8',
      )}
    >
      {cards.map((i) => (
        <Card key={i} />
      ))}
    </div>
  )
}

function Card() {
  const [state] = useState(() => {
    const { h, s, l } = (() => {
      const r = Math.random()
      if (r > 1 / 2) {
        return { h: 0, s: 0, l: 10 }
      } else if (r > 1 / 8) {
        return { h: 0, s: 0, l: 25 }
      } else if (r > 1 / 32) {
        return { h: 0, s: 0, l: 40 }
      } else {
        return { h: 60, s: 90, l: 50 }
      }
    })()
    return {
      bg: `hsl(${h}, ${s}%, ${l}%)`,
    }
  })

  return (
    <div className="rounded overflow-hidden">
      <div
        className={clsx('aspect-square')}
        style={{
          backgroundColor: state.bg,
        }}
      />
    </div>
  )
}
