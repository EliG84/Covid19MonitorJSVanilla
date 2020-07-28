import { addRemoveData } from "./graphMngr.js";

class Country
{
    constructor (_idParent,_country,_cases,_todayCases,_deaths,_todayDeaths,_recovered,_active,_critical,_casesPerOneMillion,_deathsPerOneMillion,_totalTests,_testsPerOneMillion)
    {
        this.parent = _idParent;
        this.country = _country;
        this.cases = _cases;
        this.todayCases = _todayCases;
        this.deaths = _deaths;
        this.todayDeaths = _todayDeaths;
        this.recovered = _recovered;
        this.active = _active;
        this.critical = _critical;
        this.casesPerOneMillion = _casesPerOneMillion;
        this.deathsPerOneMillion = _deathsPerOneMillion;
        this.totalTests = _totalTests;
        this.testsPerOneMillion = _testsPerOneMillion;
    }

    render()
    {
        let newDiv = document.createElement('div');
        newDiv.className = 'col-4 col-md-2 border divSize';
        newDiv.innerHTML = `${this.country}`;

        $(this.parent).append(newDiv);

        newDiv.addEventListener('click', () => {
            $(newDiv).toggleClass('divBack');
            addRemoveData(this);
        })
    }
}
export default Country;