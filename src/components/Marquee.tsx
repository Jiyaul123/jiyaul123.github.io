const ITEMS = [
  'React Native',
  'TypeScript',
  'JavaScript',
  'Redux',
  'Mobile Apps',
  'React',
  'WebRTC',
  'UI / UX',
  'Animation',
  'Performance',
]

export default function Marquee() {
  // Duplicate the list so the -50% translate loops seamlessly
  const loop = [...ITEMS, ...ITEMS]

  return (
    <div className="rule overflow-hidden border-y py-6 select-none">
      <div className="marquee gap-10">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="display text-2xl text-ink/85 md:text-4xl">
              {item}
            </span>
            <span className="text-accent">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
