<script>
	import Card from "./modules/card/Card.svelte";
	import InputWrapper from "./modules/input-wrapper/InputWrapper.svelte";
	import Btn from "./modules/btn/Btn.svelte";

	let lastWord = null;
	let wasPyramid = false;

	let word = "";
	const evaluateWord = () => {
		fetch(`/api/pyramid?q=${word}`)
		.then((response) => {
			return response.json();
		})
		.then((body) => {
			lastWord = word;
			wasPyramid = body.isPyramid;
		})
	};
</script>

<div class="container">
	<div class="wrapper">
		<Card>
			<InputWrapper label="Word">
				<input type="text" placeholder="Enter a potential pyramid word" bind:value={word} value="{word}">
			</InputWrapper>

			<div class="actions">
				<div class="clear">
					<Btn on:click={() => word = ""}>
						Clear
					</Btn>
				</div>
				<div class="evaluate">
					<Btn on:click={evaluateWord}>
						Evaluate
					</Btn>
				</div>
			</div>
		</Card>

		{#if lastWord !== null}
		<Card>
			<span>
				<strong>{lastWord}</strong> is {wasPyramid ? 'a' : 'not a'} pyramid word!
			</span>
		</Card>
		{/if}
	</div>
</div>

<style type="text/scss">
	@import "styles/_colors.scss";

	.container {
		display: flex;
		height: 100%;
		width: 100%;
		justify-content: center;
		padding-top: 3rem;
		background-color: $tertiary;
	}

	.wrapper {
		display: flex;
		max-width: 800px;
		flex-direction: column;

		:global(> *) {
			margin-bottom: 1rem;
		}
	}

	.actions {
		display: flex;
		justify-content: flex-end;

		:global(> *) {
			margin-left: 1em;
		}

		.evaluate {
			color: $primary;
		}

		.clear {
			color: #999999;
		}
	}
</style>