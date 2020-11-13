import React from 'react';

const progressbar = (props) => {
    if(props.title==='Challenges'){
        return ( 
        <div className="challenges">
            <h2>Challenges</h2>
            <p><i className="fas fa-code"></i> Codewars : <span style={{fontWeight:'600'}}>301</span> points</p>
            <p><i className="fab fa-free-code-camp"></i>FreeCodeCamp: <span style={{fontWeight:'600'}}>84</span> coding challenges</p>
        </div>
            )}
        else{
        return (
        <div className={props.className}>
            <h2>{props.title}</h2>
            {props.languages.map((el,k)=> { return(
            <div key={el.id}>
                <p>{el.value} :</p>
                <div>
                    <div className="progressbar" style={{width:(90*el.xp+"%")}}></div>
                    <div className="background-pb" style={{width:(90*(1-el.xp)+"%")}}>
                        <div>
                            <i className="fas fa-map-marker"></i>{el.xp*100+"%"}
                        </div>
                    </div>
                </div>
            </div>
            )})}
        </div>
    )};
};

export default progressbar;