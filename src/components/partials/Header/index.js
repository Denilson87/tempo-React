import React, { useState, useEffect, Fragment } from 'react';
import { AppBar, Typography } from '@material-ui/core'
import { Area } from './styled'
import WeatherIcon from 'react-icons-weather'
import { PageContainer } from '../../MainComponents';
import useApi from '../../../helpers/APIs';
const Header = () => {

    const api = useApi()

    const [maputo, setMaputo] = useState([])

    useEffect(() => {
        const lat = -25.96553
        const lng = 32.58322
        const getWeatherCity = async (lat, lng) => {
            const cityW = await api.getWeatherCity(lat, lng)
            setMaputo(cityW)
        }
        getWeatherCity(lat, lng)

    }, [])

    const formatDate = (date) => {
        let cDate = new Date(date * 1000)

        let months = ['janeiro', 'fevereiro', 'março',
            'abril', 'maio', 'junho', 'julho',
            'agosto', 'setembro', 'outubro',
            'novembro', 'dezembro']

        let dayWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

        let cDay = cDate.getDate()
        let cDayWeek = cDate.getDay()
        let cMonth = cDate.getMonth()
        let cYear = cDate.getFullYear()

        return `${dayWeek[cDayWeek]}, ${cDay} de ${months[cMonth]} de ${cYear}`
    }
    if (maputo.length === 0) {
        return (
            <Fragment>
              Erro de conectividade!
              Voce precisa se conectar a internet para ver a temperatura !
            </Fragment>
        )
    }
    else {
        return (
            <Area>
                <AppBar position="static">
                    <PageContainer>
                        <Typography className="city--maputo" variant="h4" align="center">
                            Maputo-Mozambique
                        </Typography>
                        <Typography className="date--maputo" variant="subtitle2" align="center">
                            {formatDate(maputo.currently.time)}
                        </Typography>
                        <div className="maputo--info">
                            <Typography variant="h3" align="center">
                                <WeatherIcon className="icon" name="darksky" iconId={maputo.currently.icon} flip="horizontal" rotate="90" />
                                <span className="temp--maputo">{parseInt(maputo.currently.temperature)} ºC</span>
                            </Typography>
                            <Typography className="summary--maputo" variant="h6" align="center">
                                {maputo.currently.summary}
                            </Typography>
                        </div>                        
                        <ul>
                            <li>Sensação {parseInt(maputo.currently.apparentTemperature)}</li>
                            <li>Umidade {parseInt(maputo.currently.humidity * 100)}%</li>
                            <li>Vento {parseInt(maputo.currently.windSpeed)} km/h</li>
                            <li>Chuva {(parseInt(maputo.currently.precipProbability * 100))}%</li>
                        </ul>
                        Pesquise pela sua cidade e obtenha a temperatura e a previsão para os proximos dias !
                    </PageContainer>
                </AppBar>
            </Area>
        )
    }
}

export default Header