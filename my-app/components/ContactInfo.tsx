const ContactInfo = () => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
        <p className="text-gray-700 mb-2">📍 123 Artisan Street, Craftsville, USA</p>
        <p className="text-gray-700 mb-2">📧 support@handcraftedhaven.com</p>
        <p className="text-gray-700 mb-4">📞 (123) 456-7890</p>
  
        {/* Optional: Embed a Google Map */}
        <div className="w-full h-48 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093743!2d144.95373631561684!3d-37.81627937975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e5177ce5b99!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1613987637263!5m2!1sen!2sau"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default ContactInfo;
  