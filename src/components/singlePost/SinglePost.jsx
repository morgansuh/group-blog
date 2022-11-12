import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://assets.gqindia.com/photos/5cdc64e0956b1c5c5865092d/master/pass/dwayne-the-rock-johnson-gq-exclusive1.jpg" alt="" className="singlePostImg"/>
        <h1 className="singlePostTitle">Lorem ipsum dolor, sit amet consectetur 
            <div className="singlePostEdit">
                <i className="SinglePostIcon fa-solid fa-pen-to-square"></i>
                <i class="SinglePostIcon fa-solid fa-trash-can"></i></div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostInfo">Author: <b>The Rock </b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae vero 
            quisquam dignissimos, repellat aliquid nihil non odio cum ex eveniet 
            quaerat odit officia deserunt excepturi totam. Obcaecati ipsam hic esse.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae vero 
            quisquam dignissimos, repellat aliquid nihil non odio cum ex eveniet 
            quaerat odit officia deserunt excepturi totam. Obcaecati ipsam hic esse.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae vero 
            quisquam dignissimos, repellat aliquid nihil non odio cum ex eveniet 
            quaerat odit officia deserunt excepturi totam. Obcaecati ipsam hic esse.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae vero 
            quisquam dignissimos, repellat aliquid nihil non odio cum ex eveniet 
            quaerat odit officia deserunt excepturi totam. Obcaecati ipsam hic esse.
        </p>
      </div>
    </div>
  )
}
