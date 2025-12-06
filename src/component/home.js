import Home_bgp from './images/home_bgp.png'

const Home = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "150vh ",
        backgroundImage: `url(${Home_bgp})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>Welcome to BREWTOPIA</h1>
      <p style={{ fontSize: "2rem" }}>Where every sip tells a story</p>
      

    </div>
  );
};

export default Home;

