<script lang="ts">
  import { goto } from '$app/navigation';
  import type { PageData } from './$types';
  import classNames from 'classnames';
  import type { Option } from '../options';
  import { optionToImageUrl } from '../options';

  export let data: PageData;
  const result = data.result as string;
  const userOption = data.user as Option;
  const computerOption = data.computer as Option;
  const userOptionImg = optionToImageUrl(userOption);
  const computerOptionImg = optionToImageUrl(computerOption);

  const navigateToOptionsPage = () => goto('/challenge-12');
</script>

<div
  class={classNames('container winner', {
    draw: result === 'draw',
    'you-win': result === 'user',
    'computer-wins': result === 'computer',
  })}
>
  <div class="wrapper">
    <div class="your-pick">
      <h1 class="you-win">you win</h1>

      <img src={userOptionImg} alt={userOption} />
    </div>

    <div class="computer-pick">
      <h1 class="computer-wins">computer wins</h1>

      <img src={computerOptionImg} alt={computerOption} />
    </div>

    <button class="play-again" on:click={navigateToOptionsPage}>play again?</button>
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

  /* Winner Page */
  .container.winner.you-win {
    background: url('/challenge-12/you-win.svg') left top no-repeat;
    background-size: auto 100%;
  }

  .container.winner.computer-wins {
    background: url('/challenge-12/computer-wins.svg') right top no-repeat;
    background-size: auto 100%;
  }

  .container.winner.draw h1.you-win,
  .container.winner.draw h1.computer-wins {
    visibility: hidden;
  }

  .container.computer-wins h1.you-win,
  .container.you-win h1.computer-wins {
    visibility: hidden;
  }

  .container.winner .wrapper {
    display: flex;
    gap: 200px;
    position: relative;
  }

  .container.winner img {
    mix-blend-mode: multiply;
  }

  .computer-pick img {
    transform: scaleX(-1);
  }

  .play-again {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    font-family: 'Roboto Mono', monospace;
    font-size: 2rem;
    border: 2px solid black;
    background: none;
    padding: 15px 85px;
    cursor: pointer;
  }

  .play-again:hover {
    background: black;
    color: white;
  }
</style>
