

(function() {

    const research_map = [
        {
            "keywords": ["dictature","opposant politique","fraude","fuir","attentat","élections","elections","fuir son pays"],
            "democratique": false,
            "table": {
                "title": "Nos agents ont été contactés!",
                "type": "Alerte GoolagVPN",
                "description": "Votre recherche est non-démocratique, nous devons envoyer une équipe afin de nous assurer le votre état de santé mentale et procéder aux corrections appropriés. En accord avec les lois démocratiques de notre grand pays! "
            },
            "results": [
                {
                    "url": "https://imho.tep/vacances_au_goulag",
                    "title": "Vacances au goulag près de chez vous",
                    "description": "La recherche effectuée n'étant pas démocratique nous vous conseillons des vacances forcés au goulag pour comprendre la signification de la démocratie!"
                },
                {
                    "url": "https://imho.tep/elimination_opposant_politique",
                    "title": "Comment se faire suicider",
                    "description": "Nos expert gouvernementaux sont les plus a même a réaliser des suicides si un de vos proche n'est pas démocratique! n'hésitez pas a faire appel a nous!"
                },
                {
                    "url": "https://imho.tep/stage_pour_faire_taire_les_curieux",
                    "title": "Stage bien-être et torture démocratique dans la 36ème villa du dirigeant",
                    "description": "Notre dirigeant par sa bontée vous invite dans sa somptueuse villa construite grâce a l'argent de l'hopital pour les enfants pour découvrir le goût de la démocratie! Plus de 60 formes de tortures démocratiques y sont pratiqués"
                },
                {
                    "url": "https://imho.tep/elections_truquees",
                    "title": "Les élections les plus démocratique du monde sont encore a imhotep",
                    "description": "Notre dirigeant a été élu a vie pour la 62ème fois avec plus de 635% des voies un résultat historique!"
                }
            ]
        },
        {
            "keywords": ["démocratie","bonheur","imhotep","prix nobel de la paix"],
            "democratique": true,
            "table": {
                "title": "Démocratie",
                "type": "Forme de gouvernement",
                "description": "Le terme démocratie ou imhotepisme est la forme de gouvernement adopté par notre grand dirigeant a vie! Il permet a tous nos citoyens de s'épanouir en totale liberté dans les règles fixés par notre gouvernement."
            },
            "results": [
                {
                    "url": "https://imho.tep/democratie",
                    "title": "Imhotep le pays le plus démocratique au monde",
                    "description": "Imhotep a été élu par sa population pays le plus démocratique au monde avec 99% des voies. Les 1% des voies se sont surêment trompé de buletin ils ont donc été envoyé en stage de réparation ophtalmique"
                },
                {
                    "url": "https://imho.tep/bonheur",
                    "title": "Le pays le plus heureux au monde",
                    "description": "Le pays le plus heureux au monde est imhotep nul doute!"
                },
                {
                    "url": "https://imho.tep/stage_pour_faire_taire_les_curieux",
                    "title": "Des échanges scolaires avec le second pays le plus démocratique au monde enfin possible",
                    "description": "La corée du Nord le second pays le plus démocratique au monde accepte désormais les échanges scolaires! Les petits imhotepiens se réjouissent tous de pouvoir admirer de leurs yeux les goulags nord coréens"
                }
            ]
        }
    ];

    function create_search_result(objects) {
        let o = "";
        for (const p of objects) {
            const y = p.url.replace("https://","").replace("http://","").split("/");
            o+= `<div class="g">
            <h2 class="Uo8X3b">Résultats Web</h2>
            <div class="rc">
                <div class="yuRUbf">
                    <a href="${p.url}">
                        <br />
                        <h3 class="LC20lb DKV0Md"><span>${p.title}</span></h3>
                        <div class="TbwUpd NJjxre">
                            <cite class="iUh30 Zu0yb qLRx3b tjvcx">
                                ${y[0]}<span class="dyjrff qzEoUe"><span> › ${y[1].split("_").join(" ")}</span></span>
                            </cite>
                        </div>
                    </a>
                </div>
                <div class="IsZvec">
                    <div>
                        <span class="aCOpRe">
                            <span>${p.description}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        `;
        }
        $("#rso").html(o)
    }

    function apply(obj) {
        $("#rhs").html(`
            <h2 class="Uo8X3b">Résultats complémentaires</h2>
            <div class="liYKde g VjDLd">
                <div class="kp-wholepage kp-wholepage-osrp HSryR EyBRub">
                    <div class="I6TXqe osrp-blk" id="wp-tabs-container">
                        <div>
                            <div class="SzZmKb">
                                <div class="K20DDe R9GLFb JXFbbc LtKgIf a1vOw BY2RHc" lang="fr-FR">
                                    <div class="Hhmu2e mod NFQFxe viOShc LKPcQc" data-md="16" lang="fr-FR" style="clear: none;">
                                        <div class="Ftghae iirjIb">
                                            <div class="SPZz6b">
                                                <h2 class="qrShPb kno-ecr-pt PZPZlf mfMhoc"><span>${obj.title}</span></h2>
                                                <div class="wwUB2c PZPZlf"><span>${obj.type}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="border-bottom: 1px solid #ebebeb;"></div>
                        </div>
                        <div class="Kot7x">
                            <div id="kp-wp-tab-cont-overview" class="SoydSe">
                                <div id="kp-wp-tab-overview">
                                    <div class="cLjAic LMRCfc">
                                        <h2 class="Uo8X3b">Description</h2>
                                        <div class="LuVEUc B03h3d P6OZi V14nKc ptcLIOszQJu__wholepage-card wp-ms">
                                            <div>
                                                <div class="UDZeY OTFaAf">
                                                    <div class="mod" lang="fr-FR" style="clear: none;">
                                                        <!--m-->
                                                        <div class="PZPZlf hb8SAc">
                                                            <div>
                                                                <div class="kno-rdesc">
                                                                    <div>
                                                                        <h2 class="Uo8X3b">Description</h2>
                                                                        <span>${obj.description}</span>
                                                                        <span>
                                                                            <span> </span>
                                                                            <a
                                                                                class="ruhjFe NJLBac fl"
                                                                                href="https://imho.tep"
                                                                            >
                                                                                Ministère de <strike>la propagande</strike> l'information
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `)
    }

    window.$("#hplogo").attr("srcset", "https://i.imgur.com/5VbP3O1.png")
    window.$("#logo > img").attr("src", "https://i.imgur.com/5VbP3O1.png")

    function map(query, fn) {
        const u = document.querySelector(query);
        if (u !== undefined && u !== null) {
            fn(u);
        }
    }
    map("#tsf > div:nth-child(2) > div > div > center > input", (e) => {
        e.value = "Recherche Goolag"
    });
    map("#tsf > div:nth-child(2) > div > div > center > input:nth-child(2)", (e) => {
        e.value = "Effectuer une recherche démocratique"
    });
    /*
    */
    window.$("#rso > div").css("display","none");
    window.$("#rhs").html("");
    window.$("#hdtb-s > ol > .hdtb-mitem").text("Democratic Search activé");
    window.$(".hide-focus-ring").css("display","none")
    window.$("#brs > g-section-with-header > div.card-section ").html(`<div class="brs_col"><p class="nVcaUb"><a href="/search?q=démocratie">démocratie</a></p></div>`)
    window.$("#center_col > div:nth-child(6)").css("display", "none")
    const value = $("#tsf > div:nth-child(2) > div > div > div > div > input").val()
    if (value !== undefined && value !== null) {
        let i = [];
        for (const obj of research_map) {
            if (obj.keywords.includes(value.toLowerCase().trim())) {
                i = obj.results;
                apply(obj.table);
                break;
            }
        }
        create_search_result(i)
    }
})();
