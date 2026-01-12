<template lang="pug">
section.purchase
  ComponentTitle.purchase__title-component(:mark="false")
    template(#title) #[span.font-accent Commander] le lot Duo
    template(#content) #[span.font-bold Béneficier] de la #[span.font-bold couleur] pour #[span.font-bold plus de créativité !]
</template>

<style lang="sass" scoped>
.purchase
  margin-top: $phi3
</style>
