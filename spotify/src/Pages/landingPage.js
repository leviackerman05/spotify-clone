import { Navbar } from "../Components";
export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div style = {{ backgroundColor : "#2941ab" }} className = 'relative h-screen overflow-hidden'>
        <img width = "800px" src = "/svg/circles.svg" className = "absolute -left-64 -bottom-96" />
        <img style = {{ right : "-40rem" }} width = "800px" src = "/svg/circle.svg " className = "absolute" />
        <img style = {{ right : "15rem"  }} width = "200px" src = "/svg/circle.svg" className = "absolute -bottom-32"/>
        <div className = "mx-72 text-left -mt-16 h-full flex flex-col justify-center">
        <h1 style = {{ fontFamily : "Helvatica,Arial,sans-serif" , color : "#1ED760" }} className = "text-9xl font-extrabold">Listening is</h1>
        <h1 style = {{ fontFamily : "Helvatica,Arial,sans-serif" , color : "#1ED760" }} className = "ml-72 text-green-500 text-9xl font-extrabold">everything</h1>
        </div>
      </div>
    </div>
  );
};
