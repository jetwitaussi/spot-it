// var words = ["a","b","c"]; // 3 words (good)
// var words = ["a","b","c","d"]; // 4 words (bad)
// var words = ["Aaron","Dallin","Daniel","Kaylene","Perry","Grandma","Fred"]; // 7 words (good)
var words = ["Aardvark","Buffalo","Cow","Doc","Elephant","Fox","Gopher","Hawk","Ibex","Joey","Kangaroo","Lion","Mouse"]; // 13 words (good)
var words = ["Aardvark","Buffalo","Cow","Doc","Elephant","Fox","Gopher","Hawk","Ibex","Joey","Kangaroo","Lion","Mouse"]; // 13 words (good)

var states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District Of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];


// landscapes
var images = [
    'http://photos.smugmug.com/photos/304577222_Qn7CQRf-S.jpg',
    'http://photos.smugmug.com/photos/403266789_mCSMHRD-S.jpg',
    'http://photos.smugmug.com/photos/359969600_nRwXqXM-S.jpg',
    'http://photos.smugmug.com/photos/1122710934_cRdphsk-S.jpg',
    'http://photos.smugmug.com/photos/131782448_Fqc3JCw-S.jpg',
    'http://photos.smugmug.com/photos/304571981_qGFWfS8-S.jpg',
    'http://photos.smugmug.com/photos/401587434_GR3DFB5-S.jpg',
    'http://photos.smugmug.com/photos/580400758_z2GZkJ8-S.jpg',
    'http://photos.smugmug.com/photos/1562689053_Q43Zz2X-S.jpg',
    'http://photos.smugmug.com/photos/580386980_WLTF9b4-S.jpg',
    'http://photos.smugmug.com/photos/1257250439_LBrVLtD-S.jpg',
    'http://photos.smugmug.com/photos/131783235_g8S24Xv-S.jpg',
    'http://photos.smugmug.com/photos/144710668_knmqVdW-S.jpg',
    'http://photos.smugmug.com/photos/634102549_C38Sf6j-S.jpg',
    'http://photos.smugmug.com/photos/580400351_Q5vwk7F-S.jpg',
    'http://photos.smugmug.com/photos/580401707_QdJ7wsm-S.jpg',
    'http://photos.smugmug.com/photos/1257250132_mpnKXwZ-S.jpg',
    'http://photos.smugmug.com/photos/243635385_Xvf535r-S.jpg',
    'http://photos.smugmug.com/photos/1122711641_ZmQ9Rm2-S.jpg',
    'http://photos.smugmug.com/photos/243643072_tF8B272-S.jpg',
    'http://photos.smugmug.com/photos/359971702_r4vPc9g-S.jpg',
    'http://photos.smugmug.com/photos/580401883_43t9qPx-S.jpg',
    'http://photos.smugmug.com/photos/2544855897_vtCJzJS-S.jpg',
    'http://photos.smugmug.com/photos/132071734_4cSHSft-S.jpg',
    'http://photos.smugmug.com/photos/635273000_bgvHvZJ-S.jpg',
    'http://photos.smugmug.com/photos/1220410064_8CPnKds-S.jpg',
    'http://photos.smugmug.com/photos/3176076557_Vj76Qhk-S.jpg',
    'http://photos.smugmug.com/photos/304579509_tShBF9R-S.jpg',
    'http://photos.smugmug.com/photos/359943832_pswZFMz-S.jpg',
    'http://photos.smugmug.com/photos/359968395_WJwCbFN-S.jpg',
    'http://photos.smugmug.com/photos/131776376_St2Dk9p-S.jpg',
    'http://photos.smugmug.com/photos/144708886_wQ2MSNL-S.jpg',
    'http://photos.smugmug.com/photos/243632662_hzGDSk5-S.jpg',
    'http://photos.smugmug.com/photos/243633998_mjJFwNR-S.jpg',
    'http://photos.smugmug.com/photos/243637880_qWVhwFt-S.jpg',
    'http://photos.smugmug.com/photos/580386572_r6PkJCj-S.jpg',
    'http://photos.smugmug.com/photos/580399888_k2szmDx-S.jpg',
    'http://photos.smugmug.com/photos/1122731453_tmzv9PQ-S.jpg',
    'http://photos.smugmug.com/photos/1220410777_3WPSF8K-S.jpg',
    'http://photos.smugmug.com/photos/1517506324_JcDZdqJ-S.jpg',
    'http://photos.smugmug.com/photos/2544858108_WkH2nJk-S.jpg',
    'http://photos.smugmug.com/photos/2878142096_dMRKG7T-S.jpg',
    'http://photos.smugmug.com/photos/359951837_rhVRH8b-S.jpg',
    'http://photos.smugmug.com/photos/401582841_DwWw8QX-S.jpg',
    'http://photos.smugmug.com/photos/580385759_988bmhN-S.jpg',
    'http://photos.smugmug.com/photos/635275578_j5JQGb4-S.jpg',
    'http://photos.smugmug.com/photos/1072459553_nBNLtQx-S.jpg',
    'http://photos.smugmug.com/photos/1266064857_7cBT84h-S.jpg',
    'http://photos.smugmug.com/photos/1507210214_7Bt9hr5-S.jpg',
    'http://photos.smugmug.com/photos/2152507427_vxVq8Vc-S.jpg',
    'http://photos.smugmug.com/photos/2152525449_2wSrhXF-S.jpg',
    'http://photos.smugmug.com/photos/2544860439_qQwPVx3-S.jpg',
    'http://photos.smugmug.com/photos/3176061430_MGpSKSS-S.jpg',
    'http://photos.smugmug.com/photos/3176071063_CBFkNPV-S.jpg',
    'http://photos.smugmug.com/photos/206363846_6KzK399-S.jpg',
    'http://photos.smugmug.com/photos/206365579_ZhWbLj3-S.jpg',
    'http://photos.smugmug.com/photos/2455422533_dbTmrzS-S.jpg'
];

