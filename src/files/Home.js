import img2 from "./image2.jpg";
import fou from "./Founder.png";
import sci from "./director.png";
import fi from "./field.png";
import fi2 from "./field2.png";
import ev from "./event.jpeg";
import re from "./restoration.jpeg"
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Navbar/>
            <div className="relative bg-gren-100 min-h-screen">
            <div className="bg-img1 w-screen h-screen flex items-center justify-center">
                <h1 className="text-5xl text-white z-1 italic font-cur2 font-light leading-[100px]">
                    Greenheart: Protecting Forests, Nurturing Our Future
                </h1>
            </div>

            <div className="z-1 py-10 bg-green-100">
                <center className="text-6xl italic font-cur2 font-thin">Our Mission</center>
                <hr className="h-[5px] my-8 bg-gray-200 border-0 dark:bg-black" />
            </div>

            <div className="flex justify-between px-16 py-10 bg-green-100">
                <div className="text-2xl w-1/2 leading-[70px]">
                    <p className="font-rob font-light">
                        Our mission is to protect and restore forests for the benefit of people and the planet. We work to achieve this by promoting sustainable forest management practices,
                        raising awareness about the importance of forests, and advocating for policies that protect our natural heritage.
                        We believe that healthy forests are essential for clean air, water, and biodiversity,
                        and that they play a vital role in combating climate change. We are committed to working with communities, governments,
                        and businesses to ensure a future where forests can thrive.
                    </p>
                </div>
                <div className="w-1/2 flex justify-center">
                    <img src={img2} alt="Our Mission" className="w-[500px] rounded-xl shadow-2xl border-4 border-slate-900" />
                </div>
            </div>

            <div>
                <hr className="h-[5px]  bg-green-100 border-0 dark:bg-black" />
            </div>

            <div className="px-16 pb-20 bg-green-100">
                <center className="text-6xl py-4 bg-green-100">About Us</center>
                <p className="text-2xl font-rob font-light leading-[40px] italic">
                    Rooted in Legacy, Reaching for the Future
                    At GreenHeart, we're a passionate collective dedicated to safeguarding the world's forests. Our journey began in 1982 when Anjali Patel 
                    recognized the urgent need to protect these vital ecosystems. Fueled by a deep respect for nature and a vision for a sustainable future, we embarked on a mission to heal and preserve our precious forests.
                    Over the years, we've grown from a grassroots movement into a respected organization with a global reach. We've fostered a dedicated team of experts, scientists, and advocates who work tirelessly to achieve our goals.
                    Through unwavering commitment and collaborative efforts, we've built strong relationships with local communities, policymakers, and like-minded organizations.
                    Our story is one of continuous learning and adaptation. As the threats to forests evolve, so do our strategies. We embrace innovation and scientific advancements to develop effective conservation solutions.
                    However, our core values – respect, collaboration, and a commitment to long-term impact – remain constant.
                    We invite you to join us on this crucial journey. By supporting our efforts, you become a vital part of the solution. 
                    Together, we can ensure a future where our forests flourish, enriching the lives of present and future generations.
                </p>
            </div>

            <div className="pb-20 bg-green-100">
                <center><span className="text-5xl font-mediun">Meet out team</span></center>
            </div>
            <div className="flex justify-evenly bg-green-100"> {/* the lead members*/}
                <div className="w-80 h-80 border-black border-4 pt-8 duration-200 hover:scale-110 hover:z-10 bg-gray-200 rounded-3xl shadow-2xl shadow-black">
                    <center><img src={fou} className="w-28 pb-3"></img></center>
                    <center><span className="text-2xl "><span className="font-medium">Anjali Patel</span><br/>
                    Founder
                    </span></center>
                    
                </div>
                <div className="w-80 h-80 border-black border-4 pt-8 duration-200 hover:scale-110 hover:z-10 bg-gray-200 rounded-3xl shadow-2xl shadow-black">
                    <center><img src={sci} className="w-28 pb-3"></img></center>
                    <center><span className="text-2xl "><span className="font-medium">Dr. Sahil Sharma</span><br/>
                    Leads the scientific research and data analysis for the organization.
                    </span></center>
                    
                </div>
                <div className="w-80 h-80 border-black border-4 pt-8 duration-200 hover:scale-110 hover:z-10 bg-gray-200 rounded-3xl shadow-2xl shadow-black">
                    <center><img src={fi} className="w-28 pb-3"></img></center>
                    <center><span className="text-2xl "><span className="font-medium">Rani Singh</span><br/>
                    Oversees community engagement programs and fosters relationships with local villages..
                    </span></center>
                    
                </div>
                <div className="w-80 h-80 border-black border-4 pt-8 duration-200 hover:scale-110 hover:z-10 bg-gray-200 rounded-3xl shadow-2xl shadow-black ">
                    <center><img src={fi2} className="w-28 pb-3"></img></center>
                    <center><span className="text-2xl "><span className="font-medium">Dinesh Kapoor</span><br/>
                    Raises awareness about the organization's mission and goals through various media channels.
                    </span></center>
                    
                </div>
            </div>
            <div className="bg-green-100 py-8"><hr className="h-[5px]  bg-gray-200 border-0 dark:bg-black"></hr></div>
        
        
    <div className="flex justify-normal  align-bottom bg-img2 relative pt-80 pb-20">{/*Events part */}
        <div className="absolute top-[9rem] left-[45rem] text-white font-cur2 text-8xl" id="Event">Events</div>
    <div className="border-black border-4 m-8 inline-block rounded-2xl bg-white shadow-lg w-2/4">
    <center><span className="text-2xl font-rob italic font-semibold mb-10">
        <br/>Tree Planting Drive & Educational Workshop </span></center>
        <br/>
        <div className="flex justify-start align-middle gap-8 p-5">
            <div className="w-80">
                <img src={ev} alt="Event Image" className="rounded-3xl shadow-lg"/>
            </div>
            <div className="text-xl leading-10 flex flex-col justify-center">
                <ul className="ml-10 space-y-2">
                    <li><b>Date:</b> Saturday, September 30th, 2024</li>
                    <li><b>Time:</b> 10:00 AM IST (India Standard Time)</li>
                    <li><b>Location:</b> Sanjay Gandhi National Park, Mumbai, India</li>
                </ul>
                <br/>
                <div>
                    <center>
                        <Link to="Event" className="bg-green-500 text-white p-4 rounded-2xl border-black border-2 duration-100 ease-in hover:scale-110 hover:bg-green-600">Know More</Link>
                    </center>
                </div>
            </div>
        </div>
    </div>
    <div className="border-black border-4 m-8 inline-block rounded-2xl bg-white shadow-lg w-2/4">
    <center><span className="text-2xl font-rob italic font-semibold mb-10"><br/>Unlocking the Secrets of the Forest: Educational Walk & Talk</span></center>
        <br/>
        <div className="flex justify-start align-middle gap-8 p-5">
            <div className="w-80">
                <img src={ev} alt="Event Image" className="rounded-3xl shadow-lg"/>
            </div>
            <div className="text-xl leading-10 flex flex-col justify-center">
                <ul className="ml-10 space-y-2">
                    <li><b>Date:</b> Saturday, September 30th, 2024</li>
                    <li><b>Time:</b> 10:00 AM IST (India Standard Time)</li>
                    <li><b>Location:</b> Sanjay Gandhi National Park, Mumbai, India</li>
                </ul>
                <br/>
                <div>
                    <center>
                    <Link to="Event" className="bg-green-500 text-white p-4 rounded-2xl border-black border-2 duration-100 ease-in hover:scale-110 hover:bg-green-600">Know More</Link>                    </center>
                </div>
            </div>
        </div>
    </div>
    <div className="border-black border-4 m-8 inline-block rounded-2xl bg-white shadow-lg w-2/4">
    <center><span className="text-2xl font-rob italic font-semibold mb-10"><br/>Forest Festival: Celebrating Our Woodlands</span></center>
        <br/>
        <div className="flex justify-start align-middle gap-8 p-5">
            <div className="w-80">
                <img src={ev} alt="Event Image" className="rounded-3xl shadow-lg"/>
            </div>
            <div className="text-xl leading-10 flex flex-col justify-center">
                <ul className="ml-10 space-y-2">
                    <li><b>Date:</b> Saturday, September 30th, 2024</li>
                    <li><b>Time:</b> 10:00 AM IST (India Standard Time)</li>
                    <li><b>Location:</b> Sanjay Gandhi National Park, Mumbai, India</li>
                </ul>
                <br/>
                <div>
                    <center>
                    <Link to="Event" className="bg-green-500 text-white p-4 rounded-2xl border-black border-2 duration-100 ease-in hover:scale-110 hover:bg-green-600">Know More</Link>                    </center>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div><hr className="h-[5px]  bg-gray-200 border-0 dark:bg-black"></hr></div>
    <div className="pt-8 bg-green-100 pb-14" id="Project">{/**Projects part  */}
        <center><span className="text-6xl font-cur2 font-medium my-3 ">Projects</span></center>
    </div>
    <div className="flex justify-evenly bg-green-100 pb-8">
    <div className="flex justify-center  w-[30rem] bg-white ">
        <div className=" border-black border-4 flex-col justify-normal">
            <img src={re} className="w-[30rem]"/>
            <center><div className="text-2xl">Forest Restoration Initiative</div></center>
            <center>Join the Forest Restoration Initiative's tree planting event! Help restore the froest and create a healthier future for wildlife and our community. Plant trees, learn about the ecosystem, and have fun in the great outdoors!</center>
            <center className="py-10"><Link to="Project" className="p-4 bg-green-400 rounded-2xl">Know More</Link></center>

        </div>
    </div>
    <div className="flex justify-center  w-[30rem] bg-white">
        <div className=" border-black border-4 flex-col justify-normal">
            <img src={re} className="w-[30rem] "/>
            <center><div className="text-2xl">Forest Restoration Initiative</div></center>
            <center>Join the Forest Restoration Initiative's tree planting event! Help restore the froest and create a healthier future for wildlife and our community. Plant trees, learn about the ecosystem, and have fun in the great outdoors!</center>
            <center className="py-10"><Link to="Project" className="p-4 bg-green-400 rounded-2xl">Know More</Link></center>

        </div>
    </div>
    </div>
    <hr className="h-[5px] bg-gray-200 border-0 dark:bg-black" />
    </div>
    <div className="pt-10  bg-green-100" id="Blog">
        <center><span className="text-6xl ">Blogs</span></center>
        <center><div className="border-black border-4 m-8 inline-block rounded-2xl bg-white shadow-lg w-2/4">
    <center><span className="text-2xl font-rob italic font-semibold mb-10">
        <br/>Planting Trees, Planting Hope</span></center>
        <br/>
        <div className="flex justify-start align-middle gap-8 p-5">
            <div className="w-80">
                <img src={ev} alt="Event Image" className="rounded-3xl shadow-lg"/>
            </div>
            <div className="text-xl leading-10 flex flex-col justify-center">
                <ul className="ml-10 space-y-2">
                    <li><b>By:</b>John Jacob</li>
                    <li><b>Time:</b> 10:00 AM IST</li>
                    
                </ul>
                <br/>
                <div>
                    <center>
                        <Link to="Blog" className="bg-green-500 text-white p-4 rounded-2xl border-black border-2 duration-100 ease-in hover:scale-110 hover:bg-green-600">Know More</Link>
                    </center>
                </div>
            </div>
        </div>
    </div></center>
    </div>

    </div>
    )
}

export default Home;