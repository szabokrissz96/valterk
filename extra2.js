document.getElementById('prop8').addEventListener('change', function(e) {var part = e.target.value;if (part === '') {filterpart = ['!=', ['string', ['get', 'oevk_name']], null];map.setPaintProperty('valterk2', 'fill-color', ['match',['feature-state', 'osszeg'],'0','#ebebeb','1','#d5d5d5','2','#c0c0c0','3','#ababab','4','#979797','5','#838383','6','#6f6f6f','7','#5d5d5d','8','#4a4a4a','9','#393939','#ccc',]);map.setFilter('valterk2',null);map.setLayoutProperty('valterk3', 'visibility', 'visible');$('#partok-legend').css('display', 'none');$('#indulo-legend').css('display', 'block');} else if (part === 'Momentum') {
filterpart =['any',['==',['string', ['get', 'oevk_name']], 'Budapest 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 7. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 8. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 9. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 10. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 12. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 13. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 17. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 18. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Bács-Kiskun megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Bács-Kiskun megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Bács-Kiskun megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Bács-Kiskun megye 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Bács-Kiskun megye 6. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Baranya megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Baranya megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Békés megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Békés megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Borsod-Abaúj-Zemplén megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Borsod-Abaúj-Zemplén megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Borsod-Abaúj-Zemplén megye 6. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Borsod-Abaúj-Zemplén megye 7. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Csongrád megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Csongrád megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Fejér megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Fejér megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Győr-Moson-Sopron megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Győr-Moson-Sopron megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Győr-Moson-Sopron megye 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Heves megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Heves megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Jász-Nagykun-Szolnok megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Jász-Nagykun-Szolnok megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Jász-Nagykun-Szolnok megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Nógrád megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 6. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 7. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 8. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 11. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 12. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Somogy megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Szabolcs-Szatmár-Bereg megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Szabolcs-Szatmár-Bereg megye 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Szabolcs-Szatmár-Bereg megye 6. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Tolna megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Vas megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Vas megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Veszprém megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Veszprém megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Zala megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Zala megye 2. számú egyéni választókerület']];map.setPaintProperty('valterk2', 'fill-color', 'rgba(151,97,211,1)');map.setLayoutProperty('valterk3', 'visibility', 'none');$('#partok-legend').css('display', 'block');$('#indulo-legend').css('display', 'none');
} else if (part === 'LMP') {
filterpart =['any',['==',['string', ['get', 'oevk_name']], 'Budapest 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 6. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Bács-Kiskun megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Baranya megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Csongrád megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Győr-Moson-Sopron megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Jász-Nagykun-Szolnok megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 6. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 8. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 9. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Somogy megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Vas megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Zala megye 1. számú egyéni választókerület']];map.setPaintProperty('valterk2', 'fill-color', 'rgba(75,210,0,1)');map.setLayoutProperty('valterk3', 'visibility', 'none');$('#partok-legend').css('display', 'block');$('#indulo-legend').css('display', 'none');
} else if (part === 'DK') {
filterpart =['any',['==',['string', ['get', 'oevk_name']], 'Budapest 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 6. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 7. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 9. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 11. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 12. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 13. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 15. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 18. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Bács-Kiskun megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Bács-Kiskun megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Bács-Kiskun megye 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Bács-Kiskun megye 6. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Baranya megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Baranya megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Baranya megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Baranya megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Békés megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Békés megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Borsod-Abaúj-Zemplén megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Borsod-Abaúj-Zemplén megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Borsod-Abaúj-Zemplén megye 7. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Csongrád megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Csongrád megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Fejér megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Fejér megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Fejér megye 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Győr-Moson-Sopron megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Győr-Moson-Sopron megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Győr-Moson-Sopron megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Győr-Moson-Sopron megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Győr-Moson-Sopron megye 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 6. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Heves megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Heves megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Heves megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Jász-Nagykun-Szolnok megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Komárom-Esztergom megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Nógrád megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 8. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 10. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 11. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 12. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Somogy megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Somogy megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Somogy megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Szabolcs-Szatmár-Bereg megye 6. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Tolna megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Tolna megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Tolna megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Vas megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Vas megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Veszprém megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Veszprém megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Veszprém megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Zala megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Zala megye 3. számú egyéni választókerület']];map.setPaintProperty('valterk2', 'fill-color', 'rgba(0,113,255,1)');map.setLayoutProperty('valterk3', 'visibility', 'none');$('#partok-legend').css('display', 'block');$('#indulo-legend').css('display', 'none');
} else if (part === 'MSZP') {
filterpart =['any',['==',['string', ['get', 'oevk_name']], 'Budapest 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 7. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 8. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 14. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 15. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 16. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 17. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 18. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Bács-Kiskun megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Bács-Kiskun megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Baranya megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Baranya megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Békés megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Borsod-Abaúj-Zemplén megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Borsod-Abaúj-Zemplén megye 7. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Csongrád megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Fejér megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Heves megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Heves megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Jász-Nagykun-Szolnok megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Komárom-Esztergom megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Somogy megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Szabolcs-Szatmár-Bereg megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Tolna megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Vas megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Zala megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Zala megye 3. számú egyéni választókerület']];map.setPaintProperty('valterk2', 'fill-color', 'rgba(249,0,0,1)');map.setLayoutProperty('valterk3', 'visibility', 'none');$('#partok-legend').css('display', 'block');$('#indulo-legend').css('display', 'none');
} else if (part === 'MMM') {
filterpart =['any',['==',['string', ['get', 'oevk_name']], 'Budapest 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 13. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Bács-Kiskun megye 6. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Baranya megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Baranya megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Borsod-Abaúj-Zemplén megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Borsod-Abaúj-Zemplén megye 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Csongrád megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Csongrád megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Csongrád megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Fejér megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Fejér megye 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Győr-Moson-Sopron megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Győr-Moson-Sopron megye 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 6. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Komárom-Esztergom megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Nógrád megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 7. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 8. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Szabolcs-Szatmár-Bereg megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Szabolcs-Szatmár-Bereg megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Tolna megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Vas megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Zala megye 2. számú egyéni választókerület']];map.setPaintProperty('valterk2', 'fill-color', 'rgba(12,0,106,1)');map.setLayoutProperty('valterk3', 'visibility', 'none');$('#partok-legend').css('display', 'block');$('#indulo-legend').css('display', 'none');
} else if (part === 'Egyéb') {
filterpart =['any',['==',['string', ['get', 'oevk_name']], 'Budapest 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 13. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 16. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Bács-Kiskun megye 6. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Baranya megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Békés megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Fejér megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Heves megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Nógrád megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 6. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 9. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Vas megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Vas megye 3. számú egyéni választókerület']];map.setPaintProperty('valterk2', 'fill-color', '#ababab');map.setLayoutProperty('valterk3', 'visibility', 'none');$('#partok-legend').css('display', 'block');$('#indulo-legend').css('display', 'none');
} else if (part === 'Párbeszéd') {
filterpart =['any',['==',['string', ['get', 'oevk_name']], 'Budapest 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 9. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 10. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Baranya megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Győr-Moson-Sopron megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 10. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Tolna megye 2. számú egyéni választókerület']];map.setPaintProperty('valterk2', 'fill-color', 'rgba(0,187,63,1)');map.setLayoutProperty('valterk3', 'visibility', 'none');$('#partok-legend').css('display', 'block');$('#indulo-legend').css('display', 'none');
} else if (part === 'Független') {
filterpart =['any',['==',['string', ['get', 'oevk_name']], 'Budapest 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 6. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Borsod-Abaúj-Zemplén megye 6. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Csongrád megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Hajdú-Bihar megye 6. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Jász-Nagykun-Szolnok megye 1. számú egyéni választókerület']];map.setPaintProperty('valterk2', 'fill-color', '#ababab');map.setLayoutProperty('valterk3', 'visibility', 'none');$('#partok-legend').css('display', 'block');$('#indulo-legend').css('display', 'none');
} else if (part === 'Jobbik') {
filterpart =['any',['==',['string', ['get', 'oevk_name']], 'Budapest 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Budapest 14. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Bács-Kiskun megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Baranya megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Békés megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Békés megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Borsod-Abaúj-Zemplén megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Fejér megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Fejér megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Győr-Moson-Sopron megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Győr-Moson-Sopron megye 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Heves megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Jász-Nagykun-Szolnok megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Jász-Nagykun-Szolnok megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Komárom-Esztergom megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Komárom-Esztergom megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Pest megye 12. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Somogy megye 2. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Somogy megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Somogy megye 4. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Szabolcs-Szatmár-Bereg megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Szabolcs-Szatmár-Bereg megye 5. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Veszprém megye 3. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Zala megye 1. számú egyéni választókerület'],['==',['string', ['get', 'oevk_name']], 'Zala megye 3. számú egyéni választókerület']];map.setPaintProperty('valterk2', 'fill-color', 'rgba(0,135,114,1)');map.setLayoutProperty('valterk3', 'visibility', 'none');$('#partok-legend').css('display', 'block');$('#indulo-legend').css('display', 'none');
} else {console.log('error');}map.setFilter('valterk2', ['all', filterpart,filtertelep]);});
