const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5535997379861&text=Ol%C3%A1%21%20Quero%20informa%C3%A7%C3%B5es%20sobre%20o%20Curso%20do%20Zero%20ao%20TEA."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group animate-fade-in"
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
        
        {/* Main button */}
        <div className="relative bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50">
          <img 
            src="/whatsapp-icon.ico" 
            alt="WhatsApp" 
            className="w-8 h-8 md:w-10 md:h-10 filter brightness-0 invert"
          />
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale conosco no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
