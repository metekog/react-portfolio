import "./works.scss";

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>

                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  laudantium cupiditate nobis fugiat dolor amet
                </p>
                <span>Project</span>
              </div>
            </div>
            <div className="right">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
