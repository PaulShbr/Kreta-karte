var map = L.map('map').setView([35.36421, 24.46353], 14);

var osm = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var redIcon = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/FA5252/marker.png',  // URL eines roten Marker-Bildes
    iconSize: [32, 32],  // Größe des Icons
    iconAnchor: [16, 32],  // Der Ankerpunkt des Icons
    popupAnchor: [0, -32]  // Der Ankerpunkt für das Popup
});

var cameraIcon = L.icon({
    iconUrl: 'https://img.icons8.com/glyph-neue/64/point-of-interest.png',  // URL eines Kamera Marker-Bildes
    iconSize: [32, 32],  // Größe des Icons
    iconAnchor: [16, 32],  // Der Ankerpunkt des Icons
    popupAnchor: [0, -32]  // Der Ankerpunkt für das Popup
});

var beachIcon = L.icon({
    iconUrl: 'https://img.icons8.com/color/48/beach.png',  // URL einer Palme
    iconSize: [32, 32],  // Größe des Icons
    iconAnchor: [16, 32],  // Der Ankerpunkt des Icons
    popupAnchor: [0, -32]  // Der Ankerpunkt für das Popup
});

var hikeIcon = L.icon({
    iconUrl: 'https://img.icons8.com/ios/50/trekking.png',  // URL eines Wanderes
    iconSize: [27, 27],  // Größe des Icons
    iconAnchor: [16, 32],  // Der Ankerpunkt des Icons
    popupAnchor: [0, -32]  // Der Ankerpunkt für das Popup
});

var caveIcon = L.icon({
    iconUrl: 'https://img.icons8.com/quill/100/cave.png',  // URL einer Höhle
    iconSize: [27, 27],  // Größe des Icons
    iconAnchor: [16, 32],  // Der Ankerpunkt des Icons
    popupAnchor: [0, -32]  // Der Ankerpunkt für das Popup
});

var marker_hotel = L.marker([35.36421, 24.46353], { icon: redIcon }).addTo(map)
  .bindPopup(`
    <div style="text-align:center;">
      <h4>Unsere Unterkunft:</h4>
      <h3>Macaris Suites & Spa</h3>
      <img src="https://macaris.gr/wp-content/uploads/exterior-2.jpg" 
           alt="Macaris Suites & Spa" 
           style="width:200px; border-radius:12px; margin-top:1px;">
      <br>
      <a href="https://www.macaris.gr/" target="_blank">zur Website</a>
    </div>
  `);


var marker_rethymnon = L.marker([35.36914, 24.47328], { icon: cameraIcon }).addTo(map)
  .bindPopup(`
    <div style="text-align:center;">
      <h3>Rethymnon</h3>
      <h4>Altstadt, venezianischer Hafen, Festung</h4>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.mbOeC8wRurN6qqzCUgJjAQHaE7%3Fpid%3DApi&f=1&ipt=ebebfcb388cdec664a2125586d7cba5b31fcbd5d21e1889546a0cb84e0038529&ipo=images" 
           alt="Rethymnon" 
           style="width:200px; border-radius:12px; margin-top:1px;">
    </div>
  `);

