<script lang="ts">
  import { goto } from '$app/navigation';
  import classNames from 'classnames';

  type Challenge = {
    name: string;
    path: string;
    isCompleted: boolean;
  };

  const challenges: Challenge[] = [
    { isCompleted: false, name: 'Challenge 01', path: '/challenge-01' },
    { isCompleted: false, name: 'Challenge 02', path: '/challenge-02' },
    { isCompleted: false, name: 'Challenge 03', path: '/challenge-03' },
    { isCompleted: false, name: 'Challenge 04', path: '/challenge-04' },
    { isCompleted: false, name: 'Challenge 05', path: '/challenge-05' },
    { isCompleted: false, name: 'Challenge 06', path: '/challenge-06' },
    { isCompleted: false, name: 'Challenge 07', path: '/challenge-07' },
    { isCompleted: false, name: 'Challenge 08', path: '/challenge-08' },
    { isCompleted: false, name: 'Challenge 09', path: '/challenge-09' },
    { isCompleted: false, name: 'Challenge 10', path: '/challenge-10' },
    { isCompleted: false, name: 'Challenge 11', path: '/challenge-11' },
    { isCompleted: true, name: 'Challenge 12', path: '/challenge-12' },
    { isCompleted: true, name: 'Challenge 13', path: '/challenge-13' },
    { isCompleted: false, name: 'Challenge 14', path: '/challenge-14' },
    { isCompleted: false, name: 'Challenge 15', path: '/challenge-15' },
    { isCompleted: false, name: 'Challenge 16', path: '/challenge-16' },
    { isCompleted: false, name: 'Challenge 17', path: '/challenge-17' },
    { isCompleted: false, name: 'Challenge 18', path: '/challenge-18' },
    { isCompleted: false, name: 'Challenge 19', path: '/challenge-19' },
    { isCompleted: false, name: 'Challenge 20', path: '/challenge-20' },
    { isCompleted: false, name: 'Challenge 21', path: '/challenge-21' },
    { isCompleted: false, name: 'Challenge 22', path: '/challenge-22' },
    { isCompleted: false, name: 'Challenge 23', path: '/challenge-23' },
    { isCompleted: false, name: 'Challenge 24', path: '/challenge-24' },
    { isCompleted: false, name: 'Challenge 25', path: '/challenge-25' },
  ];

  const goToChallenge = ({ path, isCompleted }: Challenge) => {
    if (isCompleted) {
      goto(path);
    }
  };
</script>

<h1>Advent Of Javascript 2022</h1>

<div class="challenges">
  {#each challenges as challenge}
    <button
      on:click={() => goToChallenge(challenge)}
      aria-disabled="true"
      class={classNames('challenge', { completed: challenge.isCompleted })}
    >
      {challenge.name}
    </button>
  {/each}
</div>

<style lang="postcss">
  * {
    font-family: Consolas, monospace;
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .challenges {
    max-width: 720px;
    margin: auto;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1rem;

    & .challenge {
      width: 160px;
      font-size: 18px;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      background-color: tomato;
      border: none;
      color: white;
      cursor: not-allowed;
      text-decoration: none;

      &.completed {
        background-color: mediumseagreen;
        cursor: pointer;
      }
    }
  }
</style>
