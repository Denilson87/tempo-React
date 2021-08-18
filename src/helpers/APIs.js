import axios from 'axios';


const API = {


    getStates: async () => {
        const res = await axios.get("https://openweathermap.org/api/4cd2f4b658ed81374394f851f5886381/"
        );
        return (res.data)
    },
    getCity: async (idUf) => {
        const res = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idUf}/municipios`
        );
        return (res.data)
    },

    getWeatherCity: async (lat,lng) => {
        const res = await axios.get(`/forecast/406bf207af7d13b2b966d52b63be71f3/${lat},${lng}`,{
            params:{
                lang:'pt',
                units:'ca'
            }
        })
        return (res.data)
    },
}

export default () => API