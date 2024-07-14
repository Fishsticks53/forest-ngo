import re from "./forest2.jpg";


function Project(){
    return(
        <div>
          
            <div className="pt-20">
            <div>
                <span className="text-5xl font-rob ml-10 font-medium">Canopy Connection Project</span>
            </div>
            <div className="flex justify-normal mx-20 mt-20">
                <div>
                    <img src={re} className="w-96" alt="images"/>
                </div>
                <div>
                    <ul className="ml-10 space-y-2 text-4xl leading-[80px]">
                        <li>Canopy Connection Project</li>
                        <li>Saturday, October 26th, 2024 (9:00 AM - 1:00 PM)</li>
                        <li><b>Location:</b> Sanjay Gandhi National Park, Mumbai, India</li>
                    </ul>
                </div>
            </div>
            <div className="text-2xl mx-20 mt-20 leading-[70px] mb-20">
            <h1></h1>
    
    <h2 className="text-4xl"><b>Project Description: </b></h2>
    <p className="pl-10">Join GreenHeart for the Canopy Connection Project, a crucial initiative to build rope bridges within the El Dorado Rainforest Reserve. These bridges will reconnect fragmented sections of the rainforest canopy, allowing endangered three-toed sloths and other arboreal mammals to safely traverse the forest and access vital resources.</p>
    <h2>What will happen</h2>
    <h3><b>Morning</b></h3>
    <ul>
        <li>Volunteers will meet at the designated location within the reserve and receive a safety briefing from experienced staff.</li>
        <li>Our team will provide a short educational session on the importance of canopy connectivity for rainforest health and the ecological role of three-toed sloths.</li>
    </ul>
    <h3><b>Mid-Morning</b></h3>
    <ul className="pl-10 list-disc">
        <li>Volunteers will be divided into teams and guided to specific locations within the reserve where the rope bridges will be constructed.</li>
        <li>Under the supervision of experts, volunteers will assist with tasks like:
            <ul className="pl-20 list-disc">
                <li>Assembling pre-fabricated bridge components.</li>
                <li>Securing the bridges between designated trees.</li>
                <li>Stringing ropes and creating a safe passage for wildlife.</li>
            </ul>
        </li>
    </ul>
    <h3><b>Lunch Break</b></h3>
    <p className="pl-10">A delicious and healthy boxed lunch will be provided for all volunteers.</p>
    <h3><b>Afternoon</b></h3>
    <ul className="pl-10 list-disc">
        <li>Volunteers will continue bridge construction efforts and ensure all projects are completed.</li>
        <li>The afternoon will conclude with a wrap-up session, where volunteers can ask questions and learn about the project's overall impact.</li>
    </ul>
    <h2><b>Why participate?</b></h2>
    <p className="pl-10">By participating in the Canopy Connection Project, you'll directly contribute to the conservation of the El Dorado Rainforest and its amazing wildlife. This project is a fantastic opportunity to:</p>
    <ul className="pl-20 list-disc">
        <li>Give back to the environment through hands-on conservation work.</li>
        <li>Learn about the rainforest ecosystem and the challenges faced by endangered species like three-toed sloths.</li>
        <li>Work alongside passionate individuals and contribute to a lasting positive impact.</li>
    </ul>
    
    
            </div>
            <div className="pb-20">
                <center><span className="text-2xl bg-green-400 p-5 text-white rounded-3xl hover:bg-green-600 ease-in duration-200">To register click here</span></center>
            </div>
        </div>
        </div>
    )
};

export default Project;
