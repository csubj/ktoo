import React from 'react'
import GridLayout from 'react-grid-layout';
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

type Props = {
    rooms: Array<string>
}

const Rooms: React.FC<Props> = ({rooms}) => {
       const layout = [
        {i: 'a', x: 0, y: 0, w: 1, h: 2},
        {i: 'b', x: 1, y: 0, w: 2, h: 2},
        {i: 'c', x: 4, y: 0, w: 1, h: 2}
      ];
    return (
      <ol>
        {rooms.map((room) => (
          <li>
              <div className="maybe">{room}</div>
              <GridLayout className="layout" layout={layout} cols={24} rowHeight={20} width={1200} resizeHandles={['w' , 'e']}>
                <div key="a">ken</div>
                <div key="b">kelly</div>
                <div key="c">tony</div>
            </GridLayout>
            </li>
        ))}
      </ol>
    );
}


export default Rooms