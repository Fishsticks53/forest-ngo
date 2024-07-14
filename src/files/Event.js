import ev from "./event.jpeg";


function Event(){
    return(
        <div>
      
            <div className="pt-20">
            <div>
                <span className="text-5xl font-rob ml-10 font-medium">Tree Planting Drive & Educational Workshop</span>
            </div>
            <div className="flex justify-normal mx-20 mt-20">
                <div>
                    <img src={ev} className="w-96" alt="images"/>
                </div>
                <div>
                    <ul className="ml-10 space-y-2 text-4xl leading-[80px]">
                        <li><b>Date:</b> Saturday, September 30th, 2024</li>
                        <li><b>Time:</b> 10:00 AM IST (India Standard Time)</li>
                        <li><b>Location:</b> Sanjay Gandhi National Park, Mumbai, India</li>
                    </ul>
                </div>
            </div>
            <div className="text-2xl mx-20 mt-20 leading-[70px] mb-20">
                <ul>
                    <li><b>Tree Planting: </b>We'll be planting native tree species like Neem, Peepal, and Kadamba to help restore a degraded forest area within Sanjay Gandhi National Park. Learn about the importance of these trees in providing clean air, reducing soil erosion, and supporting local wildlife.</li>
                    <li><b>Education Workshop: </b>Our forest rangers will lead a short workshop on forest conservation in India, covering topics like threats from deforestation and wildfires, the benefits of trees, and sustainable practices we can all adopt.</li>
                    <li><b>Family_Friendly Activities: </b>This event is perfect for families with children! We'll have fun and educational activities like seed identification games and learning about the vital role of insects in the forest ecosystem.</li>
                    <li><b>Refreshments: </b>Light refreshments like local fruits and snacks will be provided.</li>
                </ul>
            </div>
            <div>
                <center><span className="text-2xl bg-green-400 p-5 text-white rounded-3xl hover:bg-green-600 ease-in duration-200">To register click here</span></center>
            </div>
        </div>
        </div>
    )
};

export default Event;
