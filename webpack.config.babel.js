import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export default {
  mode: "development",
  // devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    allowedHosts: [
      "0.0.0.0",
      "127.0.0.1",
      "localhost",
    ],
    open: true,
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  entry: `./src/index.tsx`,
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: [
          path.resolve(__dirname, "src"),
        ],
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
    ]
  },

  externals: [

  ],

  plugins: [
    new CleanWebpackPlugin({
      dry: false, // Simulate the removal of files
      verbose: false, // Write Logs to Console (Always enabled when dry is true)
      cleanStaleWebpackAssets: true, // Automatically remove all unused webpack assets on rebuild
      protectWebpackAssets: true, // Do not allow removal of current webpack assets

      // They are unsafe...so test initially with dry: true.
      // Relative to webpack's output.path directory.
      // If outside of webpack's output.path directory,
      //    use full path. path.join(process.cwd(), 'build/**/*')
      //
      // These options extend del's pattern matching API.
      // See https://github.com/sindresorhus/del#patterns
      //    for pattern matching documentation

      // Removes files once prior to Webpack compilation
      //   Not included in rebuilds (watch mode)
      //
      // Use !negative patterns to exclude files
      //
      // default: ['**/*']
      cleanOnceBeforeBuildPatterns: ['**/*'],
      // Removes files after every build (including watch mode) that match this pattern.
      // Used for files that are not created directly by Webpack.
      //
      // Use !negative patterns to exclude files
      //
      // default: []
      cleanAfterEveryBuildPatterns: [],
      // Allow clean patterns outside of process.cwd()
      //
      // requires dry option to be explicitly set
      //
      // default: false
      dangerouslyAllowCleanPatternsOutsideProject: false,
    }),
    new HtmlWebpackPlugin({
      template: `${path.resolve("src/html")}/index.html`,
    })
  ],
}
