
const SponserTitle = () => {
    return (
        <div className="2xl:h-60 h-36  max-[768px]:h-16 bg-background-color relative justify-center">
            <div className="flex flex-row items-center justify-center w-full">
                <h1 className=" absolute 2xl:top-28 2xl:left-20 2xl:text-6xl font-black bg-schedule-gradient bg-clip-text text-transparent max-[320px]:text-2xl max-[320px]:mt-6 max-[320px]:left-10 text-2xl left-10 top-0">SPONSORS</h1>
            </div>
            <div className="  absolute 2xl:top-36 mt-14 2xl:left-20 flex max-[320px]:top-3 max-[320px]:left-10 left-10 -top-5">
                <div className=" absolute bg-line-gradient 2xl:h-1 2xl:w-32 flex max-[320px]:w-12 max-[320px]:h-0.5 h-0.5 w-16">
                    <h1 className="absolute 2xl:-top-4  2xl:left-36 flex text-white 2xl:text-3xl font-black w-96 max-[320px]:text-base max-[320px]:left-14 max-[320px]:top-0 max-[320px]:-mt-3 text-base left-20 -top-3 ">Our Partners & Sponsors</h1>
                </div>
            </div>
        </div>
    )
}

export default SponserTitle;