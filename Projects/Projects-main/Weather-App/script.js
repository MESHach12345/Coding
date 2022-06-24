window.addEventListener('load', () => {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            //API: 5bf387bb269546d7bfc64440212210;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = '${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}';
            // const api = 'https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/37.8267,-122.4233';

            fetch(api)
                .then(data => {
                    return data.json;
                })
                .then(response => {
                    console.log(response)
            });
        });
    }
});