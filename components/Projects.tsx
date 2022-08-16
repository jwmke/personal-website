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
        buttonNames: ["Research Paper"],
        buttonLinks: ["https://docs.google.com/document/d/1YkO8mkcz19KvroQULFOB0WEohKV8DlU96FI562UqiI0/edit?usp=sharing"],
        modalDescription: ["🚧"],
        modalMediaDetails: [
            { 
                media: 'lymphocytes/macro.png',
                description: "Macro locations of annotated lymphocytes in biopsy data set plotted on image of single FTIR band"
            },
            { 
                media: 'lymphocytes/labels.png',
                description: "H&E stained, pathologist labeled biopsy (left), versus FTIR biopsy with individually labeled lymphocytes (right)"
            },
            { 
                media: 'lymphocytes/cnn.png',
                description: "Initial CNN architecture which resulted in a 92.5% validation accuracy"
            },
            { 
                media: 'lymphocytes/ml.png',
                description: "Validation accuracy of various tuned classical machine learning models"
            },
            { 
                media: 'lymphocytes/results.png',
                description: "Result of performing inference on single unseen biopsy using tuned CNN"
            },
            { 
                media: 'lymphocytes/pca_lymph.png',
                description: "Experimental results of training PCA on 394 FTIR bands and using top 3 components as RGB"
            },
        ]
    },
    {
        name: "RSA & AES Parallelization",
        tags: ["CUDA", "C", "C++"],
        description: "Reverse-engineered the RSA and AES encryption algorithms and used CUDA to enable them to take advantage of parallel processing on GPUs.",
        media: "cuda",
        buttonNames: ["🚧"],
        buttonLinks: ["/"],
        modalDescription: ["🚧"],
        modalMediaDetails: [
            { 
                media: '🚧',
                description: "🚧"
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
        modalDescription: ["🚧"],
        modalMediaDetails: [
            { 
                media: '🚧',
                description: "🚧"
            },
        ]
    },
    {
        name: "Glomerular Injury Assessment",
        tags: ["Pytorch", "NumPy", "Pandas"],
        description: "Collaborated on the development of a medical imaging pipeline that used DL models to assist renal pathologists in detecting glomeruli damage in kidneys.",
        media: "glom",
        buttonNames: ["Research Paper"],
        buttonLinks: ["https://docs.google.com/document/d/16fRJc6sCx7VOCY9jI98N0LgK6DeT7-75AQhBO7UmZqs/edit?usp=sharing"],
        modalDescription: ["For this project, I had the opportunity to work on a team with 4 other students while collaborating with the Medical College of Wisconsin to perform medical imaging research. The project had two primary goals. The first goal was to investigate how the severity of lesions to glomeruli can be objectively assessed given kidney cross-sections, and the second goal was to create a pipeline that would assist renal pathologists in their work of detecting glomeruli damage in kidneys. To achieve both of these objectives, we implemented and experimented with multiple approaches including but not limited to Convolution Neural Networks, Clustering, and Principal Component Analysis."],
        modalMediaDetails: [
            { 
                media: 'glomeruli/hist.png',
                description: "Histogram displaying the uneven image category distribution of injury scores in labled data"
            },
            { 
                media: 'glomeruli/kidney.png',
                description: "Visualization of the location of glomeruli (orange) plotted relative to the surface of the kidney (blue)"
            },
            { 
                media: 'glomeruli/var.png',
                description: "Example of interobserver variance in pathologists scorings of randomly sampled glomeruli images"
            },
            { 
                media: 'glomeruli/pipeline.png',
                description: "High-level architecture of the developed glomerular scoring pipeline"
            },
            { 
                media: 'glomeruli/aug.png',
                description: "A subset of image augmentation techniques that were used to mitigate the uneven data distribution"
            },
            { 
                media: 'glomeruli/conf.png',
                description: "Confusion matrix of the results of the MVP CNN trained on an evenly distributed augmented version of the dataset"
            },
            { 
                media: 'glomeruli/res.png',
                description: "Ranomly sampled pipeline predictions of True Positive and False Positive results along with their labels"
            },
        ]
    },
    {
        name: "MSOE Blockchain Development Curriculum Design",
        tags: ["Solidity", "Flask", "LaTeX"],
        description: "Constructed an upper-level technical elective course on blockchain and smart contract development for my university.",
        media: "mics",
        buttonNames: ["🚧"],
        buttonLinks: ["/"],
        modalDescription: ["🚧"],
        modalMediaDetails: [
            { 
                media: '🚧',
                description: "🚧"
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