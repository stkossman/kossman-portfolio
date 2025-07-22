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
                    <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-sm group-hover:left-[125%] transition-all duration-700 ease-in-out"></span>
                    <span className="w-1/2 transition-all duration-300 block border-white/40 absolute h-[20%] rounded-tl-lg border-l border-t top-0 left-0"></span>
                    <span className="w-1/2 transition-all duration-300 block border-white/40 absolute group-hover:h-[80%] h-[40%] rounded-tr-lg border-r border-t top-0 right-0"></span>
                    <span className="w-1/2 transition-all duration-300 block border-white/40 absolute h-[40%] group-hover:h-[80%] rounded-bl-lg border-l border-b left-0 bottom-0"></span>
                    <span className="w-1/2 transition-all duration-300 block border-white/40 absolute h-[20%] rounded-br-lg border-r border-b right-0 bottom-0"></span>
                </Link>
            </div>
        </div>
    );
};