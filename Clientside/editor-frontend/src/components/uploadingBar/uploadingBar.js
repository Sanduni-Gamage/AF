import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
//import { motion } from 'framer-motion';

const UploadingBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
//     <motion.div className="progress-bar"
//       initial={{ width: 0 }}
//       animate={{ width: progress + '%' }}
//     ></motion.div>
//   );
    <div className="progress-bar" style={{ width: progress + '%' }}>uploading</div>
  )
} 

export default UploadingBar;