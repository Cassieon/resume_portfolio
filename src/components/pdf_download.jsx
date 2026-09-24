import React from 'react';

const PdfDownloadLink = () => {
  return (
    <a href="/src/assets/craft_backend_resume.docx.pdf" download="Mariah_Craft_Resume.pdf">
      <button>Download PDF</button>
    </a>
  );
};

export default PdfDownloadLink;