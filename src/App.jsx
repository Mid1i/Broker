import {appContext, Routers} from "services";


export default function App() {
    return (
        <appContext.Provider value={{}}>
            <Routers/>
        </appContext.Provider>
    );
}
