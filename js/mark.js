function isCool() {
    var cool = document.getElementById('cool').checked;
    var zonnebrilwaarde = document.getElementById('zonnebrilwaarde');

    if (cool) {
        zonnebrilwaarde.value = -10;
    }
    zonnebrilwaarde.disabled = cool;
}

function berekenZonnebril() {
    var cool = document.getElementById('cool').checked;
    var zonnebrilwaarde = document.getElementById('zonnebrilwaarde');
    var zonnebril = document.getElementById("zonnebril");
    if (cool || currentLocation_temperature() >= zonnebrilwaarde.value) {
        zonnebril.innerHTML = 'Natuurlijk je bril op!';
    } else {
        zonnebril.innerHTML = 'Laat die bril maar thuis!';
    }
}

function berekenZonnebrand() {
    var zonnebrandwaarde = document.getElementById('zonnebrandwaarde');
    var zonnebrand = document.getElementById("zonnebrand");
    if (currentLocation_stationSunPower() >= zonnebrandwaarde.value) {
        zonnebrand.innerHTML = 'Insmeren die handel!';
    } else {
        zonnebrand.innerHTML = 'Insmeren is nu verspilling van je zonnebrand!';
    }
}

function berekenRegenkans() {
    var regenkans = document.getElementById("regenkans");
    if (forecast_mmRainMin() >= 0.8) {
        regenkans.innerHTML = 'Je wordt nat!';
    } else {
        regenkans.innerHTML = 'Het blijft lekker droog!';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    /* laden nav */
    var nav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(nav, {});

    var tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs, {});

    /* laden button */
    var fab = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(fab, {
        direction: 'left'
    });

    document.getElementById('zonnebrilwaarde').onchange = function() {
        berekenZonnebril();
    }
    document.getElementById('zonnebrandwaarde').onchange = function() {
        berekenZonnebrand();
    }
});


