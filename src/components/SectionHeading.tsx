type Props = { index: string; title: string }

export default function SectionHeading({ index, title }: Props) {
  return (
    <div className="reveal mb-12 flex items-baseline gap-4">
      <span className="font-display text-sm font-medium text-accent">
        {index}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>
      <span className="ml-4 hidden h-px flex-1 bg-ink/10 sm:block" />
    </div>
  )
}
