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
    return [ppColors[colorPick], p2Array[specPick]];
}

function jnLinkFormat(i) {
    let textPrompt = getText(i[0] + " " + i[1]);
    let url = "https://items.jellyneo.net/search/?name=%s&name_type=3";
    let image = "https://images.neopets.com/items/toy_plushie_negg_fish.gif";
    url = url.replace("%s", i[1]);
    return `<div>${textPrompt}<a tabindex='-1' target='_blank' href='${url}'><img src='${image}' class='searchimg'></a></div><br>`;
}


function getText(item) {
    let print = 'You should draw a';
    if (item.charAt(0) == 'A' ||item.charAt(0) == 'E'|| item.charAt(0) == 'I'|| item.charAt(0) == 'O') {
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
let fullArray = [];

function getUniqueDrawPrompt() 
{
    // First pick a species
    let i = Math.floor(Math.random() *fullArray.length);

    // Color 
    let colorPick = "";
    if(fullArray[i][1].length === 0) 
    {
        //easy case, no unique colors
        colorPick = Math.floor(Math.random() * ppColors.length);
        // Combine and return 
        return [ppColors[colorPick], fullArray[i][0]];
    } else 
    {
        // Okay we need to build a list of colors this p2 is missing
        let missingColors = [];
        let realColors = "" + fullArray[i];
        for(let j = 0; j<ppColors.length; j++)
        {
            let indexOfColor = -1;
            if(j < 10)
            {
                let te = "0" + j;
                indexOfColor = realColors.indexOf(te);
            }
            else
            {
                indexOfColor = realColors.indexOf(j);
            }
            if(indexOfColor === -1)
            {
                missingColors.push(ppColors[j]);
            }
        }
        // Okay we should have a list of just the missing colors now... 
        colorPick = Math.floor(Math.random() * missingColors.length);
        return [missingColors[colorPick], fullArray[i][0]];
    }
}

function setUpArray()
{
    fullArray.push(["Abominable Snowball",[03, 12, 18, 19, 37, 38, 39, 40, 41, 42, 45, 47, 57]]);
    fullArray.push(["Acko",[02, 03, 06, 07, 13, 28, 36, 41, 47, 53, 55]]);
    fullArray.push(["Ada",[]]);
    fullArray.push(["Adagio",[]]);
    fullArray.push(["Airax",[03, 12, 16, 19, 36, 38, 47, 55]]);
    fullArray.push(["Alabriss",[01, 02, 07, 16, 18, 19, 20, 30, 40, 54]]);
    fullArray.push(["Albat",[12, 13, 19, 32, 36, 37, 40, 43, 46]]);
    fullArray.push(["Albot",[]]);
    fullArray.push(["Alkenore",[02, 03, 07, 18, 19, 23, 28, 33, 36, 37, 40, 41, 49, 52]]);
    fullArray.push(["Altachuck",[00, 09, 18, 33, 36, 37]]);
    fullArray.push(["Altalaphus",[]]);
    fullArray.push(["Angelpuss",[01, 03, 04, 07, 08, 10, 11, 13, 14, 19, 23, 25, 27, 28, 33, 36, 37, 38, 40, 41, 42, 43, 46, 47, 50, 52]]);
    fullArray.push(["Antwerph",[05, 16, 19, 25]]);
    fullArray.push(["Anubis",[02, 04, 07, 09, 13, 18, 19, 20, 24, 27, 28, 32, 33, 38, 40, 41, 42, 43, 46, 52, 55, 58]]);
    fullArray.push(["Apis",[07, 18, 25, 31, 33, 48, 52]]);
    fullArray.push(["Arkmite",[07, 20, 24, 28, 37, 41, 46, 54, 57]]);
    fullArray.push(["Aroota",[03, 10, 20, 33, 46, 49]]);
    fullArray.push(["Avabot",[03, 04, 07, 11, 18, 23, 24, 41]]);
    fullArray.push(["Babaa",[01, 02, 03, 04, 06, 07, 10, 11, 12, 13, 15, 18, 19, 20, 21, 22, 24, 25, 27, 28, 29, 30, 32, 33, 36, 37, 38, 39, 40, 41, 43, 46, 47, 48, 49, 51, 52, 56, 57]]);
    fullArray.push(["Babik",[]]);
    fullArray.push(["Babith",[07, 09, 18, 19, 20, 23, 31]]);
    fullArray.push(["Baby Blu",[07, 07, 18, 25, 28, 33, 37, 39, 40, 41, 47, 53, 55, 57]]);
    fullArray.push(["Baby Fireball",[02, 03, 09, 18, 20, 23, 30, 36, 37, 38, 46, 57]]);
    fullArray.push(["Baby Space Fungus",[03, 07, 18, 23, 36, 37, 40, 41, 49, 57]]);
    fullArray.push(["Babyca",[03, 06, 18, 32, 33, 37, 40, 41, 45, 52]]);
    fullArray.push(["Baraga",[]]);
    fullArray.push(["Barbat",[02, 03, 09, 23, 36, 47]]);
    fullArray.push(["Barlow",[01, 02, 07, 18, 23, 29, 33, 41, 49, 57]]);
    fullArray.push(["Bartamus",[02, 03, 06, 12, 13, 14, 17, 18, 20, 23, 30, 31, 33, 36, 37, 38, 40, 41, 43, 58]]);
    fullArray.push(["Bat Boy",[]]);
    fullArray.push(["Batterfly",[02, 33]]);
    fullArray.push(["Bazatlan",[13, 43]]);
    fullArray.push(["Bearclops",[]]);
    fullArray.push(["Bearog",[02, 03, 06, 09, 23, 28, 33, 36, 41, 52, 53]]);
    fullArray.push(["Beekadoodle",[11, 20, 23, 33, 34, 36, 39, 41, 58]]);
    fullArray.push(["Beepallite",[]]);
    fullArray.push(["Belonthiss",[18, 33]]);
    fullArray.push(["Bika",[08, 14, 23, 31, 33, 36, 42, 55]]);
    fullArray.push(["Bikiwan",[09, 52]]);
    fullArray.push(["Bilguss",[13, 18, 23, 37, 38, 47, 55, 57]]);
    fullArray.push(["Biyako",[11, 34, 37]]);
    fullArray.push(["Bleamix",[]]);
    fullArray.push(["Blibble",[04, 13, 18, 23, 52, 55]]);
    fullArray.push(["Blobagus",[03, 07, 19, 24, 32, 38, 42, 54]]);
    fullArray.push(["Blobikins",[06, 31, 56]]);
    fullArray.push(["Blooky",[25, 28]]);
    fullArray.push(["Bloop",[03, 13, 18, 19, 23, 24, 28, 36, 39, 41, 47, 52, 57]]);
    fullArray.push(["Bloopy",[18, 33, 39, 52]]);
    fullArray.push(["Blorbis",[52]]);
    fullArray.push(["Blorpulous",[39]]);
    fullArray.push(["Blugar",[02, 18, 25, 36]]);
    fullArray.push(["Bluna",[03, 04, 18, 23, 24, 36, 41, 47, 57]]);
    fullArray.push(["Blurgah",[02, 03, 06, 19, 31, 42, 52]]);
    fullArray.push(["Blurtle",[18, 20, 33, 41, 52]]);
    fullArray.push(["Bogie",[44]]);
    fullArray.push(["Boween",[12, 16, 19, 23, 33, 40, 41, 42, 57, 58]]);
    fullArray.push(["Bowla",[01, 11, 18, 19, 23, 36, 41, 57]]);
    fullArray.push(["Bubblebee",[03, 07, 23, 33, 41, 50, 53, 55]]);
    fullArray.push(["Bubbles",[14, 33, 40, 42, 57]]);
    fullArray.push(["Bubblisaur",[]]);
    fullArray.push(["Buzzer",[07, 08, 11, 19, 20, 23, 24, 25, 28, 32, 33, 36, 37, 38, 39, 42, 46, 47, 52]]);
    fullArray.push(["Buzzler",[03, 23, 31, 41, 57]]);
    fullArray.push(["C430 Autobot",[]]);
    fullArray.push(["Cadro",[03, 05, 18, 19, 21, 23, 24, 33, 36, 38, 41, 46, 54]]);
    fullArray.push(["Calabat",[57, 58]]);
    fullArray.push(["Camelior",[24, 56]]);
    fullArray.push(["Candy Vampire",[44]]);
    fullArray.push(["Candychan",[03, 06, 11, 20, 24, 28, 32, 33, 37, 38, 40, 43, 46, 50]]);
    fullArray.push(["Caprior",[43]]);
    fullArray.push(["Captive Shadow Wraith",[]]);
    fullArray.push(["Carma",[09, 13, 19, 20, 32, 52]]);
    fullArray.push(["Carmariller",[03, 07, 11, 17, 20, 23, 28, 37, 39, 40, 41, 42]]);
    fullArray.push(["Catamara",[03, 18, 19, 20, 23, 24, 38, 57]]);
    fullArray.push(["Charnie",[16, 23, 37, 39, 57]]);
    fullArray.push(["Chatter",[18]]);
    fullArray.push(["Cheerlub",[03, 09, 19, 21, 23, 36, 41, 47, 55]]);
    fullArray.push(["Chezzoom",[18, 23]]);
    fullArray.push(["Chiruck",[]]);
    fullArray.push(["Chomper",[44]]);
    fullArray.push(["Chuchuana",[02, 33, 36, 38]]);
    fullArray.push(["Chumablah",[07, 18, 24, 34, 46, 55]]);
    fullArray.push(["Cirrus",[03, 07, 11, 14, 18, 23, 24, 39, 41, 42, 53, 57]]);
    fullArray.push(["Clompkin",[18, 20, 33, 38, 53]]);
    fullArray.push(["Cobrall",[03, 13, 17, 18, 19, 24, 25, 32, 33, 36, 39, 41, 42, 45, 46, 47, 49, 50, 55, 57]]);
    fullArray.push(["Cofferling",[07]]);
    fullArray.push(["Combobot",[]]);
    fullArray.push(["Cougi",[03, 18, 57]]);
    fullArray.push(["Crabby",[20]]);
    fullArray.push(["Crabula",[02, 03, 12, 18, 33, 37, 42, 46, 52, 57]]);
    fullArray.push(["Crocalu",[20, 23]]);
    fullArray.push(["Crokabek",[03, 09, 24, 33, 36, 42, 55]]);
    fullArray.push(["Crystacat",[02, 07]]);
    fullArray.push(["Cubett",[33]]);
    fullArray.push(["Cuttlebot",[20, 36]]);
    fullArray.push(["Cybit",[18, 23, 57]]);
    fullArray.push(["Cyodrake",[02, 03, 19, 20, 23, 24, 28, 31, 33, 36, 40, 41, 42, 43, 46, 57]]);
    fullArray.push(["Dal",[]]);
    fullArray.push(["Daloop",[]]);
    fullArray.push(["Dandan",[03, 13, 16, 18, 24, 25, 33, 52, 54, 56, 57]]);
    fullArray.push(["Darblat",[02, 10, 13, 14, 18, 52, 54]]);
    fullArray.push(["Darpinch",[15, 36, 37, 42]]);
    fullArray.push(["Dartail",[02, 18, 31, 36, 52]]);
    fullArray.push(["Deaver",[20, 25, 46]]);
    fullArray.push(["Delfin",[02, 23, 33, 36, 43, 52, 55, 57]]);
    fullArray.push(["Devilpuss",[]]);
    fullArray.push(["Ditsy",[]]);
    fullArray.push(["Djuti",[18, 37]]);
    fullArray.push(["Dofrey",[02, 06, 18, 25, 28, 39, 41, 43]]);
    fullArray.push(["Doglefox",[01, 02, 03, 06, 07, 09, 10, 13, 18, 20, 22, 23, 25, 27, 33, 36, 37, 38, 39, 40, 42, 51, 52, 55, 57]]);
    fullArray.push(["Donksaur",[02, 03, 07, 19, 36, 38, 41, 55, 57]]);
    fullArray.push(["Drackobunny",[09, 11, 23, 41]]);
    fullArray.push(["Drackonack",[00, 03, 18, 19, 23, 24, 36, 38, 55, 57]]);
    fullArray.push(["Dragoyle",[16, 17, 18, 19, 20, 23, 33, 36, 38, 39, 40]]);
    fullArray.push(["Dribblet",[12, 18, 20, 33, 38, 49]]);
    fullArray.push(["Droolik",[02, 09, 12, 19, 20, 36, 49]]);
    fullArray.push(["Drugal",[03, 11, 18, 34, 36, 40, 41, 46, 54, 57]]);
    fullArray.push(["Dua",[03, 09, 19, 23, 24, 36, 37, 41, 55]]);
    fullArray.push(["Duocorn",[09, 19, 23]]);
    fullArray.push(["Eelika",[]]);
    fullArray.push(["Eizzil",[02, 03, 07, 09, 12, 18, 19, 23, 25, 26, 28, 37, 38, 39, 41, 47, 49, 51, 56, 57]]);
    fullArray.push(["Epuni",[16, 33, 37, 56]]);
    fullArray.push(["Erge",[]]);
    fullArray.push(["Erisim",[01, 04, 18, 21, 23, 40, 41, 50, 55, 57]]);
    fullArray.push(["Ettaphant",[36, 37, 40, 49, 52]]);
    fullArray.push(["Eustabee",[]]);
    fullArray.push(["Faellie",[01, 02, 03, 04, 07, 11, 14, 18, 19, 20, 23, 24, 25, 28, 33, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 48, 49, 52, 53, 55]]);
    fullArray.push(["Fangy",[02, 18, 19, 23, 36, 41, 46, 55]]);
    fullArray.push(["Farnswap",[25, 43, 53, 58]]);
    fullArray.push(["Feepit",[10, 13, 18, 19, 21, 23, 24, 28, 33, 36, 38, 42, 46, 47, 49, 50, 57]]);
    fullArray.push(["Felf",[20, 55]]);
    fullArray.push(["Felly",[03, 17, 19, 25, 33, 40, 41, 52, 57]]);
    fullArray.push(["Feloreena",[01, 07, 18, 19, 33, 39, 43, 52, 56]]);
    fullArray.push(["Filamen",[01, 24]]);
    fullArray.push(["Fir",[03, 04, 07, 24, 33, 37, 43, 46, 52, 55]]);
    fullArray.push(["Fleeper",[]]);
    fullArray.push(["Flerper",[18, 28, 41]]);
    fullArray.push(["Fleurbik",[]]);
    fullArray.push(["Flightning Bug",[]]);
    fullArray.push(["Flipperbot",[]]);
    fullArray.push(["Flippy",[]]);
    fullArray.push(["Flishy",[02, 04, 18, 23, 28, 31, 37]]);
    fullArray.push(["Flizzardo",[03, 08, 25, 41, 57]]);
    fullArray.push(["Floobix",[]]);
    fullArray.push(["Florta",[18, 54]]);
    fullArray.push(["Flosset",[05, 11, 23, 43, 55, 57]]);
    fullArray.push(["Floud",[03, 23, 32, 41, 57]]);
    fullArray.push(["Flowper",[01, 03, 23, 32, 33, 55]]);
    fullArray.push(["Flurm",[]]);
    fullArray.push(["Foobug",[]]);
    fullArray.push(["Frillabon",[20, 23, 37, 41, 42]]);
    fullArray.push(["Frogarott",[07, 22, 52]]);
    fullArray.push(["Frogler",[]]);
    fullArray.push(["Froiler",[]]);
    fullArray.push(["Frowny",[03, 07, 13, 19, 23, 33, 34, 39, 41, 47, 49, 57]]);
    fullArray.push(["Fungree",[03, 07, 18, 23, 25, 39, 41, 42]]);
    fullArray.push(["Furwitch",[02, 03, 39, 41, 57]]);
    fullArray.push(["Gabar",[02, 03, 20, 23, 49, 52, 57]]);
    fullArray.push(["Gallion",[02, 03, 07, 11, 12, 18, 19, 20, 24, 25, 28, 31, 32, 33, 36, 37, 38, 40, 42, 43, 52, 55, 58]]);
    fullArray.push(["Gangee",[02, 03, 11, 23, 24, 33, 37, 38, 40, 41, 42, 46, 49, 55, 57]]);
    fullArray.push(["Ganuthor",[03, 04, 18, 20, 23, 42, 52]]);
    fullArray.push(["Garfir",[02]]);
    fullArray.push(["Garooda",[03, 11, 13, 18, 36, 41, 52, 55, 57]]);
    fullArray.push(["Gathow",[02, 03, 18, 23, 38, 46, 52, 55, 57]]);
    fullArray.push(["Geb",[03, 10, 13, 14, 18, 23, 25, 28, 32, 36, 42, 46]]);
    fullArray.push(["Ghostkerchief",[02, 03, 07, 18, 23, 24, 28, 32, 33, 36, 37, 41, 42, 46, 47, 49, 50, 58]]);
    fullArray.push(["Ghostkerfish",[]]);
    fullArray.push(["Ghoti",[03, 04, 18, 19, 23, 41]]);
    fullArray.push(["Gikerot",[34, 39]]);
    fullArray.push(["Gio",[]]);
    fullArray.push(["Globilol",[]]);
    fullArray.push(["Gnar",[02]]);
    fullArray.push(["Gobbler",[00, 07, 17, 18, 20, 23, 24, 36, 37, 38, 39, 40, 41, 43, 52, 56, 57, 58]]);
    fullArray.push(["Goldy",[02, 10, 19, 20, 24, 25, 38, 50, 54, 55]]);
    fullArray.push(["Goople",[18, 19, 20, 28, 33, 38, 49, 54]]);
    fullArray.push(["Goulblee",[02, 03, 23]]);
    fullArray.push(["Goy",[07]]);
    fullArray.push(["Goyalbotnik",[]]);
    fullArray.push(["Grackle Bug",[06, 18, 19, 20, 21, 23, 32]]);
    fullArray.push(["Graffle",[]]);
    fullArray.push(["Graglop",[18, 28]]);
    fullArray.push(["Gratlik",[]]);
    fullArray.push(["Greeble",[02, 18, 20, 23, 25, 33, 36, 40, 41, 42, 54, 55, 57]]);
    fullArray.push(["Green Tentacle",[]]);
    fullArray.push(["Gremble",[03, 20, 23, 36, 41, 46, 57]]);
    fullArray.push(["Griefer",[32, 38]]);
    fullArray.push(["Grobrin",[36]]);
    fullArray.push(["Gruslen",[01, 02, 03, 07, 09, 18, 23, 24, 28, 32, 33, 36, 37, 40, 43, 45, 46, 47, 55]]);
    fullArray.push(["Gulper",[03, 19, 24, 27, 33, 34, 36, 52, 55, 57]]);
    fullArray.push(["Gulpfir",[]]);
    fullArray.push(["Gumblesh",[18, 49]]);
    fullArray.push(["Gwalla",[03, 09, 24, 28, 33, 36, 43, 49, 50, 54, 57]]);
    fullArray.push(["Gwortz",[24, 30]]);
    fullArray.push(["GX-4 Haseebot",[]]);
    fullArray.push(["GX-4 Oscillabot",[03, 18, 23, 24, 36, 38, 47, 53]]);
    fullArray.push(["Gypmu",[06, 25, 46, 52, 55, 56, 58]]);
    fullArray.push(["Harris",[01, 03, 06, 07, 09, 12, 13, 18, 19, 20, 23, 24, 25, 28, 32, 33, 36, 37, 38, 39, 40, 42, 45, 47, 52, 57]]);
    fullArray.push(["Hasee",[01, 07, 11, 15, 18, 19, 28, 29, 32, 33, 34, 37, 38, 45, 46, 52, 54, 57]]);
    fullArray.push(["Haseepuss",[06]]);
    fullArray.push(["Hegelob",[18]]);
    fullArray.push(["Hegie",[]]);
    fullArray.push(["Hermiteese",[18, 40, 45, 56]]);
    fullArray.push(["Hippalop",[11, 23, 25, 33, 41, 55]]);
    fullArray.push(["Hoggir",[03]]);
    fullArray.push(["Hooklen",[]]);
    fullArray.push(["Hoovle",[03, 18, 23, 37, 57]]);
    fullArray.push(["Hopso",[03, 18, 23, 38, 42, 46, 47, 52]]);
    fullArray.push(["Hornsby",[03, 18, 23, 33, 36, 52]]);
    fullArray.push(["Horus",[03, 07, 09, 23, 39, 42, 47, 52, 57]]);
    fullArray.push(["Huggy",[03, 07, 18, 20, 25, 38, 58]]);
    fullArray.push(["Huggy Bear",[]]);
    fullArray.push(["Hydruplit",[18, 19]]);
    fullArray.push(["Icklesaur",[01, 03, 04, 09, 12, 38, 39, 55]]);
    fullArray.push(["Ignalce",[16, 17, 18, 39]]);
    fullArray.push(["Intesteen",[06, 18, 33, 36, 49, 52, 54]]);
    fullArray.push(["Jawshell",[44]]);
    fullArray.push(["Jinjah",[03, 19, 25, 37, 38, 41]]);
    fullArray.push(["Jowlard",[50, 57]]);
    fullArray.push(["Juma",[15, 18, 37, 43, 54, 56]]);
    fullArray.push(["Kadoatie",[00, 01, 04, 06, 07, 09, 13, 18, 20, 21, 23, 25, 28, 29, 32, 33, 36, 37, 38, 39, 40, 41, 42, 43, 46, 47, 52, 53, 55, 57]]);
    fullArray.push(["Karren",[04, 09, 36, 41, 43, 57, 58]]);
    fullArray.push(["Kateil",[03, 28, 34, 55]]);
    fullArray.push(["Kazeriu",[01, 18, 19, 23, 31, 41]]);
    fullArray.push(["Kelpflake",[]]);
    fullArray.push(["Kepru",[18, 39, 49, 58]]);
    fullArray.push(["Khamette",[]]);
    fullArray.push(["Khnum",[02, 23, 41, 47]]);
    fullArray.push(["Khonsu",[07, 09, 14, 23, 41, 46, 47]]);
    fullArray.push(["Khura",[]]);
    fullArray.push(["Kiiyak",[38, 43]]);
    fullArray.push(["Kimbi",[02, 03, 04, 11, 28, 36, 38, 39, 40, 52, 55]]);
    fullArray.push(["Kookith",[01, 03, 04, 06, 07, 12, 13, 18, 19, 20, 22, 23, 24, 25, 26, 29, 33, 36, 37, 38, 39, 40, 42, 46, 47, 50, 51, 52]]);
    fullArray.push(["Kora",[16]]);
    fullArray.push(["Krawk",[03, 04, 09, 11, 12, 13, 16, 18, 20, 24, 25, 33, 34, 36, 37, 38, 40, 41, 42, 49, 55, 57]]);
    fullArray.push(["Krawkadon",[03, 28, 33]]);
    fullArray.push(["Krikket",[]]);
    fullArray.push(["Leeble",[01, 33]]);
    fullArray.push(["Lellefisk",[04, 39, 41]]);
    fullArray.push(["Lil Frankie",[13, 16, 37]]);
    fullArray.push(["Liobits",[]]);
    fullArray.push(["Lizark",[07, 14, 18, 25, 33, 40]]);
    fullArray.push(["Lurman",[]]);
    fullArray.push(["Lutra",[01, 36, 39, 55]]);
    fullArray.push(["Lyins",[03, 07, 12, 19, 20, 23, 37, 38, 39, 41, 42, 53, 57]]);
    fullArray.push(["Magaral",[03, 09, 18, 19, 23, 28, 37, 38, 40, 46, 48, 53]]);
    fullArray.push(["Magmut",[06, 28, 31, 57]]);
    fullArray.push(["Magtile",[20, 30, 50]]);
    fullArray.push(["Mallard",[03, 07, 09, 11, 15, 17, 18, 31, 36, 37, 41, 42, 43, 52, 55, 57]]);
    fullArray.push(["Manjeer",[04, 14, 18, 20, 43]]);
    fullArray.push(["Marafin",[37]]);
    fullArray.push(["Marbluk",[]]);
    fullArray.push(["Marlock",[39, 46, 52]]);
    fullArray.push(["Mastyxi",[03, 18, 23, 34]]);
    fullArray.push(["Mauket",[11, 17, 18, 20, 22, 25, 28, 43, 58]]);
    fullArray.push(["Mazzew",[00, 01, 02, 05, 06, 07, 11, 18, 19, 21, 22, 25, 28, 29, 32, 33, 36, 37, 38, 40, 42, 46, 50, 51, 55]]);
    fullArray.push(["Mechanized Laboratory Assistant",[]]);
    fullArray.push(["Meekins",[03, 23, 27, 33, 34, 38, 39, 40, 41, 47]]);
    fullArray.push(["Meepit",[01, 03, 06, 07, 11, 13, 14, 18, 19, 20, 21, 22, 23, 24, 25, 28, 29, 33, 37, 39, 41, 42, 43, 46, 49, 50, 51, 52, 55, 57, 58]]);
    fullArray.push(["Melton",[03, 20, 21, 31]]);
    fullArray.push(["Melvie",[01, 03, 18, 19, 36, 37, 57]]);
    fullArray.push(["Meowclops",[03, 07, 09, 11, 18, 20, 23, 24, 25, 32, 37, 38, 40, 41, 42, 45, 46, 47, 49, 52, 55]]);
    fullArray.push(["Meturf",[03, 08, 19, 20, 24, 28, 36, 39, 41, 57]]);
    fullArray.push(["Miamouse",[03, 04, 07, 09, 11, 21, 27, 28, 33, 36, 38, 39, 50, 52]]);
    fullArray.push(["Mibblie",[03, 23, 41, 56, 57]]);
    fullArray.push(["Millipod",[03, 04, 18, 24, 28, 41, 49, 56, 57]]);
    fullArray.push(["Mimbi",[18, 28, 30, 39]]);
    fullArray.push(["Minitheus",[07, 11, 18, 19, 33, 41, 54]]);
    fullArray.push(["Mirgle",[03, 09, 23, 27, 36, 38, 42, 55, 57]]);
    fullArray.push(["Moink",[]]);
    fullArray.push(["Moltenna",[]]);
    fullArray.push(["Moltenore",[02, 10, 18, 21, 23, 40, 46, 47, 54, 58]]);
    fullArray.push(["Momba",[02, 06, 39, 56]]);
    fullArray.push(["Morkou",[02, 18, 38]]);
    fullArray.push(["Mortog",[03, 04, 06, 07, 15, 25, 33, 34, 37, 39, 41, 43, 47, 49, 57]]);
    fullArray.push(["Mummy Baby",[]]);
    fullArray.push(["Mundo",[54]]);
    fullArray.push(["Muyang",[17, 19, 46, 50]]);
    fullArray.push(["N-4 Info Retrieval Bot",[23, 36, 41, 57]]);
    fullArray.push(["Naalala",[24, 28, 33, 34]]);
    fullArray.push(["Naleap",[07, 09, 17, 18, 31, 42, 46, 57]]);
    fullArray.push(["Narwhool",[02, 41, 52, 57]]);
    fullArray.push(["Navibot",[03, 07, 14, 18, 19, 25, 36, 57]]);
    fullArray.push(["Nebularis",[]]);
    fullArray.push(["Nedler",[03, 07, 23, 33, 41, 57, 58]]);
    fullArray.push(["Neotrak",[02, 03, 09]]);
    fullArray.push(["Neucloop",[58]]);
    fullArray.push(["Nik",[]]);
    fullArray.push(["Niptor",[07, 13, 16, 18, 19, 23, 28, 33, 36, 41, 46]]);
    fullArray.push(["Noak",[23, 25, 39, 49, 50]]);
    fullArray.push(["Noil",[00, 01, 03, 06, 07, 19, 20, 22, 23, 24, 25, 28, 31, 32, 33, 38, 39, 40, 42, 43, 46, 52, 53, 55, 58]]);
    fullArray.push(["Noilkeet",[03, 18, 36, 47]]);
    fullArray.push(["Nuk",[07, 11, 23, 25, 52]]);
    fullArray.push(["Nupie",[54]]);
    fullArray.push(["Nuranna",[01, 02, 07, 13, 18, 19, 23, 27, 36, 37, 41, 47, 52, 57]]);
    fullArray.push(["Octorna",[]]);
    fullArray.push(["Ombat",[18, 25, 40, 49]]);
    fullArray.push(["Ona",[00, 01, 04, 07, 12, 13, 14, 19, 20, 25, 27, 28, 29, 33, 34, 36, 37, 38, 39, 40, 42, 46, 47, 48, 52, 53, 55]]);
    fullArray.push(["Oop",[]]);
    fullArray.push(["Orbulon",[07, 17, 18, 57]]);
    fullArray.push(["Orp",[44]]);
    fullArray.push(["Ownow",[03, 18, 19, 20, 38, 42, 47, 55]]);
    fullArray.push(["Palmplat",[14]]);
    fullArray.push(["Pandaphant",[03, 05, 07, 17, 18, 23, 33, 38, 42, 43, 52, 53, 57, 58]]);
    fullArray.push(["Patamoose",[07, 13, 25, 31, 34]]);
    fullArray.push(["Pawkeet",[03, 04, 07, 13, 20, 24, 33, 36, 38, 41, 45, 46, 48, 52, 57]]);
    fullArray.push(["Peadackle",[03, 23, 33, 36, 37, 41, 42, 47, 57]]);
    fullArray.push(["Peedleedoo",[]]);
    fullArray.push(["Peo",[03, 07, 18, 23, 28, 33, 34, 38, 41, 47, 57]]);
    fullArray.push(["Pepito",[11, 18, 23, 41, 57]]);
    fullArray.push(["Petoot",[52]]);
    fullArray.push(["Pfish",[02, 03, 18, 19, 25, 34, 36, 38, 41, 57]]);
    fullArray.push(["Phnard",[11]]);
    fullArray.push(["Pickulsaur",[20, 52]]);
    fullArray.push(["Pikis",[02, 07, 12, 20, 23, 40, 41, 45]]);
    fullArray.push(["Pile of Soot",[06, 07]]);
    fullArray.push(["Pinceron",[03, 23, 55]]);
    fullArray.push(["Pinklet",[03, 23, 25, 57]]);
    fullArray.push(["Pirakeet",[]]);
    fullArray.push(["Piraket",[]]);
    fullArray.push(["Plathydon",[23, 28, 33, 42, 52, 55, 57]]);
    fullArray.push(["Pofew",[03, 18, 23, 32, 57]]);
    fullArray.push(["Polarchuck",[00, 01, 03, 04, 12, 13, 14, 18, 24, 25, 28, 33, 36, 37, 38, 42, 45, 47, 49, 52]]);
    fullArray.push(["Ponka",[18, 20, 38]]);
    fullArray.push(["Pooka",[]]);
    fullArray.push(["Popblew",[]]);
    fullArray.push(["Poppit",[03, 07, 18, 23, 37, 41, 42]]);
    fullArray.push(["Powtry",[06, 33, 45, 48, 57]]);
    fullArray.push(["Primella",[18, 23, 34, 41, 55, 57]]);
    fullArray.push(["Psimouse",[03, 12, 28, 33, 41]]);
    fullArray.push(["Puppyblew",[04, 07, 18, 19, 23, 25, 28, 33, 36, 37, 38, 42, 46, 47, 52, 57]]);
    fullArray.push(["Pwerko",[02, 03, 04, 12, 18, 23, 47, 49, 56]]);
    fullArray.push(["Pygui",[03, 13, 18, 23, 38, 40, 57]]);
    fullArray.push(["Pyon",[]]);
    fullArray.push(["Quadrapus",[01, 03, 23, 28, 36, 45, 55]]);
    fullArray.push(["Quadrone",[03, 19, 23, 41]]);
    fullArray.push(["Quetzal",[03, 11, 23, 32, 33, 43]]);
    fullArray.push(["Quilin",[06, 31]]);
    fullArray.push(["Quintilc",[02, 03, 04, 23, 57]]);
    fullArray.push(["Raindorf",[01, 09, 11, 18, 19, 23, 24, 28, 33, 38, 45, 46, 57]]);
    fullArray.push(["Ramosan",[31, 39, 47]]);
    fullArray.push(["Rashpid",[03, 23, 34, 38, 41, 52]]);
    fullArray.push(["Rav",[]]);
    fullArray.push(["Raverge",[]]);
    fullArray.push(["Razumi",[18, 43]]);
    fullArray.push(["Reptillior",[03, 09, 36, 42, 57]]);
    fullArray.push(["Roaderie 1000",[]]);
    fullArray.push(["Robocrush",[18]]);
    fullArray.push(["Roburg 3T3",[03, 23, 24, 41]]);
    fullArray.push(["Rock",[03, 06, 07, 10, 12, 13, 18, 19, 21, 23, 25, 28, 32, 33, 34, 36, 37, 38, 39, 42, 43, 46, 47, 50, 52, 53, 56]]);
    fullArray.push(["Rollatron",[]]);
    fullArray.push(["Romeep 3t3",[]]);
    fullArray.push(["Rotawheel",[03, 13, 23, 28, 41, 57]]);
    fullArray.push(["Rotoblur 4000",[]]);
    fullArray.push(["Rotweilie",[]]);
    fullArray.push(["Sandan",[19, 28, 38, 42, 43]]);
    fullArray.push(["Sandpoint",[]]);
    fullArray.push(["Sauropod",[03, 18, 23, 28, 40, 42]]);
    fullArray.push(["Scado",[07, 18, 46]]);
    fullArray.push(["Scamander",[03, 08, 10, 14, 18, 25, 36, 38, 55]]);
    fullArray.push(["Scarabug",[02, 04, 19, 23, 27, 36, 41, 43, 55, 57]]);
    fullArray.push(["Schmoonie",[18, 23, 50]]);
    fullArray.push(["Schnelly",[01, 07, 13, 18, 24, 38, 54, 55]]);
    fullArray.push(["Scout Unit",[]]);
    fullArray.push(["Screal",[25, 30, 49, 55]]);
    fullArray.push(["Screwtop",[18]]);
    fullArray.push(["Searex",[03, 18, 39, 57]]);
    fullArray.push(["Seece",[25, 37, 43]]);
    fullArray.push(["Selket",[03, 18, 33, 55]]);
    fullArray.push(["Seti",[09, 18, 19, 23, 25, 34, 43, 46, 52]]);
    fullArray.push(["Sharky",[18, 19, 20, 23, 41, 57]]);
    fullArray.push(["Shocket",[14, 23, 38, 57]]);
    fullArray.push(["Short Fuse",[19]]);
    fullArray.push(["Skelly",[17, 39, 46]]);
    fullArray.push(["Skindle",[]]);
    fullArray.push(["Sklyde",[03, 06, 12, 13, 18, 21, 28, 36, 40, 42, 43, 46]]);
    fullArray.push(["Skootle Bug",[]]);
    fullArray.push(["Skree",[11, 54]]);
    fullArray.push(["Slogmok",[17, 18, 20, 33, 39, 54]]);
    fullArray.push(["Slorg",[00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 41, 42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58]]);
    fullArray.push(["Slorgclops",[03, 40, 41]]);
    fullArray.push(["Sludgy",[02, 09, 21, 23, 32, 34, 36, 38, 39, 43, 45, 46, 47]]);
    fullArray.push(["Slugawoo",[03, 04, 09, 23, 28, 33, 41, 55, 57]]);
    fullArray.push(["Slymook",[01, 21]]);
    fullArray.push(["Smiley",[54]]);
    fullArray.push(["Snarhook",[03, 07, 13, 18, 23, 32, 33, 37, 38, 45, 52, 54]]);
    fullArray.push(["Snauberack",[]]);
    fullArray.push(["Snicklebeast",[02, 09, 19, 25, 28, 37, 38, 45, 57]]);
    fullArray.push(["Snomorg",[39, 41, 47, 52, 55, 57]]);
    fullArray.push(["Snoogy",[03, 09, 17, 36, 39, 41, 41, 52, 57]]);
    fullArray.push(["Snorkle",[01, 03, 07, 08, 09, 11, 12, 18, 19, 20, 21, 23, 24, 25, 28, 33, 37, 38, 39, 40, 42, 45, 46, 52]]);
    fullArray.push(["Snorlkin",[16, 19, 36, 40, 41]]);
    fullArray.push(["Snowbunny",[03, 04, 06, 09, 10, 18, 20, 22, 23, 24, 25, 28, 29, 32, 36, 37, 38, 40, 42, 46, 47, 48, 49, 51, 52, 57]]);
    fullArray.push(["Snowickle",[01, 07, 18, 19, 20, 23, 28, 29, 32, 33, 34, 36, 39, 40, 41, 42, 45, 52, 55, 57]]);
    fullArray.push(["Snuffly",[02, 11, 14, 18, 20, 28, 33, 36, 46, 52]]);
    fullArray.push(["Soreen",[16, 23, 33]]);
    fullArray.push(["Spallard",[]]);
    fullArray.push(["Spardel",[02, 06, 07, 09, 10, 13, 18, 19, 20, 22, 23, 24, 25, 28, 32, 33, 36, 37, 39, 40, 47, 51, 52, 55, 58]]);
    fullArray.push(["Spirkle",[02, 03, 23, 42, 57]]);
    fullArray.push(["Splime",[18, 53]]);
    fullArray.push(["Splyke",[02, 03, 24, 25, 41, 46, 58]]);
    fullArray.push(["Spoppy",[]]);
    fullArray.push(["Sproing",[46]]);
    fullArray.push(["Spyder",[05, 06, 07, 12, 13, 18, 20, 21, 23, 24, 28, 29, 32, 33, 36, 38, 40, 42, 46, 49, 52, 53, 55, 57, 58]]);
    fullArray.push(["Spyrabor",[]]);
    fullArray.push(["Spyven",[03, 09, 19, 49]]);
    fullArray.push(["Stahkee",[18]]);
    fullArray.push(["Staragus",[06, 18, 20, 34, 49]]);
    fullArray.push(["Stego",[02, 03, 18, 21, 32, 39, 41, 55]]);
    fullArray.push(["Stopngo 400",[03, 28, 34, 36, 55, 57]]);
    fullArray.push(["Sunutek",[07]]);
    fullArray.push(["Surzard",[16, 37, 38, 49]]);
    fullArray.push(["Sutekh",[03]]);
    fullArray.push(["Swabby",[07, 18, 19, 32, 33, 36, 46, 57]]);
    fullArray.push(["Symol",[00, 02, 03, 05, 06, 07, 08, 09, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 49, 50, 52, 54, 55, 56, 57, 58]]);
    fullArray.push(["Taigar",[03, 23, 41, 57]]);
    fullArray.push(["Tainted Minion",[]]);
    fullArray.push(["Talpidat",[17, 18, 20, 46, 48]]);
    fullArray.push(["Tamed Mini-Monster",[]]);
    fullArray.push(["Tanamurx",[]]);
    fullArray.push(["Tanizard",[04, 13, 18, 19, 23, 36, 38, 41, 45, 47]]);
    fullArray.push(["Tapira",[16, 18, 23, 24, 25, 41, 57]]);
    fullArray.push(["Tasu",[03, 13, 18, 20, 28, 33, 36, 37, 39, 45, 47]]);
    fullArray.push(["Taweret",[07, 09, 28, 57]]);
    fullArray.push(["Teasqito",[23, 41]]);
    fullArray.push(["Teek",[]]);
    fullArray.push(["Teemyte",[13, 18, 19, 23, 25, 36, 40, 41, 46, 47, 55, 56, 57]]);
    fullArray.push(["Tekkal",[]]);
    fullArray.push(["Tencals",[03, 23, 41, 57]]);
    fullArray.push(["Tenna",[03, 04, 09, 12, 13, 18, 19, 20, 24, 25, 28, 32, 33, 37, 39, 41, 45, 47, 52, 55]]);
    fullArray.push(["Tigermouse",[03, 09, 11, 16, 23, 40, 52, 57]]);
    fullArray.push(["Tiny Giant Squid",[]]);
    fullArray.push(["Tomamu",[18, 42]]);
    fullArray.push(["Tootum",[18]]);
    fullArray.push(["Tralbak",[23, 36, 43]]);
    fullArray.push(["Triffin",[12, 23, 25, 33, 39, 41, 45, 48, 57]]);
    fullArray.push(["Trumpadon",[02, 18, 37, 39]]);
    fullArray.push(["Trunkard",[03, 07, 11, 18, 23, 24, 36, 40, 41]]);
    fullArray.push(["Tuceet",[52, 55]]);
    fullArray.push(["Turdle",[01, 03, 14, 17, 23, 28, 33, 36, 39, 40, 42, 45, 46, 55, 57]]);
    fullArray.push(["Turmac",[06, 12, 18, 26, 27, 28, 33, 38, 40, 41, 42, 43]]);
    fullArray.push(["Turnali",[37]]);
    fullArray.push(["Turtmid",[06, 23, 28, 53]]);
    fullArray.push(["Turtum",[03, 13, 19, 23, 28, 32, 34, 36, 39, 40, 43, 46, 54, 55]]);
    fullArray.push(["Tyrowbee",[02, 03, 07, 18, 20, 40, 41, 46, 58]]);
    fullArray.push(["Uggatrip",[02, 03, 19, 23, 38, 42, 46, 57]]);
    fullArray.push(["Uggazew",[]]);
    fullArray.push(["Ukali",[00, 01, 03, 07, 09, 11, 18, 23, 41, 43, 53, 56, 57]]);
    fullArray.push(["Ultra Mega Bot 2000",[]]);
    fullArray.push(["Ultra Pinceron",[03, 18, 23, 24, 36]]);
    fullArray.push(["Unifox",[]]);
    fullArray.push(["Uniocto",[02, 07, 09, 11, 18, 19, 20, 23, 28, 33, 34, 36, 37, 39, 40, 41, 42, 46, 48, 49, 52, 57]]);
    fullArray.push(["Urchull",[18]]);
    fullArray.push(["Urgoni",[03, 20, 23, 33, 38, 42, 57]]);
    fullArray.push(["Vacana",[11, 18, 24, 33]]);
    fullArray.push(["Vacumatic 9000",[18]]);
    fullArray.push(["Vaeolus",[20, 28, 36, 39]]);
    fullArray.push(["Val",[]]);
    fullArray.push(["Valteek",[]]);
    fullArray.push(["Vullard",[14, 24, 25, 31, 36, 37, 38, 43]]);
    fullArray.push(["Wadjet",[02, 03, 04, 09, 20, 21, 36, 40, 41, 43, 46, 55, 57]]);
    fullArray.push(["Wain",[02, 03, 07, 17, 23, 41, 42]]);
    fullArray.push(["Walein",[00, 03, 18, 20, 23, 33, 55]]);
    fullArray.push(["Walking Carpet",[03, 05, 09, 14, 17, 18, 20, 23, 33, 36, 37, 41, 57]]);
    fullArray.push(["Warf",[01, 03, 04, 06, 07, 08, 12, 13, 14, 18, 20, 23, 24, 25, 27, 28, 32, 33, 36, 37, 38, 39, 40, 42, 46, 47, 49, 52]]);
    fullArray.push(["Weeble",[]]);
    fullArray.push(["Weebly",[]]);
    fullArray.push(["Weewoo",[03, 07, 09, 11, 13, 18, 19, 23, 24, 32, 33, 36, 37, 38, 40, 41, 42, 43, 45, 46, 55, 57]]);
    fullArray.push(["Werhond",[18, 19, 30, 33, 52, 57]]);
    fullArray.push(["Wheelie",[03, 04, 18, 23, 36, 41, 55, 57]]);
    fullArray.push(["Wheelie Bot",[]]);
    fullArray.push(["Wherfy",[01, 17, 18, 24, 38, 46, 50, 58]]);
    fullArray.push(["Whinny",[03, 07, 13, 19, 23, 24, 27, 28, 36, 43, 57]]);
    fullArray.push(["Whoot",[18, 20, 23, 25, 33]]);
    fullArray.push(["Wibreth",[01, 18, 19, 28]]);
    fullArray.push(["Woolypapith",[20, 24, 37, 45, 54]]);
    fullArray.push(["Wreathy",[03, 04, 36, 41, 54]]);
    fullArray.push(["Wuzzer",[]]);
    fullArray.push(["Wuzzle",[20, 21, 23, 46, 49]]);
    fullArray.push(["Xampher",[01, 06]]);
    fullArray.push(["Xepru",[08, 33, 39]]);
    fullArray.push(["Yackito",[]]);
    fullArray.push(["Yoakie",[56]]);
    fullArray.push(["Yooyu",[01, 03, 07, 11, 18, 19, 23, 28, 33, 38, 40, 41, 42, 46, 52, 54, 57]]);
    fullArray.push(["Yullie",[02, 07, 16, 18, 28, 33, 37, 38, 41, 46, 49]]);
    fullArray.push(["Zamillion",[]]);
    fullArray.push(["Zebba",[02, 05, 28, 33]]);
    fullArray.push(["Zebie",[03, 06, 07, 09, 10, 19, 21, 38, 41, 43, 46, 52, 57]]);
    fullArray.push(["Zomutt",[04, 11, 18, 33, 37, 42, 46]]);
    fullArray.push(["Zoomik",[]]);
    fullArray.push(["Zumagorn",[03, 07, 21, 23, 54, 57]]);    
}
