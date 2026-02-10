import type { KnownComponent } from "~/assets/types/types.d.ts"
import type { SectionFullRow } from '~/assets/types/interfaces.d.ts';

export function useComponents<T extends readonly KnownComponent[]>(
  blocks: Ref<SectionFullRow[] | undefined>,
  types: T
) {
  const result = {} as { [K in T[number]]: ComputedRef<SectionFullRow | undefined> };

  for (const type of types) {
    (result as any)[type] = computed(() =>
      blocks.value?.find(b => b.component_type === type)
    );
  }

  return result;
}
