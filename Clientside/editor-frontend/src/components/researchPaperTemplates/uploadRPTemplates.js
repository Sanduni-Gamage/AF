import React, { useState } from 'react';
import UploadingBar from './../uploadingBar/uploadingBar';

const UploadRPTemplateForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected)
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
          } else {
            setFile(null);
            setError('Please select an document file (msword doc, docx or pdf)');
          }
    }


  return (
      <div className="container">
    <h1>Upload Research Paper Templates</h1>
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

export default UploadRPTemplateForm;