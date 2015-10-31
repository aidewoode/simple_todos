<template lang='jade'>
  i.icon.icon--load.loader
</template>
<style>
  .loader {
    margin-left: auto;/* let loader float right */
    animation: load 1.5s infinite linear;
    align-self: center;
    color: #58b2dc;
  }

  @keyframes load {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
