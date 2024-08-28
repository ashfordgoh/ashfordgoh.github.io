function showFact() {
    const facts = [
        "Justin Bieber was discovered on YouTube in 2008.",
        "He has sold over 150 million records worldwide.",
        "Justin Bieber is the youngest solo male artist to top the Billboard 200 chart in 47 years.",
        "His favorite color is purple.",
        "Justin can play the drums, guitar, piano, and trumpet.",
        "He loves hockey and used to play as a kid."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
}
