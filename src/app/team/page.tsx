import Navbar from "./../components/Navbar";
import Image from 'next/image'
import {AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'


export default function Page() {
    return (
        <main className="bg-white relative flex h-full flex-col items-center md:px-24 px-6">
            <Navbar/>
            <div className="bg-gradient-to-tr from-slate-500 to-stone-700">
            <div className="w-screen filter mix-blend-overlay bg-cover relative bg-[url('./../../public/banner.jpg')] object-cover h-[100px] md:h-[200px]">
            </div>
      </div>
      <div className="text-4xl text-primary font-bold absolute rounded-md w-4/5 text-left right-0 left-0 top-24 md:top-44 mx-auto bg-white h-fit p-8 shadow-md">
                Our Team

                <div className="text-3xl my-4">
                    Management

                    <div className="grid md:grid-cols-4 grid-cols-1 my-4 gap-4 text-black justify-center">
                        <div>
                        <Image 
                        src="/profile.png"
                        alt="profile"
                        height="200"
                        width="200"
                        className=""
                        />

                        <span className="text-xl">
                            Name
                        </span>
                        <p className="text-sm font-normal">Some Designation</p>

                        <div className="flex mt-4">
                            <AiFillLinkedin 
                            fontSize={35}
                            className="mr-2 text-[#0072B1] hover:text-[#0072B1]/50 hover:cursor-pointer"
                            />
                            <AiOutlineMail 
                            fontSize={35}
                            className="ml-2 text-[#E34133] hover:text-[#E34133]/50 hover:cursor-pointer"
                            />
                        </div>
                        </div>


                        <div>
                        <Image 
                        src="/profile.png"
                        alt="profile"
                        height="200"
                        width="200"
                        className=""
                        />

                        <span className="text-xl">
                            Name
                        </span>
                        <p className="text-sm font-normal">Some Designation</p>

                        <div className="flex mt-4">
                            <AiFillLinkedin 
                            fontSize={35}
                            className="mr-2 text-[#0072B1] hover:text-[#0072B1]/50 hover:cursor-pointer"
                            />
                            <AiOutlineMail 
                            fontSize={35}
                            className="ml-2 text-[#E34133] hover:text-[#E34133]/50 hover:cursor-pointer"
                            />
                        </div>
                        </div>



                        <div>
                        <Image 
                        src="/profile.png"
                        alt="profile"
                        height="200"
                        width="200"
                        className=""
                        />

                        <span className="text-xl">
                            Name
                        </span>
                        <p className="text-sm font-normal">Some Designation</p>

                        <div className="flex mt-4">
                            <AiFillLinkedin 
                            fontSize={35}
                            className="mr-2 text-[#0072B1] hover:text-[#0072B1]/50 hover:cursor-pointer"
                            />
                            <AiOutlineMail 
                            fontSize={35}
                            className="ml-2 text-[#E34133] hover:text-[#E34133]/50 hover:cursor-pointer"
                            />
                        </div>
                        </div>



                        <div>
                        <Image 
                        src="/profile.png"
                        alt="profile"
                        height="200"
                        width="200"
                        className=""
                        />

                        <span className="text-xl">
                            Name
                        </span>
                        <p className="text-sm font-normal">Some Designation</p>

                        <div className="flex mt-4">
                            <AiFillLinkedin 
                            fontSize={35}
                            className="mr-2 text-[#0072B1] hover:text-[#0072B1]/50 hover:cursor-pointer"
                            />
                            <AiOutlineMail 
                            fontSize={35}
                            className="ml-2 text-[#E34133] hover:text-[#E34133]/50 hover:cursor-pointer"
                            />
                        </div>
                        </div>



                        <div>
                        <Image 
                        src="/profile.png"
                        alt="profile"
                        height="200"
                        width="200"
                        className=""
                        />

                        <span className="text-xl">
                            Name
                        </span>
                        <p className="text-sm font-normal">Some Designation</p>

                        <div className="flex mt-4">
                            <AiFillLinkedin 
                            fontSize={35}
                            className="mr-2 text-[#0072B1] hover:text-[#0072B1]/50 hover:cursor-pointer"
                            />
                            <AiOutlineMail 
                            fontSize={35}
                            className="ml-2 text-[#E34133] hover:text-[#E34133]/50 hover:cursor-pointer"
                            />
                        </div>
                        </div>


                        <div>
                        <Image 
                        src="/profile.png"
                        alt="profile"
                        height="200"
                        width="200"
                        className=""
                        />

                        <span className="text-xl">
                            Name
                        </span>
                        <p className="text-sm font-normal">Some Designation</p>

                        <div className="flex mt-4">
                            <AiFillLinkedin 
                            fontSize={35}
                            className="mr-2 text-[#0072B1] hover:text-[#0072B1]/50 hover:cursor-pointer"
                            />
                            <AiOutlineMail 
                            fontSize={35}
                            className="ml-2 text-[#E34133] hover:text-[#E34133]/50 hover:cursor-pointer"
                            />
                        </div>
                        </div>


                        <div>
                        <Image 
                        src="/profile.png"
                        alt="profile"
                        height="200"
                        width="200"
                        className=""
                        />

                        <span className="text-xl">
                            Name
                        </span>
                        <p className="text-sm font-normal">Some Designation</p>

                        <div className="flex mt-4">
                            <AiFillLinkedin 
                            fontSize={35}
                            className="mr-2 text-[#0072B1] hover:text-[#0072B1]/50 hover:cursor-pointer"
                            />
                            <AiOutlineMail 
                            fontSize={35}
                            className="ml-2 text-[#E34133] hover:text-[#E34133]/50 hover:cursor-pointer"
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}