import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

// Configure PDF.js worker to load from public folder
// Copy node_modules/pdfjs-dist/build/pdf.worker.min.js into public/pdf.worker.min.js
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const Resume = () => {
  const [numPages, setNumPages] = useState<number>(0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="container-custom py-12">
      {/* Header + Download Button */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <h1 className="text-4xl font-bold">My Resume</h1>
        <a
          href="/SUJAYBABU_RESUME.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex items-center gap-2">
            <Download size={16} />
            Download PDF
          </Button>
        </a>
      </div>

      {/* PDF Preview */}
      <div className="pdf-preview mb-8 flex justify-center">
        <div className="w-full max-w-3xl">
          <Document
            file="/SUJAYBABU_RESUME.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) =>
              console.error('PDF load error:', error)
            }
            loading={
              <p className="text-center text-gray-500">Loading document...</p>
            }
            error={
              <p className="text-center text-red-500">
                Failed to load document.
              </p>
            }
          >
            {Array.from(new Array(numPages), (_, i) => (
              <Page
                key={`page_${i + 1}`}
                pageNumber={i + 1}
                className="mb-4 shadow-lg"
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
};

export default Resume;
