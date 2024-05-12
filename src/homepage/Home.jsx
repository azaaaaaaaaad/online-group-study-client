import { useLoaderData } from "react-router-dom";
import Banner from "../homepage/Banner";
import Features from "./Features";
import FAQ from "./FAQ";

const Home = () => {
    const features = useLoaderData();
    console.log(features);
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center mt-6 mb-6">Features</h2>
                <Features features={features}></Features>
            </div>
            <div>
            <h2 className="text-2xl font-bold text-center mt-6 mb-6">Frequently Asked Questions</h2>
                <FAQ></FAQ>
            </div>
        </div>
    );
};

export default Home;