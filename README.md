# vactory-tailwind
Vactory UI using Tailwindcss

## Usage

Add the library to your react app (or create a new one):

```
yarn create react-app my-app
cd my-app
yarn add vactory-ui
yarn start
```
Import the stylesheet in your `App.js`:

```patch
  import logo from './logo.svg';
  import './App.css';
+ import "vactory-ui/styles.css"
  
  function App() {
    return (
      <div className="App" />     
```

Enjoy a bunch of beautiful and ready to use components :)


```patch
  import logo from './logo.svg';
  import './App.css';
  import "vactory-ui/styles.css";
+ import Toolbox from "vactory-ui/Toolbox";
+ import Banners from "vactory-ui/Banners";

  function App() {
    return (
      <div className="App">
+       <Toolbox.Sliding />
+       <Banners.Floating />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
```

For the list of the available components: 
[vactory-tailwind-ui.netlify.app](https://vactory-tailwind-ui.netlify.app/) 
and [github.com/voidagency/vactory-tailwind](https://github.com/voidagency/vactory-tailwind/tree/master/src/components)

