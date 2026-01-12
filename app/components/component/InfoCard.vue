<template lang="pug">
div.info-card-component
  h3.info-card-component__title
    slot(name="title")
  p.info-card-component__content
    slot(name="content")
</template>

<style lang="sass" scoped>
.info-card-component
  text-align: center

  &--number::before
    content: ''

  &__title
    margin-block: 0
    font-size: $phi2
    
  &__title::after
    content: ''
    display: block
    margin-inline: auto
    margin-top: $phi-1
    width: $phi3
    height: 6px
    background-color: $accent2

  &__content
    margin-block: $phi-1 0
    font-style: italic
</style>
