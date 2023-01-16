import React, { useState } from 'react';

const MyComponent = () => {
  const [selectedProg, setSelectedProg] = useState("");
  return (
    <div>
      <label>CHOOSE LANGUAGE</label>
      <input list="prog" name="prog" value={selectedProg} onChange={e => setSelectedProg(e.target.value)}/>
        <datalist id="prog">
          <option value='java'/>
          <option value='c#'/>
          <option value='c++'/>
          <option value='php'/>
        </datalist>
    </div>
  );
}

export default MyComponent;
