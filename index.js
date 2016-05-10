const scrapeIt = require('scrape-it');

scrapeIt('http://news.orf.at/', {
    top: {
        listItem: '.griditem',
        data: {
            title: {
                selector: 'h1'
            },
            url: {
                selector: 'a',
                attr: 'href'
            }
        }
    },
    ressorts: {
        listItem: '.ressort',
        data: {
            ressort: 'h1',
            articles: {
                listItem: '.tickerBox',
                data: {
                    title: {
                        selector: 'h2'
                    },
                    url: {
                        selector: 'a',
                        attr: 'href'
                    },
                    content: {
                        selector: 'p'
                    }
                }
            }
        }
    }
}).then(page => {
    
    console.log('TOP STORIES');
    page.top.forEach(e => {
        console.log('  ' + e.title + ': ' + e.url);
    });
    
    page.ressorts.forEach(e => {
        console.log(e.ressort.toUpperCase());
        e.articles.forEach(e => {
            console.log('  ' + e.title + ': ' + e.url);
        })
    });
    
});
