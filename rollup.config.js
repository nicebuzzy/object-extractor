
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'es'
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'extract',
    }
  ]
}