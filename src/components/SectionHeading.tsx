type Props = { index: string; title: string }

export default function SectionHeading({ index, title }: Props) {
  return (
    <div className="reveal mb-14">
      <div className="rule flex items-center justify-between pt-5">
        <span className="label text-mist">({index})</span>
        <span className="label text-mist">/ {title}</span>
      </div>
      <h2 className="display mt-8 text-[clamp(2.4rem,7vw,5.5rem)]">{title}</h2>
    </div>
  )
}
