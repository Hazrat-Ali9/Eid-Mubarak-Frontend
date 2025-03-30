import React, { useRef, useState } from 'react';
import { FiPlus } from "react-icons/fi";
import domtoimage from "dom-to-image";
import {FastAverageColor} from 'fast-average-color';
import { RxAvatar } from "react-icons/rx";

const ImageHandler = ({username, quote}) => {
    const cardRef = useRef(null);
    const [backgroundImg, setBackgroundImg] = useState('https://res.cloudinary.com/cloudinarybysp/image/upload/v1743348029/personal/okxzm9he6m6tqtueadpn.jpg');
      const [averageColor, setAverageColor] = useState("#EDB38E");

    const downloadCard = () => {
      
        if (cardRef.current) {
          domtoimage.toPng(cardRef.current).then((dataUrl) => {
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = "steam_record.png";
            link.click();
          });
        }
      };


      

    const handleUploadBackgroundPic = async(e) => {
        const file = e.target.files[0];
        if (file) {
        const imageUrl = URL.createObjectURL(file);
        setBackgroundImg(imageUrl);

        try {
            const fac = new FastAverageColor();

            // Create a new image element
            const img = new Image();
            img.src = imageUrl;

            // Wait until the image is loaded
            img.onload = async () => {
            try {
                const color = await fac.getColorAsync(img);
                setAverageColor(color.hex); // Set the average color in hex format
            } catch (error) {
                console.error('Error extracting average color:', error);
            }
            };

            img.onerror = (error) => {
            console.error('Error loading image:', error);
            };
        } catch (error) {
            console.error('Error extracting average color:', error);
        }
        }
    }


    const handleColorToImage = (color) => {
        // console.log(e.target.files)
        // // const img = e.target.files[0]
        if(color === "D34E45"){
            setAverageColor("#D34E45")
            setBackgroundImg('https://res.cloudinary.com/cloudinarybysp/image/upload/v1743348029/personal/cln8l6eegzp2wvaxwqj6.jpg')
        }
        else if(color === "EDB38E"){
            setAverageColor("#EDB38E")
            setBackgroundImg('https://res.cloudinary.com/cloudinarybysp/image/upload/v1743348029/personal/okxzm9he6m6tqtueadpn.jpg')
        }
        else if(color === "7AB8C7"){
            setAverageColor("#7AB8C7")
            setBackgroundImg('https://res.cloudinary.com/cloudinarybysp/image/upload/v1743348029/personal/nmls8zecglo6bzeloefr.jpg')
        }
        else if(color === "F8AA46"){
            setAverageColor("#F8AA46")
            setBackgroundImg('https://res.cloudinary.com/cloudinarybysp/image/upload/v1743348029/personal/f8cxnv5wqafbr4cmhgvz.jpg')
        }
    }

    const [avatar, setAvatar] = useState("")
    const handleUpdateAvatar = (e) =>{
        return setAvatar(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row gap-2'>
            <div className='md:w-[45%] p-5 md:p-0'>
                <div className=''>
                    <label htmlFor="user_avatar" className='relative group duration-300'>
                        {
                            backgroundImg ?
                            <div className='h-[200px] bg-[#fff3ef83] rounded-lg flex justify-center items-center border-[1px] border-[#996f5e84] overflow-hidden'>
                                <img src={backgroundImg} alt="" />
                            </div>
                            :
                            <div className='h-[200px] bg-[#fff3ef83] rounded-lg flex justify-center items-center border-[1px] border-[#996f5e84]'>
                                <FiPlus className='text-3xl text-[#996f5ed0]'/>
                            </div>
                        }
                        {
                            backgroundImg &&
                            <div className={`absolute top-0 w-full h-full justify-center items-center rounded-lg hidden group-hover:flex bg-[#303030c0] cursor-pointer`} >
                                <p className='text-white'>tap to change background</p>
                            </div>
                        }
                    </label>
                    <input onChange={handleUploadBackgroundPic} className='hidden' id='user_avatar' type="file" accept='.jpg, .jpeg, .png' />
                    <p className='text-sm pl-2 text-[#513411] mt-1'>to change the background tap on this image </p>
                </div>

                {/* user avatar  */}
                <div className='mt-3'>
                    <label htmlFor="use_background" className='relative group duration-300'>
                        {
                            avatar ?
                            <div className='h-[200px] bg-[#fff3ef83] rounded-lg flex justify-center items-center border-[1px] border-[#996f5e84] overflow-hidden'>
                                <img src={avatar} alt="" />
                            </div>
                            :
                            <div className='h-[200px] bg-[#fff3ef83] rounded-lg flex justify-center items-center border-[1px] border-[#996f5e84]'>
                                <RxAvatar className='text-6xl text-[#996f5ed0]'/>
                            </div>
                        }
                        {
                            avatar &&
                            <div className={`absolute top-0 w-full h-full justify-center items-center rounded-lg hidden group-hover:flex bg-[#303030c0] cursor-pointer`} >
                                <p className='text-white'>tap to change avatar</p>
                            </div>
                        }
                    </label>
                    <input id='use_background' onChange={handleUpdateAvatar} className='hidden' type="file" accept='.jpg' />
                    <p className='text-sm pl-2 text-[#513411] mt-1'>to change the avatar tap on this image </p>

                </div>

                <div className='mt-4 flex gap-2 pl-2'>
                    <button onClick={() => handleColorToImage('D34E45')} className='bg-[#D34E45] w-[40px] h-[40px] border-2 border-[#ffffff] ring-2 ring-[#D34E45] rounded-full'></button>
                    <button onClick={() => handleColorToImage('EDB38E')} className='bg-[#EDB38E] w-[40px] h-[40px] border-2 border-[#ffffff] ring-2 ring-[#EDB38E] rounded-full'></button>
                    <button onClick={() => handleColorToImage('7AB8C7')} className='bg-[#7AB8C7] w-[40px] h-[40px] border-2 border-[#ffffff] ring-2 ring-[#7AB8C7] rounded-full'></button>
                    <button onClick={() => handleColorToImage('F8AA46')} className='bg-[#F8AA46] w-[40px] h-[40px] border-2 border-[#ffffff] ring-2 ring-[#F8AA46] rounded-full'></button>
                </div>
            </div>

            {/* // main card  */}
            <section  className='md:w-[55%] md:mt-0 mt-10'>
            <div ref={cardRef} className=' md:h-[550px] h-[600px] md:rounded-lg  md:px-10 px-5 md:py-5 py-10 relative overflow-hidden' style={{backgroundImage: `url('${backgroundImg}')`, backgroundPosition: 'left', backgroundSize: "cover",}}>
            <div className='absolute inset-0 w-full h-full z-10 bg-[#0000007a]' style={{backdropFilter: 'blur(10px)'}}>
            </div>
                <div className='h-full w-full rounded-lg relative overflow-hidden z-20'>
                    <img className='object-cover h-full w-full rounded-lg ' src={backgroundImg} alt="" />
                    <div className={`absolute w-full h-full top-0 z-10 `}  style={{
                        background: `linear-gradient(to top right, rgba(0, 0, 0, 0.8), ${averageColor}99)`,
                    }} >
                        <div className='h-full flex items-end p-5 '>
                            <div className=''>
                            <div>
                                <p className='text-white'>{quote ? quote : "May this Eid bring you endless joy, peace, and blessings. Celebrate with love, laughter,and gratitude! 🎉💖"}</p>
                            </div>
                            <div className=' flex items-center gap-2 mt-5'>
                                <div className='w-[45px] h-[45px] rounded-full'>
                                    <img style={{borderColor: `${averageColor}`}} className={`rounded-full p-[2px] h-[45px] object-cover w-[45px] border-[2px]`} src={avatar ? avatar : "/assets/null_avatar.jpg"} alt="" />
                                </div>
                                <h2 style={{color: `${averageColor ? averageColor : "#fff"}`}} className='text-lg uppercase font-semibold'>{username ? username : "e card"}</h2>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>

        </div>
        
        <div className='md:p-0 px-5 pb-10'>
            <button onClick={downloadCard} className='w-full cursor-pointer py-2 bg-[#622912] text-white mt-5 rounded-lg'>Download</button>
        </div>
        </div>
    );
};

export default ImageHandler;