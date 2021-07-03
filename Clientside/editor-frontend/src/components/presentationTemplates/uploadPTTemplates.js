import React, { useState } from 'react';
import UploadingBar from './../uploadingBar/uploadingBar';

const UploadPTTemplateForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['application/vnd.ms-powerpoint', '	application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected)
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
          } else {
            setFile(null);
            setError('Please select an document file (powerpoint pptx, ppt or pps)');
          }
    }


  return (
      <div className="container">
    <h1>Upload Workshop Presentation Templates</h1>
    <form>
    <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
        <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <UploadingBar file={file} setFile={setFile} /> }
        </div>
    </form>
    </div>
  );
}

export default UploadPTTemplateForm;