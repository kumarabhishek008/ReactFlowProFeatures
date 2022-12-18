import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function Rectangle({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
  console.log(data);
  return (
    <div className="rectangle">
      <Handle type="target" position={Position.Top} />
      <div>
        {/* <label htmlFor="text">Text:</label> */}
        {/* <input id="text" name="text" onChange={onChange} /> */}
        <p>{data.text}</p>
        {
          data.btn
        }
        {
          data?.btnArray?.map((item)=>
          <button>{item}</button>
          )
        }
      </div>
      {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} /> */}
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default Rectangle;