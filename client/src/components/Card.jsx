import React, { useState, useContext } from 'react';
import StorageContext from '../context/StorageContext';

export default function Card({ item, index }) {
	const [isFavorite, setIsFavorite] = useState(item?.isFavorite);
	const { deleteItem, updateItem } = useContext(StorageContext);

	function handleDelete() {
		deleteItem(index);
	}

	function handleFavorite() {
		updateItem(index, { isFavorite: !isFavorite });
		setIsFavorite(!isFavorite);
	}

	return (
		<div
			className="relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 group w-full max-w-xs"
			style={{ minHeight: 380 }}
		>
			{/* Background Poster */}
			<img
				src={item.movieImage || 'https://wallpapers.com/images/featured/disney-has6vy47k75d0bzs.jpg'}
				alt={item.movieName}
				className="w-full h-full object-cover"
				style={{ height: '380px',width:'100%' }}
			/>

			{/* Overlay Gradient and Content */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end">
				{/* Movie Name */}
				<h2 className="text-lg font-bold text-white mb-1">{item.movieName}</h2>

				{/* Tags */}
				<div className="flex flex-wrap gap-1 text-xs text-white mb-2">
					{item.seasons && (
						<span className="bg-white/10 px-2 py-0.5 rounded">Seasons: {item.seasons}</span>
					)}
					<span className="bg-white/10 px-2 py-0.5 rounded">Age: {item.ageCategory}</span>
					<span className="bg-white/10 px-2 py-0.5 rounded">Genre: {item.movieCategory}</span>
					<span className="bg-white/10 px-2 py-0.5 rounded">Lang: {item.languageCategory}</span>
					<span className="bg-white/10 px-2 py-0.5 rounded">⭐ {item.rating}</span>
				</div>

				{/* Buttons */}
				<div className="flex gap-2">
					<button
						onClick={handleFavorite}
						className={`text-xs px-3 py-1 rounded-full transition font-medium ${
							isFavorite
								? 'bg-yellow-400 text-black hover:bg-yellow-300'
								: 'bg-white/20 text-white hover:bg-white/30'
						}`}
					>
						{isFavorite ? '⭐ Favorited' : '☆ Favorite'}
					</button>
					<button
						onClick={handleDelete}
						className="text-xs px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-400 transition"
					>
						Delete
					</button>
				</div>
			</div>

			{/* Floating Star */}
			{isFavorite && (
				<div className="absolute top-2 right-2 text-yellow-400 text-xl drop-shadow-md">
					⭐
				</div>
			)}

			{/* Card Index (Optional) */}
			<div className="absolute bottom-2 left-2 text-xs text-white/60">#{index + 1}</div>
		</div>
	);
}
