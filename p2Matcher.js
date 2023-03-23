// We should pull this from jn... but lets just hardcode it for now
let p2Array = ["Abominable Snowball","Acko","Ada","Adagio","Airax","Alabriss","Albat","Albot","Alkenore","Altachuck","Altalaphus",
"Angelpuss","Antwerph","Anubis","Apis","Arkmite","Aroota","Avabot","Babaa","Babik","Babith","Baby Blu","Baby Fireball","Baby Space Fungus",
"Babyca","Baraga","Barbat","Barlow","Bartamus","Bat Boy","Batterfly","Bazatlan","Bearclops","Bearog","Beekadoodle","Beepallite","Belonthiss",
"Bika","Bikiwan","Bilguss","Biyako","Bleamix","Blibble","Blobagus","Blobikins","Blooky","Bloop","Bloopy","Blorbis","Blorpulous","Blugar","Bluna",
"Blurgah","Blurtle","Bogie","Boween","Bowla","Bubblebee","Bubbles","Bubblisaur","Buzzer","Buzzler","C430 Autobot","Cadro","Calabat","Camelior",
"Candy Vampire","Candychan","Caprior","Captive Shadow Wraith","Carma","Carmariller","Catamara","Charnie","Chatter","Cheerlub","Chezzoom","Chiruck",
"Chomper","Chuchuana","Chumablah","Cirrus","Clompkin","Cobrall","Cofferling","Combobot","Cougi","Crabby","Crabula","Crocalu","Crokabek","Crystacat",
"Cubett","Cuttlebot","Cybit","Cyodrake","Dal","Daloop","Dandan","Darblat","Darpinch","Dartail","Deaver","Delfin","Devilpuss","Ditsy","Djuti","Dofrey",
"Doglefox","Donksaur","Drackobunny","Drackonack","Dragoyle","Dribblet","Droolik","Drugal","Dua","Duocorn","Eelika","Eizzil","Epuni","Erge","Erisim",
"Ettaphant","Eustabee","Faellie","Fangy","Farnswap","Feepit","Felf","Felly","Feloreena","Filamen","Fir","Fleeper","Flerper","Fleurbik","Flightning Bug"
,"Flipperbot","Flippy","Flishy","Flizzardo","Floobix","Florta","Flosset","Floud","Flowper","Flurm","Foobug","Frillabon","Frogarott","Frogler","Froiler",
"Frowny","Fungree","Furwitch","Gabar","Gallion","Gangee","Ganuthor","Garfir","Garooda","Gathow","Geb","Ghostkerchief","Ghostkerfish","Ghoti","Gikerot",
"Gio","Globilol","Gnar","Gobbler","Goldy","Goople","Goulblee","Goy","Goyalbotnik","Grackle Bug","Graffle","Graglop","Gratlik","Greeble","Green Tentacle",
"Gremble","Griefer","Grobrin","Gruslen","Gulper","Gulpfir","Gumblesh","Gwalla","Gwortz","GX-4 Haseebot","GX-4 Oscillabot","Gypmu","Harris","Hasee",
"Haseepuss","Hegelob","Hegie","Hermiteese","Hippalop","Hoggir","Hooklen","Hoovle","Hopso","Hornsby","Horus","Huggy","Huggy Bear","Hydruplit","Icklesaur",
"Ignalce","Intesteen","Jawshell","Jinjah","Jowlard","Juma","Kadoatie","Karren","Kateil","Kazeriu","Kelpflake","Kepru","Khamette","Khnum","Khonsu","Khura",
"Kiiyak","Kimbi","Kookith","Kora","Krawk","Krawkadon","Krikket","Leeble","Lellefisk","Lil Frankie","Liobits","Lizark","Lurman","Lutra","Lyins","Magaral",
"Magmut","Magtile","Mallard","Manjeer","Marafin","Marbluk","Marlock","Mastyxi","Mauket","Mazzew","Mechanized Laboratory Assistant","Meekins","Meepit",
"Melton","Melvie","Meowclops","Meturf","Miamouse","Mibblie","Millipod","Mimbi","Minitheus","Mirgle","Moink","Moltenna","Moltenore","Momba","Morkou",
"Mortog","Mummy Baby","Mundo","Muyang","N-4 Info Retrieval Bot","Naalala","Naleap","Narwhool","Navibot","Nebularis","Nedler","Neotrak","Neucloop",
"Nik","Niptor","Noak","Noil","Noilkeet","Nuk","Nupie","Nuranna","Octorna","Ombat","Ona","Oop","Orbulon","Orp","Ownow","Palmplat","Pandaphant",
"Patamoose","Pawkeet","Peadackle","Peedleedoo","Peo","Pepito","Petoot","Pfish","Phnard","Pickulsaur","Pikis","Pile of Soot","Pinceron","Pinklet",
"Pirakeet","Piraket","Plathydon","Pofew","Polarchuck","Ponka","Pooka","Popblew","Poppit","Powtry","Primella","Psimouse","Puppyblew","Pwerko",
"Pygui","Pyon","Quadrapus","Quadrone","Quetzal","Quilin","Quintilc","Raindorf","Ramosan","Rashpid","Rav","Raverge","Razumi","Reptillior",
"Roaderie 1000","Robocrush","Roburg 3T3","Rock","Rollatron","Romeep 3t3","Rotawheel","Rotoblur 4000","Rotweilie","Sandan","Sandpoint",
"Sauropod","Scado","Scamander","Scarabug","Schmoonie","Schnelly","Scout Unit","Screal","Screwtop","Searex","Seece","Selket","Seti",
"Sharky","Shocket","Short Fuse","Skelly","Skindle","Sklyde","Skootle Bug","Skree","Slogmok","Slorg","Slorgclops","Sludgy","Slugawoo",
"Slymook","Smiley","Snarhook","Snauberack","Snicklebeast","Snomorg","Snoogy","Snorkle","Snorlkin","Snowbunny","Snowickle","Snuffly",
"Soreen","Spallard","Spardel","Spirkle","Splime","Splyke","Spoppy","Sproing","Spyder","Spyrabor","Spyven","Stahkee","Staragus","Stego",
"Stopngo 400","Sunutek","Surzard","Sutekh","Swabby","Symol","Taigar","Tainted Minion","Talpidat","Tamed Mini-Monster","Tanamurx","Tanizard",
"Tapira","Tasu","Taweret","Teasqito","Teek","Teemyte","Tekkal","Tencals","Tenna","Tigermouse","Tiny Giant Squid","Tomamu","Tootum","Tralbak",
"Triffin","Trumpadon","Trunkard","Tuceet","Turdle","Turmac","Turnali","Turtmid","Turtum","Tyrowbee","Uggatrip","Uggazew","Ukali",
"Ultra Mega Bot 2000","Ultra Pinceron","Unifox","Uniocto","Urchull","Urgoni","Vacana","Vacumatic 9000","Vaeolus","Val","Valteek",
"Vullard","Wadjet","Wain","Walein","Walking Carpet","Warf","Weeble","Weebly","Weewoo","Werhond","Wheelie","Wheelie Bot","Wherfy",
"Whinny","Whoot","Wibreth","Woolypapith","Wreathy","Wuzzer","Wuzzle","Xampher","Xepru","Yackito","Yoakie","Yooyu","Yullie","Zamillion",
"Zebba","Zebie","Zomutt","Zoomik","Zumagorn"];

