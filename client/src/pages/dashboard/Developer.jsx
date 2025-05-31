import { useEffect } from "react";

const teamMembers = [
    {
        name: "Lakshmipriya",
        role: "Team lead",
        email:"lakshmipriya7767@gmail.com",
        image: "https://img.freepik.com/premium-photo/young-girl-hr-3d-character-young-working-girl-cartoon-character-professional-girl-character_1002350-2141.jpg",
    },
    {
        name: "Subiksha",
        role: "Team member",
        email: "subikshasuresh23@gmail.com",
        image: "https://img.freepik.com/premium-photo/young-girl-hr-3d-character-young-working-girl-cartoon-character-professional-girl-character_1002350-2141.jpg"
    },
    {
        name: "Rukkiya Zainab",
        role: "Team member",
        email: "rukkiyazainab@gmial.com",
        image: "https://img.freepik.com/premium-photo/young-girl-hr-3d-character-young-working-girl-cartoon-character-professional-girl-character_1002350-2141.jpg",
    },
];

export default function Developer() {
    useEffect(() => {
        // Add fade-in animation on mount
        const cards = document.querySelectorAll(".team-card");
        cards.forEach((card, i) => {
            card.style.opacity = 0;
            card.style.transform = "translateY(40px)";
            setTimeout(() => {
                card.style.transition = "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)";
                card.style.opacity = 1;
                card.style.transform = "translateY(0)";
            }, 200 + i * 200);
        });
    }, []);

    return (
        <div
            className="min-h-screen flex flex-col items-center py-10"
            style={{
                background: "linear-gradient(135deg, #141414 60%, #e50914 100%)",
            }}
        >
            <div className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-4xl">
                <h1 className="text-3xl font-bold mb-8 text-red-600 text-center" style={{ fontFamily: "Netflix Sans, Arial, Helvetica Neue, Helvetica, sans-serif" }}>
                    Our Developer Team
                </h1>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="team-card bg-[#221f1f] rounded-lg shadow-2xl p-6 flex-1 flex flex-col items-center hover:scale-105 hover:shadow-red-700/40 transition-transform duration-300"
                            style={{
                                boxShadow: "0 8px 32px 0 rgba(229,9,20,0.37)",
                                cursor: "pointer",
                            }}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-red-600"
                                style={{
                                    transition: "transform 0.4s cubic-bezier(.4,0,.2,1)",
                                }}
                            />
                            <h2 className="text-xl font-semibold text-white mb-2">{member.name}</h2>
                            <p className="text-gray-300 mb-1">{member.role}</p>
                            <p className="text-red-400">{member.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}