import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import "react-pdf/dist/esm/Page/TextLayer.css";

export default function Resume() {
    return (
        <>
            <div className='bg-white'>
                <Document file="/Weller_Joseph_Resume_2024.pdf">
                    <Page pageNumber={1} renderTextLayer={false} scale={1.75} canvasBackground='#edf5e1'/>
                </Document>
            </div>
        </>
    )
}