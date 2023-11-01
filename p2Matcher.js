// We should pull this from jn... but lets just hardcode it for now
let p2Array = ["Abominable Snowball","Acko","Ada","Adagio","Airax","Alabriss","Albat","Albot","Alkenore","Altachuck","Altalaphus",
"Angelpuss","Antwerph","Anubis","Apis","Arkmite","Aroota","Avabot","Babaa","Babik","Babith","Baby Blu","Baby Fireball","Baby Space Fungus",
"Babyca","Baraga","Barbat","Barlow","Bartamus","Bat Boy","Batterfly","Bazatlan","Bearclops","Bearog","Beekadoodle","Beepallite","Belonthiss",
"Bika","Bikiwan","Bilguss","Biyako","Bleamix","Blibble","Blobagus","Blobikins","Blooky","Bloop","Bloopy","Blorbis","Blorpulous","Blugar","Bluna",
"Blurgah","Blurtle","Bogie","Boween","Bowla","Bubblebee","Bubbles","Bubblisaur","Buzzer","Buzzler", "Bython","C430 Autobot","Cadro","Calabat","Camelior",
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
        specPick = p2Array[specPick];
    }
    if (colorPick === undefined) {
        colorPick = Math.floor(Math.random() * ppColors.length);
        colorPick = ppColors[colorPick];
    }
    return [colorPick, specPick];
}

function jnLinkFormat(i) {
    let textPrompt = getText(i[0] + " " + i[1]);
    let jnID = getIDbyName(i[0], i[1]);
    let url = "https://items.jellyneo.net/search/?name=%s&name_type=3";
    let url2 =  "https://items.jellyneo.net/item/%s/";
    let image = "https://images.neopets.com/items/toy_plushie_negg_fish.gif";
    url = url.replace("%s", i[1]);

    if (jnID != -1) {
        url2 = url2.replace("%s", "" +jnID);
        return `<div>${textPrompt}<a tabindex='-1' target='_blank' href='${url2}'><img src='${image}' class='searchimg'></a></div><br>`;
    } else {
        url = url.replace("%s", i[1]);
        return `<div>${textPrompt}<a tabindex='-1' target='_blank' href='${url}'><img src='${image}' class='searchimg'></a></div><br>`;
    }
}


