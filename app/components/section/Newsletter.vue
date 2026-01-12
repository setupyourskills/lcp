<template lang="pug">
section.newsletter
  ComponentTitle.newsletter__title-component(:mark="false")
    template(#title) Rejoignez #[span.font-accent la newsletter]
    template(#content) #[span.font-bold Recevez] les dernières #[span.font-bold nouvelles] pour #[span.font-bold rester toujours informé !]
</template>

<style lang="sass" scoped>
.newsletter
  margin-top: $phi2
</style>
