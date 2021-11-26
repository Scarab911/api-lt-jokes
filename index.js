const PORT = process.env.PORT || 8000;
const cheerio = require('cheerio');
const axios = require('axios');
const express = require('express');
const jokeSites = require('./jokeSites');
const { children } = require('cheerio/lib/api/traversing');

const app = express();

const jokes = [];
const allJokesSites = jokeSites.sites;
// console.log(allJokesSites);

//home page and message
app.get('/', (req, res) => {
    res.json('Welcome to my Lithuanian Jokes API');
});


//printing array with all links(just to check)
app.get('/all', (req, res) => {
    res.json(allJokesSites);
});

// scrape'ing sites for content

allJokesSites.forEach(site => {
    axios.get(site.url)
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);

            $(site.selector, html).each(function () {
                const joke = $(this).text();
                // console.log(joke);

                if (joke.length > 40 &&
                    joke !== '' &&
                    !joke.includes('http') &&
                    !joke.includes('©') &&
                    !joke.includes('COVID'))
                    jokes.push({
                        text: joke,
                        source: site.title,
                        url: site.url,
                    });
            });

        });

});

app.get('/jokes', (req, res) => {
    let query = (req.query['q'] || '').toLowerCase();
    if (query) {
        const foundJokes = jokes.filter((joke) => joke.text.toLowerCase().includes(query));
        res.json(foundJokes);
        return
    };
    return res.json(jokes);
});

app.get('/random', (req, res) => {
    const randomNumber = Math.round(Math.random() * (jokes.length - 1));
    return res.json(jokes[randomNumber]);
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`)
);

