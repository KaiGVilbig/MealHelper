import * as dotenv from 'dotenv'
import express from 'express'

let router = express.Router()
dotenv.config()

let tokenClient;
let gapiInited = false;
let gisInited = false;

/**
 * Callback after api.js is loaded.
 */
const gapiLoaded = () => {
    gapi.load('client', initializeGapiClient);
}

/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */
const initializeGapiClient = async () => {
    await gapi.client.init({
      apiKey: process.env.API_KEY,
      discoveryDocs: [process.env.DOC_URL],
    });
    gapiInited = true;
    maybeEnableButtons();
}

/**
 * Callback after Google Identity Services are loaded.
 */
const gisLoaded = () => {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: process.env.CLIENT_ID,
        scope: process.env.SCOPES,
        callback: '', // defined later
    });
    gisInited = true;
    // maybeEnableButtons();
}

router.get('/getMeals', (req, res) => {
    res.send("Bruh")
})

export default router