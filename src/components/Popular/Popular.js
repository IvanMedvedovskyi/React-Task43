import { ProgressBar } from  'react-loader-spinner';
import LanguageTabs from "./LanguageTabs";
import PopularList from "./PopularList";
import {useSelector} from "react-redux";

const Popular = () => {
    const loading = useSelector((state) => state.popular.loading)

    return (
        <div>
            <LanguageTabs loading ={loading}/>
            {!loading ? (
                <PopularList />
            ) : (
                <div style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}>
                    <ProgressBar
                        height="80"
                        width="80"
                        ariaLabel="progress-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass="progress-bar-wrapper"
                        borderColor = '#F4442E'
                        barColor = '#51E5FF'
                    />
                </div>
            )}
        </div>
    );
};

export default Popular;
