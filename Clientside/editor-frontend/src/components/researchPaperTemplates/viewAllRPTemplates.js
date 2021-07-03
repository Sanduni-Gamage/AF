import React from 'react';
import useFirestore from '../../hooks/useFirestore';
//import { motion } from 'framer-motion';

const RPDocsView = () => {
  const { docs } = useFirestore('researchPaperTemplates');
  console.log(docs);

  return (
    <div className="container">
    <h1>Research Paper Templates</h1>
    {/* <div className="template-grid">
    {docs && docs.map(doc => (
        <div className="doc-wrap" key={doc.id} >
          <img src={doc.url} alt="uploaded doc"/>
        </div>
      ))}
    </div> */}
    <ul>
        {docs.map((doc) => {
          return (
            <li key={doc.id}>
              {/* <img width="150" height="150" src={doc.url} alt={doc.name} /> */}
              <img src="src/assets/images/pdficon.png" />
              <a id="template" href={doc.url} className="template-link">
                Template 
              </a>
              <script>
                document.getElementById("template").innerHTML += ;
              </script>
            </li>
          );
        })}
      </ul>
    
    </div>
  )
}

export default RPDocsView;