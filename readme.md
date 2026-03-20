Web-kehitys 1 (front end) TO00CD50-3001 kurssin Projekti 1: DOM-skriptaus
Projektina yksinkertaisen TODO-listan luominen, joka on toteutettu kauppalistan muodossa. Projektin tekijä: Henri Vänskä

Verkkolinkit:
Pääset julkaistuun sovellukseen käsiksi osoitteessa https://kauppalistahv.netlify.app/
Linkki projektin videoesittelyyn: https://video.laurea.fi/media/Projekti%201%20video/0_nnvz64i0

Oma arvio työstä ja oman osaamisen kehittymisestä:
Mielestäni onnistuin tekemään melko hyvin toimivan kauppalistan, jota jatkojalostamalla on mahdollista saada vieläkin paremmin toimivaksi.
Parannettavaa jäi kauppalistan ulkoasusta, jota en mielestäni saanut kovinkaan näyttäväksi visuaalisesti.
Sovellus toimii mielestäni muutoin varsin hyvin, mutta en löytänyt toimivaa ratkaisua kun tuote yliviivataan OK-painikkeella, niin yliviivaus tapahtuu myös "Poista" painikkeelle, jonka olisin halunnut jäävän ilman yliviivausta.
Koen, että olen oppinut todella paljon lisää html/javascript toiminnasta ja onkin ollut mukava päästä hiomaan taitoja perusteita käsitelleiden kurssien jälkeen.
Antaisin itselleni pisteitä seuraavasti: 8/10 p

Kurssi on tähän mennessä ollut erittäin mieluisa ja tehtävät ovat olleet sopivat haastavia ottaen huomioon oman melko vaatimattoman ohjelmointiosaamisen.
On ollut mukava saada onnistumisen elämyksiä harjoitteita tehdessä.

Sisällysluettelo:
1 Tietoja sovelluksesta
2 Tunnetut virheet/bugit
3 Teknologiat
4 Asennus
5 Lähestymistapa
6 Kiitokset
7 Lisenssi

1 Tietoja sovelluksesta
Kauppalista on sovellus, johon voi syöttää erilaisia tuotteita "Lisää listaan"-painiketta painamalla tai tuotekenttään kirjoittaessa Enteriä painamalla. Mikäli tuote on syötetty virheellisesti eli se on alle 2 merkin mittainen, ilmestyy syöttökentän alapuolelle virheviesti ja syöttökentän reunukset muuttuvat punaiseksi. Vikaviesti ja syöttökentän punainen reunus katoavat kun tuote syötetään uudelleen oikein. Kun tuote on syötetty syöttökentän kautta listaan, tuotteen pystyy listasta halutessaan poistamaan tai merkitsemäään kerätyksi "OK"-painikkeella, jolloin tuote yliviivataan listalla. Listalla pystyy myös suodattamaan tuotteita "Jäljellä oleviin tuotteisiin" ja "Kerättyihin tuotteisiin". Listan alapuolella näkyy laskuri, joka näyttää jäljellä olevien tuotteiden lukumäärän.

2 Tunnetut virheet/bugit
Poista näppäimen turha yliviivaus ostoslistassa.
Puhelimen safari ja chrome selaimilla painikkeet näkyvät vain kirjaimin.

3 Teknologiat
Käytin projektissa HTML koodia sovelluksen pohjana. CSS koodeilla tein puolestaan erilaisia tyylittelyjä ja muotoiluja sivulla näkyviin elementteihin ja teksteihin. Javascript oli käytössä kaikkien sovelluksen toiminnallisuuksien ohjelmoinnissa

4 Asennus
Kirjoita lyhyet ohjeet sovelluksen käynnistämiseen ja käyttöön.
1 Mene selaimella osoitteeseen: https://kauppalistahv.netlify.app/
2 Syötä "Lisää tuote..."-kenttään haluamasi tuote
3 Haluamasi tuote ilmestyy ostoslistaan "Lisää tuote..."-kentän alapuolelle tuotelaskurin kera.
4 Voit halutessasi "OK"-painikkeella yliviivata kerätyn tuotteen tai vaihtoehtoisesti "Poista"-painikkeella poistaa tuotteen listasta.
5 Listassa on 3 eri näkymää: "Kaikki", "Jäljellä olevat" ja "Kerätyt". "Kaikki" näkymässä kaikki tuotteet ovat näkyvillä, "Jäljellä olevat" näkymästä on poistettu yliviivatut tuotteet (OK-painikkeella käsitellyt tuotteet) ja "Kerätyt" näkymässä näkyvät vain yliviivatut tuotteet (OK-painikkeella käsitellyt tuotteet)
6 "Jäljellä olevat tuotteet"-laskuri näyttää jäljellä olevat tuotteet, eli siitä poistuvat "OK"-merkityt ja poistetut tuotteet

5 Kiitokset
Lista lähteistä ja käytin lisäksi myös Microsoftin Copilot tekoälyä koodin rakenteiden ja toiminnallisuuksien testaamiseen, sekä ideointiin mahdollisista erilaisista vaihtoehdosta tutkien tekoälyn käyttämiä lähteitä.
HTML:
https://www.w3schools.com/html/html_forms.asp Lomakekentän ja nappien mallina
https://www.w3schools.com/html/html_attributes.asp id‑ ja class‑attribuutit DOMia varten
CSS:
https://www.w3schools.com/css/css_border.asp Virheellisen syötteen jälkeen punainen reunus
https://www.w3schools.com/css/css_display_hide.asp .hidden { display: none; } suodatus
https://www.w3schools.com/css/css_text_decoration.asp Kerättyjen tuotteiden yliviivaus
https://www.w3schools.com/css/css_boxmodel.asp Input‑kenttien ja listaelementtien muotoilu
Javascript:
https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp Enter-painikkeen toiminta tuotteen syötössä
https://www.w3schools.com/js/js_htmldom_elements.asp DOM elementit
https://www.w3schools.com/js/js_htmldom_events.asp addEventListener toiminnot
https://www.w3schools.com/js/js_if_else.asp Ehtolauseet syötteen tarkastukseen ja suodatukseen
https://mika-stenberg.gitbook.io/web-sovelluksia-javascriptin-avulla/4.-lomakkeiden-kaesittely/untitled	Syötteen tarkastus (väh.2merkkiä tai tyhjä)

Lisenssi
MIT License

Copyright (c) 2026 Henri Vänskä

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.