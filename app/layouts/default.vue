<template lang="pug">
div.test
  main.main-content
    <slot />
    SectionFooter
</template>

<style lang="sass">
.main-content
  margin-inline: auto
  max-width: 1280px
  background-color: $background-color
</style>
