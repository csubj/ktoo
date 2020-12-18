import React from 'react'

type Props = {
    rooms: Array<string>
}

const Rooms: React.FC<Props> = ({rooms}) => {
    return (
      <ol>
        {rooms.map((room) => (
          <li>
              <div className="maybe">{room}</div>
              
            </li>
        ))}
      </ol>
    );
}


export default Rooms