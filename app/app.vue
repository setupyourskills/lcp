<template lang="pug">
NuxtRouteAnnouncer

NuxtLayout
  NuxtPage
</template>

<style lang="sass">
html
  font-size: 14px
  background-color: grey

.modal-view
  overflow: hidden

.v-enter-active,
.v-leave-active
  transition: opacity 0.2s ease

.v-enter-from,
.v-leave-to
  opacity: 0
</style>
