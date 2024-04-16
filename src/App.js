import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Constants from "./Constants"
import { Navbar, Nav } from 'react-bootstrap';
import { Project } from "./Project";
import { Label } from "./Label";
import { LabelFilter } from "./LabelFilter";
import Sara from "./images/sara.png";
import Github from "./images/github.png";
import LinkedIn from "./images/linkedIn.png";

function App() {

  const [activeSection, setActiveSection] = useState('home');

  const defaultProjects = Constants.projects.map(item => <Project key={item.Key} title={item.Title} description={item.Description} image={item.Image} link={item.Link} linkslist={item.LinksList} labelslist={item.Labels.map(label => <Label color={label["color"]} title={label["title"]}/>)}/>)
  const [filteredProjects, setFilteredProjects] = useState(defaultProjects)
  
  const defaultLabelList = Constants.labels.map(label => label["title"])
  const [filteredLabels, setFilteredLabels] = useState([])
  const [Labels, setLabels] = useState(Constants.labels.map(label => <LabelFilter key={label["key"]} color={label["color"]} title={label["title"]} filteredLabels={filteredLabels} setFilteredLabels={setFilteredLabels} removeFromFilteredLabels={removeFromFilteredLabels} addToFilteredLabels={addToFilteredLabels}/>))

  function removeFromFilteredLabels(label){
    setFilteredLabels(l => l.filter(item => item !== label));
    // const updated = filteredLabels.filter(function(item) {
    //   return item !== label
    // });
    // setFilteredLabels(updated);
  };

  function addToFilteredLabels(label){
    setFilteredLabels(filteredLabels => [...filteredLabels, label]);
    // filteredLabels.push(label)
    // setFilteredLabels(filteredLabels);
  };

  useEffect(()=>{
    if(filteredLabels.length==0)
    {
      setFilteredProjects(defaultProjects)
    }
    else{
      // setFilteredProjects(defaultProjects.filter(proj => proj.props.labelslist.map(label => label.props.title).includes(filteredLabels[0])))
      setFilteredProjects(defaultProjects.filter(proj => {
        for(let i = 0; i < proj.props.labelslist.length; i++) {
          if( filteredLabels.includes(proj.props.labelslist[i].props.title)) {
            return true;
          }
        }
        return false;
      }))
    }
        // proj.props.labelslist.map(label => label.props.title).reduce(title => filteredLabels.includes(title))
  }, [filteredLabels]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - 100 &&
          scrollPosition < sectionTop + sectionHeight - 100
        ) {
          setActiveSection(section.getAttribute('id'));
        }

      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function clickTab(tab){
    setActiveSection(tab)
  };

  return (
    <div className="App">
      <Navbar sticky="top" style={{ backgroundColor: '#304D30' }} variant="dark">
        <Nav className="mr-auto">
            <a className={activeSection === 'home' ? 'nav-link active' : 'nav-link'} href="#home" onClick={e => clickTab('home')}>About Me</a>
            <a className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'} href="#projects" onClick={e => clickTab('projects')}>Projects and Publications</a>
            <a className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'} href="#contact" onClick={e => clickTab('contact')}>Contact</a>
        </Nav>
      </Navbar>

      <section id="home"> 
        <div className="flex-container top-padding">
          <div className="one-container">
            <img className="headshot" src={Sara} alt="a photo of me"/>
          </div>
          <div className="three-container left-align" style={{"padding-right":"30px"}}>
            <h3 className="header3">Hi, I'm Sara </h3>
            <p>{Constants.bio}</p>
          </div>
        </div>
      </section>


      <section id="projects">
        <div className="top-padding">
            <h3 className="header3">Projects and Publications</h3>
            <div className="flex-container label-filter-container">
              {Labels.map(label => <div> {label} </div>)}
            </div>
            {filteredProjects.map(item => <div className="list-padding"> {item} </div> )}
            {/* {Constants.projects.map(item => <div className="list-padding"><Project key={item.Key} title={item.Title} description={item.Description} image={item.Image} link={item.Link} linkslist={item.LinksList}/></div>)} */}
        </div>
      </section>

      <section id="contact">
        <div >
            <h3 className="header3">Contact</h3>
            <a target="_blank" href="https://www.linkedin.com/in/sara-syed-013b32178/"><img className="logo" src={LinkedIn} alt="a photo of me"/></a>
            <a target="_blank" href="https://github.com/sarasyed00"><img className="logo" src={Github} alt="a photo of me"/></a>
            <p>saramsyed00@gmail.com</p>
        </div>
      </section>

    </div>
  );
}

export default App;
