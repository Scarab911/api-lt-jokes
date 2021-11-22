const sites = [
    {
        title: 'sveikas.lt',
        url: 'http://ligos.sveikas.lt/lt/ligos_straipsniai/anekdotai_apie_pacientus_ir_medikus/',
        selector: 'div span'
    },
    {
        title: 'respublika',
        url: 'https://www.respublika.lt/lt/anekdotai/',
        selector: 'li .anecdote_list_text'
    },
    {
        title: 'santarve.lt',
        url: 'https://www.santarve.lt/anekdotai',
        selector: '.entry-content p'
    },
    {
        title: 'anekdotai.lt',
        url: 'https://www.anekdotai.lt',
        selector: '.box p'
    },
    {
        title: 'pasveik.lt',
        url: `https://www.pasveik.lt/lt/anekdotai`,
        selector: '.one-joke p'
    },
];
//PUSHINAM LIKUSIUS PUSLAPIUS IS SOURCES
// uzkurus serveri pakuriam cikla ir pushinam visus pasveik.lt puslapio linkus i masyva
let number = 2;
while (number <= 36) {
    sites.push({
        title: 'pasveik',
        url: `https://www.pasveik.lt/lt/anekdotai/page/${number}/`,
        selector: '.one-joke p'
    });
    number++
};

//uzkurus serveri pakuriam cikla ir pushinam visus ankedotai.lt puslapio linkus i masyva
number = 2;
while (number <= 16) {//349 veikia iki 16psl
    sites.push({
        title: 'anekdotai',
        url: `https://www.anekdotai.lt/${number}`,
        selector: '.box p'
    });
    number++
};



exports.sites = sites;

//KITI NEPANAUDOTI DEL TECH KLIUCIU TINKLAPIAI
// // uzkurus serveri pakuriam cikla ir pushinam visus ankedotai.biz puslapio linkus i masyva
// number = 2;
// while (number <= 222) {
//     sites.push({
//         title: 'anekdotai.biz',
//         url: `http://www.anekdotai.biz/naujausi-anekdotai/${number}`,
//         selector: '.anekdotas'
//     });
//     number++
// };

// {
    //     title: 'auditum',
//     url: 'https://www.auditum.lt/index.php/anekdotai.html',
//     selector: '.itemFullText p'
// }
// {
//     title: 'anekdotai.biz',
//     url: `http://www.anekdotai.biz/`,
//     selector: '.anekdotas'
// }