import React, { useState, useEffect, useRef } from 'react';
import { FiMessageSquare, FiSend, FiX } from 'react-icons/fi'; // Importa los iconos de cierre y enviar
import { motion } from "framer-motion";
import { CohereClient } from "cohere-ai";
import axios from 'axios'; // Importa axios para hacer solicitudes HTTP
import assistent from "../assets/assistent.png";

const ChatButton = () => {
  const [chatAbierto, setChatAbierto] = useState(false);
  const [mensajes, setMensajes] = useState([]);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [escribiendo, setEscribiendo] = useState(false);
  const [cohereToken, setCohereToken] = useState(null); // Estado para almacenar el token
  const [enviandoMensaje, setEnviandoMensaje] = useState(false); // Estado para controlar si se está enviando un mensaje
  const mensajesRef = useRef(null); // Referencia al contenedor de mensajes
  const [mostrarTooltip, setMostrarTooltip] = useState(false);

  useEffect(() => {
    obtenerTokenCohere(); // Obtener el token de Cohere al montar el componente
  }, []);

  // Función para obtener el token de Cohere
  const obtenerTokenCohere = async () => {
    try {
      const response = await axios.get('https://nodejs-restapi-mysql-fauno-production.up.railway.app/api/ai');
      const token = response.data;
      console.log(token);
      setCohereToken(token); // Almacena el token en el estado
    } catch (error) {
      console.error('Error al obtener el token de la API:', error);
    }
  };

  //tootip handle
  const handleMouseEnter = () => {
    setMostrarTooltip(true);
  };

  const handleMouseLeave = () => {
    setMostrarTooltip(false);
  };

  // Función para hacer scroll hacia abajo en el contenedor de mensajes
  const scrollToBottom = () => {
    if (mensajesRef.current) {
      mensajesRef.current.scrollTop = mensajesRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom(); // Hace scroll hacia abajo al cargar o actualizar mensajes
  }, [mensajes]); // Se ejecuta cada vez que se actualiza la lista de mensajes

  // Función para enviar un mensaje y obtener la respuesta de Cohere
  const handleEnviarMensaje = async () => {
    if (!nuevoMensaje.trim() || enviandoMensaje) return;
    setEnviandoMensaje(true); // Deshabilita el botón de enviar mensaje
    setMensajes(prevMensajes => [
      ...prevMensajes,
      { texto: nuevoMensaje, origen: 'usuario' }
    ]);
    setNuevoMensaje('');
    try {
      const respuestaCohere = await obtenerRespuestaCohere(nuevoMensaje);
      setMensajes(prevMensajes => [
        ...prevMensajes,
        { texto: respuestaCohere, origen: 'asistente' }
      ]);
    } finally {
      setEnviandoMensaje(false); // Habilita el botón de enviar mensaje
    }
  };

  // Función para obtener la respuesta de Cohere utilizando .chat
  const obtenerRespuestaCohere = async (userMessage) => {
    try {
      if (!cohereToken) {
        throw new Error('Token de Cohere no disponible');
      }

      const cohere = new CohereClient({
        token: cohereToken,
        language: "es", // Configura el idioma español
        model: "command-r-plus",
      });

      setEscribiendo(true);
      // Construir el historial de chat
      const chatHistory = [
        { role: "SYSTEM", message: "sos un asistente virtual de Lorenzo Caballero! Somos un emprendimiento artesanal ubicado en Santa Clara del Mar, Argentina. Nos especializamos en la producción de adorables muñequitos de amigurumis y juguetes didacticos de madera hechos con mucho amor y dedicación. En Lennita BB, cada creación es única, diseñada para traer alegría y diversión a tu vida. Desde simpáticos animales hasta personajes fantásticos y figuras que vos quieras!, nuestros juguetes y amigurumis son el regalo perfecto para todas las ocasiones. ¡Déjanos ser parte de tus momentos especiales con nuestros encantadores. si te preguntan por su numero de telefono es :+54 9 3412 16-8460 , dile ademas de que en esta web tiene un boton de whatsApp , que haga click en el! , no des precios de ningun producto , no des promociones ni descuentos. que en ese caso se comuniquen unicamente por WhatsApp, tus respuestas deben ser breves y concisas ademas de que solo debes responder lo que te pregunte el usuario , usa emojis ." },
        { role: "USER", message: userMessage }
      ];

      const response = await cohere.chat({
        message: userMessage,
        model: "command-r-plus",
        chat_history: chatHistory,
        language: "es",
      });

      setEscribiendo(false);
      console.log(response);
      return response.text;
    } catch (error) {
      console.error('Error al llamar a Cohere AI:', error);
      setEscribiendo(false);
      return 'Lo siento, hubo un problema al procesar tu solicitud.';
    }
  };

  // Función para manejar el evento de presionar la tecla Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEnviarMensaje();
    }
  };

  // Función para manejar el evento de alternar la visibilidad del chat
  const handleChatToggle = () => {
    setChatAbierto(!chatAbierto);
  };

  // Función para manejar el evento de cerrar el chat
  const handleCloseChat = () => {
    setChatAbierto(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-20">
      <button
        onClick={handleChatToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`flex items-center justify-center w-16 h-16 focus:outline-none ${chatAbierto ? 'hidden' : ''}`}
      >
        <img src={assistent} alt="Asistente" className="w-16 h-16" />
      </button>
      {mostrarTooltip && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-16 right-4 px-2 py-1 bg-purple-500 text-white text-sm rounded-md shadow-lg"
        >
          Soy tu asistente virtual
        </motion.div>
      )}
      {chatAbierto && (
        <div className="bg-purple-100 p-4 rounded-t-lg shadow-lg w-64 sm:w-80"> {/* Ajusta el ancho del chat en dispositivos móviles */}
          <div className="flex justify-between mb-2">
            <button onClick={handleCloseChat}><FiX className="text-gray-600" /></button> {/* Botón de cierre */}
          </div>
          <div ref={mensajesRef} className="h-40 sm:h-60 overflow-y-auto mb-2"> {/* Ajusta la altura del contenedor de mensajes en dispositivos móviles */}
            {mensajes.map((mensaje, index) => (
              <div key={index} className={`mb-2 ${mensaje.origen === 'usuario' ? 'text-right' : 'text-left'} px-4 py-2 rounded-lg bg-purple-200 text-gray-800`}>
                <strong>{mensaje.origen === 'usuario' ? 'Tú' : 'Asistente Lorenzo Caballero'}</strong>: {mensaje.texto}
              </div>
            ))}
            {escribiendo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-2 text-left px-4 py-2 rounded-lg bg-purple-200"
              >
                <strong>Asistente Lorenzo Caballero</strong>: ...
              </motion.div>
            )}
          </div>
          <div className="flex justify-between items-center">
            <input
              type="text"
              value={nuevoMensaje}
              onChange={(e) => setNuevoMensaje(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribí algo acá"
              className="flex-1 border rounded-full px-4 py-2 outline-none"
              disabled={enviandoMensaje} // Deshabilita el input mientras se está enviando un mensaje
            />
            <button onClick={handleEnviarMensaje} disabled={enviandoMensaje} className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-white"> {/* Botón de enviar */}
              <FiSend className="w-7 h-7 flex items-center justify-center"/> 
            </button>
          </div>
        </div>
      )}
    </div>
  );

};

export default ChatButton;
