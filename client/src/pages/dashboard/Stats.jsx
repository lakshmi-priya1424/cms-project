import { useEffect, useState } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip,
    CartesianGrid, ResponsiveContainer, Legend,
} from 'recharts';
import historyService from '../../services/historyService';

const Stats = () => {
    const [loginData, setLoginData] = useState([]);

    const loadData = () => {
        const data = historyService.getAllHistory();
        setLoginData(data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 p-8 flex items-center justify-center">
            <div className="bg-zinc-900 p-8 rounded-3xl shadow-2xl border-2 border-red-700 w-full max-w-4xl transition-all duration-500">
                <h2 className="text-4xl font-black text-center text-red-600 mb-8 tracking-widest drop-shadow-lg netflix-font">
                    <span className="animate-pulse"> LOGIN STATS</span>
                </h2>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={loginData}
                        margin={{ top: 10, right: 30, bottom: 40, left: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                        <XAxis
                            dataKey="date"
                            tick={{ fill: '#fff', fontWeight: '700', fontSize: 14, angle: -45, textAnchor: 'end' }}
                            axisLine={{ stroke: '#e50914' }}
                            tickLine={{ stroke: '#e50914' }}
                            interval={0}
                        />
                        <YAxis
                            allowDecimals={false}
                            tick={{ fill: '#fff', fontWeight: '700', fontSize: 14 }}
                            axisLine={{ stroke: '#e50914' }}
                            tickLine={{ stroke: '#e50914' }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#181818',
                                borderColor: '#e50914',
                                color: '#fff',
                                fontWeight: 'bold',
                            }}
                            labelStyle={{ color: '#e50914', fontWeight: 'bold' }}
                            cursor={{ fill: 'rgba(229,9,20,0.1)' }}
                        />
                        <Legend iconType="circle" wrapperStyle={{ color: '#fff', fontWeight: 'bold' }} />
                        <Bar
                            dataKey="count"
                            fill="#e50914"
                            radius={[12, 12, 0, 0]}
                            barSize={40}
                            background={{ fill: '#222' }}
                            animationDuration={1200}
                            animationEasing="ease-out"
                            className="transition-all duration-300 hover:fill-red-400"
                        />
                    </BarChart>
                </ResponsiveContainer>
                <button
                    className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-xl mt-8 font-bold text-lg shadow-lg transition-all duration-300 w-full tracking-widest"
                    onClick={loadData}
                >
                    🔄 Refresh Chart
                </button>
            </div>
            <style>{`
                .netflix-font {
                    font-family: 'Bebas Neue', 'Arial Black', Arial, sans-serif;
                    letter-spacing: 0.2em;
                }
            `}</style>
        </div>
    );
};

export default Stats;
