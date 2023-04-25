function Footer() {
  return (
    <div className="flex font-varelaRound flex-col align-center p-2 gap-8">
      <div className="flex w-[100%] gap-5 justify-between ">
        <div className="flex flex-col w-[50%] gap-5">
          <h3 className="text-[#3563E9] font-bold text-2xl">MORENT</h3>
          <p className="text-[#131313] opacity-60">
            Our vision is to provice convenience and help increase you sales
            business
          </p>
        </div>
        <div className="flex w-[50%] justify-around">
          <div className="flex flex-col gap-5">
            <h4 className="footerbig">About</h4>
            <span className="footersmall">How it works</span>
            <span className="footersmall">Featured</span>
            <span className="footersmall">Partnership</span>
            <span className="footersmall">Bussiness Relation</span>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="footerbig">Community</h4>
            <span className="footersmall">Events</span>
            <span className="footersmall">Blog</span>
            <span className="footersmall">Podcast</span>
            <span className="footersmall">Invite a friend</span>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="footerbig">Socials</h4>
            <span className="footersmall">Discord</span>
            <span className="footersmall">Instagram</span>
            <span className="footersmall">Twitter</span>
            <span className="footersmall">Facebook</span>
          </div>
        </div>
      </div>
      <span className="w-[100%] border-[1px] border-[#131313]/20 justify-center"></span>

      <div className="flex justify-between">
        <span className="font-bold">©2022 MORENT. All rights reserved</span>
        <div className="flex flex-col md:flex-row justify-between w-[20%]">
          <span className="font-bold cursor-pointer">Privacy & Policy</span>
          <span className="font-bold cursor-pointer">Terms & Condition</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
