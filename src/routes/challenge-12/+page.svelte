<script lang="ts">
  import { goto } from '$app/navigation';
  import type { Option } from './options';
  import { getRandomRockPaperScissorsOption } from './options';

  const play = (option: Option) => {
    const computerOption = getRandomRockPaperScissorsOption();
    goto(`/challenge-12/winner?user=${option}&computer=${computerOption}`);
  };
</script>

<div class="container">
  <div class="wrapper">
    <h1>pick one</h1>
    <ul>
      <li class="pick-one">
        <button on:click={() => play('rock')}>
          <img src={'/challenge-12/rock.png'} alt="Rock" />
          rock
        </button>
      </li>

      <li class="pick-one">
        <button on:click={() => play('paper')}>
          <img src={'/challenge-12/paper.png'} alt="Paper" />
          paper
        </button>
      </li>

      <li class="pick-one">
        <button on:click={() => play('scissors')}>
          <img src={'/challenge-12/scissors.png'} alt="Scissors" />
          scissors
        </button>
      </li>
    </ul>
  </div>
</div>

<style>
  /*noinspection CssUnknownTarget*/
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap');

  :global(body) {
    margin: 0;
  }

  .container {
    min-width: 100vw;
    min-height: 100vh;
    font-family: 'Roboto Mono', monospace;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 75px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 75px;
  }

  li.pick-one {
    display: flex;
    text-align: center;
  }

  li.pick-one button {
    background: none;
    border: 2px solid black;
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    height: 355px;
    width: 325px;
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  li.pick-one button:hover {
    border: 10px solid #ffb800;
  }

  li.pick-one img {
    max-height: 250px;
    max-width: 250px;
  }
</style>
