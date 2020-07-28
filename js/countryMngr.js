import Country from "./countryClass.js";

export const country_ar = [];

export const renderCountries = (_ar) => {
    $('#parent').html('');
    _ar.map(item => {
        let newContry = new Country ('#parent',item.country,item.cases,item.todayCases,item.deaths,item.todayDeaths,item.recovered,item.active,item.critical,item.casesPerOneMillion,item.deathsPerOneMillion,item.totalTests,item.testsPerOneMillion);
        newContry.render();
    })
}