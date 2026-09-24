import { useState } from "react"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import Navbar from '../components/navBar'
import resume from '/src/assets/craft_backend_resume.docx.pdf'
import PdfDownloadLink from "../components/pdf_download"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString()

const ResumeViewer = () => {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
  }

    return (
        <MDBContainer>
            <center>
                <div >
                    <Navbar/>
                </div>
                <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
                    <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                </div>
                <div>
                    <PdfDownloadLink /> 
                </div>
            </center>
        </MDBContainer>
        
    )
}

export default ResumeViewer