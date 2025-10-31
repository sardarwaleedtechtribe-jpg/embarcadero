import img3 from "/Assets/map.svg";

function Community() {
  return (
    // px-0 py-8 sm:py-12
    <div className="bg-white  relative w-full  mt-0 sm:mt-0 overflow-visible [clip-path:inset(0_0_20px_0)]   min-w-[375px] z-10">
      <div className="relative z-10 max-w-8xl mx-auto  flex flex-col md:flex-row items-center justify-center gap-1 md:h-[380px] lg:h-[540px] xl:h-[640px] sm:gap-1 md:gap-1 lg:gap-1 xl:gap-1 2xl:gap-0 2xl:w:[1515px]  px-0 sm:px-6 lg:px-8 ">
        {/* Background gradients */}
        <div className="absolute bg-cyan-500 opacity-10 blur-[400px] rounded-2x2 
        w-[731px] h-[731px] left-[-420px] bottom-[-180px]
        sm:bottom-[230px] sm:left-[-320px]
         md:bottom-[-380px] md:left-[-470px]     
        lg:bottom-[-350px] lg:left-[-420px]
         xl:bottom-[-350px] xl:left-[-390px]
        2xl:bottom-[-358px] 2xl:left-[-360px] 
        z-0" />

        {/* Left Side: Text and Form */}
        <div   className="flex flex-col items-center md:items-start gap-6 md:gap-5 lg:gap-4 xl:gap-6 
            text-base sm:text-lg max-w-none 
            w-[343px] h-[350px] sm:w-[696px] sm:h-[258px] md:w-[400px] md:h-[298px] 
            lg:w-[514px] lg:h-[312px] xl:w-[633px] xl:h-[276px] 
            min-w-[370px] overflow-hidden flex-shrink-0"        >
          <h2 className=" w-[353px]  min-h-[84px] font-semibold text-[30px] sm:text-[36px] md:text-4xl  text-center md:text-left sm:w-full md:text-[32px] md:w-[350px] 2xl:w-[450px] tracking-[-1px] ">
            <span className="text-gray-900">Join Our </span>
            <br className="hidden [@media(min-width:1596px)]:block" />
            <span className="bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] bg-clip-text text-transparent">
              Global Developer Community
            </span>
          </h2>
          <p
          className="text-gray-700 xs:px-3 
          min-w-[32px] 
          text-center md:text-left 
          px-1 sm:px-3 md:px-0
          text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[24px]
          leading-[28px] tracking-[0px]"
          >Join our email list and receive the latest case studies, event updates, product news, and much more. </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-1 md:justify-start w-full  ">
            <div  className="
            flex items-center justify-center 
            w-full 
            xs:w-[300px] sm:w-[377px] min-md:w-[300px] lg:w-[320px] xl:w-[361px]
            aspect-[7/1] sm:aspect-[7.2/1] md:aspect-[17.5/1] lg:aspect-[8/1]
            transition-all duration-300"  >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full h-full md:h-[52px] px-4 py-2 text-sm rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-400 transition-all duration-300 "
              />
            </div>

            <div className="flex items-center justify-center w-full sm:w-[130px] sm:h-[52px]">
              <button className="cursor-pointer w-full h-[52px] sm:w-[122px] sm:h-[52px] md:w-auto px-6 py-4 text-base border border-neutral-800 lg:h-[48px] bg-neutral-800 text-white rounded-lg transition-colors duration-150 hover:bg-neutral-800 hover:text-white md:text-md flex items-center justify-center sm:text-white sm:text-md sm:px-4 md:px-6">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
      <div className="mt-[7px] mb-[30px] mx-auto md:mx-0 z-10 flex items-center justify-center">
  <img
    src={img3}
    alt="Screenshot of Delphi 11.2 IDE"
    loading="lazy"
    className="
      w-full 
      max-w-[343px] aspect-[343/159]
      sm:max-w-[696px] max-h-[365px] sm:aspect-[562/365]
      md:max-w-[550px] md:max-h-[511px] md:aspect-[350/511]
      lg:max-w-[734px] lg:max-h-[341px] lg:aspect-[734/364]
      xl:max-w-[881px] xl:min-h-[410px]  xl:aspect-[882/410]
      object-contain
    "
  />
</div>

      </div>
    </div>
  );
}

export default Community;

