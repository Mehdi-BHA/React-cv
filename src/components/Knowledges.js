import React, { Component } from 'react';
import Progressbar from './knowledges/Progressbar';

export default class knowledges extends Component {
    state = {
        languages: [
            {id:1, value:"Javascript", xp:0.96},
            {id:2, value:"CSS", xp:0.64},
            {id:3, value:"Python", xp:0.46},
            {id:4, value:"Pascal", xp:0.95}
        ],
        frameworks: [
            {id:1, value:"React", xp:0.4},
            {id:2, value:"Bootstrap", xp:0.6}
        ],

        others: [
            {id:1, value:"Github", xp:0.95},
            {id:2, value:"SEO", xp:0.3},
            {id:3, value:"Photoshop", xp:0.99},
        ]


    }

    render() {
        let { languages,frameworks,others } = this.state;
        return (
            <div className="knowledges">
                <h1>Compétences</h1>
                <div className="seperator50"></div>
                <div className="knowledgeslist">
                    <Progressbar languages={languages} className ="languages" title="Langages" />
                    <Progressbar languages={frameworks} className ="frameworks" title="Frameworks & bibliothèques" />
                    <Progressbar languages={others} className ="others" title="Autres compétences" />
                    <Progressbar title="Challenges"/>
                </div>

            </div>
        )
    }
}
