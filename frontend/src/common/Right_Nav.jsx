import { useState } from 'react';
import companyLogoPath from '../public/image.png';

const Right_Nav = () => {
    const [open, setOpen] = useState(false);
    const [isHover, setisHover] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Thank you for contacting Kryzen. An Award winning Web, Mobile App & Product Development Company 👋' }
    ]);
    const [chatInput, setChatInput] = useState('');

    const sendMsgWhatsapp = (number, message) => {
        window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const trimmed = chatInput.trim();
        if (!trimmed) return;

        setMessages(prev => ([...prev, { role: 'user', text: trimmed }]));
        setChatInput('');

        const typingToken = Symbol('typing');
        setMessages(prev => ([...prev, { role: 'bot', text: 'Typing…', typing: typingToken }]));

        try {
            const response = await fetch('https://meetpidev.app.n8n.cloud/webhook/41b418b5-66ea-4701-93a1-fd6dd0132def', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json, text/plain, */*'
                },
                body: JSON.stringify({ question: trimmed })
            });

            const raw = await response.text();
            let parsed = null;
            try { parsed = raw ? JSON.parse(raw) : null; } catch (_) { parsed = null; }

            const extractOutput = (payload) => {
                if (!payload) return '';
                if (typeof payload === 'string') return payload;
                if (Array.isArray(payload)) {
                    const first = payload[0];
                    return extractOutput(first);
                }
                return (
                    payload.output ||
                    payload.answer ||
                    (payload.data && (payload.data.output || payload.data.answer)) ||
                    payload.message ||
                    ''
                );
            };

            const botReply = extractOutput(parsed) || raw || 'Thanks! Our team will get back to you shortly.';

            setMessages(prev => {
                const withoutTyping = prev.filter(m => m.typing !== typingToken);
                return [...withoutTyping, { role: 'bot', text: String(botReply) }];
            });
        } catch (err) {
            setMessages(prev => {
                const withoutTyping = prev.filter(m => m.typing !== typingToken);
                return [...withoutTyping, { role: 'bot', text: 'Sorry, something went wrong. Please try again.' }];
            });
        }
    };

    return (
        <>
        <div className="fixed top-60 right-0 z-50">

            <div className="relative">

                <div className="mb-3" onClick={() => setOpen(true)}>
                    <div className="bg-[#005D89] p-3 rounded-lg shadow-lg transition-all duration-100 hover:scale-110 cursor-pointer">
                        <svg
                            className="w-6 h-6 text-white animate-surprise"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                    </div>
                </div>

                {open && (
                    <div className="fixed top-27 right-0 z-50 bg-[#005D89] text-white w-70 p-6 rounded-lg shadow-xl transition-all duration-300 animate-slide-in">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 left-4 text-2xl font-bold text-white cursor-pointer"
                        >
                            ×
                        </button>
                        <div className="mt-6">
                            <h2 className="text-lg font-bold mb-2 text-center">CONTACT US</h2>
                            <div className="mb-3 text-center">
                                Contact for <span className="text-yellow-300 font-semibold">Sales</span>
                                <div className="flex flex-col items-center mt-1">
                                    <span className="flex items-center gap-2">
                                        <span>🇮🇳</span> <span>+91 704-125-2829</span>
                                    </span>
                                </div>
                            </div>
                            <div className="text-center my-3 font-semibold">OR</div>
                            <form className="flex flex-col gap-2">
                                <div className="flex w-full">
                                    <select className="rounded-l px-2 py-1 text-black bg-gray-200">
                                        <option value="+91">+91</option>
                                        <option value="+1">+1</option>
                                    </select>
                                    <input
                                        type="tel"
                                        placeholder="81234 56789"
                                        className="rounded-r px-2 py-1 w-full text-black bg-gray-200"
                                    />
                                </div>
                                <textarea
                                    placeholder="Message"
                                    className="rounded px-2 py-1 w-full resize-none text-black bg-gray-200"
                                    rows={2}
                                />
                                <button
                                    type="submit"
                                    className="bg-yellow-400 text-black rounded px-2 py-1 font-bold cursor-pointer hover:bg-yellow-300 mt-2"
                                >
                                    Submit
                                </button>
                            </form>
                            <div className="mt-4 text-center">
                                Contact for <span className="text-yellow-300 font-semibold">Careers</span>
                                <div className="flex justify-center items-center gap-2 mt-1">
                                    <span>🇮🇳</span> <span>+91 704-125-2829</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div
                    className="mb-64 relative"
                    onClick={() => sendMsgWhatsapp("+917041252829", "Hello, I am interested in your sales services. Please provide more information. Thanks!")}
                    onMouseEnter={() => setisHover(true)}
                    onMouseLeave={() => setisHover(false)}
                >
                    <div className="bg-[#005D89] p-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer">
                        <svg
                            className="w-6 h-6 text-white animate-surprise-delayed"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </div>

                    <div className={`absolute right-full mr-3 top-0 transition-all duration-300 ${isHover ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
                        <div className="bg-[#005D89] text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 min-w-[240px]">
                            <svg
                                className="w-8 h-8 text-white flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <div>
                                <div className="font-bold text-base">WhatsApp for Sales</div>
                                <div className="text-xs opacity-80 mt-1">Chat with us now!</div>
                            </div>
                        </div>

                        <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-2">
                            <div className="w-0 h-0 border-t-6 border-t-transparent border-b-6 border-b-transparent border-l-6 border-l-[#005D89]"></div>
                        </div>
                    </div>
                </div>

            </div>


            <style jsx>{`
        @keyframes animation {
          0%, 100% { 
            transform: rotate(0deg) scale(1);
          }
          25% { 
            transform: rotate(-15deg) scale(1.1);
          }
          50% { 
            transform: rotate(15deg) scale(1.1);
          }
          75% { 
            transform: rotate(-13deg) scale(1.05);
          }
        }
        
        .animate-surprise {
          animation: animation 0.5s ease-in-out infinite;
          transform-origin: center center;
        }
        
        .animate-surprise-delayed {
          animation: animation 0.5s ease-in-out infinite;
          animation-delay: 0.5s;
          transform-origin: center center;
        }
        
        .animate-surprise-delayed-2 {
          animation: animation 0.5s ease-in-out infinite;
          animation-delay: 1s;
          transform-origin: center center;
        }
      `}</style>

            <style>{`
        .animate-slide-in {
          animation: slideInPanel 0.3s forwards;
        }
        @keyframes slideInPanel {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
            </div>

            <div className='w-21 fixed top-150 right-0 z-50'>
                    <div className="w-22 h-15 text-white font-bold flex items-center justify-center animate-surprise-delayed-2 cursor-pointer" onClick={() => setChatOpen(true)}>
                        <img src={companyLogoPath} className="w-full h-full object-contain" />
                    </div>
                </div>

            {chatOpen && (
                <div className="fixed bottom-4 right-4 z-50 w-80 bg-white rounded-xl shadow-2xl overflow-hidden border">
                    <div className="bg-[#005D89] text-white flex items-center justify-between px-4 py-3">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center font-bold">K</div>
                            <div className="font-semibold">ChatBot</div>
                        </div>
                        <button className="text-white text-xl leading-none" onClick={() => setChatOpen(false)}>×</button>
                    </div>
                    <div className="p-3 h-64 overflow-y-auto bg-gray-50">
                        {messages.map((m, idx) => (
                            <div key={idx} className={`mb-2 flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`${m.role === 'user' ? 'bg-[#005D89] text-white' : 'bg-white text-gray-800'} px-3 py-2 rounded-lg max-w-auto shadow`}>
                                    {m.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <form className="p-3 border-t flex items-center gap-2" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 px-3 py-2 rounded border bg-white text-black focus:outline-none focus:ring"
                        />
                        <button type="submit" className="bg-[#005D89] text-white px-3 py-2 rounded">Send</button>
                    </form>
                </div>
            )}
            </>
    );
};

export default Right_Nav;