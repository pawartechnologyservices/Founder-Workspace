import RgbBorderButton from "../../ui/rgb-border-button";
import { Download } from "lucide-react";

interface DesktopButtonsProps {
  onDemoClick: () => void;
}

const DesktopButtons = ({ onDemoClick }: DesktopButtonsProps) => {
  const handleDownload = () => {
    // Replace this URL with the actual path to your PDF file
    const pdfUrl = '/documentation.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'documentation.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hidden lg:flex items-center space-x-4 mr-40">
      <RgbBorderButton 
        onClick={handleDownload} 
        className="text-white flex items-center"
      >
        <Download className="mr-2 h-4 w-4" />
        Documentation
      </RgbBorderButton>
    </div>
  );
};

export default DesktopButtons;