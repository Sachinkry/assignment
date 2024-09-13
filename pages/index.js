import { useState, useRef } from 'react';
import { FaPlus, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SalesRepCard = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    return (
      <p className="text-[#969696] text-[20px] font-normal font-['Plus Jakarta Sans'] leading-tight">
        Hello! I am Dave, your sales rep here from Salesforce. I have been working at this awesome company for 3 years now.<br /><br />
        I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
      </p>
    );
    
  };

  return (
    <div className=" w-[720px] h-[316px]  flex flex-row bg-[#363C43] rounded-[20px] shadow-xl pl-[12px] shadow-bottom-right">
        <div className=' my-[20px]  flex flex-col items-center justify-between'>
          {/* svg file here */}
          <img src="/question.svg" alt="Question Bars"  width={24} />
          <img src="/bars.svg" alt="Question Bars"  width={20} height={30} />
          <img className='opacity-0' src="/bars.svg" alt="Question Bars"  width={16} />
        </div>
        
        <div className='flex flex-col  items-center  my-[17px]  w-full'>
          <div className="relative w-[614px] h-[62px] bg-[#171717] rounded-[23px] shadow-md  px-[8px] py-[2px] flex justify-between items-center ">
          <div className="absolute left-6 right-[400px] bottom-[-20px] h-4 bg-neutral-900 rounded-md blur-xl"></div>
            <TabButton activeTab={activeTab} setActiveTab={setActiveTab} label="About Me" value="about"  />
            <TabButton activeTab={activeTab} setActiveTab={setActiveTab} label="Experiences" value="experiences" />
            <TabButton activeTab={activeTab} setActiveTab={setActiveTab} label="Recommended" value="recommended" />
          </div>
          <div className="w-[614px] mt-[35px] ">{renderContent()}</div>
        </div>
        <div className="h-full items-center justify-center flex p-0">
          <img  src="/vertical-bar.svg" alt="Question Bars"  width={20}  />
        </div>
    </div>
  );
};

const TabButton = ({ activeTab, setActiveTab, label, value }) => (
  <div className="relative">
    {activeTab === value && (
      <div className="absolute left-6 right-[-10px] bottom-[-20px] h-4 bg-neutral-900 rounded-md blur-xl transition-all duration-500 ease-in-out"></div>
    )}
    <button
      onClick={() => setActiveTab(value)}
      className={`relative px-6 py-2.5 w-[195px] rounded-[16px] flex items-center justify-center font-medium font-sans text-[18px] overflow-hidden transition-all duration-500 ease-in-out transform ${
        activeTab === value
          ? 'bg-[#28292F] text-white'
          : 'text-[#a2acb1] hover:bg-[#28292F]/50 '
      }`}
    >
      {/* Sliding background */}
      {/* {activeTab !== value && (
        <span
          className={`absolute inset-0 z-10  transition-transform duration-1000 ease-in-out hover:bg-[#28292F]/50 hover:translate-x-[100%] `}
        ></span>
      )} */}

      {/* Tab label */}
      <span className="relative z-10">{label}</span>
    </button>
  </div>
);



const GalleryWidget = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.offsetWidth;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };
  return (
    <div className=" w-[720px] h-[330px]  flex flex-row bg-[#363C43] rounded-[20px] shadow-xl pl-[12px] pr-[30px] shadow-bottom-right ">
        <div className=' my-[20px]  flex flex-col items-center justify-between'>
          <img src="/question.svg" alt="Question Bars"  width={24} />
          <img src="/bars.svg" alt="Question Bars"  width={20} height={30} />
          <img className='opacity-0' src="/bars.svg" alt="Question Bars"  width={16} />
        </div>
        
        <div className='flex flex-col  items-center px-[12px]  my-[17px]  w-full gap-[48px]'>
          <div className="w-full flex justify-between items-center mb-4 ">
            <h2 className="text-white font-medium font-poppins bg-[#171717] px-[38px] py-[16px] rounded-[20px] relative overflow-hidden">
              Gallery
              <span className="absolute inset-0  rounded-[20px] bg-gradient-to-b from-[#000000] to-transparent opacity-30"></span>
            </h2>
            <div className="flex gap-[36px]">
              <AddImageButton />
              
              <div className="flex gap-[18px]">
                <button className="bg-gradient-to-br from-[#303439] to-[#161718] text-[#6F787C] px-2 py-2 rounded-full flex items-center justify-center shadow-lg shadow-black/50 w-[45px] h-[45px] hover:bg-gradient-to-br hover:from-[#1F2124] hover:to-[#0F0F10] transition duration-300 ease-in-out hover:scale-105" onClick={() => scroll('left')}>
                  <FaArrowLeft />
                </button>

                <button onClick={() => scroll('right')} className="bg-gradient-to-br from-[#303439] to-[#161718] text-[#6F787C] px-2 py-2 rounded-full flex items-center justify-center shadow-lg shadow-black/50 w-[45px] h-[45px] hover:bg-gradient-to-br hover:from-[#1F2124] hover:to-[#0F0F10] transition-all duration-300 ease-in-out hover:scale-105">
                  <FaArrowRight />
                </button>
              </div>
            </div>

          </div>
          <div
            ref={scrollContainerRef}
            className="w-full flex   gap-4 "
            
          >
            {[1, 2, 3].map((index) => (
              <div key={index} className="flex-shrink-0 w-[200px] rounded-md">
                <img
                  src="/rectangle.svg"
                  alt={`Gallery image ${index}`}
                  className="saturate-0 rounded-[24px] transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1 hover:-translate-x-1 hover:rotate-[-2deg] hover:shadow-[8px_8px_15px_rgba(0,0,0,0.5)] filter hover:filter hover:saturate-100 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
        
    </div>
  );
};

// {/* overflow-x-hidden overflow-y-hidden */}




const GalleryItem = () => (
  <div className="w-[190px] h-[179px] bg-black/20 rounded-3xl"></div>
);

const AddImageButton = () => (
  <div className="shadow-inner shadow-gray-400 rounded-full ">
    <button className="relative bg-inherit text-white rounded-full shadow-[12px_12px_24px_rgba(0,0,0,0.5),-8px_-8px_16px_rgba(255,255,255,0.1)] overflow-hidden text-[12px] font-bold flex items-center space-x-2 py-[16px] pl-[28px] pr-[22px]">
      <FaPlus className='w-[12px] h-[12px]' /> 
      <span>ADD IMAGE</span>
    </button>
  </div>
);

const MainLayout = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#212529] to-[#191B1F] p-10">
      <div className="flex space-x-10 ">
        <div className="w-[836px] h-[689px] bg-[#616161]/80 rounded-[27px] border border-[#95bee6]"></div>
        <div className="space-y-[23px]">
          <SalesRepCard />
          <div class="relative flex justify-center ">
            <div class="shadow-bottom-right h-[4px] w-[612px] bg-gradient-to-b from-[#282828] to-[#f8f8f822] shadow-lg shadow-black rounded-[3px]"></div>
          </div>
          <GalleryWidget />
          <div class="relative flex justify-center">
            <div class="shadow-bottom-right h-[4px] w-[612px] bg-gradient-to-b from-[#282828] to-[#f8f8f822] shadow-lg shadow-black  rounded-[3px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
