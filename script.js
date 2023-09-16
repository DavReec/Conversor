let country_list = { // Objeto de monedas para las dos apis que usaremos.
    "AED" : "AE",
    "AFN" : "AF",
    "XCD" : "AG",
    "ALL" : "AL",
    "AMD" : "AM",
    "ANG" : "AN",
    "AOA" : "AO",
    "AQD" : "AQ",
    "ARS" : "AR",
    "AUD" : "AU",
    "AZN" : "AZ",
    "BAM" : "BA",
    "BBD" : "BB",
    "BDT" : "BD",
    "XOF" : "BE",
    "BGN" : "BG",
    "BHD" : "BH",
    "BIF" : "BI",
    "BMD" : "BM",
    "BND" : "BN",
    "BOB" : "BO",
    "BRL" : "BR",
    "BSD" : "BS",
    "NOK" : "BV",
    "BWP" : "BW",
    "BYR" : "BY",
    "BZD" : "BZ",
    "CAD" : "CA",
    "CDF" : "CD",
    "XAF" : "CF",
    "CHF" : "CH",
    "CLP" : "CL",
    "CNY" : "CN",
    "COP" : "CO",
    "CRC" : "CR",
    "CUP" : "CU",
    "CVE" : "CV",
    "CYP" : "CY",
    "CZK" : "CZ",
    "DJF" : "DJ",
    "DKK" : "DK",
    "DOP" : "DO",
    "DZD" : "DZ",
    "ECS" : "EC",
    "EEK" : "EE",
    "EGP" : "EG",
    "ETB" : "ET",
    "EUR" : "FR",
    "FJD" : "FJ",
    "FKP" : "FK",
    "GBP" : "GB",
    "GEL" : "GE",
    "GGP" : "GG",
    "GHS" : "GH",
    "GIP" : "GI",
    "GMD" : "GM",
    "GNF" : "GN",
    "GTQ" : "GT",
    "GYD" : "GY",
    "HKD" : "HK",
    "HNL" : "HN",
    "HRK" : "HR",
    "HTG" : "HT",
    "HUF" : "HU",
    "IDR" : "ID",
    "ILS" : "IL",
    "INR" : "IN",
    "IQD" : "IQ",
    "IRR" : "IR",
    "ISK" : "IS",
    "JMD" : "JM",
    "JOD" : "JO",
    "JPY" : "JP",
    "KES" : "KE",
    "KGS" : "KG",
    "KHR" : "KH",
    "KMF" : "KM",
    "KPW" : "KP",
    "KRW" : "KR",
    "KWD" : "KW",
    "KYD" : "KY",
    "KZT" : "KZ",
    "LAK" : "LA",
    "LBP" : "LB",
    "LKR" : "LK",
    "LRD" : "LR",
    "LSL" : "LS",
    "LTL" : "LT",
    "LVL" : "LV",
    "LYD" : "LY",
    "MAD" : "MA",
    "MDL" : "MD",
    "MGA" : "MG",
    "MKD" : "MK",
    "MMK" : "MM",
    "MNT" : "MN",
    "MOP" : "MO",
    "MRO" : "MR",
    "MTL" : "MT",
    "MUR" : "MU",
    "MVR" : "MV",
    "MWK" : "MW",
    "MXN" : "MX",
    "MYR" : "MY",
    "MZN" : "MZ",
    "NAD" : "NA",
    "XPF" : "NC",
    "NGN" : "NG",
    "NIO" : "NI",
    "NPR" : "NP",
    "NZD" : "NZ",
    "OMR" : "OM",
    "PAB" : "PA",
    "PEN" : "PE",
    "PGK" : "PG",
    "PHP" : "PH",
    "PKR" : "PK",
    "PLN" : "PL",
    "PYG" : "PY",
    "QAR" : "QA",
    "RON" : "RO",
    "RSD" : "RS",
    "RUB" : "RU",
    "RWF" : "RW",
    "SAR" : "SA",
    "SBD" : "SB",
    "SCR" : "SC",
    "SDG" : "SD",
    "SEK" : "SE",
    "SGD" : "SG",
    "SKK" : "SK",
    "SLL" : "SL",
    "SOS" : "SO",
    "SRD" : "SR",
    "STD" : "ST",
    "SVC" : "SV",
    "SYP" : "SY",
    "SZL" : "SZ",
    "THB" : "TH",
    "TJS" : "TJ",
    "TMT" : "TM",
    "TND" : "TN",
    "TOP" : "TO",
    "TRY" : "TR",
    "TTD" : "TT",
    "TWD" : "TW",
    "TZS" : "TZ",
    "UAH" : "UA",
    "UGX" : "UG",
    "USD" : "US",
    "UYU" : "UY",
    "UZS" : "UZ",
    "VEF" : "VE",
    "VND" : "VN",
    "VUV" : "VU",
    "YER" : "YE",
    "ZAR" : "ZA",
    "ZMK" : "ZM",
    "ZWD" : "ZW"
}



const BUTTON = document.querySelector('#btnConvertir');
const SPAN = document.getElementById("conversion");
SPAN.style.color="#e1d9d9"

function addOptions(){ // Funcion para agegar las opciones de las monedas de manera dinamica
    const CONVERT_FROM = document.querySelector('#convert-from-select'); // Elemento select para las opciones de las monedas originales
    const CONVERT_TO = document.querySelector('#convert-to-select'); // Elemento select para las opciones de las monedas a las cuales podemos comvertir

    for (let key in country_list) {
    
        let convertCurrency = document.createElement("option");
        let fromCurrency = document.createElement("option");
        
        convertCurrency.value = key;
        convertCurrency.textContent = key;
    
        fromCurrency.value = key;
        fromCurrency.textContent = key;
    
        CONVERT_FROM.appendChild(convertCurrency); // Opciones de Monedas de la cual convertir
        CONVERT_TO.appendChild(fromCurrency); // Opcines de Moneda para combertir
    }
}

function convert(URRENCY_QUOTE){
    const MONTO = document.getElementById("monto").value;
    const TEXTCOTIZACION = document.getElementById("textoCotizacion")
    console.log(URRENCY_QUOTE[0]);
    console.log(URRENCY_QUOTE[1]);
    let reusl = MONTO * URRENCY_QUOTE[0];
    SPAN.innerText = reusl + URRENCY_QUOTE[1];
    SPAN.style.color="black"
    TEXTCOTIZACION.innerText = "1 " + URRENCY_QUOTE[2] + " = " + URRENCY_QUOTE[0] + URRENCY_QUOTE[1]; 

}

function getData(){
    const CONVERT_CURRENCY_VALUE = document.querySelector('#convert-from-select').value; // Tipo de Monedas original que queremos convertir.
    const FROM_CURRENCY_VALUE =  document.querySelector('#convert-to-select').value; // Tipo de Monedas a la cual se combertira la moneda original.

    const URL_API = `https://v6.exchangerate-api.com/v6/f0c94a0a28f7ef5a8530622a/latest/${CONVERT_CURRENCY_VALUE}`;

    fetch(URL_API)
        .then(response => response.json())
        .then(response => {

            const CURRENCY_QUOTE = response.conversion_rates[`${FROM_CURRENCY_VALUE}`] // Cotizacion actualizada de las monedas seleccionadas
            let monNom=[CURRENCY_QUOTE, FROM_CURRENCY_VALUE, CONVERT_CURRENCY_VALUE];
            convert(monNom);            
            
        })
        .catch(err => console.error(err));
}

function main(){
    addOptions();

    BUTTON.addEventListener('click', getData); // Boton de comversion presionado.


}

window.onload = main;