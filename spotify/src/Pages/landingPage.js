import { Navbar, Footer } from "../Components";
export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{ backgroundColor: "#2941ab" }}
        className="relative h-screen overflow-hidden"
      >
        <img
          width="800px"
          src="/svg/circles.svg"
          className="absolute -left-80 -bottom-96"
        />
        <img
          style={{ right: "-44rem" }}
          width="800px"
          src="/svg/circle.svg "
          className="absolute"
        />
        <img
          style={{ right: "15rem" }}
          width="200px"
          src="/svg/circle.svg"
          className="absolute -bottom-32"
        />
        <div className="mx-72 text-left -mt-16 h-full flex flex-col justify-center">
          <h1
            style={{
              fontFamily: "Helvatica,Arial,sans-serif",
              color: "#1ED760",
            }}
            className="text-9xl font-extrabold"
          >
            Listening is
          </h1>
          <h1
            style={{
              fontFamily: "Helvatica,Arial,sans-serif",
              color: "#1ED760",
            }}
            className="ml-72 text-green-500 text-9xl font-extrabold"
          >
            everything
          </h1>
          <div className="mt-16 mx-auto">
            <h5
              style={{ fontSize: "1.1rem" }}
              className="text-center tracking-wide"
            >
              <span style={{ color: "#1ED760" }}>
                Millions of songs and podcasts. No credit card needed.
              </span>
            </h5>
          </div>
          <div className="mx-auto mt-8 transform scale-100 hover:scale-105">
            <span
              style={{ color: "#2941ab" }}
              className="bg-green-500 px-8 py-3 rounded-full font-semibold text-sm tracking-widest"
            >
              GET SPOTIFY FREE
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
