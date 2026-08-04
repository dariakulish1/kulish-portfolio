import "./TextIndicator.scss";

export default function TextIndicator({ title, backgroundColor }: { title: string, backgroundColor: string }) {
  return (
    <div
        className="text-indicator-container"
        >
        <div className="text-indicator-container__circle-icon" style={{background: backgroundColor}} />
        <p style={{ color: backgroundColor }}>{title}</p>
    </div>
  )
}