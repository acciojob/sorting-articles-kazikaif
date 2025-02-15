document.addEventListener("DOMContentLoaded", function () {
    const bands = [
        'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
        'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
        'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
    ];

    function stripArticle(name) {
        return name.replace(/^(A |An |The )/i, '').trim();
    }

    const sortedBands = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

    const bandList = document.getElementById('bands');
    if (bandList) {
        bandList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
    }
});
