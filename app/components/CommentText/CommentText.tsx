import "./CommentText.scss";

export default function CommentText({ text }: { text: string }) {
  return (
    <p className="comment-text">
        &#47; &#47; {text}
    </p>
  )
}