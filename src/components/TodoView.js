import React, { useEffect } from "react";


export default function TodoView({selected}) {
    useEffect(() => {
        console.log(selected);
    }, [selected])
    return (<div>
        {
            selected && (
                <div>
                    <img src="http://placehold.jp/200x200.png"/>
                    <div>
                        <h4>{selected.player_name}</h4>
                    <span>Age: {selected.player_age}</span> <br/>
                    <span>Country {selected.player_country}</span> <br/>
                    <span>Number: {selected.player_number}</span> <br/>
                    </div>
                </div>
            )
        }
    </div>)
}