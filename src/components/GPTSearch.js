import { Netflix_BackgroundImage } from "../utils/constants";
import GPTMovieSuggesstions from "./GPTMovieSuggesstions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {

    return (
        <>
            <div className='fixed -z-10'>
                <img className="h-screen object-cover md:w-screen object-cover " src={Netflix_BackgroundImage} alt="backgroundimage" /></div>
            <div className="">

                <GPTSearchBar />
                <GPTMovieSuggesstions />
            </div>
        </>

    )
};

export default GPTSearch;