<script lang="ts">
	import Countrycard from '$lib/components/countrycard.svelte';
	console.log("https://en.wikipedia.org/wiki/List_of_UTC_offsets");
	const flaglist = [
		'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg',
		'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg',
		'https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg',
		'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',
		'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_New_York_City.svg',
		'https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Los_Angeles%2C_California.svg',
		'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg',
		'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		'https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Hawaii.svg'
	];
	console.log(flaglist.length - 1);
	const options = {
		weekday: 'short',
		hours: '2-digit',
		minutes: '2-digit',
		seconds: '2-digit'
	};
	let DateVar = new Date();
	// const timezoneClient = Intl.DateTimeFormat().resolvedOptions().timeZone
	const timezonede = 'Europe/Berlin';
	const timezonejp = 'Asia/Tokyo';
	const timezoneca = 'America/Toronto';
	const timezoneNY = 'America/New_York';
	const timezoneLA = 'America/Los_Angeles';
	const timezonefr = 'Europe/Paris';
	const timezonech = 'Asia/Shanghai';
	const timezoneen = 'Europe/London';

	/*$effect(() => {
		setInterval(() => {
			return (
				console.log(
					DateVar.toLocaleTimeString(undefined, {
						timeZone: timezonede,
						options: options
					})
				),
				2000
			);
		});
	});*/

	let testdate = $state(
		DateVar.toLocaleTimeString(undefined, {
			timeZone: timezonede,
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		})
	);
	testdate = DateVar.toLocaleTimeString(undefined, {
		timeZone: timezonede,
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	});

	let utchours = DateVar.getUTCHours();
	let showseconds = $state(false);

	function setUTCTimeold(offset: string, number: number) {
		if ((showseconds = true)) {
			switch (offset) {
				case '+':
					return (
						utchours +
						number +
						':' +
						DateVar.getUTCMinutes() +
						':' +
						DateVar.getUTCSeconds()
					);
					break;
				case '-':
					return (
						utchours -
						number +
						':' +
						DateVar.getUTCMinutes() +
						':' +
						DateVar.getUTCSeconds()
					);
					break;
			}
		} else {
			switch (offset) {
				case '+':
					return utchours + number + ':' + DateVar.getUTCMinutes();
					break;
				case '-':
					return utchours - number + ':' + DateVar.getUTCMinutes();
					break;
			}
		}
	}
	function setUTCTime(offset: string, number: number) {
		switch (offset) {
			case '+':
				return utchours + number + ':' + DateVar.getUTCMinutes();
				break;
			case '-':
				return utchours - number + ':' + DateVar.getUTCMinutes();
				break;
		}
	}

	const de = setUTCTime('+', 1),
		jp = setUTCTime('+', 9),
		en = setUTCTime('+', 0),
		ca = setUTCTime('-', 5),
		ny = setUTCTime('-', 5),
		la = setUTCTime('-', 8),
		fr = setUTCTime('+', 1),
		ch = setUTCTime('+', 8),
		hw = setUTCTime('-', 10);
</script>

<main id="MAIN">
	<Countrycard name="germany" time={de} location="Berlin, Germany" flag={flaglist[0]} />
	<Countrycard name="japan" time={jp} location="Tokyo, Japan" flag={flaglist[1]} />
	<Countrycard name="england" time={en} location="London, England" flag={flaglist[2]} />
	<Countrycard name="canada" time={ca} location="torronto, Canada" flag={flaglist[3]} />
	<Countrycard name="new york" time={ny} location="New York, USA" flag={flaglist[4]} />
	<Countrycard name="los angeles" time={la} location="Los Angeles, USA" flag={flaglist[5]} />
	<Countrycard name="france" time={fr} location="Paris, France" flag={flaglist[6]} />
	<Countrycard name="china" time={ch} location="Shanghai, China" flag={flaglist[7]} />
	<Countrycard name="china" time={hw} location="Honolulu, Hawaii" flag={flaglist[8]} />
</main>

<hr />
<!--<a href="./obs-overlay">OBS overlay</a>-->

<footer>
	°°° <a href="https://hactuss-website.vercel.app">Made with fun by hactuss</a> °°°
	<a href="https://github.com/hactuss/office-haj">source code</a> °°°
	<span style:color="rgb(255 0 0 )" style:opacity="0.50"
		>&#9888; Clock does not update in real time!</span
	> °°°
</footer>

<style>
	:root {
		font-family:
			Reddit Sans,
			'Goldman',
			Reddit Mono,
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
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
