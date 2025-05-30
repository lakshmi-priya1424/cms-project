const teamMembers = [
    {
        name: "Lakshmipriya",
        role: "Team lead",
        email:"lakshmipriya7767@gmail.com",
        image: "https://img.freepik.com/premium-photo/young-girl-hr-3d-character-young-working-girl-cartoon-character-professional-girl-character_1002350-2141.jpg", // Add the image path
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
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-4xl">
                <h1 className="text-3xl font-bold mb-8 text-blue-700 text-center">Our Developer Team</h1>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-blue-200 rounded-lg shadow p-6 flex-1 flex flex-col items-center hover:shadow-md transition-shadow"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-blue-500"
                            />
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h2>
                            <p className="text-gray-700 mb-1">{member.role}</p>
                            <p className="text-blue-600">{member.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}