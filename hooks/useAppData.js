import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useAppData = () => {
    return useContext(AppContext);
};

export default useAppData;
