var t1 = new Date().getTime();

function timeScriptWriter(idvData, i) {
    var FEDate = Date.parse(idvData.finalDate);
    r = `
    let d${i} = document.getElementById("d${i}");
    let h${i} = document.getElementById("h${i}");
    let m${i} = document.getElementById("m${i}");
    let s${i} = document.getElementById("s${i}");
    var x${i} = setInterval(function () {
        var dif = ${FEDate.toExponential()} - new Date().getTime();
        if (dif > 0) {
            var d = Math.floor(dif / ${(1000 * 60 * 60 * 24)});
            var h = Math.floor((dif % ${(1000 * 60 * 60 * 24)}) / ${(1000 * 60 * 60)});
            var m = Math.floor((dif % ${(1000 * 60 * 60)}) / ${(1000 * 60)});
            var s = Math.floor((dif % ${(1000 * 60)}) / 1e3);
            if (d > 40) {
                document.getElementById("db${i}").style.height = "100%";
            } else {
                document.getElementById("db${i}").style.height = \`\${d/40 * 100}%\`;
            }
            document.getElementById("hb${i}").style.height = \`\${h/24 * 100}%\`;
            document.getElementById("mb${i}").style.height = \`\${m/60 * 100}%\`;
            document.getElementById("sb${i}").style.height = \`\${s/60 * 100}%\`;
            if (d${i}.innerHTML != d) {d${i}.innerHTML = d;}
            if (h${i}.innerHTML != h) {h${i}.innerHTML = h;}
            if (m${i}.innerHTML != m) {m${i}.innerHTML = m;}
            if (s${i}.innerHTML != s) {s${i}.innerHTML = s;}
        } else {
            document.getElementById("db${i}").style.height = "100%";
            document.getElementById("hb${i}").style.height = "100%";
            document.getElementById("mb${i}").style.height = "100%";
            document.getElementById("sb${i}").style.height = "100%";
            if (d${i}.innerHTML != d) {d${i}.innerHTML = 0;}
            if (h${i}.innerHTML != h) {h${i}.innerHTML = 0;}
            if (m${i}.innerHTML != m) {m${i}.innerHTML = 0;}
            if (s${i}.innerHTML != s) {s${i}.innerHTML = 0;}
        }
    }, 1000)`
    return r;
}

function mainLoader(data) {
    let main = document.getElementById("main");
    let scriptMain = document.getElementById("timeScript");
    for (var i = 0; i < data.length; i++) {
        idvData = data[i];

        let cardB = document.createElement("div"); cardB.className = "card-border";
        let card = document.createElement("div"); card.className = "card";
        let CandP = document.createElement("div"); CandP.className = "c-and-p";
        let course = document.createElement("div"); course.className = "course";
        let prof = document.createElement("div"); prof.className = "prof";
        let counter = document.createElement("div"); counter.className = "counter";
        let d = document.createElement("div"); d.className = "d-slot slot";
        let h = document.createElement("div"); h.className = "h-slot slot";
        let m = document.createElement("div"); m.className = "m-slot slot";
        let s = document.createElement("div"); s.className = "s-slot slot";
        let db = document.createElement("div"); db.className = "slot-bg"; db.id = `db${i}`;
        let hb = document.createElement("div"); hb.className = "slot-bg"; hb.id = `hb${i}`;
        let mb = document.createElement("div"); mb.className = "slot-bg"; mb.id = `mb${i}`;
        let sb = document.createElement("div"); sb.className = "slot-bg"; sb.id = `sb${i}`;
        let dh = document.createElement("span"); dh.className = "slot-head"; dh.innerHTML = "..."; dh.id = `d${i}`;
        let hh = document.createElement("span"); hh.className = "slot-head"; hh.innerHTML = "..."; hh.id = `h${i}`;
        let mh = document.createElement("span"); mh.className = "slot-head"; mh.innerHTML = "..."; mh.id = `m${i}`;
        let sh = document.createElement("span"); sh.className = "slot-head"; sh.innerHTML = "..."; sh.id = `s${i}`;
        let dt = document.createElement("span"); dt.className = "slot-tail"; dt.innerHTML = "days";
        let ht = document.createElement("span"); ht.className = "slot-tail"; ht.innerHTML = "hours";
        let mt = document.createElement("span"); mt.className = "slot-tail"; mt.innerHTML = "minutes";
        let st = document.createElement("span"); st.className = "slot-tail"; st.innerHTML = "seconds";

        course.innerHTML = idvData.course; prof.innerHTML = idvData.prof;
        R = idvData.color[0]; G = idvData.color[1]; B = idvData.color[2];
        // RGBs = `rgba(${R+((256-R)*0.5)}, ${G+(256-G)*0.5}, ${B+(256-B)*0.5}, 1)`;
        RGBs = `rgba(256, 256, 256, 1)`; RGBe = `rgba(${R*0.6}, ${G*0.6}, ${B*0.6}, 1)`;
        card.style.backgroundImage = `linear-gradient(150deg, ${RGBs}, ${RGBe})`;
        card.style.boxShadow = `0px 0px 40px rgb(${R}, ${G}, ${B})`;
        sb.style.boxShadow = `0px 0px 8px rgb(${R}, ${G}, ${B})`;
        mb.style.boxShadow = `0px 0px 8px rgb(${R}, ${G}, ${B})`;
        hb.style.boxShadow = `0px 0px 8px rgb(${R}, ${G}, ${B})`;
        db.style.boxShadow = `0px 0px 8px rgb(${R}, ${G}, ${B})`;
        sb.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
        mb.style.backgroundColor = `rgb(${R+((256-R)*0.15)}, ${G+((256-G)*0.15)}, ${B+((256-B)*0.15)})`;
        hb.style.backgroundColor = `rgb(${R+((256-R)*0.30)}, ${G+((256-G)*0.30)}, ${B+((256-B)*0.30)})`;
        db.style.backgroundColor = `rgb(${R+((256-R)*0.45)}, ${G+((256-G)*0.45)}, ${B+((256-B)*0.45)})`;
        
        CandP.appendChild(course); CandP.appendChild(prof);
        card.appendChild(CandP);
        d.appendChild(db); d.appendChild(dh); d.appendChild(dt); counter.appendChild(d);
        h.appendChild(hb); h.appendChild(hh); h.appendChild(ht); counter.appendChild(h);
        m.appendChild(mb); m.appendChild(mh); m.appendChild(mt); counter.appendChild(m);
        s.appendChild(sb); s.appendChild(sh); s.appendChild(st); counter.appendChild(s);
        card.appendChild(counter);
        cardB.append(card); main.appendChild(cardB);

        let idvScript = document.createElement("script");
        idvScript.innerHTML = timeScriptWriter(idvData, i);
        scriptMain.appendChild(idvScript);
    }
    scriptMain.remove();
}

mainLoader(data);

var t2 = new Date().getTime();
document.getElementById("loadTime").innerHTML = `Loading Time - ${t2 - t1}ms`