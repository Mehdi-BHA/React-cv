import React, { Component } from 'react'

export default class Portfolio extends Component {
    state = {
        projects : [
            {id:1,title:'React portfolio',desc:'Challenge of 24 hours to create a web app with react', image:'https://www.techdiagonal.com/wp-content/uploads/2019/08/tech-diagonal-reactjs-create-react-app.jpg'},
            {id:1,title:'React portfolio',desc:'Challenge of 24 hours to create a web app with react', image:'https://www.techdiagonal.com/wp-content/uploads/2019/08/tech-diagonal-reactjs-create-react-app.jpg'},
            {id:1,title:'React portfolio',desc:'Challenge of 24 hours to create a web app with react', image:'https://www.techdiagonal.com/wp-content/uploads/2019/08/tech-diagonal-reactjs-create-react-app.jpg'},
            {id:1,title:'React portfolio',desc:'Challenge of 24 hours to create a web app with react', image:'https://www.techdiagonal.com/wp-content/uploads/2019/08/tech-diagonal-reactjs-create-react-app.jpg'},
            {id:1,title:'React portfolio',desc:'Challenge of 24 hours to create a web app with react', image:'https://www.techdiagonal.com/wp-content/uploads/2019/08/tech-diagonal-reactjs-create-react-app.jpg'},
            {id:1,title:'React portfolio',desc:'Challenge of 24 hours to create a web app with react', image:'https://www.techdiagonal.com/wp-content/uploads/2019/08/tech-diagonal-reactjs-create-react-app.jpg'},
        ]
    }
    render() {
        var projects=this.state.projects
        console.log(projects[0])
        return (
            <div className="portfolio"data-aos="fade-left">
                <h1>Projets</h1>
                <div className="seperator50"></div>
                <div className="projects-list">
                    {projects.map(elem=>{
                        return (
                        <div key={elem.id} className="project-card">
                            <h2>{elem.title}</h2>
                            <img src={elem.image} alt={"image"+elem.id}></img>
                            <p><i class="fab fa-html5"></i><i class="fab fa-js"></i><i class="fab fa-css3-alt"></i></p>
                            <p>{elem.desc}</p>
                        </div>)
                    })}
                </div>
            </div>
        )
    }
}