// should probably pull this too but for now this is okay
let ppColors = ["8-Bit","Birthday","Black","Blue","Brown","Checkered","Chocolate","Christmas","Clay","Cloud","Custard","Darigan",
"Desert","Disco","Dung","Elderly","Electric","Eventide","Faerie","Fire","Ghost","Glowing","Gold","Green","Grey",
"Halloween","Ice","Invisible","Island","Jelly","Magma","Maractite","Maraquan","Mutant","Orange","Picnic","Pink",
"Pirate","Plushie","Purple","Rainbow","Red","Robot","Royal","Sand","Sketch","Snow","Spotted","Spring","Starry",
"Stealthy","Strawberry","Tyrannian","Valentine","Water","White","Woodland","Yellow","Zombie"];

function getDrawPrompt(specPick, colorPick)
{
    if (specPick === undefined ||specPick == -1) {
        specPick = Math.floor(Math.random() *p2Array.length);
    }
    if (colorPick === undefined) {
        colorPick = Math.floor(Math.random() * ppColors.length);
    }
    return ppColors[colorPick] +' '+ p2Array[specPick];
}

function jnLinkFormat(item) {
    let url = "https://items.jellyneo.net/search/?name=%s&name_type=3";
    let image = "https://images.neopets.com/items/toy_plushie_negg_fish.gif";
    url = url.replace("%s", item);
    let textPrompt = getText(item);
    return `<div>${textPrompt}<a tabindex='-1' target='_blank' href='${url}'><img src='${image}' class='searchimg'></a></div><br>`;
}

function getText(item)
{
    let print = 'You should draw a';
    if(item.charAt(0) == 'A' ||item.charAt(0) == 'E'|| item.charAt(0) == 'I'|| item.charAt(0) == 'O') {
        print += 'n';
    }
    print += " " +item + "! ";
    return print;
}

function urlPrep(item) {
    return item.replaceAll("!", "%21")
               .replaceAll("#", "%23")
               .replaceAll("&", "%26")
               .replaceAll("(", "%28")
               .replaceAll(")", "%29")
               .replaceAll("*", "%2A")
               .replaceAll("+", "%2B")
               .replaceAll(",", "%2C")
               .replaceAll("/", "%2F")
               .replaceAll(":", "%3A")
               .replaceAll("?", "%3F")
               .replaceAll(" ", "+");
}

jQuery.fn.exists = function () {
    return this.length > 0;
};
