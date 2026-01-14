<template lang="pug">
main.main-content
  <slot />
  SectionFooter
</template>

<style lang="sass">
.main-content
  position: relative
  margin-inline: auto
  font-family: "Source Sans 3"
  font-size: $phi1
  line-height: 1.5
  background-color: $background-color
</style>
