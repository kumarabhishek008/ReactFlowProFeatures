import React from 'react';
import { getBezierPath } from 'reactflow';

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  markerEnd,
}) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <text>
        <textPath
          href={`#${id}`}
          style={{ fontSize: '12px', backgroundColor:'red', padding:'1rem' }}
          startOffset="50%"
          textAnchor="middle"
        >
        </textPath>
      </text>
    </>
  );
}


// const initialNodeType = {
//   id : Math.random(100000000)*100000,
//   type : 'default',
//   position : { x: initialNodes[0].position.x, y: 500},
//   data: { label: 'New Node' },
// }
// const initialEdge = {
//     id: Math.random(100000000)*100000,
//     source: initialNodes[initialNodes.length-2].id,
//     target: initialNodes[initialNodes.length-1].id,
//     type: 'custom',
//     data: { text: '+', onClick:()=>{ handleAddNewNode() } },
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
// }