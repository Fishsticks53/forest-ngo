import vi from "./vit.jpeg";
;

function Blog() {
    return (
        <div>
            
            <div className="pt-20 px-10 lg:px-20">
            <h1 className="text-4xl font-bold pb-10 pt-20 text-center">
                Planting Trees, Planting Hope: A Recap of Aaranya's Plantation Drive at VIT, Vellore
            </h1>
            <div className="text-lg lg:text-2xl leading-relaxed lg:leading-[60px] text-justify">
                <p className="pb-6">The day buzzed with activity as participants dug planting holes, carefully placed the saplings, and watered them generously. The camaraderie was evident, with lively chatter and laughter filling the air. Aaranya volunteers, easily identifiable by their bright green t-shirts, were on hand to answer questions and provide guidance throughout the day.</p>
                <p className="pb-6">For many students, the event offered a valuable learning experience. Aaranya representatives delivered a short presentation on the ecological benefits of trees, highlighting their role in air purification, soil conservation, and providing habitat for wildlife. The interactive session sparked discussions about the challenges faced by forests and the importance of individual action in preserving them.</p>
                <div className="flex justify-center py-10">
                    <img src={vi} className="w-full lg:w-[60rem] rounded shadow-lg" alt="Plantation Drive at VIT" />
                </div>
                <p className="pb-6">Beyond the environmental impact, the plantation drive fostered a sense of community spirit. Students from various departments and backgrounds came together for a common cause, forging new connections and creating a lasting impact on the VIT campus. The event concluded with a heartfelt speech by Aaranya's founder, expressing gratitude to the volunteers and participants for their contribution to a greener future. Refreshments were served, providing a chance for everyone to unwind and discuss their experiences. The positive energy and commitment to environmental responsibility left a lasting impression on all involved.</p>
            </div>
        </div>
        </div>
    );
};

export default Blog;
