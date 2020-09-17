<template>
  <div id="app" scrolling="auto">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>

    <img alt="Honnyaku" id="logo" src="./assets/honnyaku.png" />
    <p>
      <a target="_blank" rel="noopener" href="https://nlp100.github.io/ja/"
        >言語処理100本ノック</a
      >の課題99.「<a
        target="_blank"
        rel="noopener"
        href="https://nlp100.github.io/ja/ch10.html"
        >翻訳サーバの構築</a
      >」で作成した翻訳サイトです．
    </p>
    <router-view />
    <honnyaku-footer></honnyaku-footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/earlyaccess/notosansjp.css");

body,
html {
  height: 100%;
}

body {
  margin: 0;
  font-family: Noto Sans JP, sans-serif;
}

div {
  background-color: whitesmoke;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#logo {
  max-width: 100%;
  max-height: 100%;
}
#nav {
  padding: 12px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #df5f6a;
}
</style>

<script>
import Footer from "./components/Footer.vue";
export default {
  components: {
    "honnyaku-footer": Footer
  }
};
</script>
