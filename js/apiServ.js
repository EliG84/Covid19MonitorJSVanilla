import { country_ar, renderCountries } from "./countryMngr.js";

export const getRestApi = async (url) => {
    let resp = await fetch(url);
    let data = await resp.json();
    let temp_ar = data.filter(item => item.country !== 'World');

    country_ar.push(..._.sortBy(temp_ar, 'country'));
    renderCountries(country_ar);
}