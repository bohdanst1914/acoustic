import {useEffect, useState} from "react";
import ContentItem from "./ContentItem/ContentItem";
import ContentService from "./API/ContentService";

function App() {
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(async () => {
        try {
            const response = await ContentService.getInfo()
            setState({elements: response.data.elements})
        } catch (e) {
            setState({error: e.message})
        }
        setLoading(false)
    }, []);

    const renderContent = (loading, state) => {
        if (loading)
            return <p>We don't have any information at that moment</p>

        if (state.error)
            return <p>Page is not available at the moment</p>

        return <ContentItem state={state.elements}/>
    }

    return (
        <div className="App">
            {renderContent(loading, state)}
        </div>
    );
}

export default App;
