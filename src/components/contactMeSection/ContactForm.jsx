import React from "react";

const ContactForm = () => {
  // You can replace this URL with your actual WhatsApp contact link
  const whatsappLink = "https://wa.me/message/JMN4W4NE54KXA1";
  
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h3 className="text-xl font-semibold text-cyan">Contact me on WhatsApp</h3>
      
      {/* WhatsApp QR Code Section */}
      <div className="border-2 border-cyan p-4 rounded-lg bg-white">
        {/* QR code image */}
        <img 
          src="/images/whatsapp-qr.jpg" 
          alt="WhatsApp QR Code" 
          className="w-64 h-64"
        />
      </div>
      
      {/* Direct WhatsApp Link Button */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500 flex items-center justify-center"
      >
        Open WhatsApp
      </a>
    </div>
  );
};

export default ContactForm;
