<script lang="js">
    const options = {
        weekday: "short",
        hours: "2-digit",
        minutes: "2-digit",
        seconds: "2-digit",
    };
    let DateVar = new Date();
    // const timezoneClient = Intl.DateTimeFormat().resolvedOptions().timeZone
    const timezonede = "Europe/Berlin";
    const timezonejp = "Asia/Tokyo";
    const timezoneca = "America/Toronto";
    const timezoneNY = "America/New_York";
    const timezoneLA = "America/Los_Angeles";
    const timezonefr = "Europe/Paris";
    const timezonech = "Asia/Shanghai";
    const timezoneen = "Europe/London";

    let timeca = $state(
        DateVar.toLocaleTimeString(undefined, {
            timeZone: timezoneca,
            options: options,
        }),
    );
</script>

<main class="bg-[rgb(33, 33, 33)]">
    <nav>
        <div class="nav-sector">
            <svg
                class="nav-icons"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path
                    d="M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2V2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4h4z"
                    fill="currentColor"
                />
            </svg>
            <a href="/" target="_top">Back to home</a>
        </div>
        <div class="nav-sector">
            <svg
                class="nav-icons"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z"
                /></svg
            >
            <a
                href="https://github.com/hactuss/hactuss.github.io/tree/main/pages/office"
                >source code</a
            >
        </div>
        <div class="nav-sector">
            <svg
                class="nav-icons"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path
                    d="M17 4h2v10h-2V4zm0 12h-2v2h2v2h2v-2h2v-2h-4zm-4-6h-2v10h2V10zm-8 2H3v2h2v6h2v-6h2v-2H5zm8-8h-2v2H9v2h6V6h-2V4zM5 4h2v6H5V4z"
                    fill="currentColor"
                />
            </svg>
            <a href="/">settings</a>
        </div>
    </nav>
    <header id="header" aria-hidden="true">
        <div class="Time Germany">
            <div class="DaylightIndicatorMaster">
                <div class="User_indicator DayIndicator" id="Germany-Day">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z"
                        />
                    </svg>
                </div>
                <div class="User_indicator NightIndicator" id="Germany-Night">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M20 0h2v2h2v2h-2v2h-2V4h-2V2h2V0ZM8 4h8v2h-2v2h-2V6H8V4ZM6 8V6h2v2H6Zm0 8H4V8h2v8Zm2 2H6v-2h2v2Zm8 0v2H8v-2h8Zm2-2v2h-2v-2h2Zm-2-4v-2h2V8h2v8h-2v-4h-2Zm-4 0h4v2h-4v-2Zm0 0V8h-2v4h2Zm-8 6H2v2H0v2h2v2h2v-2h2v-2H4v-2Z"
                        />
                    </svg>
                </div>
            </div>
            <p>Berlin, Germany</p>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
                alt="Germany-flag"
                class="flag"
            />
            <h2 id="CurrentTimeGermany" class="TimeDisplay">germany</h2>
        </div>
        <div class="Time Japan">
            <div class="DaylightIndicatorMaster">
                <div class="User_indicator DayIndicator" id="Japan-Day">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z"
                        />
                    </svg>
                </div>
                <div class="User_indicator NightIndicator" id="Japan-Night">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M20 0h2v2h2v2h-2v2h-2V4h-2V2h2V0ZM8 4h8v2h-2v2h-2V6H8V4ZM6 8V6h2v2H6Zm0 8H4V8h2v8Zm2 2H6v-2h2v2Zm8 0v2H8v-2h8Zm2-2v2h-2v-2h2Zm-2-4v-2h2V8h2v8h-2v-4h-2Zm-4 0h4v2h-4v-2Zm0 0V8h-2v4h2Zm-8 6H2v2H0v2h2v2h2v-2h2v-2H4v-2Z"
                        />
                    </svg>
                </div>
            </div>
            <p>Tokyo, Japan</p>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg"
                alt="Japan-flag"
                class="flag"
                id="flag-japan"
            />
            <h2 id="CurrentTimeJapan" class="TimeDisplay">Japan</h2>
        </div>
        <div class="Time London">
            <div class="DaylightIndicatorMaster">
                <div class="User_indicator DayIndicator" id="London-Day">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z"
                        />
                    </svg>
                </div>
                <div class="User_indicator NightIndicator" id="London-Night">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M20 0h2v2h2v2h-2v2h-2V4h-2V2h2V0ZM8 4h8v2h-2v2h-2V6H8V4ZM6 8V6h2v2H6Zm0 8H4V8h2v8Zm2 2H6v-2h2v2Zm8 0v2H8v-2h8Zm2-2v2h-2v-2h2Zm-2-4v-2h2V8h2v8h-2v-4h-2Zm-4 0h4v2h-4v-2Zm0 0V8h-2v4h2Zm-8 6H2v2H0v2h2v2h2v-2h2v-2H4v-2Z"
                        />
                    </svg>
                </div>
            </div>
            <p>London, England</p>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg"
                alt=""
                class="flag"
                id="flag-england"
            />
            <h2 id="CurrentTimeEngland" class="TimeDisplay">England</h2>
        </div>
        <div class="Time Canada">
            <div class="User_indicator DayIndicator" id="Canada-Day">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z"
                    />
                </svg>
            </div>
            <div class="User_indicator NightIndicator" id="Canada-Night">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M20 0h2v2h2v2h-2v2h-2V4h-2V2h2V0ZM8 4h8v2h-2v2h-2V6H8V4ZM6 8V6h2v2H6Zm0 8H4V8h2v8Zm2 2H6v-2h2v2Zm8 0v2H8v-2h8Zm2-2v2h-2v-2h2Zm-2-4v-2h2V8h2v8h-2v-4h-2Zm-4 0h4v2h-4v-2Zm0 0V8h-2v4h2Zm-8 6H2v2H0v2h2v2h2v-2h2v-2H4v-2Z"
                    />
                </svg>
            </div>
            <p>Toronto, Canada</p>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
                alt="Canada"
                class="flag"
                id="flag-canada"
            />
            <h2 id="CurrentTimeCanada" class="TimeDisplay">{timeca}</h2>
        </div>
        <div class="Time NYC">
            <div class="User_indicator DayIndicator" id="NYC-Day">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z"
                    />
                </svg>
            </div>
            <div class="User_indicator NightIndicator" id="NYC-Night">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M20 0h2v2h2v2h-2v2h-2V4h-2V2h2V0ZM8 4h8v2h-2v2h-2V6H8V4ZM6 8V6h2v2H6Zm0 8H4V8h2v8Zm2 2H6v-2h2v2Zm8 0v2H8v-2h8Zm2-2v2h-2v-2h2Zm-2-4v-2h2V8h2v8h-2v-4h-2Zm-4 0h4v2h-4v-2Zm0 0V8h-2v4h2Zm-8 6H2v2H0v2h2v2h2v-2h2v-2H4v-2Z"
                    />
                </svg>
            </div>
            <p>New York, USA</p>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_New_York_City.svg"
                alt=""
                class="flag"
                id="flag-NYC"
            />
            <h2 id="CurrentTimeNYC" class="TimeDisplay">New York City</h2>
        </div>
        <div class="Time Los_Angeles">
            <div class="User_indicator DayIndicator" id="Los-Angeles-Day">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z"
                    />
                </svg>
            </div>
            <div class="User_indicator NightIndicator" id="Los-Angeles-Night">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M20 0h2v2h2v2h-2v2h-2V4h-2V2h2V0ZM8 4h8v2h-2v2h-2V6H8V4ZM6 8V6h2v2H6Zm0 8H4V8h2v8Zm2 2H6v-2h2v2Zm8 0v2H8v-2h8Zm2-2v2h-2v-2h2Zm-2-4v-2h2V8h2v8h-2v-4h-2Zm-4 0h4v2h-4v-2Zm0 0V8h-2v4h2Zm-8 6H2v2H0v2h2v2h2v-2h2v-2H4v-2Z"
                    />
                </svg>
            </div>
            <p>Los Angeles, USA</p>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Los_Angeles%2C_California.svg"
                alt="LA"
                class="flag"
                id="flag-LA"
            />
            <h2 id="CurrentTimeLA" class="TimeDisplay">LA</h2>
        </div>
        <!--      <div class="Time Philadelphia">-->
        <!--        <p>Philadelphia, USA</p>-->
        <!--        <img-->
        <!--                src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Flag_of_Philadelphia%2C_Pennsylvania.svg"-->
        <!--                alt="Philadelphia"-->
        <!--                class="flag"-->
        <!--                id="flag-Philadelphia"-->
        <!--        />-->
        <!--        <h2 id="CurrentTimePhiladelphia" class="TimeDisplay"></h2>-->
        <!--      </div>-->
        <div class="Time Paris">
            <div class="User_indicator DayIndicator" id="Paris-Day">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z"
                    />
                </svg>
            </div>
            <div class="User_indicator NightIndicator" id="Paris-Night">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M20 0h2v2h2v2h-2v2h-2V4h-2V2h2V0ZM8 4h8v2h-2v2h-2V6H8V4ZM6 8V6h2v2H6Zm0 8H4V8h2v8Zm2 2H6v-2h2v2Zm8 0v2H8v-2h8Zm2-2v2h-2v-2h2Zm-2-4v-2h2V8h2v8h-2v-4h-2Zm-4 0h4v2h-4v-2Zm0 0V8h-2v4h2Zm-8 6H2v2H0v2h2v2h2v-2h2v-2H4v-2Z"
                    />
                </svg>
            </div>
            <p>Paris, France</p>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
                alt=""
                class="flag"
                id="flag-france"
            />
            <h2 id="CurrentTimeParis" class="TimeDisplay">France</h2>
        </div>
        <div class="Time Shanghai">
            <div class="DaylightIndicatorMaster">
                <div class="User_indicator DayIndicator" id="Shanghai-Day">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z"
                        />
                    </svg>
                </div>
                <div class="User_indicator NightIndicator" id="Shanghai-Night">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M20 0h2v2h2v2h-2v2h-2V4h-2V2h2V0ZM8 4h8v2h-2v2h-2V6H8V4ZM6 8V6h2v2H6Zm0 8H4V8h2v8Zm2 2H6v-2h2v2Zm8 0v2H8v-2h8Zm2-2v2h-2v-2h2Zm-2-4v-2h2V8h2v8h-2v-4h-2Zm-4 0h4v2h-4v-2Zm0 0V8h-2v4h2Zm-8 6H2v2H0v2h2v2h2v-2h2v-2H4v-2Z"
                        />
                    </svg>
                </div>
            </div>
            <p>Shanghai, China</p>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"
                alt=""
                class="flag"
                id="flag-china"
            />
            <h2 id="CurrentTimeShanghai" class="TimeDisplay">China</h2>
        </div>
    </header>
    <main>
        <!--      <hr>-->
        <!--      <a href="javascript:toggle_Indicator()">Toggle Daylight Indicator</a>-->
        <hr />
        <a href="./obs-overlay">OBS overlay</a>
    </main>
    <footer>
        Made with fun by <a href="https://hactuss-website.vercel.app">hactuss</a>
    </footer>
    <div id="settingsmenu">
        <div class="settings-container">
            <div id="dayformat">
                <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM5 8h14V6H5v2zm0 2v10h14V10H5z"
                        fill="currentColor"
                    />
                </svg>
                <p>Dayformat</p>
            </div>

            <button id="settingsmenu-close">&times;</button>
        </div>
    </div>
</main>

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
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .nav-icons {
        width: 23px;
        color: wheat;
    }
    .nav-sector {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    main {
        text-align: center;
        margin-bottom: 2.5%;
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
    @media screen and (max-width: 500px) {
        header {
            flex-direction: column;
            margin-top: 10%;
        }
        nav {
            text-align: center;
        }
        .nav-sector {
            width: 100%;
            background-color: rgba(255, 255, 255, 0.05);
            margin: 5px;
            padding: 2%;
            border: solid transparent;
            border-radius: 10px;
        }
        .nav-sector:hover {
            background-color: rgba(255, 255, 255, 0.15);
            transition: background-color;
        }
        .nav-sector:active {
            background-color: rgba(255, 255, 255, 0.25);
            transition: background-color;
        }
        .Time {
            background-color: rgba(255, 255, 255, 0.05);
            margin: 5%;
            padding: 5%;
            border: solid transparent;
            border-radius: 25px;
        }
    }
</style>
