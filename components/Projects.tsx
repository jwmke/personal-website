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
        modalDescription: ["In collaboration with Raider Robotics and the Milwaukee School of Engineering's EECS department, my senior capstone team and I created a robotics platform that incorporated multiple AI models and integrated it into a ROS service. This service in turn enabled competitive VEXU robots to compete fully autonomously in real time against robots from other universities.",
        "My primary contributions to the project were on the computer vision pipeline. For this pipeline, we used a YOLOv5 object identification model that was trained on 500+ hand-labeled images using the Milwaukee School of Engineering's super computer. Inference for this model was run on-robot on an NVIDIA Jetson Nano. Once bounding boxes of objects were identified, ROS2 TF2 was used with the depth information to transform the object vectors to the coordinate frame of the field.",
        "In addition to this project being chosen to be presented on to the the Wisconsin Society of Professional Engineers (NSPE-WI), it also won first place at the Rosie Super Computer Challenge and contributed to the Raider Robotics organization winning the second most prestegious award in their division at the 2022 VEXU world championship."],
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
        modalDescription: ["This project was done in collaboration with a self-managed team of 7 students and the Milwaukee School of Engineering's AI Club. We research the problem of detecting lymphocytes in hyperspectral images of ovarian biopsies from ovarian cancer patients. The intention of localizing lymphocytes in these biopsies was to contribute to future research in making human-understandable ovarian cancer classification models. The novelty of our research was from the images in our dataset being scanned using a state-of-the-art Fourier Transform Infrared (FTIR) machine, which provided us with 396 bands of information to analyze.",
                            "Our experimental process began with labeling the data and learning more about working with hyperspectral imaging by evaluating classical supervised machine learning methods such as SVMs, KNN, Naïve Bayes, etc. From there, our experiments shifted to using Tensorflow to architect CNNs for lymphocyte classification as well as experimenting with PCA to assist in the process of data labeling. In addition to the outcomes that can be seen in the attached research paper, we were accepted to speak at two conferences about our outcomes and won second place for best student-authored paper at the Midwest Instruction and Computing Symposium (MICS)."],
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
        name: "MSOE Robotics Websites",
        tags: ["React", "Typescript", "NodeJS"],
        description: "Developed and contributed to the Raider Robotics organization's public-facing website and their internal odometry path planning dashboard.",
        media: "splines",
        buttonNames: ["Path Panning Dashboard", "Public Website"],
        buttonLinks: ["https://msoe-vex.github.io/web-dashboard/www/", "https://msoevex.com"],
        modalDescription: ["As a founding member of both MSOE Robotics and Raider Robotics, I had the opportunity to both lead the development of their public website, as well as work on maintaining and adding new features to their autonomous path planning dashboard.",
        "MSOE Robotics' public website was created with presenting more information to potential sponsors in mind. Because of this, the website was created with fluid website design in mind so it could be as accessible to as many people as possible. The website was created using React and Bootstrap, with an Express backend so our potential sponsors could contact us.",
        "The path planning dashboard website was originally created by Raider Robotics to assist in the creation of their autonomous robotics skills routines. The foundation of the website was built by one of the team members for their previous competitive robotics teams, however, porting the dashboard to a different competitive robotics environment created many issues with its underlying logic. I and other members of the Raider Robotics organization have fixed many of these issues and contributed other new features to the dashboard's functionality such as customization of robot profiles and undo-redo stacks."],
        modalMediaDetails: [
            { 
                media: 'rr_websites/landing.png',
                description: "The landing page of MSOE Robotics public facing websie, with their sponsors logos scrolling at the bottom of the screen"
            },
            { 
                media: 'rr_websites/config.png',
                description: "A menu in the path planning dashboard that is used to create custom completive robot profiles"
            },
            { 
                media: 'rr_websites/demo.png',
                description: "The path planning dashboard used to draw a demonstration path for the 2022 VEXU Game \"Tipping Point\""
            },
            { 
                media: 'rr_websites/out.png',
                description: "A section of JSON which is generated and exported from the path planning dashboard"
            },
        ]
    },
        {
        name: "RSA & AES Parallelization",
        tags: ["CUDA", "C", "C++"],
        description: "Reverse-engineered the RSA and AES encryption algorithms and used CUDA to enable them to take advantage of parallel processing on GPUs.",
        media: "cuda",
        buttonNames: ["Project Repository"],
        buttonLinks: ["https://github.com/Joseph5062A/cs4981-cuda-encryption"],
        modalDescription: ["This project was done to learn and apply knowledge of Nvidia’s CUDA toolkit by applying parallelization to two widely used encryption algorithms, RSA and AES. The group I worked with on this project started by initially writing the encryption algorithms serially in C, using existing C++ implementations of the algorithms as reference. From there, CUDA was used to parallelize them. Both serial and parallel implementations of the algorithms were then profiled, using an Intel i5 6600K and an Nvidia RTX 2080, to calculate the parallelization speedup which can be seen in the figures above."],
        modalMediaDetails: [
            { 
                media: 'rsa_aes/rsa.png',
                description: "RSA encryption time on CPU vs GPU"
            },
            { 
                media: 'rsa_aes/rsa_t.png',
                description: "Speedups obtained between RSA CPU and GPU implementations"
            },
            { 
                media: 'rsa_aes/aes.png',
                description: "AES encryption time on CPU vs GPU"
            },
            { 
                media: 'rsa_aes/aes_t.png',
                description: "Speedups obtained between AES CPU and GPU implementations"
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
        buttonNames: ["Curriculum Repository", "MICS Proceedings"],
        buttonLinks: ["https://github.com/Joseph5062A/blockchain-development-curriculum", "https://micsymposium.org/mics2022/mics-2022-proceedings.pdf#page=232"],
        modalDescription: ["This project was done in collaboration with the Milwaukee School of Engineering's EECS department to develop a technical elective course on blockchain and smart contract development that would be taught to upperclassmen majoring in Computer Science and Software Engineering. Over the span of 3 months I created lecture material guides for professors and developed hands-on exercises for students. These materials were made using both my prior industry experience with blockchain as well as from independent research on the technology.",
        "The lecture material included everything from the fundamentals of blockchain as a data structure, to advanced topics pertaining to public blockchain networks and smart contracts. The exercises I created included Jupyter Notebooks to demonstrate atomic blockchain topics such as hashing, creating a cryptocurrency and associated public blockchain network from scratch using python and flask, and creating and deploying smart contracts on the Ethereum network that follow the ERC20 and ERC721 standards.",
        "After developing the course I also was accepted to give a presentation at the Midwest Instruction and Computing Symposium (MICS) regional conference on the insights I made while creating it."],
        modalMediaDetails: [
            { 
                media: 'blockchain/teaching.png',
                description: "Example page from one of the created lecture material guide documents"
            },
            { 
                media: 'blockchain/scratch.png',
                description: "Hands-on student exercise for creating a cryptocurrency from scratch in a Jupyter Notebook"
            },
            { 
                media: 'blockchain/example.png',
                description: "Example ERC20 smart contract that was thoroughly commented to be used as an example for an exercise"
            },
            { 
                media: 'blockchain/instructions.png',
                description: "Associated instruction document for one of the designed hands-on student exercises"
            },
            { 
                media: 'blockchain/blackjack.png',
                description: "Stubbed out template smart contract, used by students as a starting point for an exercise"
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