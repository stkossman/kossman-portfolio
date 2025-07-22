import FuzzyText from '../blocks/TextAnimations/FuzzyText/FuzzyText.jsx';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
    return (
        <div className="w-full h-full min-h-screen flex flex-col items-center justify-center bg-black">
            <div className="text-center">
                <FuzzyText>404</FuzzyText>
                <p className="text-white/80 text-xl mb-8 mt-6">
                    Page not found
                </p>
                <Link
                    to="/"
                    className="relative cursor-pointer py-3 px-8 text-center inline-flex justify-center text-lg text-white bg-white/10 backdrop-blur-md rounded-lg transition-all duration-300 ease-in-out group overflow-hidden border border-white/30 hover:border-white/50 hover:bg-white/20"
                >
                    <span className="relative z-20">Go Home</span>
                </Link>
            </div>
        </div>
    );
};