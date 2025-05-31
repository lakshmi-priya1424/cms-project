import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import StorageContext from '../../context/StorageContext';

function AddItem() {
    const [movieImage, setMovieImage] = useState('');
    const [movieName, setMovieName] = useState('');
    const [releasedYear, setReleasedYear] = useState('');
    const [seasons, setSeasons] = useState('');
    const [ageCategory, setAgeCategory] = useState('');
    const [movieCategory, setMovieCategory] = useState('');
    const [languageCategory, setLanguageCategory] = useState('');
    const [rating, setRating] = useState(''); // ⭐ New rating state

    const { addNewItem } = useContext(StorageContext);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        addNewItem({
            movieImage,
            movieName,
            releasedYear,
            seasons,
            ageCategory,
            movieCategory,
            languageCategory,
            rating: Number(rating), // ⭐ Ensure rating is a number
            isFavorite: false
        });

        Swal.fire({
            title: "Success",
            text: "Movie🎥 Added Successfully",
            icon: "success",
            confirmButtonText: "OK"
        });

        navigate('/dashboard/view');
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-6 animate-fade-in"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center animate-slide-down">
                    Add New Movie🎥🍿
                </h2>

                <input
                    type="text"
                    name="movieImage"
                    placeholder="Enter the movie img url"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 focus:scale-105"
                    value={movieImage}
                    onChange={e => setMovieImage(e.target.value)}
                    required
                />

                <input
                    type="text"
                    name="movieName"
                    placeholder="Enter the movie or series name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 focus:scale-105"
                    value={movieName}
                    onChange={e => setMovieName(e.target.value)}
                    required
                />

                <input
                    type="number"
                    min="1800"
                    max="2025"
                    name="releasedYear"
                    placeholder="Enter the Released Year"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 focus:scale-105"
                    value={releasedYear}
                    onChange={e => setReleasedYear(e.target.value)}
                    required
                />

                <input
                    type="number"
                    min="1"
                    name="seasons"
                    placeholder="Enter the number of seasons"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 focus:scale-105"
                    value={seasons}
                    onChange={e => setSeasons(e.target.value)}
                />

                <select
                    name="ageCategory"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 focus:scale-105"
                    value={ageCategory}
                    onChange={e => setAgeCategory(e.target.value)}
                    required
                >
                    <option value="">Select Age Category</option>
                    <option value="U">U</option>
                    <option value="UA">UA</option>
                    <option value="A">A</option>
                </select>

                <select
                    name="movieCategory"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 focus:scale-105"
                    value={movieCategory}
                    onChange={e => setMovieCategory(e.target.value)}
                    required
                >
                    <option value="">Select a genre</option>
                    <option value="action">Action</option>
                    <option value="anime">Anime</option>
                    <option value="sports">Sports</option>
                    <option value="kids">Kids</option>
                    <option value="family">Family</option>
                    <option value="comedies">Comedy</option>
                    <option value="horror">Horror</option>
                    <option value="dramas">Dramas</option>
                    <option value="fantacy">Fantasy</option>
                    <option value="romance">Romance</option>
                    <option value="documentry">Documentry</option>
                    <option value="biographical">Biographical</option>
                    <option value="cartoon">Cartoon</option>
                </select>

                <select
                    name="languageCategory"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 focus:scale-105"
                    value={languageCategory}
                    onChange={e => setLanguageCategory(e.target.value)}
                    required
                >
                    <option value="">Select Language</option>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                    <option value="japanese">Japanese</option>
                    <option value="korean">Korean</option>
                    <option value="tamil">Tamil</option>
                    <option value="telugu">Telugu</option>
                    <option value="other">Other</option>
                </select>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-600 mb-1">
                        Rating (1–5 Stars)
                    </label>
                    <select
                                            name="rating"
                                            value={rating}
                                            onChange={e => setRating(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 focus:scale-105"
                                            required
                                        >
                                            <option value="">Select Rating</option>
                                            <option value="1">⭐</option>
                                            <option value="2">⭐⭐</option>
                                            <option value="3">⭐⭐⭐</option>
                                            <option value="4">⭐⭐⭐⭐</option>
                                            <option value="5">⭐⭐⭐⭐⭐</option>
                                        </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-amber-400 text-white py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-300 transform hover:scale-105 active:scale-95"
                >
                    ADD ITEM
                </button>
            </form>

            <style>
                {`
                .animate-fade-in {
                    animation: fadeIn 0.8s ease;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95);}
                    to { opacity: 1; transform: scale(1);}
                }
                .animate-slide-down {
                    animation: slideDown 0.7s cubic-bezier(0.4, 0, 0.2, 1);
                }
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-30px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                `}
            </style>
        </div>
    );
}

export default AddItem;