// portraits
var images2 = [
    'http://photos.smugmug.com/photos/304574382_FxSDMkH-S.jpg',
    'http://photos.smugmug.com/photos/304575261_p3D5j2V-S.jpg',
    'http://photos.smugmug.com/photos/359965375_qTRmwzS-S.jpg',
    'http://photos.smugmug.com/photos/2455421437_jBwR3v4-S.jpg',
    'http://photos.smugmug.com/photos/1220410635_MpMgg8s-S.jpg',
    'http://photos.smugmug.com/photos/243636674_Pr3vLgr-S.jpg',
    'http://photos.smugmug.com/photos/580383672_FcBsnBQ-S.jpg',
    'http://photos.smugmug.com/photos/304573075_rwfCQTF-S.jpg',
    'http://photos.smugmug.com/photos/243631534_mSd3CKV-S.jpg',
    'http://photos.smugmug.com/photos/401578633_W2tdPGP-S.jpg',
    'http://photos.smugmug.com/photos/401580975_x4JgJpV-S.jpg',
    'http://photos.smugmug.com/photos/144699279_MszBSj4-S.jpg',
    'http://photos.smugmug.com/photos/359945805_vt3pT5H-S.jpg',
    'http://photos.smugmug.com/photos/401589272_HHLxVqr-S.jpg',
    // 'http://photos.smugmug.com/photos/133211766_HDKK5KF-S.jpg',
    'http://photos.smugmug.com/photos/304576148_xLhkZcH-S.jpg',
    'http://photos.smugmug.com/photos/2455420987_5dNCxSx-S.jpg',
    // 'http://photos.smugmug.com/photos/133211593_GHdQ9Wb-S.jpg',
    'http://photos.smugmug.com/photos/359953381_qfJKd7B-S.jpg',
    'http://photos.smugmug.com/photos/401585054_KgpjV4h-S.jpg',
    'http://photos.smugmug.com/photos/144704753_4nCJPSG-S.jpg',
    'http://photos.smugmug.com/photos/580384501_VCVgMBF-S.jpg',
    'http://photos.smugmug.com/photos/635272155_dC3mxLH-S.jpg',
    // 'http://photos.smugmug.com/photos/132067093_x2wsF4P-S.jpg',
    'http://photos.smugmug.com/photos/144698745_c5GHz49-S.jpg',
    'http://photos.smugmug.com/photos/206364607_NrsbdHW-S.jpg',
    'http://photos.smugmug.com/photos/359966942_77nn5R6-S.jpg',
    // 'http://photos.smugmug.com/photos/463806252_VxgcJkR-S.jpg',
    'http://photos.smugmug.com/photos/1122711220_n8dcrbk-S.jpg',
    'http://photos.smugmug.com/photos/1122731111_6RBw4c3-S.jpg',
    'http://photos.smugmug.com/photos/206363240_wCx65vv-S.jpg',
    'http://photos.smugmug.com/photos/2455422878_WTPfgMw-S.jpg',
    'http://photos.smugmug.com/photos/3176057980_g2dQv7g-S.jpg',
    'http://photos.smugmug.com/photos/3176069743_mSDP7sQ-S.jpg',
    'http://photos.smugmug.com/photos/2544852374_kv5nxnp-S.jpg'
];
var cardSets = {
    "words3": {
        "wordcount": 3,
        "totalcards": 3,
        "cards": {
            "card1": [0, 1],
            "card2": [0, 2],
            "card3": [1, 2]
        }
    },
    "words7": {
        "wordcount": 7,
        "totalcards": 7,
        "cards": {
            "card1": [0, 1, 4],
            "card2": [2, 3, 4],
            "card3": [0, 2, 5],
            "card4": [1, 3, 5],
            "card5": [0, 3, 6],
            "card6": [1, 2, 6],
            "card7": [4, 5, 6]
        }
    },
    "words13": {
        "wordcount": 13,
        "totalcards": 13,
        "cards": {
            "card1": [0, 1, 2, 9],
            "card2": [9, 3, 4, 5],
            "card3": [8, 9, 6, 7],
            "card4": [0, 10, 3, 6],
            "card5": [1, 10, 4, 7],
            "card6": [8, 2, 10, 5],
            "card7": [0, 8, 11, 4],
            "card8": [1, 11, 5, 6],
            "card9": [11, 2, 3, 7],
            "card10": [0, 12, 5, 7],
            "card11": [8, 1, 3, 12],
            "card12": [12, 2, 4, 6],
            "card13": [9, 10, 11, 12]
        }
    },
    "words31": {
        "wordcount": 31,
        "totalcards": 31,
        "cards": {
            "card1": [0, 1, 2, 3, 4, 25],
            "card2": [5, 6, 7, 8, 9, 25],
            "card3": [10, 11, 12, 13, 14, 25],
            "card4": [15, 16, 17, 18, 19, 25],
            "card5": [20, 21, 22, 23, 24, 25],
            "card6": [0, 5, 10, 15, 20, 26],
            "card7": [1, 6, 11, 16, 21, 26],
            "card8": [2, 7, 12, 17, 22, 26],
            "card9": [3, 8, 13, 18, 23, 26],
            "card10": [4, 9, 14, 19, 24, 26],
            "card11": [0, 6, 12, 18, 24, 27],
            "card12": [1, 7, 13, 19, 20, 27],
            "card13": [2, 8, 14, 15, 21, 27],
            "card14": [3, 9, 10, 16, 22, 27],
            "card15": [4, 5, 11, 17, 23, 27],
            "card16": [0, 7, 14, 16, 23, 28],
            "card17": [1, 8, 10, 17, 24, 28],
            "card18": [2, 9, 11, 18, 20, 28],
            "card19": [3, 5, 12, 19, 21, 28],
            "card20": [4, 6, 13, 15, 22, 28],
            "card21": [0, 8, 11, 19, 22, 29],
            "card22": [1, 9, 12, 15, 23, 29],
            "card23": [2, 5, 13, 16, 24, 29],
            "card24": [3, 6, 14, 17, 20, 29],
            "card25": [4, 7, 10, 18, 21, 29],
            "card26": [0, 9, 13, 17, 21, 30],
            "card27": [1, 5, 14, 18, 22, 30],
            "card28": [2, 6, 10, 19, 23, 30],
            "card29": [3, 7, 11, 15, 24, 30],
            "card30": [4, 8, 12, 16, 20, 30],
            "card31": [25, 26, 27, 28, 29, 30]
        }
    },
    "words57": {
        "wordcount": 57,
        "totalcards": 57,
        "cards": {
            "card1": [0, 1, 2, 3, 4, 5, 6, 49],
            "card2": [7, 8, 9, 10, 11, 12, 13, 49],
            "card3": [49, 14, 15, 16, 17, 18, 19, 20],
            "card4": [49, 21, 22, 23, 24, 25, 26, 27],
            "card5": [32, 33, 34, 49, 28, 29, 30, 31],
            "card6": [35, 36, 37, 38, 39, 40, 41, 49],
            "card7": [42, 43, 44, 45, 46, 47, 48, 49],
            "card8": [0, 35, 7, 42, 14, 50, 21, 28],
            "card9": [1, 36, 8, 43, 15, 50, 22, 29],
            "card10": [2, 37, 9, 44, 16, 50, 23, 30],
            "card11": [3, 38, 10, 45, 17, 50, 24, 31],
            "card12": [32, 4, 39, 11, 50, 46, 18, 25],
            "card13": [33, 5, 40, 12, 47, 50, 19, 26],
            "card14": [34, 6, 41, 13, 48, 50, 20, 27],
            "card15": [0, 32, 48, 8, 16, 40, 51, 24],
            "card16": [1, 33, 41, 42, 17, 51, 9, 25],
            "card17": [34, 35, 10, 43, 2, 18, 51, 26],
            "card18": [51, 3, 36, 11, 44, 19, 27, 28],
            "card19": [4, 37, 12, 45, 51, 20, 21, 29],
            "card20": [5, 38, 13, 14, 51, 46, 22, 30],
            "card21": [6, 39, 7, 15, 51, 23, 47, 31],
            "card22": [0, 38, 9, 47, 18, 52, 27, 29],
            "card23": [1, 39, 10, 48, 19, 52, 21, 30],
            "card24": [2, 40, 42, 11, 20, 22, 52, 31],
            "card25": [32, 3, 41, 43, 12, 14, 52, 23],
            "card26": [33, 35, 4, 44, 13, 15, 52, 24],
            "card27": [34, 36, 5, 7, 45, 16, 52, 25],
            "card28": [37, 6, 8, 46, 17, 52, 26, 28],
            "card29": [0, 33, 36, 10, 46, 20, 53, 23],
            "card30": [1, 34, 37, 11, 14, 47, 53, 24],
            "card31": [2, 38, 12, 15, 48, 53, 25, 28],
            "card32": [3, 39, 42, 13, 16, 53, 26, 29],
            "card33": [4, 7, 40, 43, 17, 53, 27, 30],
            "card34": [5, 8, 41, 44, 18, 21, 53, 31],
            "card35": [32, 35, 6, 9, 45, 19, 53, 22],
            "card36": [0, 41, 11, 45, 15, 54, 26, 30],
            "card37": [1, 35, 12, 46, 16, 54, 27, 31],
            "card38": [32, 2, 36, 13, 47, 17, 21, 54],
            "card39": [33, 3, 37, 7, 48, 18, 22, 54],
            "card40": [34, 4, 38, 8, 42, 19, 54, 23],
            "card41": [5, 39, 9, 43, 20, 54, 24, 28],
            "card42": [6, 40, 10, 44, 14, 54, 25, 29],
            "card43": [0, 34, 39, 44, 12, 17, 22, 55],
            "card44": [1, 40, 55, 13, 45, 18, 23, 28],
            "card45": [2, 7, 41, 46, 19, 55, 24, 29],
            "card46": [3, 8, 47, 35, 20, 55, 25, 30],
            "card47": [4, 9, 14, 48, 55, 36, 26, 31],
            "card48": [32, 37, 10, 15, 55, 27, 42, 5],
            "card49": [33, 43, 38, 6, 11, 16, 21, 55],
            "card50": [0, 37, 43, 13, 19, 56, 25, 31],
            "card51": [32, 1, 38, 7, 44, 20, 56, 26],
            "card52": [33, 2, 39, 8, 45, 14, 56, 27],
            "card53": [34, 3, 40, 9, 46, 15, 21, 56],
            "card54": [4, 41, 10, 47, 16, 22, 56, 28],
            "card55": [35, 5, 11, 48, 17, 23, 56, 29],
            "card56": [36, 6, 42, 12, 56, 18, 24, 30],
            "card57": [49, 50, 51, 52, 53, 54, 55, 56]
        }
    }
};
function demoData(){
    [].forEach.call(document.querySelectorAll('[data-demo]'),function(elem){
        console.log(elem);
        elem.addEventListener('click',function(event){
            console.log(1);
            event.preventDefault();
            var demo = elem.getAttribute('data-demo');
            itemEntry.value = window[demo].join('\n');
            loadItems();
        });
    });
}
demoData();