export const Navbar = () => {
  return (
    <div className="p-5 bg-black px-48 text-white flex items-start">
        <img width = "130px" src="/svg/spotify.svg" />
      <div className="flex self-center  font-semibold ml-auto">
        <h5 className="px-4">Premium</h5>
        <h5 className="px-4">Support</h5>
        <h5 className="px-4">Download</h5>
        <h5 className="px-4">|</h5>
        <h5 className="px-4">Sign up</h5>
        <h5 className="px-4">Log in</h5>
      </div>
    </div>
  );
};
