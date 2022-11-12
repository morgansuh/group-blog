import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://assets.gqindia.com/photos/5cdc64e0956b1c5c5865092d/master/pass/dwayne-the-rock-johnson-gq-exclusive1.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music Recs</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
        Lorem ipsum dolor sit amet.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
    </div>
  )
}
