export const Navbar = () => {
  return (
    <div className="p-5 bg-black px-48 text-white flex items-start">
        <img width = "130px" src="/svg/spotify.svg" />
      <div className="flex self-center  font-semibold ml-auto">
        <h5 className="px-4"><span className="hover:text-green-500 inline">Premium</span></h5>
        <h5 className="px-4"><span className="hover:text-green-500 inline">Support</span></h5>
        <h5 className="px-4"><span className="hover:text-green-500 inline">Download</span></h5>
        <h5 className="px-4"><span className="hover:text-green-500 inline">|</span></h5>
        <h5 className="px-4"><span className="hover:text-green-500 inline">Sign up</span></h5>
        <h5 className="px-4"><span className="hover:text-green-500 inline">Log in</span></h5>
      </div>
    </div>
  );
};
