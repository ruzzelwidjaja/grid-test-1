'use client'
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

const MyGridLayout: React.FC = () => {
  // Define the layout for the first row
  const layout = [
    { i: '1', x: 0, y: 0, w: 1, h: 1 },
    { i: '2', x: 1, y: 0, w: 1, h: 1 },
    { i: '3', x: 2, y: 0, w: 1, h: 1 },
    { i: '4', x: 3, y: 0, w: 1, h: 1 }
  ];

  return (
    <ResponsiveGridLayout
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200 }}
      cols={{ lg: 4 }}
      rowHeight={280}
      containerPadding={[16, 16]}
      margin={[16, 16]}
      isResizable={false}
      isDraggable={true}
      isBounded={true}
      useCSSTransforms={false}
    >
      <div key="1" className='flex justify-center items-center text-black text-lg border border-black'>
        Item 1
      </div>
      <div key="2" className='flex justify-center items-center text-black text-lg border border-black'>
        Item 2
      </div>
      <div key="3" className='flex justify-center items-center text-black text-lg border border-black'>
        Item 3
      </div>
      <div key="4" className='flex justify-center items-center text-black text-lg border border-black'>
        Item 4
      </div>
    </ResponsiveGridLayout>
  );
};

export default MyGridLayout;
