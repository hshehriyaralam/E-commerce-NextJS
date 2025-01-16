export default function Hero() {
    return (
        <div
            style={{
                backgroundImage: `url('/Images/Home/heroBackground.png')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
            className="w-full h-[650px] md:h-[700px] lg:h-[800px] relative"
        >
            <div className="flex flex-col md:flex-row justify-center items-center">
                <img
                    className="absolute left-[20%] top-[40%] md:left-[15%] md:top-[30%] lg:left-[10%] lg:top-[40%]"
                    width={350}
                    src="/Images/Home/RocketText.png"
                    alt="Rocket"
                />

                <img
                    className="absolute left-[30%] top-[5%] md:left-[40%] md:top-[5%] lg:left-[50%] lg:top-[5%]"
                    width={650}
                    src="/Images/Home/heroSeater1.png"
                    alt="Seater"
                />
            </div>
        </div>
    );
}
