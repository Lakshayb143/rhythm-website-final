
const Schedule = () => {
    return (
        <div className="h-60 max-[768px]:h-40 bg-background-color relative justify-center">
            <div className="flex flex-row items-center justify-center w-full">
                <h1 className=" absolute 2xl:top-28 top-16 left-10 text-2xl 2xl:left-20 2xl:text-6xl font-black bg-schedule-gradient bg-clip-text text-transparent md:text-3xl xl:text-5xl ">SCHEDULE</h1>
            </div>
            <div className="  absolute 2xl:top-24 2xl:mt-14 2xl:left-20 flex left-10 mt-24 pt-2 md:pt-4 xl:pt-8">
                <div className=" absolute bg-line-gradient 2xl:h-1 2xl:w-56 flex w-20 h-0.5 md:w-28 xl:w-44">
                    <h1 className="absolute 2xl:top-0 2xl:left-60 flex text-white 2xl:text-3xl font-black left-24 -mt-3 md:left-28 pl-2 xl:text-2xl xl:left-44 xl:-mt-4">2024</h1>
                </div>
            </div>
        </div>
    )
}

export default Schedule