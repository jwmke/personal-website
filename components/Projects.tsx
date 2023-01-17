import Project from './Project';
import PortfolioHeader from './PortfolioHeader';

const projectsList = [
    {
        name: "Competitive Robotics AI Platform",
        tags: ["PyTorch", "ROS", "OpenCV"],
        description: "Created a robotics platform that incorporated multiple ML models and integrated them into a ROS service, enabling competitive VEXU robots to compete fully autonomously in real-time.",
        media: "yolov5",
        mediaBlur: "data:image/jpeg;base64,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",
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
        name: "Collabify",
        tags: ["Go", "React", "TypeScript", "Tailwind"],
        description: "Designed and developed a web application that allows Spotify users to discover and visualize all of the songs that their favorite artists have collaborated on.",
        media: "collab",
        mediaBlur: "data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==",
        buttonNames: ["Repository"],
        buttonLinks: ["https://github.com/jwmke/Collabify"],
        modalDescription: ["This open-source project was independently created with three primary purposes in mind. 1: To learn more about the Go programming language and its features, such as concurrency, through developing a backend with it. 2: Continue to enhance my knowledge of UX / frontend development. 3: Create an application that other people could use to gain further insights into their music taste and discover new songs",
        "Collabify is an open-source web application that allows its users to easily discover all of the songs their favorite artists have collaborated on. To achieve this, a user will first authorize the app to access their user data through the Spotify Authentication page. Once authorized, Collabify will retrieve their followed artist information, present it to the user, and prompt them to select any combination of artists they would like to view all collaborations for. Once these artists have been selected, a WebSocket is opened with the backend API written in Go and the artist IDs are passed through it as a list. Next, for every artist, the API creates a Goroutine. In each of these Goroutines, the discography of the artist is retrieved through the Spotify API and the artists from every song with multiple artists are compared against a map that contains all of the artists that the user initially selected. Whenever a featured artist on a track is found within the map, that track is sent back to the frontend via the WebSocket.",
        "In the frontend, a live interactive 3d graph is being created for the user as the tracks are found. This graph contains artists as its nodes and links between artists that have dynamic sizes which change based on how many tracks the artists have collaborated on together on. The user can then hover over the links between any artists to open a modal in the corner that shows all of the tracks between those two artists. Once all tracks have been discovered, the WebSocket closes and a final modal automatically opens that displays quick statistics, such as how many tracks were found between how many artists, and who the top five artist pairs were who had the most collabs. Lastly, the user can click a button to create a playlist in their Spotify account containing all the discovered tracks.",
        "Live site coming soon."],
        modalMediaDetails: [
            { 
                media: 'collabify/followingV2.png',
                description: "Followed artist page which prompts users to select which of their favorite artists they want to discover collabs between"
            },
            { 
                media: 'collabify/statsV2.png',
                description: "3d collab graph page which uses ThreeJS to make network of artists linked by their collab tracks. General stats are also displayed"
            },
            { 
                media: 'collabify/collab.png',
                description: "Mobile UI renderings for the artist selection page and the collabify 3d collab graph visualization page"
            },
            { 
                media: 'collabify/chart.png',
                description: "Flow chart containing high-level overview of Collabify architecture"
            },
            { 
                media: 'collabify/auth.png',
                description: "Authentication page that users are directed to to authorize Collabify to use their Spotify account data"
            },
            { 
                media: 'collabify/landing.png',
                description: "Landing page that users are initially greeted by, prompting them to authenticate with Spotify in order to use Collabify"
            },
        ]
    },
    {
        name: "Lymphocite Detection In Ovarian Cancer Biopsies",
        tags: ["TensorFlow", "SKLearn", "NumPy"],
        description: "Contributed to the effort of detecting early stages of ovarian cancer by using DL models to identify lymphocytes in FTIR biopsy images.",
        media: "lymph",
        mediaBlur: "data:image/jpeg;base64,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",
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
        name: "Raider Robotics Websites",
        tags: ["React", "Typescript", "SCSS", "Express"],
        description: "Developed and contributed to the Raider Robotics organization's public-facing website and their internal odometry path planning dashboard.",
        media: "splines",
        mediaBlur: "data:image/jpeg;base64,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",
        buttonNames: ["Path Panning Dashboard", "Public Website"],
        buttonLinks: ["https://dashboard.msoevex.com/", "https://msoevex.com"],
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
    // {
    //     name: "RSA & AES Parallelization",
    //     tags: ["CUDA", "C", "C++"],
    //     description: "Reverse-engineered the RSA and AES encryption algorithms and used CUDA to enable them to take advantage of parallel processing on GPUs.",
    //     media: "cuda",
    //     mediaBlur: "data:image/jpeg;base64,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",
    //     buttonNames: ["Project Repository"],
    //     buttonLinks: ["https://github.com/jwmke/cs4981-cuda-encryption"],
    //     modalDescription: ["This project was done to learn and apply knowledge of Nvidia's CUDA toolkit by applying parallelization to two widely used encryption algorithms, RSA and AES. The group I worked with on this project started by initially writing the encryption algorithms serially in C, using existing C++ implementations of the algorithms as reference. From there, CUDA was used to parallelize them. Both serial and parallel implementations of the algorithms were then profiled, using an Intel i5 6600K and an Nvidia RTX 2080, to calculate the parallelization speedup which can be seen in the figures above."],
    //     modalMediaDetails: [
    //         { 
    //             media: 'rsa_aes/rsa.png',
    //             description: "RSA encryption time on CPU vs GPU"
    //         },
    //         { 
    //             media: 'rsa_aes/rsa_t.png',
    //             description: "Speedups obtained between RSA CPU and GPU implementations"
    //         },
    //         { 
    //             media: 'rsa_aes/aes.png',
    //             description: "AES encryption time on CPU vs GPU"
    //         },
    //         { 
    //             media: 'rsa_aes/aes_t.png',
    //             description: "Speedups obtained between AES CPU and GPU implementations"
    //         },
    //     ]
    // },
    {
        name: "Glomerular Injury Assessment",
        tags: ["Pytorch", "NumPy", "Pandas"],
        description: "Collaborated on the development of a medical imaging pipeline that used DL models to assist renal pathologists in detecting glomeruli damage in kidneys.",
        media: "glom",
        mediaBlur: "data:image/jpeg;base64,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aazqaDWms6aK1qazq6gurrGmg1prOmitaazpoNaazpoNaazpoNaM6A9d01jTVc29NY00GtNY00G9NY00GtNY00GtNY00GtNY00GtTWdTQb1NZ1NBrU1nU1RrU1nU0GtTU1nQatS1nU0Rq1m1LUtBdTWbUtBrWbUtS0FtS1m1LQW1LUtZtBbUtS1m0RbUtS1m0FtZtLWbQW1m0tZtBbWbS1m0C1LUtS1QtS1LUtAtZtLWbQW1m0tZtAtS0tZtAtS1LUtAtZtLUtAtZtLWbQW1m0tZtBbWbS1m1BbU1LU0F1m01m0FtS1LUtFXU1NTQXU1LU1FXU1nTQXTWdTRWtTWdNBrU1nTRWtNY00GtNY00VrTWdTUG9NY00VvTWNNBvTXPTRW9NY00G9NY09A3prHo9A3ox6Aeu6msaark3prGmg3prGpoOmprGmg3prGpoN6axqaDemsamg3qazqaDeprGmg1qazqao1qazqaDeprGpoNalrOpojVqWs2paDWs6ms6DWpazqWg1azalqWgtqWs2paC2palrNoi2palrNoLalqWs2gtqWpazaC2palrNqi2s2lrNoLazalqWgtrNqWpaC2s2paloFqWpazaC2palrNoLazaWs2gtrNpazaC2s2paloLazalqWgtrOpalqC6lqaloLazalqWirqampaC2prNqWorWprOpaDWprOporeprGmitaax6T0K3qaxp6Qb01z9J6FdNNc/SehY6+k1z9HoI6ej05ej0LHX0npz9J6Qjr6NcvR6Fjr6PTl6PQR19Hpy9HoI6+hy9AR69prGmtODemsamg6aa56aDpqaxpoN6a56aDemuemg3prnpoN6msaaDeprGpoN6axqaDeprGpqjeprOpoNams6miNamsamg1qazqaDWprOpoNams2s2g1alrNqWg1azalrNojVrNqWs2g1azalrNoNWs2paloLazalqWqLazalqWgtrNqWpaC2s2paloLazalqWiLazalrNoLalqWs2gtqWpazaC2pazaloq2s2paloLazalrNoNWs2pazag1qWs6loLalrNrNores2s6loNWprF6T0it6zrN6Z9Cums+mL0l6Fb9J6c70l6Fjp6T053tm9osdfR6cb2zfoNR39J6cPae6ix39p7cfVTaLHf2ntx00WY6+z25aah8dPZ7czRfjp7T2wB8b90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",
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
        name: "Milwaukee School of Engineering Blockchain Curriculum Design",
        tags: ["Solidity", "Flask", "LaTeX"],
        description: "Constructed an upper-level technical elective course on blockchain and smart contract development for my university.",
        media: "mics",
        mediaBlur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMADQkKCwoIDQsKCw4ODQ8TIBUTEhITJxweFyAuKTEwLiktLDM6Sj4zNkY3LC1AV0FGTE5SU1IyPlphWlBgSlFST//bAEMBDg4OExETJhUVJk81LTVPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT//AABEIAKUBEgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIEBQMG/8QAFhABAQEAAAAAAAAAAAAAAAAAABEB/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwD8mIOqAIAioAggIi6moJrOrqaDOpq6zqCamrrOgmpq6zqCai6gIioKIAAAKIAqoCKACiAKIA9USlbFQqUFRKUBCpUBNKzugbqabrO6BqaamoJqaamgmppqagmoamiiFSoAlKCiUoKrNKo0JSiNDNWgolKCiUB6lKzStDVSs0oNVKzSgtTdSpQXdZpUqBupupupugu6zum6zuoLus7pus7oq7rO6brO6C7rO6m6m6gu6lSpQWlZpQapWalBulZpQbpWKtUaq1ilBulYpRG6M0B6dKxSqNUrFKDVKzUoNVKzSgtSpUqC1N1KzuitbrO6m6m6C7rO6m6zuoLupupus7qC7qbqbqUFqVKgLSoAtSgBVqALSoAtWsi0apWQo1RkKPSpWKVUapWKUG6lZqUVqlYpQaqVms1BvdZ3Wam6DW6m6zupupRd1N1ndSoLupupUBagKAAAAAAAAAAAAAAAAOylYpVGqVilBqlYpQaqVmlBaVmpUGqzUqVBalSlAqUFAAAAAAAAAAAAAAAAAAAAH3qUFClQApRAKCICAgIIAAoAAAAAAAAAAAAAAAAAAAAAA+wo0IKgIjQDKNJEGRUQRGkBAAAAAAAAAAAAAAAAAAAAAAAAdEGoNoyRQGYRpAZGkQZSNIKyjSagyjSIIAAAAAAAAAAAAAAAAAAAAADrAbRBQERQERQGUaRBlNaQVjUa1EGRUQAAAAAAAAAAAAAAAAAAAAdgDoggICAAgAiACJoIJrIIqICAAAAAAAAAAAAAAAAAAAAD/9k=",
        buttonNames: ["Curriculum Repository", "MICS Proceedings"],
        buttonLinks: ["https://github.com/jwmke/blockchain-development-curriculum", "https://micsymposium.org/mics2022/mics-2022-proceedings.pdf#page=232"],
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
                <div className='mt-36 mb-12'>
                    <PortfolioHeader text={"// Previous contributions"} />
                </div>
                <div className='grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
                    {projectsList.map((projectDetails) => 
                        <Project key={projectDetails.name} details={projectDetails}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects;