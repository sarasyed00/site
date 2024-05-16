import HBScreenshot from "./images/heartbeats.png";
import WISH from "./images/WISH Paper.png";
import CHI24 from "./images/CHI 24.png";

const projectIDs = ["p1", "p2", "p3"]

// CHI Publication
const p1Title = "\"Machine and Human Understanding of Empathy\""
const p1Description = "Co-first author of a paper in CHI’24, the top human-computer interaction conference (26.4% acceptance rate). This work evolved from my undergraduate thesis, in which I seek to understand how machines understand empathy, and how this compares to human experiences. To answer this question, I implemented an existing deep learning model that quantifies empathy from text, and used js and python (pandas, numpy) for data collection, cleaning, and statistical analysis to understand shortcomings of machine learning approaches to quantifying human experience."
const p1Link = "https://dl.acm.org/doi/10.1145/3613904.3642034"
const p1LinksList = {"View Paper": "https://dl.acm.org/doi/10.1145/3613904.3642034", "CHI'24": "https://chi2024.acm.org/", "Undergrad Thesis" : "https://github.com/sarasyed00/Undergraduate_ComputerScience_Thesis"}
const p1Image = CHI24
const p1LabelList = [{"key" : 1, "color" : "#FFD966", "title": "Paper"}]

// Heart Beats
const p2Title = "Heart Beats: A Workout Music Recommender System"
const p2Description = "Created music recommender web app (Flask, React) that connects to Strava and Spotify APIs to generate a recommended playlist by analyzing songs that correlated with the highest output in the user’s workout"
const p2Link = "https://github.com/sarasyed00/heartbeats/blob/master/README.md"
const p2LinksList = {}
const p2Image = HBScreenshot
const p2LabelList = [{"key" : 1,"color" : "#304D30", "title": "Project"}]


//WISH@CHI Publication
const p3Title = "\"Exploring Usability of mHealth Apps Through Combined Expertise of Researchers and Practitioners\"";
const p3Description = "I had the opportunity to work as a researcher at Drexel’s HCI lab, which resulted in being a third-author in this publication in WISH@CHI’19. This was my first exposure to HCI research, and my team and I conducted a heuristic evaluation and reported on the importance of participatory action research and increased collaboration amongst developers and practitioners for improved usability of mobile applications."
const p3Link = "https://github.com/sarasyed00/WISH_CHI_2019_Publication?tab=readme-ov-file"
const p3LinksList = {"View Paper": "https://tinyurl.com/s2xjw5o", "WISH@CHI'19": "https://wishworkshop.wordpress.com/accepted-papers/"}
const p3Image = WISH
const p3LabelList = [{"key" : 2, "color" : "#FFD966", "title": "Paper"}]


export const projects = projectIDs.map(id => ({"Key": id, "Title": eval(id+"Title"), "Description": eval(id+"Description"), "Link": eval(id+"Link"), "LinksList": eval(id+"LinksList"), "Image": eval(id+"Image"), "Labels": eval(id+"LabelList")}))

export const labels = [{"key" : 1,"color" : "#304D30", "title": "Project"}, {"key" : 2, "color" : "#FFD966", "title": "Paper"}]

export const bio = "This page is a bit of a Work-In-Progress, but I am a software engineer, travel enthusiast, and major thrill seeker (next on my bucket list is bunjee jumping!!). I have worked full time as a swe for around 2 years and I'm eager to continue to grow my technical expertise. I love learning and have had the opporutnity to research and publish in the Human-Computer Interaction field, which has grown my appreciation for building products with end-users in mind. I seek to differentiate myself as a software engineer by building with a product focus, and understanding the business and e2e impact of anything I do."