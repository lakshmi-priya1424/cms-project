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
    const [rating, setRating] = useState('');

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
            rating: Number(rating),
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
        <div className="netflix-bg min-h-screen flex items-center justify-center relative">
            <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
            <form
                onSubmit={handleSubmit}
                className="relative z-10 w-full max-w-md bg-black bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 space-y-6 animate-fade-in border border-white border-opacity-20 glass-form"
            >
                <h2 className="text-3xl font-extrabold text-white mb-4 text-center animate-slide-down drop-shadow-lg tracking-wide">
                    Add New Movie🎥🍿
                </h2>

                <input
                    type="text"
                    name="movieImage"
                    placeholder="Enter the movie img url"
                    className="form-input"
                    value={movieImage}
                    onChange={e => setMovieImage(e.target.value)}
                    required
                />

                <input
                    type="text"
                    name="movieName"
                    placeholder="Enter the movie or series name"
                    className="form-input"
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
                    className="form-input"
                    value={releasedYear}
                    onChange={e => setReleasedYear(e.target.value)}
                    required
                />

                <input
                    type="number"
                    min="1"
                    name="seasons"
                    placeholder="Enter the number of seasons"
                    className="form-input"
                    value={seasons}
                    onChange={e => setSeasons(e.target.value)}
                />

                <select
                    name="ageCategory"
                    className="form-input"
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
                    className="form-input"
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
                    className="form-input"
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
                    <label className="text-sm font-semibold text-gray-200 mb-1 drop-shadow">
                        Rating (1–5 Stars)
                    </label>
                    <select
                        name="rating"
                        value={rating}
                        onChange={e => setRating(e.target.value)}
                        className="form-input"
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
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-red-900/40"
                >
                    ADD ITEM
                </button>
            </form>

            <style>
                {`
                .netflix-bg {
                    background: linear-gradient(120deg, #141414 60%, #1f1c18 100%);
                    position: relative;
                    overflow: hidden;
                }
                .glass-form {
                    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
                    border-radius: 20px;
                    border: 1px solid rgba(255,255,255,0.18);
                }
                .form-input {
                    width: 100%;
                    padding: 0.75rem;
                    margin-bottom: 0.5rem;
                    border-radius: 0.75rem;
                    border: 1px solid rgba(255,255,255,0.2);
                    background: rgba(255,255,255,0.08);
                    color: #fff;
                    font-size: 1rem;
                    outline: none;
                    transition: border 0.2s, box-shadow 0.2s, background 0.2s;
                    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
                }
                .form-input:focus {
                    border: 1.5px solid #e50914;
                    background: rgba(255,255,255,0.15);
                    box-shadow: 0 0 0 2px #e5091455;
                }
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
