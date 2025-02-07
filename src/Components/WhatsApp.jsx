import React from "react";

const WhatsApp = () => {
  const handleChatClick = () => {
    const phoneNumber = "+919539711107";
    const message = "Hello! I would like to chat.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return <button onClick={handleChatClick}>Connect with me</button>;
};

export default WhatsApp;
