import {appContext, Routers} from "./providers";


export default function App() {
    return (
        <appContext.Provider value={{}}>
            <Routers/>
        </appContext.Provider>
    );
}