var marker_chania = L.marker([35.5121, 24.0192], { icon: cameraIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Chania</h3>
    <h4>Altstadt, venezianischer Hafen</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.getyourguide.com%2Fimg%2Ftour%2F6429776c77a24.jpeg%2F98.jpg&f=1&nofb=1&ipt=9e39329f90620bb3bb9fd0d8f178cccde97391cc1481b3410b5156861b6b2735" 
        alt="Chania" 
        style="width:200px; border-radius:12px; margin-top:1px;">
</div>
`);

var marker_elafonissi = L.marker([35.27157, 23.54192], { icon: beachIcon }).addTo(map)
.bindPopup(`
    <div style="text-align:center;">
    <h3>Strand von Elafonissi</h3>
    <h4>rosa Sandstrand</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Felafonissi-strand-mit-rosa-sand-auf-kreta-90993907.jpg&f=1&nofb=1&ipt=473469713bd69cd78d79b17de5ac15e6919221b3de883203db926682b84901d9" 
        alt="Elafonissi" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    </div>
`);

var marker_balos = L.marker([35.57926, 23.58872], { icon: beachIcon }).addTo(map)
.bindPopup(`
    <div style="text-align:center;">
    <h3>Strand und Lagune von Balos</h3>
    <h4>Sandstrand, ca. 20 minütiger Fußweg vom Parkplatz, aktuell Zufahrtsstraßen unwegsam</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkimundweg.com%2Fwp-content%2Fuploads%2F2023%2F06%2FKreta-Urlaub-Balos-Drohnenaufnahme-2048x1152.jpg&f=1&nofb=1&ipt=d4b09bb4188e6319c928891ca166ec9672231efaa66995c091c40f90a32f572f" 
        alt="Balos" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    </div>
`);

var marker_falassarna = L.marker([35.501621, 23.579582], { icon: beachIcon }).addTo(map)
.bindPopup(`
    <div style="text-align:center;">
    <h3>Strand von Falassarna</h3>
    <h4>Sandstrand, besteht aus mehreren Stränden, Wellen möglich</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fsch%25C3%25B6ner-falassarna-strand-auf-kreta-90994252.jpg&f=1&nofb=1&ipt=016fe90942345398d02da705d81b49170c7373e85fc66df37aad59a7d5ca0ac0" 
        alt="Falarssana" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    </div>
`);

var marker_preveli = L.marker([35.15261, 24.47386], { icon: beachIcon }).addTo(map)
.bindPopup(`
    <div style="text-align:center;">
    <h3>Strand von Preveli</h3>
    <h4>Palmenstrand, Felsen, Kieselsteine, 20 Gehminuten vom Parkplatz, auch (Rund)Wanderungen mgl.</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.getyourguide.com%2Fimg%2Ftour%2F64103014a6a06.jpeg%2F148.jpg&f=1&nofb=1&ipt=44af10cdcc2dbf123da1a684e1ea8bf1ea6d85297449d56ad202e0939cb94b34" 
        alt="Preveli" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    </div>
`);

var marker_vai = L.marker([35.2544, 26.26493], { icon: beachIcon }).addTo(map)
.bindPopup(`
    <div style="text-align:center;">
    <h3>Strand von Vai</h3>
    <h4>Palmenwald, Naturstrand, feiner Sand</h4>
    <h4>Strand Psili Ammos: 200m entfernt von Vai, ruhiger</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rental-center-crete.com%2Fblog%2Fwp-content%2Fuploads%2F2021%2F03%2Fentrance-to-vai-beach.jpg&f=1&nofb=1&ipt=0aab6de06054aabd8ac59c4d8e791a0cad38eb5ca543f4a9deab6480fb58d86f" 
        alt="Vai" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    </div>
`);

var marker_matala = L.marker([34.9931, 24.74963], { icon: cameraIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Matala</h3>
    <h4>Hippie-Dorf, Höhlen, Strand</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.matala-holidays.com%2F_gfx%2Fmultimedia%2Fphotos%2Flarge%2F5cbc25ade1cb2.jpg&f=1&nofb=1&ipt=3eb6a81bef5439e0d65269dc8b4de78fc82ee780af1eedfe4bfd1a3165eb9326" 
        alt="Matala" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://greece-moments.com/matala-kreta/" target="_blank">Highlights Matala</a>
</div>
`);

var marker_triopetra = L.marker([35.1189, 24.5475], { icon: beachIcon }).addTo(map)
.bindPopup(`
    <div style="text-align:center;">
    <h3>Strand von Triopetra</h3>
    <h4>Felsformationen, Wellen</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.destinationcrete.gr%2Fwp-content%2Fuploads%2F2021%2F04%2Focks-triopetra-beach-southern-crete.jpg&f=1&nofb=1&ipt=5b7f636b85039f579a5680f11944a688c05b9210284970476fdf44e5373cfc25" 
        alt="Triopetra" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    </div>
`);

var marker_knossos = L.marker([35.29806, 25.16306], { icon: cameraIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Palast von Knossos</h3>
    <h4>tolle alte Steine</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.grecomap.com%2Fimages%2Fattractions%2F23%2F2417%2F1920%2F126346_Knossos-palace-51.jpg&f=1&nofb=1&ipt=0313782455bb97a12228e86980c7384c1536a0489ad847ebbaf33ee1882eda59" 
        alt="Knossos" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://greece-moments.com/knossos-kreta/" target="_blank">Infos zu Knossos</a>
</div>
`);

var marker_phaistos = L.marker([35.051675, 24.814632], { icon: cameraIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Palast von Phaistos</h3>
    <h4>tolle alte Steine</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fpalace-phaistos-crete-greece-archaeological-site-39393452.jpg&f=1&nofb=1&ipt=212b99a0a6fbd6dd7e0a80d2d7138bf80658147ec7baf35e1d4fb3fd3346b646" 
        alt="Phaistos" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://visitphaistos.gr/" target="_blank">Infos zu Phaistos</a>
</div>
`);

var marker_agiaTriada = L.marker([35.5563, 24.1343], { icon: cameraIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Agia Triada</h3>
    <h4>Kloster</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fpalace-phaistos-crete-greece-archaeological-site-39393452.jpg&f=1&nofb=1&ipt=212b99a0a6fbd6dd7e0a80d2d7138bf80658147ec7baf35e1d4fb3fd3346b646" 
        alt="Agia Triada" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://kretatourismus.com/kloster-agia-triada-auf-kreta-geschichte-glaube-kultur-erleben/" target="_blank">Infos zu Agia Triada</a>
</div>
`);

var marker_psychro = L.marker([35.1648, 25.4471], { icon: caveIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Höhle von Psychro</h3>
    <h4>Geburtsort von Zeus, Tropfsteinhöhle</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.reiseguide.de%2Fwp-content%2Fuploads%2Fhoehle-psychro-fb.jpg&f=1&nofb=1&ipt=511577d1005f7669d917b7a702ded1ef35ea3899f0e586c6a12c453d9c7528b7" 
        alt="Psychro" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://www.reiseguide.de/griechenland/kreta/hoehle-von-psychro/" target="_blank">Infos zur Höhle von Psychro</a>
</div>
`);

var marker_gortyn = L.marker([35.0580, 24.9415], { icon: cameraIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Antike Stadt Gortyn</h3>
    <h4>tolle alte Steine, als Stop auf dem Weg</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg0.oastatic.com%2Fimg2%2F76602871%2Fmax%2Fruinen-von-gortyn-auf-kreta.jpg&f=1&nofb=1&ipt=b102f23f378c16cf2fd4e958532ba615c122f3690a7e1e3dad81aebd63b8e499" 
        alt="Gortyn" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://kretareise.info/antikes-gortys-sehenswurdigkeit-kreta" target="_blank">Infos zu Gortyn</a>
</div>
`);

var marker_spinalonga = L.marker([35.29786, 25.73791], { icon: cameraIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Insel Spinalonga</h3>
    <h4>ehemaliger Verbannungsort, Festungsinsel</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stalis.club%2Fwp-content%2Fuploads%2F2018%2F01%2Fspinalonga2.jpg&f=1&nofb=1&ipt=2c93caf4185945b65f5c28dd30b2f4f65249d4561af2b5e70e1afd3a2723993f" 
        alt="Spinalonga" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://greece-moments.com/spinalonga-kreta/" target="_blank">Infos zu Spinalonga</a>
</div>
`);

var marker_lasithi = L.marker([35.183, 25.467], { icon: cameraIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Lasithi Hochebene</h3>
    <h4>Wanderungen, Windmühlen, Höhle von Psychro, schöne Dörfer</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.destinationcrete.gr%2Fwp-content%2Fuploads%2F2020%2F10%2Flassithi-with-old-windmills.jpg&f=1&nofb=1&ipt=11d8f396219dc440c1527bd51ba96a1b0de34ff7a324495301db6af593ef3d0a" 
        alt="Lasithi" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://greece-moments.com/lasithi-hochebene-kreta/" target="_blank">Infos zur Lasithi Hochebene</a>
</div>
`);

var marker_agiosNikolaos = L.marker([35.1911, 25.7152], { icon: cameraIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Agios Nikolaos</h3>
    <h4>schniecke Küstenstadt, Altstadt, Voulismeni-See</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cretetravel.com%2Fmodules%2Fhotels%2Ffotografies%2Fguides%2FEast_Crete%2F17%2FR_AgiosNIikolaos20.jpg&f=1&nofb=1&ipt=f1e9bd8caf8ee6656d0bf47dc9467a6a9c513f9e2aca289df76fd3171340f53b" 
        alt="Agios Nikolaos" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://greece-moments.com/agios-nikolaos-kreta/" target="_blank">Infos zu Agios Nikolaos</a>
</div>
`);

var marker_elounda = L.marker([35.2619, 25.7209], { icon: cameraIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Elounda</h3>
    <h4>Fischerdorf</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent.tui.co.uk%2Fadamtui%2F2019_9%2F20_15%2F43d586d0-7d13-48f5-826b-aace01041fa8%2FLOC_000807_CRE_ELD_F040WebOriginalCompressed.jpg%3Fi10c%3Dimg.resize(width%3A1080)%3Bimg.crop(width%3A1080%252Cheight%3A608)&f=1&nofb=1&ipt=6109fb5f262b8d8b56635910838696cf721a72fdd1a42f92671176944a06dac6" 
        alt="Elounda" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://greekislandhopping.de/blog/elounda-kreta" target="_blank">Infos zu Elounda</a>
</div>
`);

var marker_samaria = L.marker([35.308116, 23.918234], { icon: hikeIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Samaria Schlucht</h3>
    <h4>5-6h Wanderung, 16km, Eintritt 5€ p.P., anspruchsvoll, auch geführt mgl., auch Teilstrecke mgl.</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.reiseguide.de%2Fwp-content%2Fuploads%2Fsamaria-schlucht-fb.jpg&f=1&nofb=1&ipt=507e4d5edc930f47d620c1a354107b9c6419db69bad5163da37997896fc356b0" 
        alt="Samaria Schlucht" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://greece-moments.com/samaria-kreta/" target="_blank">Infos zur Samaria Schlucht</a>
</div>
`);

var marker_kourtaliotiko = L.marker([35.1894, 24.4634], { icon: hikeIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Kourtaliotiko Schlucht</h3>
    <h4>Wanderung: 3 km (ca. 2h), Kirche Agios Nikolaos, Quellen von Kourtaliotiko, Wasserfall</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allincrete.com%2Fwp-content%2Fuploads%2F2023%2F03%2FKourtaliotiko-Gorge-Rethymno-Crete-Copyright-Allincrete.com-35-of-49.jpg&f=1&nofb=1&ipt=de4e33c7fb7657b97b6bb5ae291859699c9a0877837d400a63c48e1679bc8cc7" 
        alt="Kourtaliotiko Schlucht" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://www.griechenland.de/kourtaliotiko-schlucht/" target="_blank">Infos zur Kourtaliotiko Schlucht</a>
</div>
`);

var marker_aradena = L.marker([35.22249, 24.06268], { icon: hikeIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Aradena Schlucht</h3>
    <h4>Wanderung: 10 km (ca. 5h ohne Pause), machbar, Marmara Strand</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.interchalet.de%2Fupload%2Ftravelguide%2F7767%2Fresponsive-images%2Fkreta-wanderung-aradena-schlucht___responsive-content_1000_749.jpg&f=1&nofb=1&ipt=f43f2b6e09f015883d7ad31c641ad0ede36fc70e3d64da6ae251f032972347a4" 
        alt="Aradena"
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://kretareise.info/wanderung-durch-die-aradena-schlucht" target="_blank">Infos zur Aradena Schlucht</a>
</div>
`);

var marker_arkadi = L.marker([35.31000, 24.62944], { icon: cameraIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Kloster Arkadi</h3>
    <h4>Kloster, tolle alte Steine</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthvnext.bing.com%2Fth%2Fid%2FOIP.1eJ-VaS5KpnLfgRrss7LrgHaE6%3Fr%3D0%26cb%3Ducfimgc2%26pid%3DApi&f=1&ipt=39815b4aa8bf219efce2efbc1c5e893f31dedd581368fb18a4271d858d6723cf&ipo=images" 
        alt="Arkadi" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://greekislandhopping.de/blog/kloster-arkadi-auf-kreta" target="_blank">Infos zum Kloster Arkadi</a>
</div>
`);

var marker_sfendoni = L.marker([35.29848, 24.83927], { icon: caveIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Sfendoni Höhle</h3>
    <h4>Tropfsteinhöhle</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreative-page.net%2Fwp-content%2Fuploads%2F2023%2F09%2Fsfentoni5-scaled.jpg&f=1&nofb=1&ipt=f0b1d39ae5aab8c1cefab9adb7c17e5a67e7bcfe67137d143cd42ece694963bc" 
        alt="Sfendoni" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://sfentoni-cave.com/de/die-hohle/" target="_blank">Infos zur Sfendoni Höhle</a>
</div>
`);

var marker_bali = L.marker([35.4149357, 24.783133], { icon: cameraIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Bali</h3>
    <h4>malerisches Küstendorf, Strand, Mischung aus traditionellem Charme und moderner Urlaubsatmosphäre, Wanderungen</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allincrete.com%2Fwp-content%2Fuploads%2F2017%2F05%2FBali-Rethymno-Crete-Greece-allincrete.com-52.jpg&f=1&nofb=1&ipt=64c26f9ff4027f06306146d63b74990f72310f12b5f9739da34858fb36574bef" 
        alt="Bali" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://www.hallo-kreta.eu/sehenswuerdigkeiten/bali" target="_blank">Infos zu Bali</a>
</div>
`);

var marker_melidoni = L.marker([35.3844, 24.72994], { icon: caveIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Melidoni Höhle</h3>
    <h4>eine der größten Kulthöhlen der minoischen Zeit</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthvnext.bing.com%2Fth%2Fid%2FOIP.ydmVDNRWiJc-dUQiLfFzGAHaE8%3Fr%3D0%26cb%3Ducfimgc2%26pid%3DApi&f=1&ipt=5a2261ff59a335974020555302e332c6cfb7c3cc16b9c1ac7f2870833700a15c&ipo=images" 
        alt="Meledoni" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://www.melidoni.gr/cave-ger" target="_blank">Infos zur Melidoni Höhle</a>
</div>
`);

var marker_kournas = L.marker([35.33083, 24.27556], { icon: beachIcon }).addTo(map)
.bindPopup(`
    <div style="text-align:center;">
    <h3>Kournassee</h3>
    <h4>einziger Süßwassersee auf Kreta, von Bergen umgeben</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Freisemagazin-online.com%2Fwp-content%2Fuploads%2F2022%2F10%2FKournassee_2087906884.jpg&f=1&nofb=1&ipt=d282b62d4aab6b40f45b1bdf75ead1444ccf47b5dc936b92098ab0d758655e0e" 
        alt="Kournas" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://www.crete-beaches.com/de/kournas/" target="_blank">Infos zum Kournassee</a>
    </div>
`);

var marker_georgioupolis = L.marker([35.36225, 24.26013], { icon: cameraIcon }).addTo(map)
.bindPopup(`
<div style="text-align:center;">
    <h3>Georgioupolis</h3>
    <h4>schnieckes Fischerdorf, Altstadt</h4>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgeorgioupolis-resort.com%2Fwp-content%2Fuploads%2F2021%2F11%2FChania-2.jpg&f=1&nofb=1&ipt=b04b3f0ddcbfcf593a53b7a4f7715d7688c4502e0147340acfe75efae7a40bb7" 
        alt="Georgioupolis" 
        style="width:200px; border-radius:12px; margin-top:1px;">
    <br>
      <a href="https://www.hallo-kreta.eu/sehenswuerdigkeiten/georgioupolis" target="_blank">Infos zu Georgioupolis</a>
</div>
`);