import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import invariant from 'tiny-invariant'

export function App() {
  const cards = Array.from({ length: 100 }, (_, i) => i)

  const scrollY = useRef(0)
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    document.addEventListener(
      'wheel',
      (ev) => {
        ev.preventDefault()
        scrollY.current = Math.max(
          scrollY.current + ev.deltaY,
          0,
        )
        invariant(container.current)
        container.current.style.translate = `0 ${-scrollY.current}px`
      },
      { signal, passive: false },
    )
  }, [])

  return (
    <div>
      <div ref={container}>
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
      </div>
      <div className="fixed top-0 left-0 right-0 bg-gray-400">
        <div className="p-1">
          <div className="font-mono text-xs font-bold tracking-wider">
            Doomscroller_v1
          </div>
        </div>
      </div>
      <Toast message="If you're ever feeling weird or uncomfortable, just keep scrolling!" />
    </div>
  )
}

interface ToastProps {
  message: string
}

function Toast({ message }: ToastProps) {
  const [hide, setHide] = useState(false)
  return (
    <div
      className={clsx(
        'fixed bottom-0 left-0 right-0 p-2',
        hide && 'hidden',
      )}
    >
      <div className="bg-gray-400 rounded flex justify-between items-center">
        <div className="p-2 text-sm">{message}</div>
        <button
          className="p-4"
          onClick={() => setHide(true)}
        >
          ╳
        </button>
      </div>
    </div>
  )
}

const Card = React.memo(function Card() {
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
})
