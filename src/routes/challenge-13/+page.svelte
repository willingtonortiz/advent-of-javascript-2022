<script lang="ts">
  let isOverlayOpen = false;
  const openOverlay = () => (isOverlayOpen = true);
  const closeOverlay = () => (isOverlayOpen = false);
</script>

<div class="wrapper">
  <svg
    viewBox="0 0 1440 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <image href="/challenge-13/bg.jpg" width="1440" height="1024" />

    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" on:click={openOverlay}>
      <circle class="dot" cx="136.5" cy="113.5" r="17.5" id="elgato-keylight" />

      <circle
        id="my-circle"
        cx="136.5"
        cy="113.5"
        r="22"
        stroke="#F41E82"
        stroke-width="6px"
        opacity="0"
      />
    </a>
  </svg>

  {#if isOverlayOpen}
    <div class="overlay">
      <div class="modal">
        <button class="close" on:click={closeOverlay}>
          <img src="challenge-13/close.svg" alt="Close" />
        </button>

        <div class="content">
          <h1>Elgato Key Lights</h1>

          <div class="description">
            <p>These lights are great if you shoot video at your desk.</p>
            <p>
              My desk is pushed up against the wall, so I didn’t have room for a large soft box.
              These lights still deliver on the look that I wanted. Plus, it comes with a desktop
              app where you can adjust the brightness and temperature.
            </p>
          </div>

          <a href="http://amazon.com" class="buy-now" rel="noreferrer" target="_blank">
            BUY NOW for $169.99
          </a>
        </div>

        <div class="product-image">
          <img src="/challenge-13/elgato-key-light.png" alt="Elgato Key Light" />
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Roboto:wght@400;700&display=swap');

  :root {
    --pink: #f41e82;
    --gold: #ffd200;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    min-width: 100vw;
    min-height: 100vh;
    background: black;
    font-family: 'Roboto', sans-serif;
  }

  .wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    max-height: 100%;
    max-width: 100%;
  }

  svg circle.dot {
    fill: var(--pink);
    position: relative;
  }

  a:hover #my-circle {
    animation-name: beacon;
    animation-iteration-count: infinite;
    animation-duration: 1s;
    animation-timing-function: ease;
  }

  @keyframes beacon {
    0% {
      r: 22;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      r: 50;
      opacity: 0;
    }
  }

  .overlay {
    backdrop-filter: blur(45px);
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: white;
    box-shadow: 0px 0px 110px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    width: 60%;
    padding: 75px 95px;
    display: flex;
    gap: 100px;
    position: relative;
  }

  .product-image,
  .content {
    flex: 1;
  }

  .close {
    position: absolute;
    background: none;
    border: none;
    top: 25px;
    right: 25px;
    cursor: pointer;
  }

  h1 {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    color: var(--pink);
    font-size: 8rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    padding: 0;
    margin: 0 0 50px;
    line-height: 0.9;
  }

  .description {
    margin-bottom: 50px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.125rem;
    line-height: 1.5;
  }

  .buy-now {
    background-color: var(--gold);
    color: black;
    border-radius: 100px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
    padding: 20px 50px;
    text-decoration: none;
  }

  .buy-now:hover {
    background-color: #3452a5;
    color: var(--gold);
  }
</style>
