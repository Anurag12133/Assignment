import { FaLocationDot } from "react-icons/fa6";
import "../css/post.css";

const PostGrid = () => {
  return (
    <div className="container">
      <div className="post-grid">
        <div className="post">
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
            alt="Post Image"
            className="post-image"
          />
          <h2>Article</h2>
          <p>What if famous brands had regular fonts? Meet RegulaBrands!</p>
          <p>Author: Sarthak Kamra</p>
          <p>Views: 1.4k</p>
        </div>
        <div className="post">
          <img
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="Post Image"
            className="post-image"
          />
          <h2>Education</h2>
          <p>
            Tax Benefits for Investment under National Pension Scheme launched
            by Government
          </p>
          <p>Author: Sarah West</p>
          <p>Views: 1.4k</p>
        </div>
        <div className="post">
          <img
            src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718496000&semt=sph"
            alt="Post Image"
            className="post-image"
          />
          <h2>Meetup</h2>
          <p>Finance & Investment Elite Social Mixer @Lujiazui</p>
          <p>Date: Fri, 12 Oct, 2018</p>
          <p>Location: Ahmedabad, India</p>
          <p>Views: 1.4k</p>
        </div>
        <div className="post">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgaNZjyfIxHaqG_RLov2HKIy9liBL_y5anHA&s"
            alt="Post Image"
            className="post-image"
          />
          <h2>Job</h2>
          <p>Software Developer</p>
          <p>Company: Innovaccer Analytics Private Ltd.</p>
          <p>Location: Noida, India</p>
          <p>Views: 1.4k</p>
        </div>
      </div>

      <div className="location">
        <FaLocationDot className="location-icon" />
        <input className="input" type="text" placeholder="" />
      </div>
    </div>
  );
};

export default PostGrid;
