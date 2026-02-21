<script lang="ts">
    import Countrycard from "$lib/components/countrycard.svelte";
    import { onMount } from "svelte";
    import { SvelteDate } from "svelte/reactivity";
    const flaglist = [
        "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
        "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
        "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_New_York_City.svg",
        "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Los_Angeles%2C_California.svg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
        "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Hawaii.svg",
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg",
    ];
    // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    const timezonede = "Europe/Berlin";
    const timezonejp = "Asia/Tokyo";
    const timezoneca = "America/Toronto";
    const timezoneny = "America/New_York";
    const timezonela = "America/Los_Angeles";
    const timezonefr = "Europe/Paris";
    const timezonech = "Asia/Shanghai";
    const timezoneen = "Europe/London";
    const timezonehw = "Pacific/Honolulu";
    const timezonesp = "Europe/Madrid";
    const options = {
        weekday: "short",
        hours: "2-digit",
        minutes: "2-digit",
        seconds: "2-digit",
    };
    let dsv = new SvelteDate();
    let de = $state("");
    let jp = $state("");
    let en = $state("");
    let ca = $state("");
    let ny = $state("");
    let la = $state("");
    let fr = $state("");
    let ch = $state("");
    let hw = $state("");
    let sp = $state("");

    function doeverything() {
        de = dsv.toLocaleTimeString(undefined, {
            timeZone: timezonede,
            ...options,
        });
        jp = dsv.toLocaleTimeString(undefined, {
            timeZone: timezonejp,
            ...options,
        });
        en = dsv.toLocaleTimeString(undefined, {
            timeZone: timezoneen,
            ...options,
        });
        ca = dsv.toLocaleTimeString(undefined, {
            timeZone: timezoneca,
            ...options,
        });
        ny = dsv.toLocaleTimeString(undefined, {
            timeZone: timezoneny,
            ...options,
        });
        la = dsv.toLocaleTimeString(undefined, {
            timeZone: timezonela,
            ...options,
        });
        fr = dsv.toLocaleTimeString(undefined, {
            timeZone: timezonefr,
            ...options,
        });
        ch = dsv.toLocaleTimeString(undefined, {
            timeZone: timezonech,
            ...options,
        });
        hw = dsv.toLocaleTimeString(undefined, {
            timeZone: timezonehw,
            ...options,
        });
        sp = dsv.toLocaleTimeString(undefined, {
            timeZone: timezonesp,
            ...options,
        });
    }
    onMount(() => {
        const interval = setInterval(() => {
            dsv.setTime(Date.now());
            doeverything();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<hr />
<main id="MAIN">
    <Countrycard
        name="germany"
        time={de}
        location="Berlin, Germany"
        flag={flaglist[0]}
    />
    <Countrycard
        name="japan"
        time={jp}
        location="Tokyo, Japan"
        flag={flaglist[1]}
    />
    <Countrycard
        name="england"
        time={en}
        location="London, England"
        flag={flaglist[2]}
    />
    <Countrycard
        name="canada"
        time={ca}
        location="torronto, Canada"
        flag={flaglist[3]}
    />
    <Countrycard
        name="new york"
        time={ny}
        location="New York, USA"
        flag={flaglist[4]}
    />
    <Countrycard
        name="los angeles"
        time={la}
        location="Los Angeles, USA"
        flag={flaglist[5]}
    />
    <Countrycard
        name="france"
        time={fr}
        location="Paris, France"
        flag={flaglist[6]}
    />
    <Countrycard
        name="china"
        time={ch}
        location="Shanghai, China"
        flag={flaglist[7]}
    />
    <Countrycard
        name="china"
        time={hw}
        location="Honolulu, Hawaii"
        flag={flaglist[8]}
    />
    <Countrycard
        name="spain"
        time={sp}
        location="Madrid, Spain"
        flag={flaglist[9]}
    />
</main>
<hr />
<footer>
    °°° <a href="https://hactuss.vercel.app">Made with fun by hactuss</a>
    °°°
    <a href="https://github.com/hactuss/officehaj">source code</a> °°°
</footer>

<style>
    :root {
        font-family:
            Reddit Sans,
            "Goldman",
            Reddit Mono,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            "Open Sans",
            "Helvetica Neue",
            sans-serif;
        background-color: rgb(33, 33, 33);
        font-family: sans-serif;
        color: white;
    }
    header {
        margin-top: 2.5%;
        display: flex;
        justify-content: space-evenly;
    }

    #MAIN {
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    footer {
        position: sticky;
        height: 25px;
        width: 100%;
        bottom: 0;
        padding-bottom: 1%;

        color: rgba(255, 255, 255, 0.5);
        text-align: center;
    }
    .Time {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        height: 25%;
    }
    a {
        color: wheat;
    }
    p {
        text-align: center;
    }
    hr {
        border: 1px solid rgba(255, 255, 255, 0.25);
    }
    .flag {
        width: 100px;
        -webkit-user-drag: none;
    }
    #flag-japan {
        width: 90px;
    }
    .TimeDisplay {
        justify-content: flex-end;
    }
    svg {
        width: 30px;
    }
    .DayIndicator {
        color: yellow;
    }
    .NightIndicator {
        color: lightblue;
    }
    .User_indicator {
        display: none;
    }
    #settingsmenu {
        position: fixed;
        display: none;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.95);
    }
    .settings-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #settingsmenu-close {
        width: 5%;
        height: 5%;
        font-size: 1.5em;
    }
</style>
