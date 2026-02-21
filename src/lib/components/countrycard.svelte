<script>
    let data = $props();
</script>

<!-- --
<div class="Time {data.name}">
	<div class="DaylightIndicator
	ster">
		<div class="User_indicator DayIndicator" id="Japan-Day">
			<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
				<path
					d="M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z"
				/>
			</svg>
		</div>

		<div class="User_indicator NightIndicator" id="Japan-Night">
			<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
				<path
					d="M20 0h2v2h2v2h-2v2h-2V4h-2V2h2V0ZM8 4h8v2h-2v2h-2V6H8V4ZM6 8V6h2v2H6Zm0 8H4V8h2v8Zm2 2H6v-2h2v2Zm8 0v2H8v-2h8Zm2-2v2h-2v-2h2Zm-2-4v-2h2V8h2v8h-2v-4h-2Zm-4 0h4v2h-4v-2Zm0 0V8h-2v4h2Zm-8 6H2v2H0v2h2v2h2v-2h2v-2H4v-2Z"
				/>
			</svg>
		</div>
	</div>
	<p>{data.location}</p>
	<img
		src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg"
		alt="{data.name}-flag"
		class="flag"
		id="flag-{data.name}"
	/>
	<h2 id="CurrentTime{data.name}" class="TimeDisplay">{data.name}</h2>
</div>
-->
<div id="border" class="Time">
    <!-- --
    <div>
        {#if 21 >= data.time}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    d="M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z"
                />
            </svg>
        {:else if 6 <= data.time}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    d="M20 0h2v2h2v2h-2v2h-2V4h-2V2h2V0ZM8 4h8v2h-2v2h-2V6H8V4ZM6 8V6h2v2H6Zm0 8H4V8h2v8Zm2 2H6v-2h2v2Zm8 0v2H8v-2h8Zm2-2v2h-2v-2h2Zm-2-4v-2h2V8h2v8h-2v-4h-2Zm-4 0h4v2h-4v-2Zm0 0V8h-2v4h2Zm-8 6H2v2H0v2h2v2h2v-2h2v-2H4v-2Z"
                />
            </svg>
        {/if}
    </div>
    -->
    <div id="flag-container">
        <img
            src={data.flag}
            alt="{data.name}-flag"
            class="flag"
            id="flag-{data.name}"
        />
    </div>
    <p>{data.location}</p>
    <div>
        <p>{data.time}</p>
    </div>
</div>

<style>
    .Time {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        width: auto;
        margin: 1%;
    }

    p {
        text-align: center;
    }

    .flag {
        width: 100px;
        -webkit-user-drag: none;
    }
    #flag-container {
        height: 100%;
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
