import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import axios from "axios";

const Features = () => {

    const [features, setFeatures] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`https://group-study-server-henna.vercel.app/feature`)
            setFeatures(data)
        }
        getData()
    }, [])

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                features.map(feature =>
                    <FeatureCard
                        key={feature._id}
                        feature={feature}
                    ></FeatureCard>)
            }
        </div>
    );
};

export default Features;