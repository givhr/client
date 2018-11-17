export const imports = {
  'src/components/Palette/Palette.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-palette-palette" */ 'src/components/Palette/Palette.mdx'),
}
