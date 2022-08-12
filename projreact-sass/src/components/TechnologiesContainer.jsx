import {DiHtml5, DiCss3, DiReact, DiNodejsSmall, DiNpm, DiGit, DiJavascript} from 'react-icons/di';

import '../styles/components/technologiesContainer.sass'

const technologies = [
    {id: 'html', name: 'HTML5', icon: <DiHtml5 />},
    {id: 'css', name: 'CSS3', icon: <DiCss3 />},
    {id: 'react', name: 'React', icon: <DiReact />},
    {id: 'node', name: 'Node.Js', icon: <DiNodejsSmall />},
    {id: 'npm', name: 'Npm', icon: <DiNpm />},
    {id: 'git', name: 'Git', icon: <DiGit />},
    {id: 'js', name: 'Javascript', icon: <DiJavascript />}
]

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">

            {technologies.map(tech => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quas dicta nemo id eaque libero </p>

                    </div>
                </div>
            ))}

        </div>
    </section>
  )
}

export default TechnologiesContainer