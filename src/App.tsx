import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import PostsComponent from "./components/Posts";
import PostNavbar from "./components/PostNavbar";

function App() {
  const posts = [
    {
      type: "Article",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to reintroduce you to...",
      author: "Sarthak Kamra",
      views: 1400,
    },
    {
      type: "Education",
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to reintroduce you to...",
      author: "Sarah West",
      views: 1400,
    },
    {
      type: "Meetup",
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      description: "",
      author: "Ronal Jones",
      views: 1400,
      location: "Ahmedabad, India",
      date: "Fri, 12 Oct, 2018",
      link: "http://example.com",
    },
    {
      type: "Job",
      title: "Software Developer",
      description: "",
      author: "Joseph Gray",
      views: 1400,
      location: "Noida, India",
      company: "Innovaccer Analytics Private Ltd.",
      link: "http://timesjobs.com",
    },
  ];
  return (
    <>
      <Navbar />
      <HeroSection />
      <PostNavbar />
      <PostsComponent posts={posts} />
    </>
  );
}

export default App;