function getText(item) {
    let print = 'You should draw a';
    if (item.charAt(0) == 'A' ||item.charAt(0) == 'E'|| item.charAt(0) == 'I'|| item.charAt(0) == 'O') {
        print += 'n';
    }
    print += " " +item + "! ";
    return print;
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
    if(fullArray.length >1 ) {
        console.log("full");
        return;
    }
    fullArray.push(["Abominable Snowball",[3, 12, 18, 19, 37, 38, 39, 40, 41, 42, 45, 47, 55, 57]]); // Base Color White (55)
    fullArray.push(["Acko",[2, 3, 4, 6, 1, 13, 28, 36, 41, 47, 53, 55]]); // Base Color Brown (4)
    fullArray.push(["Ada",[]]);
    fullArray.push(["Adagio",[]]);
    fullArray.push(["Airax",[3, 4, 12, 16, 19, 36, 38, 47, 55]]); // Base Color Brown (4)
    fullArray.push(["Alabriss",[1, 2, 1, 16, 18, 19, 20, 30, 40, 54, 55]]); // Base Color White (55)
    fullArray.push(["Albat",[4, 12, 13, 19, 32, 36, 37, 40, 43, 46]]);// Base Color Brown (4)
    fullArray.push(["Albot",[]]);
    fullArray.push(["Alkenore",[2, 3, 1, 18, 19, 23, 28, 33, 36, 37, 40, 41, 49, 52, 57]]); // Base Color Yellow (57)
    fullArray.push(["Altachuck",[0, 9, 18, 33, 36, 37, 55, 56]]);// Base Color White (55)
    fullArray.push(["Altalaphus",[]]);
    fullArray.push(["Angelpuss",[1, 3, 4, 1, 8, 10, 11, 13, 14, 19, 23, 25, 27, 28, 33, 36, 37, 38, 40, 41, 42, 43, 46, 47, 50, 52, 55]]);// Base Color White (55)
    fullArray.push(["Antwerph",[3, 5, 16, 19, 25]]);// Base Color Blue (3)
    fullArray.push(["Anubis",[2, 4, 1, 9, 13, 18, 19, 20, 24, 27, 28, 32, 33, 38, 40, 41, 42, 43, 46, 52, 55, 58]]);// Base Color Blue (55)
    fullArray.push(["Apis",[1, 18, 25, 31, 33, 48, 52, 57]]);// Base Color Yellow (57)
    fullArray.push(["Arkmite",[1, 20, 23, 24, 28, 37, 41, 46, 54, 57]]);// Base Color Green (23)
    fullArray.push(["Aroota",[3, 10, 20, 33, 46, 49, 57]]);// Base Color Yellow (57)
    fullArray.push(["Avabot",[3, 4, 1, 11, 18, 23, 24, 41, 57]]);// Base Color Yellow (57)
    fullArray.push(["Babaa",[1, 2, 3, 4, 6, 1, 10, 11, 12, 13, 15, 18, 19, 20, 21, 24, 25, 27, 28, 29, 30, 32, 33, 36, 37, 38, 39, 40, 41, 43, 46, 47, 48, 49, 52, 55, 56, 57]]);// Base Color White (55)
    fullArray.push(["Babik",[]]);
    fullArray.push(["Babith",[1, 3, 9, 18, 19, 20, 23, 31]]);// Base Color Blue (3)
    fullArray.push(["Baby Blu",[1, 3, 18, 25, 28, 33, 37, 39, 40, 41, 47, 53, 55, 57]]);// Base Color Blue (3)
    fullArray.push(["Baby Fireball",[2, 3, 9, 18, 20, 23, 30, 36, 37, 38, 41, 46, 57]]);// Base Color Red (41)
    fullArray.push(["Baby Space Fungus",[3, 1, 18, 21, 23, 36, 37, 40, 41, 49, 57]]);// Base Color Pink (36)
    fullArray.push(["Babyca",[3, 6, 18, 32, 33, 36, 37, 40, 41, 45, 52]]);// Base Color Pink (36)
    fullArray.push(["Baraga",[]]);
    fullArray.push(["Barbat",[2, 3, 9, 23, 36, 47]]);
    fullArray.push(["Barlow",[1, 2, 1, 18, 23, 29, 33, 41, 49, 57]]);
    fullArray.push(["Bartamus",[2, 3, 6, 12, 13, 14, 17, 18, 20, 23, 30, 31, 33, 36, 37, 38, 40, 41, 43, 58]]);
    fullArray.push(["Bat Boy",[]]);
    fullArray.push(["Batterfly",[2, 33]]);
    fullArray.push(["Bazatlan",[13, 43]]);
    fullArray.push(["Bearclops",[]]);
    fullArray.push(["Bearog",[2, 3, 6, 9, 23, 28, 33, 36, 41, 52, 53]]);
    fullArray.push(["Beekadoodle",[11, 20, 23, 33, 34, 36, 39, 41, 58]]);
    fullArray.push(["Beepallite",[]]);
    fullArray.push(["Belonthiss",[18, 33]]);
    fullArray.push(["Bika",[8, 14, 23, 31, 33, 36, 42, 55]]);
    fullArray.push(["Bikiwan",[9, 52]]);
    fullArray.push(["Bilguss",[13, 18, 23, 37, 38, 47, 55, 57]]);
    fullArray.push(["Biyako",[11, 34, 37]]);
    fullArray.push(["Bleamix",[]]);
    fullArray.push(["Blibble",[4, 13, 18, 23, 52, 55]]);
    fullArray.push(["Blobagus",[3, 1, 19, 24, 32, 38, 42, 54]]);
    fullArray.push(["Blobikins",[6, 8, 31, 56]]);
    fullArray.push(["Blooky",[25, 28]]);
    fullArray.push(["Bloop",[3, 13, 18, 19, 23, 24, 28, 36, 39, 41, 47, 52, 57]]);
    fullArray.push(["Bloopy",[33, 39, 52]]);
    fullArray.push(["Blorbis",[52]]);
    fullArray.push(["Blorpulous",[39]]);
    fullArray.push(["Blugar",[2, 18, 25, 36]]);
    fullArray.push(["Bluna",[4, 18, 24, 36, 41, 47, 57]]);
    fullArray.push(["Blurgah",[2, 3, 6, 19, 31, 42, 52]]);
    fullArray.push(["Blurtle",[18, 20, 33, 41, 52]]);
    fullArray.push(["Bogie",[33, 44]]);
    fullArray.push(["Boween",[12, 16, 19, 23, 33, 40, 41, 42, 57, 58]]);
    fullArray.push(["Bowla",[1, 11, 18, 19, 23, 36, 41, 57]]);
    fullArray.push(["Bubblebee",[3, 1, 23, 33, 41, 50, 53, 55]]);
    fullArray.push(["Bubbles",[14, 33, 40, 42, 57]]);
    fullArray.push(["Bubblisaur",[]]);
    fullArray.push(["Buzzer",[1, 8, 11, 19, 20, 24, 25, 28, 32, 33, 36, 37, 38, 39, 42, 46, 47, 52]]);
    fullArray.push(["Buzzler",[3, 23, 31, 41, 57]]);
    fullArray.push(["Bython",[42, 57]]);
    fullArray.push(["C430 Autobot",[]]);
    fullArray.push(["Cadro",[3, 5, 18, 19, 21, 23, 24, 33, 36, 38, 41, 46, 54]]);
    fullArray.push(["Calabat",[57, 58]]);
    fullArray.push(["Camelior",[6, 24, 56]]);
    fullArray.push(["Candy Vampire",[44]]);
    fullArray.push(["Candychan",[3, 6, 11, 20, 24, 28, 32, 33, 37, 38, 40, 43, 46, 50]]);
    fullArray.push(["Caprior",[43]]);
    fullArray.push(["Captive Shadow Wraith",[]]);
    fullArray.push(["Carma",[9, 13, 19, 20, 32, 52]]);
    fullArray.push(["Carmariller",[3, 1, 11, 17, 20, 23, 28, 37, 39, 40, 41, 42]]);
    fullArray.push(["Catamara",[3, 18, 19, 20, 23, 24, 38, 57]]);
    fullArray.push(["Charnie",[16, 23, 37, 39, 57]]);
    fullArray.push(["Chatter",[18]]);
    fullArray.push(["Cheerlub",[3, 9, 19, 21, 23, 36, 41, 47, 55]]);
    fullArray.push(["Chezzoom",[18]]);
    fullArray.push(["Chiruck",[]]);
    fullArray.push(["Chomper",[44]]);
    fullArray.push(["Chuchuana",[2, 33, 36, 38]]);
    fullArray.push(["Chumablah",[1, 18, 24, 34, 46, 55]]);
    fullArray.push(["Cirrus",[3, 1, 11, 14, 18, 23, 24, 39, 41, 42, 53, 57]]);
    fullArray.push(["Clompkin",[18, 20, 33, 38, 53]]);
    fullArray.push(["Cobrall",[3, 13, 17, 18, 19, 24, 25, 32, 33, 36, 39, 41, 42, 45, 46, 47, 49, 50, 55, 57]]);
    fullArray.push(["Cofferling",[1]]);
    fullArray.push(["Combobot",[]]);
    fullArray.push(["Cougi",[3, 18, 57]]);
    fullArray.push(["Crabby",[20]]);
    fullArray.push(["Crabula",[2, 3, 12, 18, 33, 37, 42, 46, 52, 57]]);
    fullArray.push(["Crocalu",[20, 23]]);
    fullArray.push(["Crokabek",[3, 9, 24, 33, 36, 42, 55]]);
    fullArray.push(["Crystacat",[2, 1]]);
    fullArray.push(["Cubett",[33]]);
    fullArray.push(["Cuttlebot",[20, 36]]);
    fullArray.push(["Cybit",[18, 23, 57]]);
    fullArray.push(["Cyodrake",[2, 3, 19, 20, 23, 24, 28, 31, 33, 36, 40, 41, 42, 43, 46, 57]]);
    fullArray.push(["Dal",[]]);
    fullArray.push(["Daloop",[]]);
    fullArray.push(["Dandan",[3, 13, 16, 18, 24, 25, 52, 54, 56, 57]]);
    fullArray.push(["Darblat",[2, 10, 13, 14, 18, 52, 54]]);
    fullArray.push(["Darpinch",[15, 36, 37, 42]]);
    fullArray.push(["Dartail",[2, 18, 31, 36, 52]]);
    fullArray.push(["Deaver",[20, 25, 46]]);
    fullArray.push(["Delfin",[2, 23, 33, 36, 43, 52, 55, 57]]);
    fullArray.push(["Devilpuss",[]]);
    fullArray.push(["Ditsy",[]]);
    fullArray.push(["Djuti",[18, 37]]);
    fullArray.push(["Dofrey",[2, 6, 18, 19, 25, 28, 39, 41, 43, 47]]);
    fullArray.push(["Doglefox",[1, 2, 3, 6, 1, 9, 10, 13, 18, 20, 22, 23, 25, 27, 33, 36, 37, 38, 39, 40, 42, 51, 52, 55, 57]]);
    fullArray.push(["Donksaur",[2, 3, 1, 19, 36, 38, 41, 55, 57]]);
    fullArray.push(["Drackobunny",[9, 11, 23, 41]]);
    fullArray.push(["Drackonack",[0, 3, 18, 19, 23, 24, 36, 38, 55, 57]]);
    fullArray.push(["Dragoyle",[16, 17, 18, 19, 20, 23, 33, 36, 38, 39, 40]]);
    fullArray.push(["Dribblet",[12, 18, 20, 33, 38, 49]]);
    fullArray.push(["Droolik",[2, 9, 12, 19, 20, 36, 49]]);
    fullArray.push(["Drugal",[3, 11, 18, 34, 36, 40, 41, 46, 54, 57]]);
    fullArray.push(["Dua",[3, 9, 19, 23, 24, 36, 37, 41, 55]]);
    fullArray.push(["Duocorn",[9, 19, 23]]);
    fullArray.push(["Eelika",[]]);
    fullArray.push(["Eizzil",[2, 3, 1, 9, 12, 18, 19, 23, 25, 26, 28, 37, 38, 39, 41, 47, 49, 51, 56, 57]]);
    fullArray.push(["Epuni",[16, 33, 37, 56]]);
    fullArray.push(["Erge",[]]);
    fullArray.push(["Erisim",[1, 4, 18, 21, 23, 40, 41, 50, 55, 57]]);
    fullArray.push(["Ettaphant",[36, 37, 40, 49, 52]]);
    fullArray.push(["Eustabee",[]]);
    fullArray.push(["Faellie",[1, 2, 3, 4, 1, 11, 14, 18, 19, 20, 23, 24, 25, 28, 33, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 48, 49, 52, 53, 55]]);
    fullArray.push(["Fangy",[2, 18, 19, 23, 36, 41, 46, 55]]);
    fullArray.push(["Farnswap",[25, 43, 53, 58]]);
    fullArray.push(["Feepit",[10, 13, 18, 19, 21, 23, 24, 28, 33, 36, 38, 42, 46, 47, 49, 50, 57]]);
    fullArray.push(["Felf",[20, 55]]);
    fullArray.push(["Felly",[3, 17, 19, 25, 33, 40, 41, 52, 57]]);
    fullArray.push(["Feloreena",[1, 1, 18, 19, 24, 33, 39, 43, 52, 56]]);
    fullArray.push(["Filamen",[1, 24]]);
    fullArray.push(["Fir",[3, 4, 1, 24, 33, 37, 43, 46, 52, 55]]);
    fullArray.push(["Fleeper",[]]);
    fullArray.push(["Flerper",[18, 28, 41]]);
    fullArray.push(["Fleurbik",[]]);
    fullArray.push(["Flightning Bug",[]]);
    fullArray.push(["Flipperbot",[]]);
    fullArray.push(["Flippy",[]]);
    fullArray.push(["Flishy",[18, 28, 31, 37]]);
    fullArray.push(["Flizzardo",[3, 8, 25, 41, 57]]);
    fullArray.push(["Floobix",[25]]); // 23
    fullArray.push(["Florta",[18, 54]]);
    fullArray.push(["Flosset",[5, 11, 23, 43, 55, 57]]);
    fullArray.push(["Floud",[3, 23, 32, 41, 57]]);
    fullArray.push(["Flowper",[1, 3, 23, 32, 33, 55]]);
    fullArray.push(["Flurm",[]]);
    fullArray.push(["Foobug",[]]);
    fullArray.push(["Frillabon",[20, 23, 37, 41, 42]]);
    fullArray.push(["Frogarott",[1, 22]]);
    fullArray.push(["Frogler",[]]);
    fullArray.push(["Froiler",[]]);
    fullArray.push(["Frowny",[3, 1, 13, 19, 23, 33, 34, 39, 41, 47, 49, 57]]);
    fullArray.push(["Fungree",[3, 1, 18, 23, 25, 39, 41, 42]]);
    fullArray.push(["Furwitch",[2, 3, 39, 41, 57]]);
    fullArray.push(["Gabar",[2, 3, 20, 23, 49, 52, 57]]);
    fullArray.push(["Gallion",[2, 3, 1, 11, 12, 18, 19, 20, 24, 25, 28, 31, 32, 33, 36, 37, 38, 40, 42, 43, 52, 55, 58]]);
    fullArray.push(["Gangee",[2, 3, 11, 23, 24, 33, 37, 38, 40, 41, 42, 46, 49, 55, 57]]);
    fullArray.push(["Ganuthor",[3, 4, 18, 20, 23, 42, 52]]);
    fullArray.push(["Garfir",[2]]);
    fullArray.push(["Garooda",[3, 11, 13, 18, 30, 36, 41, 52, 55, 57]]);
    fullArray.push(["Gathow",[2, 3, 15, 18, 23, 38, 46, 52, 55, 57]]);
    fullArray.push(["Geb",[3, 10, 13, 14, 18, 23, 25, 28, 32, 36, 46]]);
    fullArray.push(["Ghostkerchief",[2, 3, 1, 18, 23, 24, 28, 32, 33, 36, 37, 41, 42, 46, 47, 49, 50, 58]]);
    fullArray.push(["Ghostkerfish",[24]]);
    fullArray.push(["Ghoti",[3, 4, 18, 19, 23, 41]]);
    fullArray.push(["Gikerot",[34, 39]]);
    fullArray.push(["Gio",[]]);
    fullArray.push(["Globilol",[]]);
    fullArray.push(["Gnar",[2]]);
    fullArray.push(["Gobbler",[0, 1, 17, 18, 20, 23, 24, 36, 37, 38, 39, 40, 41, 43, 52, 56, 57, 58]]);
    fullArray.push(["Goldy",[2, 10, 19, 20, 24, 25, 38, 50, 54, 55]]);
    fullArray.push(["Goople",[18, 19, 20, 28, 33, 38, 49, 54]]);
    fullArray.push(["Goulblee",[2, 3, 23]]);
    fullArray.push(["Goy",[1]]);
    fullArray.push(["Goyalbotnik",[]]);
    fullArray.push(["Grackle Bug",[6, 18, 19, 20, 21, 23, 32]]);
    fullArray.push(["Graffle",[]]);
    fullArray.push(["Graglop",[18, 28]]);
    fullArray.push(["Gratlik",[]]);
    fullArray.push(["Greeble",[2, 18, 20, 23, 25, 33, 36, 40, 41, 54, 55, 57]]);
    fullArray.push(["Green Tentacle",[]]);
    fullArray.push(["Gremble",[3, 20, 23, 36, 41, 46, 57]]);
    fullArray.push(["Griefer",[18, 32, 38]]);
    fullArray.push(["Grobrin",[36]]);
    fullArray.push(["Gruslen",[1, 2, 3, 1, 9, 11, 18, 23, 24, 28, 32, 33, 36, 37, 39, 40, 43, 45, 46, 47, 55]]);
    fullArray.push(["Gulper",[3, 19, 24, 27, 33, 34, 36, 52, 55, 57]]);
    fullArray.push(["Gulpfir",[]]);
    fullArray.push(["Gumblesh",[18, 49]]);
    fullArray.push(["Gwalla",[3, 9, 24, 28, 33, 36, 43, 49, 50, 54, 57]]);
    fullArray.push(["Gwortz",[24, 30, 33]]);
    fullArray.push(["GX-4 Haseebot",[]]);
    fullArray.push(["GX-4 Oscillabot",[3, 18, 23, 24, 36, 38, 47, 53]]);
    fullArray.push(["Gypmu",[6, 25, 46, 52, 55, 56, 58]]);
    fullArray.push(["Harris",[1, 3, 6, 1, 9, 12, 13, 18, 19, 20, 23, 24, 25, 28, 32, 33, 36, 37, 38, 39, 40, 42, 45, 47, 52, 57]]);
    fullArray.push(["Hasee",[1, 1, 11, 15, 18, 19, 25, 28, 29, 32, 33, 34, 37, 38, 45, 46, 52, 54, 57]]);
    fullArray.push(["Haseepuss",[6]]);
    fullArray.push(["Hegelob",[18]]);
    fullArray.push(["Hegie",[6]]);
    fullArray.push(["Hermiteese",[18, 40, 45, 56]]);
    fullArray.push(["Hippalop",[11, 23, 25, 33, 41, 55]]);
    fullArray.push(["Hoggir",[3]]);
    fullArray.push(["Hooklen",[]]);
    fullArray.push(["Hoovle",[3, 18, 23, 37, 57]]);
    fullArray.push(["Hopso",[3, 18, 23, 38, 42, 46, 47]]);
    fullArray.push(["Hornsby",[3, 18, 23, 33, 36]]);
    fullArray.push(["Horus",[3, 1, 9, 23, 39, 47, 52, 57]]);
    fullArray.push(["Huggy",[3, 1, 20, 25, 38, 58]]);
    fullArray.push(["Huggy Bear",[]]);
    fullArray.push(["Hydruplit",[18, 19]]);
    fullArray.push(["Icklesaur",[1, 3, 4, 9, 12, 38, 39, 55]]);
    fullArray.push(["Ignalce",[16, 17, 18, 39]]);
    fullArray.push(["Intesteen",[6, 18, 33, 36, 49, 52, 54]]);
    fullArray.push(["Jawshell",[44]]);
    fullArray.push(["Jinjah",[3, 19, 25, 37, 38, 41]]);
    fullArray.push(["Jowlard",[50, 57]]);
    fullArray.push(["Juma",[15, 18, 37, 43, 54, 56]]);
    fullArray.push(["Kadoatie",[0, 1, 4, 6, 1, 9, 13, 18, 20, 21, 23, 25, 28, 29, 32, 33, 36, 37, 38, 39, 40, 41, 42, 43, 46, 47, 52, 53, 55, 57]]);
    fullArray.push(["Karren",[4, 9, 36, 41, 43, 57, 58]]);
    fullArray.push(["Kateil",[3, 28, 34, 37, 55]]);
    fullArray.push(["Kazeriu",[1, 18, 19, 23, 31, 41]]);
    fullArray.push(["Kelpflake",[]]);
    fullArray.push(["Kepru",[18, 39, 49, 58]]);
    fullArray.push(["Khamette",[]]);
    fullArray.push(["Khnum",[2, 23, 41, 47]]);
    fullArray.push(["Khonsu",[1, 9, 14, 23, 41, 46, 47]]);
    fullArray.push(["Khura",[]]);
    fullArray.push(["Kiiyak",[38, 43]]);
    fullArray.push(["Kimbi",[2, 3, 4, 11, 28, 36, 38, 52]]);
    fullArray.push(["Kookith",[1, 3, 4, 6, 1, 12, 13, 19, 20, 22, 23, 24, 25, 26, 29, 33, 36, 37, 38, 39, 40, 42, 46, 47, 50, 51, 52]]);
    fullArray.push(["Kora",[]]);
    fullArray.push(["Krawk",[3, 4, 9, 11, 12, 13, 16, 18, 20, 24, 25, 33, 34, 36, 37, 38, 40, 41, 42, 49, 55, 57]]);
    fullArray.push(["Krawkadon",[3, 28, 33]]);
    fullArray.push(["Krikket",[]]);
    fullArray.push(["Leeble",[1, 33]]);
    fullArray.push(["Lellefisk",[4, 39, 41]]);
    fullArray.push(["Lil Frankie",[13, 16, 37]]);
    fullArray.push(["Liobits",[]]);
    fullArray.push(["Lizark",[1, 14, 18, 25, 33, 40]]);
    fullArray.push(["Lurman",[]]);
    fullArray.push(["Lutra",[1, 36, 39, 55]]);
    fullArray.push(["Lyins",[3, 1, 12, 19, 20, 23, 37, 38, 39, 41, 42, 53, 57]]);
    fullArray.push(["Magaral",[9, 18, 19, 28, 37, 38, 40, 46, 48, 53]]);
    fullArray.push(["Magmut",[6, 28, 31, 57]]);
    fullArray.push(["Magtile",[20, 30, 50]]);
    fullArray.push(["Mallard",[3, 1, 9, 11, 15, 17, 18, 31, 36, 37, 41, 42, 43, 52, 55, 57]]);
    fullArray.push(["Manjeer",[4, 14, 18, 20, 43]]);
    fullArray.push(["Marafin",[37]]);
    fullArray.push(["Marbluk",[3, 23, 36, 57]]);
    fullArray.push(["Marlock",[39, 46, 52]]);
    fullArray.push(["Mastyxi",[3, 18, 23, 34]]);
    fullArray.push(["Mauket",[11, 17, 18, 20, 22, 25, 28, 43, 58]]);
    fullArray.push(["Mazzew",[0, 1, 2, 5, 6, 1, 11, 18, 19, 21, 22, 25, 28, 29, 32, 33, 36, 37, 38, 40, 42, 46, 50, 51, 55]]);
    fullArray.push(["Mechanized Laboratory Assistant",[]]);
    fullArray.push(["Meekins",[3, 23, 27, 33, 34, 38, 39, 40, 41, 47]]);
    fullArray.push(["Meepit",[1, 3, 6, 1, 11, 13, 14, 18, 19, 20, 21, 22, 23, 24, 25, 28, 29, 33, 37, 39, 41, 42, 43, 46, 49, 50, 51, 52, 55, 57, 58]]);
    fullArray.push(["Melton",[3, 20, 21, 31]]);
    fullArray.push(["Melvie",[1, 3, 18, 19, 36, 37, 57]]);
    fullArray.push(["Meowclops",[3, 1, 9, 11, 18, 20, 23, 24, 25, 32, 37, 38, 40, 41, 42, 45, 46, 47, 49, 52, 55]]);
    fullArray.push(["Meturf",[3, 8, 19, 20, 24, 28, 36, 39, 41, 57]]);
    fullArray.push(["Miamouse",[3, 4, 1, 9, 11, 21, 27, 28, 33, 36, 38, 39, 50, 52]]);
    fullArray.push(["Mibblie",[3, 23, 41, 56, 57]]);
    fullArray.push(["Millipod",[3, 4, 18, 24, 28, 41, 49, 56, 57]]);
    fullArray.push(["Mimbi",[18, 28, 30, 39]]);
    fullArray.push(["Minitheus",[1, 11, 18, 19, 33, 41, 54]]);
    fullArray.push(["Mirgle",[3, 9, 23, 27, 36, 38, 42, 55, 57]]);
    fullArray.push(["Moink",[]]);
    fullArray.push(["Moltenna",[]]);
    fullArray.push(["Moltenore",[2, 10, 18, 21, 23, 40, 46, 47, 54, 58]]);
    fullArray.push(["Momba",[2, 6, 39, 56]]);
    fullArray.push(["Morkou",[2, 18, 38]]);
    fullArray.push(["Mortog",[3, 4, 6, 1, 15, 25, 33, 34, 37, 39, 41, 43, 47, 49, 56, 57]]);
    fullArray.push(["Mummy Baby",[]]);
    fullArray.push(["Mundo",[54]]);
    fullArray.push(["Muyang",[17, 19, 46, 50]]);
    fullArray.push(["N-4 Info Retrieval Bot",[23, 36, 41, 57]]);
    fullArray.push(["Naalala",[24, 28, 33, 34]]);
    fullArray.push(["Naleap",[1, 9, 17, 18, 31, 42, 46, 57]]);
    fullArray.push(["Narwhool",[2, 41, 52, 57]]);
    fullArray.push(["Navibot",[3, 1, 14, 18, 19, 25, 36, 57]]);
    fullArray.push(["Nebularis",[6]]);
    fullArray.push(["Nedler",[3, 1, 23, 33, 41, 57, 58]]);
    fullArray.push(["Neotrak",[2, 3, 9]]);
    fullArray.push(["Neucloop",[6, 58]]);
    fullArray.push(["Nik",[]]);
    fullArray.push(["Niptor",[1, 13, 16, 18, 19, 23, 28, 33, 36, 41, 46]]);
    fullArray.push(["Noak",[23, 25, 39, 49, 50]]);
    fullArray.push(["Noil",[0, 1, 3, 6, 1, 19, 20, 22, 23, 24, 25, 28, 31, 32, 33, 38, 39, 40, 42, 43, 46, 52, 53, 55, 58]]);
    fullArray.push(["Noilkeet",[3, 18, 36, 47]]);
    fullArray.push(["Nuk",[1, 11, 23, 25, 52]]);
    fullArray.push(["Nupie",[54]]);
    fullArray.push(["Nuranna",[1, 2, 1, 13, 18, 19, 23, 27, 36, 37, 41, 47, 52, 54, 57]]);
    fullArray.push(["Octorna",[]]);
    fullArray.push(["Ombat",[18, 25, 40, 49]]);
    fullArray.push(["Ona",[0, 1, 4, 1, 12, 13, 14, 19, 20, 25, 27, 28, 29, 33, 34, 36, 37, 38, 39, 40, 42, 46, 47, 48, 52, 53, 55]]);
    fullArray.push(["Oop",[]]);
    fullArray.push(["Orbulon",[1, 17, 18]]);
    fullArray.push(["Orp",[44]]);
    fullArray.push(["Ownow",[3, 18, 19, 20, 38, 42, 47, 55]]);
    fullArray.push(["Palmplat",[14]]);
    fullArray.push(["Pandaphant",[3, 5, 1, 17, 18, 23, 33, 38, 42, 43, 52, 53, 57, 58]]);
    fullArray.push(["Patamoose",[1, 13, 25, 31, 34]]);
    fullArray.push(["Pawkeet",[3, 4, 1, 13, 20, 24, 33, 36, 37, 38, 41, 45, 46, 48, 52, 57]]);
    fullArray.push(["Peadackle",[3, 23, 33, 36, 37, 41, 42, 57]]);
    fullArray.push(["Peedleedoo",[]]);
    fullArray.push(["Peo",[3, 1, 18, 23, 28, 33, 34, 38, 41, 57]]);
    fullArray.push(["Pepito",[11]]);
    fullArray.push(["Petoot",[52]]);
    fullArray.push(["Pfish",[2, 3, 18, 19, 25, 34, 36, 38, 41, 57]]);
    fullArray.push(["Phnard",[11]]);
    fullArray.push(["Pickulsaur",[20, 52]]);
    fullArray.push(["Pikis",[2, 1, 12, 20, 23, 40, 41, 45]]);
    fullArray.push(["Pile of Soot",[1]]);
    fullArray.push(["Pinceron",[3, 23, 55]]);
    fullArray.push(["Pinklet",[3, 23, 25]]);
    fullArray.push(["Pirakeet",[3, 23, 41, 57]]);
    fullArray.push(["Piraket",[]]);
    fullArray.push(["Plathydon",[23, 28, 33, 42, 52, 55, 57]]);
    fullArray.push(["Pofew",[3, 18, 23, 32, 57]]);
    fullArray.push(["Polarchuck",[0, 1, 3, 4, 12, 13, 14, 18, 24, 25, 28, 33, 36, 37, 38, 42, 45, 47, 49, 52]]);
    fullArray.push(["Ponka",[18, 20, 38]]);
    fullArray.push(["Pooka",[]]);
    fullArray.push(["Popblew",[]]);
    fullArray.push(["Poppit",[3, 1, 18, 23, 37, 41, 42]]);
    fullArray.push(["Powtry",[6, 33, 45, 48, 57]]);
    fullArray.push(["Primella",[18, 23, 34, 41, 55, 57]]);
    fullArray.push(["Psimouse",[3, 12, 28, 33, 41]]);
    fullArray.push(["Puppyblew",[4, 1, 18, 19, 23, 25, 28, 33, 36, 37, 38, 46, 47, 52, 57]]);
    fullArray.push(["Pwerko",[2, 3, 4, 12, 18, 23, 49, 56]]);
    fullArray.push(["Pygui",[3, 13, 38, 40, 57]]);
    fullArray.push(["Pyon",[]]);
    fullArray.push(["Quadrapus",[1, 3, 23, 28, 36, 45, 54, 55]]);
    fullArray.push(["Quadrone",[3, 19, 23, 41]]);
    fullArray.push(["Quetzal",[3, 11, 23, 32, 33, 43]]);
    fullArray.push(["Quilin",[6, 31, 54]]);
    fullArray.push(["Quintilc",[2, 3, 4, 23, 57]]);
    fullArray.push(["Raindorf",[1, 9, 11, 18, 19, 23, 24, 28, 33, 38, 45, 46, 57]]);
    fullArray.push(["Ramosan",[31, 39, 47]]);
    fullArray.push(["Rashpid",[3, 23, 34, 38, 41, 52]]);
    fullArray.push(["Rav",[]]);
    fullArray.push(["Raverge",[]]);
    fullArray.push(["Razumi",[18, 43]]);
    fullArray.push(["Reptillior",[3, 9, 36, 40, 42, 57]]);
    fullArray.push(["Roaderie 1000",[]]);
    fullArray.push(["Robocrush",[18]]);
    fullArray.push(["Roburg 3T3",[3, 23, 24, 41]]);
    fullArray.push(["Rock",[3, 6, 1, 10, 12, 13, 15, 18, 19, 21, 23, 25, 28, 32, 33, 34, 36, 37, 38, 39, 43, 46, 47, 50, 52, 53, 56]]);
    fullArray.push(["Rollatron",[]]);
    fullArray.push(["Romeep 3t3",[]]);
    fullArray.push(["Rotawheel",[3, 13, 23, 28, 41, 57]]);
    fullArray.push(["Rotoblur 4000",[]]);
    fullArray.push(["Rotweilie",[]]);
    fullArray.push(["Sandan",[19, 28, 38, 42, 43]]);
    fullArray.push(["Sandpoint",[]]);
    fullArray.push(["Sauropod",[3, 18, 23, 28, 40, 42]]);
    fullArray.push(["Scado",[1, 18, 46]]);
    fullArray.push(["Scamander",[3, 8, 10, 14, 18, 25, 36, 38, 55]]);
    fullArray.push(["Scarabug",[2, 4, 19, 23, 27, 36, 41, 43, 55, 57]]);
    fullArray.push(["Schmoonie",[18, 23, 50]]);
    fullArray.push(["Schnelly",[1, 1, 13, 18, 24, 38, 52, 54, 55]]);
    fullArray.push(["Scout Unit",[]]);
    fullArray.push(["Screal",[25, 30, 49, 55]]);
    fullArray.push(["Screwtop",[18]]);
    fullArray.push(["Searex",[3, 18, 39, 57]]);
    fullArray.push(["Seece",[25, 37, 43]]);
    fullArray.push(["Selket",[3, 18, 33, 55]]);
    fullArray.push(["Seti",[9, 18, 19, 23, 25, 34, 43, 46, 52]]);
    fullArray.push(["Sharky",[18, 19, 20, 23, 41, 57]]);
    fullArray.push(["Shocket",[14, 23, 38, 57]]);
    fullArray.push(["Short Fuse",[19]]);
    fullArray.push(["Skelly",[17, 39, 46]]);
    fullArray.push(["Skindle",[]]);
    fullArray.push(["Sklyde",[3, 6, 12, 13, 18, 21, 28, 36, 40, 42, 43, 46]]);
    fullArray.push(["Skootle Bug",[]]);
    fullArray.push(["Skree",[11, 54]]);
    fullArray.push(["Slogmok",[17, 18, 20, 33, 39, 54]]);
    fullArray.push(["Slorg",[0, 1, 2, 3, 4, 5, 6, 1, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58]]);
    fullArray.push(["Slorgclops",[3, 40, 41]]);
    fullArray.push(["Sludgy",[9, 21, 23, 34, 36, 38, 39, 43, 45, 46, 47]]);
    fullArray.push(["Slugawoo",[3, 4, 9, 28, 33, 41, 55, 57]]);
    fullArray.push(["Slymook",[1, 21, 54]]);
    fullArray.push(["Smiley",[54]]);
    fullArray.push(["Snarhook",[3, 1, 13, 18, 23, 32, 33, 37, 38, 45, 52, 54]]);
    fullArray.push(["Snauberack",[33]]);
    fullArray.push(["Snicklebeast",[2, 9, 19, 25, 28, 37, 38, 45, 46, 56, 57]]);
    fullArray.push(["Snomorg",[39, 41, 52, 55, 57]]);
    fullArray.push(["Snoogy",[3, 9, 17, 36, 39, 41, 52, 57]]);
    fullArray.push(["Snorkle",[1, 3, 1, 8, 9, 11, 12, 18, 19, 20, 21, 23, 24, 25, 28, 33, 37, 38, 39, 40, 42, 45, 46, 52]]);
    fullArray.push(["Snorlkin",[16, 19, 36, 40, 41]]);
    fullArray.push(["Snowbunny",[3, 4, 6, 9, 10, 18, 20, 22, 23, 24, 25, 28, 29, 32, 36, 37, 38, 40, 42, 46, 47, 48, 49, 51, 52, 57]]);
    fullArray.push(["Snowickle",[1, 1, 18, 19, 20, 23, 28, 29, 32, 33, 34, 36, 39, 40, 41, 42, 45, 52, 55, 57]]);
    fullArray.push(["Snuffly",[2, 11, 14, 18, 20, 28, 33, 36, 46, 52]]);
    fullArray.push(["Soreen",[16, 23, 33]]);
    fullArray.push(["Spallard",[]]);
    fullArray.push(["Spardel",[2, 6, 1, 9, 10, 13, 18, 19, 20, 22, 23, 24, 25, 28, 32, 33, 36, 37, 39, 40, 47, 51, 52, 55, 58]]);
    fullArray.push(["Spirkle",[2, 3, 23, 42, 57]]);
    fullArray.push(["Splime",[18, 53]]);
    fullArray.push(["Splyke",[2, 3, 24, 25, 41, 46, 58]]);
    fullArray.push(["Spoppy",[]]);
    fullArray.push(["Sproing",[46]]);
    fullArray.push(["Spyder",[5, 6, 1, 12, 13, 18, 20, 21, 23, 24, 28, 29, 32, 33, 36, 38, 40, 42, 46, 49, 52, 53, 55, 57, 58]]);
    fullArray.push(["Spyrabor",[]]);
    fullArray.push(["Spyven",[3, 9, 19, 49]]);
    fullArray.push(["Stahkee",[18]]);
    fullArray.push(["Staragus",[6, 18, 20, 34, 49]]);
    fullArray.push(["Stego",[2, 3, 21, 32, 39, 41, 55]]);
    fullArray.push(["Stopngo 400",[3, 28, 34, 36, 55, 57]]);
    fullArray.push(["Sunutek",[1]]);
    fullArray.push(["Surzard",[16, 37, 38, 49]]);
    fullArray.push(["Sutekh",[3]]);
    fullArray.push(["Swabby",[1, 18, 19, 25, 32, 33, 36, 46, 57]]);
    fullArray.push(["Symol",[0, 2, 3, 5, 6, 1, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 23, 24, 25, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50, 52, 54, 55, 56, 57, 58]]);
    fullArray.push(["Taigar",[3, 23, 41, 57]]);
    fullArray.push(["Tainted Minion",[]]);
    fullArray.push(["Talpidat",[17, 18, 20, 46, 48]]);
    fullArray.push(["Tamed Mini-Monster",[]]);
    fullArray.push(["Tanamurx",[]]);
    fullArray.push(["Tanizard",[13, 18, 19, 36, 38, 45]]);
    fullArray.push(["Tapira",[16, 18, 23, 24, 25, 41, 57]]);
    fullArray.push(["Tasu",[3, 13, 18, 20, 28, 33, 36, 37, 39, 45, 47]]);
    fullArray.push(["Taweret",[1, 9, 28, 57]]);
    fullArray.push(["Teasqito",[23, 41]]);
    fullArray.push(["Teek",[]]);
    fullArray.push(["Teemyte",[13, 18, 19, 23, 25, 36, 40, 41, 46, 47, 55, 56, 57]]);
    fullArray.push(["Tekkal",[3, 23, 36, 41]]);
    fullArray.push(["Tencals",[3, 23, 41, 57]]);
    fullArray.push(["Tenna",[12, 13, 18, 19, 20, 24, 25, 28, 32, 33, 37, 39, 41, 45, 52, 55]]);
    fullArray.push(["Tigermouse",[3, 9, 11, 16, 23, 37, 40, 52, 57]]);
    fullArray.push(["Tiny Giant Squid",[]]);
    fullArray.push(["Tomamu",[18, 42]]);
    fullArray.push(["Tootum",[18]]);
    fullArray.push(["Tralbak",[23, 36, 43]]);
    fullArray.push(["Triffin",[12, 23, 25, 33, 39, 41, 45, 48, 57]]);
    fullArray.push(["Trumpadon",[2, 37, 39]]);
    fullArray.push(["Trunkard",[3, 1, 11, 18, 23, 24, 36, 40, 41]]);
    fullArray.push(["Tuceet",[52, 55]]);
    fullArray.push(["Turdle",[1, 3, 14, 17, 23, 28, 33, 36, 39, 40, 42, 45, 46, 55, 57]]);
    fullArray.push(["Turmac",[6, 12, 18, 26, 27, 28, 33, 38, 40, 41, 42, 43]]);
    fullArray.push(["Turnali",[37]]);
    fullArray.push(["Turtmid",[6, 23, 28, 53]]);
    fullArray.push(["Turtum",[3, 13, 19, 23, 28, 32, 34, 36, 39, 40, 43, 46, 54, 55]]);
    fullArray.push(["Tyrowbee",[2, 3, 1, 18, 20, 40, 41, 46, 58]]);
    fullArray.push(["Uggatrip",[2, 3, 19, 23, 38, 42, 46, 57]]);
    fullArray.push(["Uggazew",[]]);
    fullArray.push(["Ukali",[0, 1, 3, 1, 9, 11, 18, 23, 41, 43, 53, 56, 57]]);
    fullArray.push(["Ultra Mega Bot 2000",[]]);
    fullArray.push(["Ultra Pinceron",[3, 18, 23, 24, 36]]);
    fullArray.push(["Unifox",[]]);
    fullArray.push(["Uniocto",[2, 1, 9, 11, 18, 19, 20, 23, 28, 33, 34, 36, 37, 39, 40, 41, 42, 46, 48, 49, 52, 57]]);
    fullArray.push(["Urchull",[18, 33]]);
    fullArray.push(["Urgoni",[3, 20, 23, 33, 42]]);
    fullArray.push(["Vacana",[11, 18, 24, 33]]);
    fullArray.push(["Vacumatic 9000",[18]]);
    fullArray.push(["Vaeolus",[20, 28, 36, 39]]);
    fullArray.push(["Val",[]]);
    fullArray.push(["Valteek",[]]);
    fullArray.push(["Vullard",[14, 24, 25, 31, 36, 37, 38, 43]]);
    fullArray.push(["Wadjet",[2, 3, 4, 9, 20, 21, 36, 40, 41, 43, 46, 55, 57]]);
    fullArray.push(["Wain",[2, 3, 1, 17, 23, 41, 42]]);
    fullArray.push(["Walein",[0, 3, 18, 20, 23, 33, 55]]);
    fullArray.push(["Walking Carpet",[3, 5, 9, 14, 17, 18, 20, 23, 33, 36, 37, 41, 57]]);
    fullArray.push(["Warf",[1, 3, 4, 6, 1, 8, 12, 13, 14, 18, 20, 23, 24, 25, 27, 28, 32, 33, 36, 37, 38, 39, 40, 42, 46, 47, 49, 52]]);
    fullArray.push(["Weeble",[]]);
    fullArray.push(["Weebly",[]]);
    fullArray.push(["Weewoo",[3, 1, 9, 11, 13, 18, 19, 23, 24, 32, 33, 36, 37, 38, 40, 41, 42, 43, 45, 46, 55, 57]]);
    fullArray.push(["Werhond",[18, 19, 30, 33, 52, 57]]);
    fullArray.push(["Wheelie",[3, 4, 18, 23, 36, 41, 55]]);
    fullArray.push(["Wheelie Bot",[]]);
    fullArray.push(["Wherfy",[1, 17, 18, 24, 38, 46, 50, 58]]);
    fullArray.push(["Whinny",[1, 13, 19, 23, 24, 27, 28, 36, 43, 57]]);
    fullArray.push(["Whoot",[18, 20, 23, 25, 33]]);
    fullArray.push(["Wibreth",[1, 18, 19, 28]]);
    fullArray.push(["Woolypapith",[20, 24, 37, 45, 54]]);
    fullArray.push(["Wreathy",[3, 4, 36, 41, 54]]);
    fullArray.push(["Wuzzer",[]]);
    fullArray.push(["Wuzzle",[20, 21, 46, 49]]);
    fullArray.push(["Xampher",[1, 6]]);
    fullArray.push(["Xepru",[8, 33, 39]]);
    fullArray.push(["Yackito",[]]);
    fullArray.push(["Yoakie",[56]]);
    fullArray.push(["Yooyu",[1, 3, 1, 11, 18, 19, 23, 28, 32, 33, 38, 40, 41, 42, 46, 52, 54, 57]]);
    fullArray.push(["Yullie",[2, 1, 16, 18, 28, 33, 37, 38, 41, 46, 49]]);
    fullArray.push(["Zamillion",[]]);
    fullArray.push(["Zebba",[5, 28, 33]]);
    fullArray.push(["Zebie",[3, 6, 1, 9, 10, 19, 21, 38, 41, 43, 46, 52, 57]]);
    fullArray.push(["Zomutt",[4, 11, 18, 33, 37, 42, 46]]);
    fullArray.push(["Zoomik",[]]);
    fullArray.push(["Zumagorn",[3, 1, 21, 23, 54, 57]]);
}
