import React, { memo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { Container } from '../../../node_modules/@material-ui/core/index'
import Api from '../../api'
import { ContainerStyled } from './style'

function Main() {

    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')

    const getCovidData = useCallback((country)=> {
        Api.getCountry(country)
            .then(data => setData(data))

    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    return (
        <ContainerStyled>
            <div className='mb-2'>


            </div>


        </ContainerStyled>
    )
}

export default memo(Main)