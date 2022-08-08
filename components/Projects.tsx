import Project from './Project';
import PortfolioHeader from './PortfolioHeader';

const projectsList = [
    {
        name: "Competitive Robotics AI Platform",
        tags: ["PyTorch", "ROS", "OpenCV"],
        description: "Created a robotics platform that incorporated multiple ML models and integrated them into a ROS service, enabling competitive VEXU robots to compete fully autonomously in real-time.",
        media: "yolov5"
    },
    {
        name: "Lymphocite Detection In Ovarian Cancer Biopsies",
        tags: ["TensorFlow", "SKLearn", "NumPy"],
        description: "Contributed to the effort of detecting early stages of ovarian cancer by using DL models to identify lymphocytes in FTIR biopsy images.",
        media: "lymph"
    },
    {
        name: "RSA & AES Parallelization",
        tags: ["CUDA", "C", "C++"],
        description: "Reverse-engineered the RSA and AES encryption algorithms and used CUDA to enable them to take advantage of parallel processing on GPUs.",
        media: "cuda"
    },
    {
        name: "MSOE Robotics Websites",
        tags: ["React", "Typescript", "Express"],
        description: "Developed and contributed to the Raider Robotics organization's public-facing website and their internal odometry path planning dashboard.",
        media: "splines"
    },
    {
        name: "Glomerular Injury Assessment",
        tags: ["Pytorch", "NumPy", "Pandas"],
        description: "Collaborated on the development of a medical imaging pipeline that used DL models to assist renal pathologists in detecting glomeruli damage in kidneys.",
        media: "glom"
    },
    {
        name: "MSOE Blockchain Development Curriculum Design",
        tags: ["Solidity", "Flask", "LaTeX"],
        description: "Constructed an upper-level technical elective course on blockchain and smart contract development for my university.",
        media: "mics"
    },
];

const Projects = () => {
    return (
        <div className='bg-navy flex w-full'>
            <div className='mx-auto w-3/4'>
                <div className='mt-44 mb-12'>
                    <PortfolioHeader text={"// Previous contributions"} />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {projectsList.map((projectDetails) => 
                        <Project details={projectDetails}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects;