import React from 'react';


export default function TodoItem({player, clicked}) {
    return (
        <div className="card" onClick={() => clicked(player)}>
            <div className="card-body">{player.player_name}</div>
            </div>
    )
}