export function useComponents(blocks: any) {
  const components: { [K in KnownComponent]?: object } = {};

  for (const element of blocks.value) {
    const { component_type, ...rest } = element;
    const key = component_type as KnownComponent;

    if (!(key in components)) {
      components[key] = rest;
    } else {
      const current = components[key];

      if (!Array.isArray(current)) {
        components[key] = [current as object, rest];
      } else {
        (components[key] as any[]).push(rest);
      }
    }
  }

  return components;
}
