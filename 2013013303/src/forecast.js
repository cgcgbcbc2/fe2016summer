/**
 * Created by Administrator on 2016/7/1.
 */

function forecast(ability, nation){
    //console.log(ability. NorthernIreland+" "+ability.England+" "+ability.Switzerland);
    quarterfinal = new Object();
    quarterfinal.Switzerland = ability.Switzerland / (ability.Switzerland + ability.Poland);
    quarterfinal.Poland = ability.Poland / (ability.Switzerland + ability.Poland);
    quarterfinal.Croatia = ability.Croatia / (ability.Croatia + ability.Portugal);
    quarterfinal.Portugal = ability.Portugal / (ability.Croatia + ability.Portugal);
    quarterfinal.Wales = ability.Wales / (ability.Wales + ability["Northern Ireland"]);
    quarterfinal["Northern Ireland"] = ability["Northern Ireland"] / (ability.Wales + ability["Northern Ireland"]);
    quarterfinal.Hungary = ability.Hungary / (ability.Hungary + ability.Belgium);
    quarterfinal.Belgium = ability.Belgium / (ability.Hungary + ability.Belgium);
    quarterfinal.Germany = ability.Germany / (ability.Germany + ability.Slovakia);
    quarterfinal.Slovakia = ability.Slovakia / (ability.Germany + ability.Slovakia);
    quarterfinal.Italy = ability.Italy / (ability.Italy + ability.Spain);
    quarterfinal.Spain = ability.Spain / (ability.Italy + ability.Spain);
    quarterfinal.France = ability.France / (ability.France + ability["Republic of Ireland"]);
    quarterfinal["Republic of Ireland"] = ability["Republic of Ireland"] / (ability.France + ability["Republic of Ireland"]);
    quarterfinal.England = ability.England / (ability.England + ability.Iceland);
    quarterfinal.Iceland = ability.Iceland / (ability.England + ability.Iceland);
    semifinal = new Object();
    semifinal.Switzerland = quarterfinal.Switzerland *
    (quarterfinal.Croatia * (ability.Switzerland / (ability.Switzerland + ability.Croatia))
    + quarterfinal.Portugal * (ability.Switzerland / (ability.Switzerland + ability.Portugal)));
    semifinal.Poland = quarterfinal.Poland *
    (quarterfinal.Croatia * (ability.Poland / (ability.Poland + ability.Croatia))
    + quarterfinal.Portugal * (ability.Poland / (ability.Poland + ability.Portugal)));

    semifinal.Croatia = quarterfinal.Croatia *
    (quarterfinal.Switzerland * (ability.Croatia / (ability.Croatia + ability.Switzerland))
    + quarterfinal.Poland * (ability.Croatia / (ability.Croatia + ability.Poland)));
    semifinal.Portugal = quarterfinal.Portugal *
    (quarterfinal.Switzerland * (ability.Portugal / (ability.Portugal + ability.Switzerland))
    + quarterfinal.Poland * (ability.Portugal / (ability.Portugal + ability.Poland)));

    semifinal.Wales = quarterfinal.Wales *
    (quarterfinal.Hungary * (ability.Wales / (ability.Wales + ability.Hungary))
    + quarterfinal.Belgium * (ability.Wales / (ability.Wales + ability.Belgium)));
    semifinal["Northern Ireland"] = quarterfinal["Northern Ireland"] *
    (quarterfinal.Hungary * (ability["Northern Ireland"] / (ability["Northern Ireland"] + ability.Hungary))
    + quarterfinal.Belgium * (ability["Northern Ireland"] / (ability["Northern Ireland"] + ability.Belgium)));

    semifinal.Hungary = quarterfinal.Hungary *
    (quarterfinal.Wales * (ability.Hungary / (ability.Hungary + ability.Wales))
    + quarterfinal["Northern Ireland"] * (ability.Hungary / (ability.Hungary + ability["Northern Ireland"])));
    semifinal.Belgium = quarterfinal.Belgium *
    (quarterfinal.Wales * (ability.Belgium / (ability.Belgium + ability.Wales))
    + quarterfinal["Northern Ireland"] * (ability.Belgium / (ability.Belgium + ability["Northern Ireland"])));

    semifinal.Germany = quarterfinal.Germany *
    (quarterfinal.Italy * (ability.Germany / (ability.Germany + ability.Italy))
    + quarterfinal.Spain * (ability.Germany / (ability.Germany + ability.Spain)));
    semifinal.Slovakia = quarterfinal.Slovakia *
    (quarterfinal.Italy * (ability.Slovakia / (ability.Slovakia + ability.Italy))
    + quarterfinal.Spain * (ability.Slovakia / (ability.Slovakia + ability.Spain)));

    semifinal.Italy = quarterfinal.Italy *
    (quarterfinal.Germany * (ability.Italy / (ability.Italy + ability.Germany))
    + quarterfinal.Slovakia * (ability.Italy / (ability.Italy + ability.Slovakia)));
    semifinal.Spain = quarterfinal.Spain *
    (quarterfinal.Germany * (ability.Spain / (ability.Spain + ability.Germany))
    + quarterfinal.Slovakia * (ability.Spain / (ability.Spain + ability.Slovakia)));

    semifinal.France = quarterfinal.France *
    (quarterfinal.England * (ability.France / (ability.France + ability.England))
    + quarterfinal.Iceland * (ability.France / (ability.France + ability.Iceland)));
    semifinal["Republic of Ireland"] = quarterfinal["Republic of Ireland"] *
    (quarterfinal.England * (ability["Republic of Ireland"] / (ability["Republic of Ireland"] + ability.England))
    + quarterfinal.Iceland * (ability["Republic of Ireland"] / (ability["Republic of Ireland"] + ability.Iceland)));

    semifinal.England = quarterfinal.England *
    (quarterfinal.France * (ability.England / (ability.England + ability.France))
    + quarterfinal["Republic of Ireland"] * (ability.England / (ability.England + ability["Republic of Ireland"])));
    semifinal.Iceland = quarterfinal.Iceland *
    (quarterfinal.France * (ability.Iceland / (ability.Iceland + ability.France))
    + quarterfinal["Republic of Ireland"] * (ability.Iceland / (ability.Iceland + ability["Republic of Ireland"])));

    final = new Object();
    final.Switzerland = semifinal.Switzerland *
    (semifinal.Wales * (ability.Switzerland / (ability.Switzerland + ability.Wales)) + semifinal["Northern Ireland"] * (ability.Switzerland / (ability.Switzerland + ability["Northern Ireland"]))
    + semifinal.Hungary * (ability.Switzerland / (ability.Switzerland + ability.Hungary)) + semifinal.Belgium * (ability.Switzerland / (ability.Switzerland + ability.Belgium)));
    final.Poland = semifinal.Poland *
    (semifinal.Wales * (ability.Poland / (ability.Poland + ability.Wales)) + semifinal["Northern Ireland"] * (ability.Poland / (ability.Poland + ability["Northern Ireland"]))
    + semifinal.Hungary * (ability.Poland / (ability.Poland + ability.Hungary)) + semifinal.Belgium * (ability.Poland / (ability.Poland + ability.Belgium)));
    final.Croatia = semifinal.Croatia *
    (semifinal.Wales * (ability.Croatia / (ability.Croatia + ability.Wales)) + semifinal["Northern Ireland"] * (ability.Croatia / (ability.Croatia + ability["Northern Ireland"]))
    + semifinal.Hungary * (ability.Croatia / (ability.Croatia + ability.Hungary)) + semifinal.Belgium * (ability.Croatia / (ability.Croatia + ability.Belgium)));
    final.Portugal = semifinal.Portugal *
    (semifinal.Wales * (ability.Portugal / (ability.Portugal+ ability.Wales)) + semifinal["Northern Ireland"] * (ability.Portugal / (ability.Portugal + ability["Northern Ireland"]))
    + semifinal.Hungary * (ability.Portugal / (ability.Portugal + ability.Hungary)) + semifinal.Belgium * (ability.Portugal / (ability.Portugal + ability.Belgium)));

    final.Wales = semifinal.Wales *
    (semifinal.Switzerland * (ability.Wales / (ability.Wales + ability.Switzerland)) + semifinal.Poland * (ability.Wales / (ability.Wales + ability.Poland))
    + semifinal.Croatia * (ability.Wales / (ability.Wales + ability.Croatia)) + semifinal.Portugal * (ability.Wales / (ability.Wales + ability.Portugal)));
    final["Northern Ireland"] = semifinal["Northern Ireland"] *
    (semifinal.Switzerland * (ability["Northern Ireland"] / (ability["Northern Ireland"] + ability.Switzerland)) + semifinal.Poland * (ability["Northern Ireland"]  / (ability["Northern Ireland"]  + ability.Poland))
    + semifinal.Croatia * (ability["Northern Ireland"] / (ability["Northern Ireland"] + ability.Croatia)) + semifinal.Portugal * (ability["Northern Ireland"] / (ability["Northern Ireland"]  + ability.Portugal)));
    final.Hungary = semifinal.Hungary *
    (semifinal.Switzerland * (ability.Hungary / (ability.Hungary + ability.Switzerland)) + semifinal.Poland * (ability.Hungary / (ability.Hungary + ability.Poland))
    + semifinal.Croatia * (ability.Hungary / (ability.Hungary + ability.Croatia)) + semifinal.Portugal * (ability.Hungary / (ability.Hungary + ability.Portugal)));
    final.Belgium = semifinal.Belgium*
    (semifinal.Switzerland * (ability.Belgium / (ability.Belgium + ability.Switzerland)) + semifinal.Poland * (ability.Belgium / (ability.Belgium + ability.Poland))
    + semifinal.Croatia * (ability.Belgium / (ability.Belgium + ability.Croatia)) + semifinal.Portugal * (ability.Belgium / (ability.Belgium + ability.Portugal)));

    final.Germany = semifinal.Germany *
    (semifinal.France * (ability.Germany / (ability.Germany + ability.France)) + semifinal["Republic of Ireland"] * (ability.Germany / (ability.Germany + ability["Republic of Ireland"]))
    + semifinal.England * (ability.Germany / (ability.Germany + ability.England)) + semifinal.Iceland * (ability.Germany / (ability.Germany + ability.Iceland)));
    final.Slovakia = semifinal.Slovakia *
    (semifinal.France * (ability.Slovakia / (ability.Slovakia + ability.France)) + semifinal["Republic of Ireland"] * (ability.Slovakia / (ability.Slovakia + ability["Republic of Ireland"]))
    + semifinal.England * (ability.Slovakia / (ability.Slovakia + ability.England)) + semifinal.Iceland * (ability.Slovakia / (ability.Slovakia + ability.Iceland)));
    final.Italy = semifinal.Italy *
    (semifinal.France * (ability.Italy / (ability.Italy + ability.France)) + semifinal["Republic of Ireland"] * (ability.Italy / (ability.Italy + ability["Republic of Ireland"]))
    + semifinal.England * (ability.Italy / (ability.Italy + ability.England)) + semifinal.Iceland * (ability.Italy / (ability.Italy + ability.Iceland)));
    final.Spain = semifinal.Spain *
    (semifinal.France * (ability.Spain / (ability.Spain + ability.France)) + semifinal["Republic of Ireland"] * (ability.Spain / (ability.Spain + ability["Republic of Ireland"]))
    + semifinal.England * (ability.Spain / (ability.Spain + ability.England)) + semifinal.Iceland * (ability.Spain / (ability.Spain + ability.Iceland)));

    final.France = semifinal.France *
    (semifinal.Germany * (ability.France / (ability.France + ability.Germany)) + semifinal.Slovakia * (ability.France / (ability.France + ability.Slovakia))
    + semifinal.Italy * (ability.France / (ability.France + ability.Italy)) + semifinal.Spain * (ability.France / (ability.France + ability.Spain)));
    final["Republic of Ireland"] = semifinal["Republic of Ireland"] *
    (semifinal.Germany * (ability["Republic of Ireland"] / (ability["Republic of Ireland"] + ability.Germany)) + semifinal.Slovakia * (ability["Republic of Ireland"] / (ability["Republic of Ireland"] + ability.Slovakia))
    + semifinal.Italy * (ability["Republic of Ireland"] / (ability["Republic of Ireland"] + ability.Italy)) + semifinal.Spain * (ability["Republic of Ireland"] / (ability["Republic of Ireland"] + ability.Spain)));
    final.England = semifinal.England *
    (semifinal.Germany * (ability.England / (ability.England + ability.Germany)) + semifinal.Slovakia * (ability.England / (ability.England + ability.Slovakia))
    + semifinal.Italy * (ability.England / (ability.England + ability.Italy)) + semifinal.Spain * (ability.England / (ability.England + ability.Spain)));
    final.Iceland = semifinal.Iceland *
    (semifinal.Germany * (ability.Iceland / (ability.Iceland + ability.Germany)) + semifinal.Slovakia * (ability.Iceland / (ability.Iceland + ability.Slovakia))
    + semifinal.Italy * (ability.Iceland / (ability.Iceland + ability.Italy)) + semifinal.Spain * (ability.Iceland / (ability.Iceland + ability.Spain)));

    function getAbility(ability, nation) {
        if (nation == "Switzerland") return ability.Switzerland;
        if (nation == "Poland") return ability.Poland;
        if (nation == "Croatia") return ability.Croatia;
        if (nation == "Portugal") return ability.Portugal;
        if (nation == "Wales") return ability.Wales;
        if (nation == "Northern Ireland") return ability["Northern Ireland"];
        if (nation == "Hungary") return ability.Hungary;
        if (nation == "Belgium") return ability.Belgium;
        if (nation == "Germany") return ability.Germany;
        if (nation == "Slovakia") return ability.Slovakia;
        if (nation == "Italy") return ability.Italy;
        if (nation == "Spain") return ability.Spain;
        if (nation == "France") return ability.France;
        if (nation == "Republic of Ireland") return ability["Republic of Ireland"];
        if (nation == "England") return ability.England;
        if (nation == "Iceland") return ability.Iceland;
    }
    var p = 0, f = 0;
    if (nation == "Germany" || nation == "Slovakia" || nation == "Italy" || nation == "Spain"
        || nation == "France" || nation == "Republic of Ireland" || nation == "England" || nation == "Iceland") { // 下半区
        p = getAbility(ability, nation);// 获得国家实力
        f = getAbility(final, nation);// 获得国家进决赛几率
        return (f * (final.Switzerland * (p / (p + ability.Switzerland)) + final.Poland * (p / (p + ability.Poland))
        + final.Croatia * (p / (p + ability.Croatia)) + final.Portugal * (p / (p + ability.Portugal))
        + final.Wales * (p / (p + ability.Wales)) + final["Northern Ireland"] * (p / (p + ability["Northern Ireland"]))
        + final.Hungary * (p / (p + ability.Hungary)) + final.Belgium * (p / (p + ability.Belgium))));
    }
    else { // 上半区
        p = getAbility(ability, nation);// 获得国家实力
        f = getAbility(final, nation);// 获得国家进决赛几率
        return (f * (final.Germany * (p / (p + ability.Germany)) + final.Slovakia * (p / (p + ability.Slovakia))
        + final.Italy * (p / (p + ability.Italy)) + final.Spain * (p / (p + ability.Spain))
        + final.France * (p / (p + ability.France)) + final["Republic of Ireland"] * (p / (p + ability["Republic of Ireland"]))
        + final.England * (p / (p + ability.England)) + final.Iceland * (p / (p + ability.Iceland))));
    }

    //console.log(final.Germany+final.Slovakia+final.Italy+final.Spain+final.France+final["Republic of Ireland"]+final.England+final.Iceland);
}
    ability = {
        Switzerland: 90,
        Poland: 80,
        Croatia: 85,
        Portugal: 80,
        Wales: 75,
        "Northern Ireland": 65,
        Hungary: 75,
        Belgium: 85,
        Germany: 100,
        Slovakia: 80,
        Italy: 95,
        Spain: 90,
        France: 95,
        "Republic of Ireland": 75,
        England: 80,
        Iceland: 70
    };

console.log(forecast(ability, "England"));
console.log(forecast(ability, "Portugal"));
/*console.log(forecast(ability, "Switzerland")+forecast(ability, "Poland")+forecast(ability, "Croatia")+forecast(ability, "Portugal")+
forecast(ability, "Wales")+forecast(ability, "NorthernIreland")+forecast(ability, "Hungary")+forecast(ability, "Belgium")+
forecast(ability, "Germany")+forecast(ability, "Slovakia")+forecast(ability, "Italy")+forecast(ability, "Spain")+
forecast(ability, "France")+forecast(ability, "Ireland")+forecast(ability, "England")+forecast(ability, "Iceland"));*/