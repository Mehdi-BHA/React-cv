import React, { Component } from 'react'

export default class experience extends Component {
    state = {
        exp : [
            {id:1,post:'Directeur fondateur Dar Mounira',year:'2019-2020',desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi perspiciatis debitis veritatis, repudiandae officia impedit, quidem maxime, accusamus ea inventore dolores blanditiis eos cumque culpa. Quae unde natus quis possimus ad assumenda expedita, vel iure eum ex veniam. Expedita ipsa commodi minima pariatur nostrum voluptatum laudantium quo, explicabo aliquam incidunt non autem error officia quaerat iusto accusantium libero omnis facilis veritatis! Reiciendis aliquid voluptate excepturi incidunt? Dolorum earum atque neque.',image:'https://tunisie.co/uploads/images/content/darmounira-241219-1.jpg'},
            {id:2,post:'Fondateur Vapoter.tn',year:'2017-2018',desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi perspiciatis debitis veritatis, repudiandae officia impedit, quidem maxime, accusamus ea inventore dolores blanditiis eos cumque culpa. Quae unde natus quis possimus ad assumenda expedita, vel iure eum ex veniam. Expedita ipsa commodi minima pariatur nostrum voluptatum laudantium quo, explicabo aliquam incidunt non autem error officia quaerat iusto accusantium libero omnis facilis veritatis! Reiciendis aliquid voluptate excepturi incidunt? Dolorum earum atque neque.'},
            {id:3,post:'Co-fondateur Moustache Vape Store', year:'2017-2018',desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi perspiciatis debitis veritatis, repudiandae officia impedit, quidem maxime, accusamus ea inventore dolores blanditiis eos cumque culpa. Quae unde natus quis possimus ad assumenda expedita, vel iure eum ex veniam. Expedita ipsa commodi minima pariatur nostrum voluptatum laudantium quo, explicabo aliquam incidunt non autem error officia quaerat iusto accusantium libero omnis facilis veritatis! Reiciendis aliquid voluptate excepturi incidunt? Dolorum earum atque neque.'}

        ]
    }

    render() {
        var exp=this.state.exp;
        const image = (el,k) => {
            if (typeof el == "string"){
                return <img src={el} alt={"image"+k}></img>
            }
            
        }
        return (
            <div className="experience">
                <h1>Expérience</h1>
                <div className="seperator50"></div>
                <div className="experience-content">
                    {exp.map((elem,k)=>{return (
                    <div key={elem.id}>
                        <h2>{elem.post}</h2>
                        <h3>{elem.year}</h3>
                        <div className="desc">
                            {image(elem.image,elem.id)}
                            <p>{elem.desc}</p>
                        </div>
                    </div>
                    )})}
                </div>
            </div>
        )
    }
}
