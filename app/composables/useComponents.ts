import type { KnownComponent, ComponentsMap } from "~/assets/types/types.d.ts"

export function useComponents(blocks: any) {
  const components: ComponentsMap = {};

  for (const element of blocks.value) {
    const { component_type, ...rest } = element;
    components[component_type as KnownComponent] = rest;
  }

  return components;
}
