import React from 'react'
import Room from './Room';

type Props = {
    rooms: Array<string>
}

const Rooms: React.FC<Props> = ({ rooms }) => {
    const layout = [
        { i: 'a', x: 0, y: 0, w: 1, h: 2 },
        { i: 'b', x: 1, y: 0, w: 2, h: 2 },
        { i: 'c', x: 4, y: 0, w: 1, h: 2 }
    ];
    return (
        <ol>
            {rooms.map((room) => (
                <li>
                    <div className="maybe">{room}</div>
                    <Room></Room>
                </li>
            ))}
        </ol>
    );
}


export default Rooms