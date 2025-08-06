import Background from '../../../assets/img/hero-background.png';

function Hero() {
    return (
        <div className="pt-[119px] pb-32 pl-9 text-white relative w-full">
            <img className="absolute bottom-20 right-0 w-[1115px] min-h-[450px] aspect-[18/10]" src={Background} />
            <div className='relative z-10'>
                <h1 className="w-[332px] text-[40px] font-extrabold mb-9">All the <span className="text-[#EE10B0]">Best Songs</span> in One Place</h1>
                <p className="w-[360px] text-sm mb-7">
                    On our website, you can access an amazing collection of popular and new songs. 
                    Stream your favorite tracks in high quality and even add your own music. 
                    Whatever your taste in music, we have it all for you!
                </p>
                <div className="flex gap-6">
                    <button className='text-white border border-[#EE10B0] bg-[#EE10B0] hover:bg-transparent hover:text-[#EE10B0] rounded-sm lg:w-[150px] lg:h-10 
                                        flex justify-center items-center cursor-pointer font-light'>Discover Now</button>
                    <button className='text-[#0E9EEF] border border-[#0E9EEF] bg-transparent hover:bg-[#0E9EEF] hover:text-white rounded-sm lg:w-[150px] lg:h-10 
                                        flex justify-center items-center cursor-pointer font-light'>Create Playlist</button>
                </div>
            </div>
        </div>
  );
}

export default Hero;