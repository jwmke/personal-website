import Project from './Project';
import PortfolioHeader from './PortfolioHeader';

const projectsList = [
    {
        name: "Competitive Robotics AI Platform",
        tags: ["PyTorch", "ROS", "OpenCV"],
        description: "Created a robotics platform that incorporated multiple ML models and integrated them into a ROS service, enabling competitive VEXU robots to compete fully autonomously in real-time.",
        media: "yolov5",
        buttonNames: ["CV Repository", "RL Repository"],
        buttonLinks: ["https://github.com/msoe-vex/senior-design-cv", "https://github.com/msoe-vex/senior-design-adversarial-strategy"],
        modalDescription: ["In collaboration with Raider Robotics and MSOE's EECS department, my senior capstone team and I created a robotics platform that incorporated multiple AI models and integrated it into a ROS service. This service in turn enabled competitive VEXU robots to compete fully autonomously in real time against robots from other universities.",
        "My primary contributions to the project were on the computer vision pipeline. For this pipeline, we used a YOLOv5 object identification model that was trained on 500+ hand-labeled images using MSOE's super computer. Inference for this model was run on-robot on an NVIDIA Jetson Nano. Once bounding boxes of objects were identified, ROS2 TF2 was used with the depth information to transform the object vectors to the coordinate frame of the field."],
        modalMediaDetails: [
            { 
                media: 'ai_robot/final-final.gif',
                description: "Pytorch YOLOv5 Inference result with confidence scores, processed in real-time on the NVIDIA Jetson Nano"
            },
            { 
                media: 'ai_robot/input.gif',
                description: "Depth input captured from D435 Intel RealSense camera from VEXU 15\" Robot's point of view"
            },
            { 
                media: 'ai_robot/arch.png',
                description: "An illustration of a high level architecture of the primary components involved in the CV processing pipeline"
            },
            { 
                media: 'ai_robot/sim.gif',
                description: "Simulation of the reinforcement learning adversarial strategy model in action on a custom field representation"
            },
            { 
                media: 'ai_robot/res.png',
                description: "Pytorch object identification model specifications as well as per object validation (P)ercision and (R)ecall"
            },
            { 
                media: 'ai_robot/res2.png',
                description: "OpenAI reinforcement learning model training and validation loss curves, obtained using MSOE's super computer"
            },
        ]
    },
    {
        name: "Lymphocite Detection In Ovarian Cancer Biopsies",
        tags: ["TensorFlow", "SKLearn", "NumPy"],
        description: "Contributed to the effort of detecting early stages of ovarian cancer by using DL models to identify lymphocytes in FTIR biopsy images.",
        media: "lymph",
        buttonNames: ["Project Repository"],
        buttonLinks: ["/"],
        modalDescription: [""],
        modalMediaDetails: [
            { 
                media: 'x/y',
                description: ""
            },
        ]
    },
    {
        name: "RSA & AES Parallelization",
        tags: ["CUDA", "C", "C++"],
        description: "Reverse-engineered the RSA and AES encryption algorithms and used CUDA to enable them to take advantage of parallel processing on GPUs.",
        media: "cuda",
        buttonNames: ["Project Repository"],
        buttonLinks: ["/"],
        modalDescription: [""],
        modalMediaDetails: [
            { 
                media: 'x/y',
                description: ""
            },
        ]
    },
    {
        name: "MSOE Robotics Websites",
        tags: ["React", "Typescript", "NodeJS"],
        description: "Developed and contributed to the Raider Robotics organization's public-facing website and their internal odometry path planning dashboard.",
        media: "splines",
        buttonNames: ["Project Repository"],
        buttonLinks: ["/"],
        modalDescription: [""],
        modalMediaDetails: [
            { 
                media: 'x/y',
                description: ""
            },
        ]
    },
    {
        name: "Glomerular Injury Assessment",
        tags: ["Pytorch", "NumPy", "Pandas"],
        description: "Collaborated on the development of a medical imaging pipeline that used DL models to assist renal pathologists in detecting glomeruli damage in kidneys.",
        media: "glom",
        buttonNames: ["Project Repository"],
        buttonLinks: ["/"],
        modalDescription: [""],
        modalMediaDetails: [
            { 
                media: 'x/y',
                description: ""
            },
        ]
    },
    {
        name: "MSOE Blockchain Development Curriculum Design",
        tags: ["Solidity", "Flask", "LaTeX"],
        description: "Constructed an upper-level technical elective course on blockchain and smart contract development for my university.",
        media: "mics",
        buttonNames: ["Project Repository"],
        buttonLinks: ["/"],
        modalDescription: [""],
        modalMediaDetails: [
            { 
                media: 'x/y',
                description: ""
            },
        ]
    },
];

const Projects = () => {
    return (
        <div className='flex bg-gradient-to-b from-navy to-dark-navy w-full'>
            <div className='mx-auto w-3/4'>
                <div className='mt-44 mb-12'>
                    <PortfolioHeader text={"// Previous contributions"} />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {projectsList.map((projectDetails) => 
                        <Project key={projectDetails.name} details={projectDetails}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects;