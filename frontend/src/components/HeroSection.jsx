export default function HeroSection({ 
    title, 
    description, 
    buttonText, 
    buttonLink, 
    imageSrc, 
    imageAlt 
}) {
    return (
        <section
            id="mobile"
            className="relative bg-blue-50 min-h-[95vh] flex flex-col md:flex-row items-center justify-center overflow-hidden pt-[7rem] px-4 sm:px-6 md:px-8"
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                <div className="max-w-xl mb-10 md:mb-0 text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                        {title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 max-w-md md:max-w-lg mx-auto md:mx-0">
                        {description}
                    </p>
                    <a
                        href={buttonLink}
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition duration-150 mx-auto md:mx-0"
                    >
                        {buttonText}
                        <span className="ml-2 font-normal text-xl">&rarr;</span>
                    </a>
                </div>
                
                <div className="w-full md:w-auto flex justify-center px-4 sm:px-20">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
