<template lang="pug">
section.newsletter
  ComponentTitle(:mark="false")
    template(#title) Rejoignez #[span.font-accent la newsletter]
    template(#content) #[span.font-bold Recevez] les dernières #[span.font-bold nouvelles] pour #[span.font-bold rester toujours informé !]
</template>
