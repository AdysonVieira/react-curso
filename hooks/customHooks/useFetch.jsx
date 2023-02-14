// useFetch ##############
const useFetch = () => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    const request = React.useCallback(async (url, option) => {
        let response
        let json
        try {
            setLoading(true)
            response = await fetch(url, option);
            json = await response.json();
        } catch(error) {
            setError(true)
            setData(null);
        } finally {
            setLoading(false)
            setData(json);
            return { response, json}
        }
    }, [])

    return {data, error, loading, request}
}