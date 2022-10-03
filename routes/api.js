const express = require("express");
const axios = require("axios");
const api = express.Router();

// https://docs.football-data.org/general/v4/lookup_tables.html#_league_codes

//Guardo en constantes los datos fuertes de la API.
const apiFOOTBALL = 'https://api.football-data.org/v4';
const apiKey = 'f7ded01c5a9b41a5a2fc77b9ca083bff';

//Trae todas las copas del mundo con sus ganadores
api.get('/', async (req, res) => {

    try {
        const data = await axios.get(`${apiFOOTBALL}/competitions/WC`, {
            headers: { "X-Auth-Token": `${apiKey}` }
        })
        res.status(200).json(data.data)
    } catch (error) {
        console.log(error)
    }
})

//GRUPOS Y SUS PARTIDOS
api.get('/groups', async (req, res) => {

    try {
        const data = await axios.get(`${apiFOOTBALL}/competitions/WC/matches`, {
            headers: { "X-Auth-Token": `${apiKey}` }
        })
        res.status(200).json(data.data)
    } catch (error) {
        console.log(error)
    }
})

// ESTADISTICA POR GRUPO
api.get('/standings', async (req, res) => {

    try {
        const data = await axios.get(`${apiFOOTBALL}/competitions/WC/standings`, {
            headers: { "X-Auth-Token": `${apiKey}` }
        })
        res.status(200).json(data.data.standings)
    } catch (error) {
        console.log(error)
    }
})

api.get('/cards', async (req, res) => {

    try {
        const data = await axios.get(`${apiFOOTBALL}/competitions/WC/cards`, {
            headers: { "X-Auth-Token": `${apiKey}` }
        })
        res.status(200).json(data.data)
    } catch (error) {
        console.log(error)
    }
})

api.get('/teams', async (req, res) => {

    try {
        const data = await axios.get(`${apiFOOTBALL}/competitions/WC/teams`, {
            headers: { "X-Auth-Token": `${apiKey}` }
        }) 
        res.status(200).json(data.data.teams)
    } catch (error) {
        console.log(error)
    }
})




module.exports = api;