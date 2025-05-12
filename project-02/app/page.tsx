export default function Home() {
  return (
    <>
      <div className=" lg:flex max-h-screen">
        <div className="hidden  lg:block lg:w-1/2 ">
          <img
            src="./Container.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 bg-[#FFF] min-h-screen text-[#1E1E1E] flex flex-col gap-[28px] justify-center items-center py-0 px-[32px] lg:px-[130px]">
          <div className="flex flex-col w-full gap-[16px]">
            <div className="flex flex-col justify-center items-start gap-[8px]">
              <h1 className="text-[28px] font-bold">Sign In</h1>
              <p className="text-[10px] ">
                Don't have an account?{" "}
                <span className="text-[#334E75] hover:cursor-pointer hover:underline">
                  Create now
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <input
                type="email"
                className="py-[16px] px-[8px] rounded-[4px]  border-[0.382px] border-s-[#000E23]"
                placeholder="Email"
              />
              <input
                type="password"
                className="py-[16px] px-[8px] rounded-[4px] border-[0.382px] border-s-[#000E23]"
                placeholder="Password"
              />
              <div className="flex justify-end hover:cursor-pointer hover:underline">
                <p className="text-[10px] text-[#334E75]">Forgot password?</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-[16px] ">
            <button className="py-[16px] px-[8px] bg-[#002253] w-full text-[#FEFEFE] text-[14px] font-semibold rounded-[4px]">
              Sign In
            </button>
            <h1>OR</h1>
            <button className="rounded-[4px] border-[0.382px] border-s-[#000] py-[16px] w-full text-[14px] flex justify-center items-center gap-[6px]">
              <img src="./google.png" className="w-[24px] h-[24px]" alt="" />
              <p>Continue with Google</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
