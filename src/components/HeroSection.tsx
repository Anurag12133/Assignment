import "../css/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="image-container">
      <div className="gradient-overlay"></div>
      <img
        src="https://s3-alpha-sig.figma.com/img/756e/302b/7d56a759ac56bc165f65c40094aba4e8?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aRbtwE7Jsi-MB~ks4XAT-wLWPYwDJ66bIroDj3OUL46o2t2K4mdN73YyF~6Bn9RvO4S2D~dD57Y3EgOte2RXsaYu47RTAxGTZKhxN2szq~ClAtHM-Nc~Xy86s~yhFxiwuGYZ-Ekk9omjwvhNyXP0civqhJaLeHhF5nqo-B8ux3AYCCgV3-ZDoBMgQS6L3rOJpCvoNjsK9WJV7eedYFl~ClyJ28vrQb~yuL0FnM5mpMunEzxcm5Yt-ZVfTePNkZHZpw~ezcPa3Pc2hPPrMmDZfjTvx0lSWM~CX3SJGGotaf4byYNOc41UizFetDeEllvy-Y1LVAPVMEImPpAJvrtODQ_"
        alt="landing image"
        className="cropped-image"
      />
    </div>
  );
};

export default HeroSection;
