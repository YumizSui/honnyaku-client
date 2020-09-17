<template>
  <div class="translation">
    <div class="submit">
      <b-button
        @click="postTranslation()"
        class="submit-button"
        v-if="inputSentence !== ''"
        >translate it!</b-button
      >
      <b-button class="submit-button" v-else disabled>translate it!</b-button>
    </div>
    <div class="translation-form">
      <div class="selection">
        <b-dropdown class="selection-dropdown" :text="getLang(source)">
          <b-dropdown-item @click="(source = 'ja'), (target = 'en')"
            >日本語</b-dropdown-item
          >
          <b-dropdown-item @click="(source = 'en'), (target = 'ja')"
            >英語</b-dropdown-item
          >
        </b-dropdown>
      </div>
      <textarea
        class="translate-box"
        placeholder="翻訳したい文章を入れてください"
        v-model="inputSentence"
      >
      </textarea>
    </div>
    <div class="translation-form">
      <div class="selection">
        <b-dropdown class="selection-dropdown" :text="getLang(target)">
          <b-dropdown-item @click="(target = 'ja'), (source = 'en')"
            >日本語</b-dropdown-item
          >
          <b-dropdown-item @click="(target = 'en'), (source = 'ja')"
            >英語</b-dropdown-item
          >
        </b-dropdown>
      </div>
      <textarea
        class="translate-box"
        readonly
        v-model="outputSentence"
      ></textarea>
    </div>
  </div>
</template>

<style scoped>
.translation {
  position: relative;
  display: flex;
  padding: 10px 0;
  margin: 0;
}

.translation-form {
  position: relative;
  width: 100%;
  padding: 12px;
  margin: 0;
  display: block;
}

.selection {
  color: black;
  margin: 50px 0 8px;
}

.selection-dropdown {
  margin: 0px;
  width: 60%;
}
.submit {
  position: absolute;
  margin: 0;
  padding: 0;
  top: 36px;
  left: calc(50% - 60px);
  z-index: 1;
}
.submit-button {
  color: white;
  border: none;
  position: absolute;
  margin: 0;
  width: 120px;
  height: 50px;
}
.submit-button,
.submit-button:not(.disabled):hover,
.submit-button:not(.disabled):focus {
  background: #df5f6a;
  color: white;
}
.submit-button:active {
  background: #a92d3f !important;
}
.translate-box {
  resize: none;
  margin: 0;
  min-height: 400px;
  height: 400px;
  width: 100%;
  border: none;
  font-size: 20px;
}
.translate-box[readonly] {
  border: none;
  outline: none;
}

@media screen and (max-width: 767px) {
  .translation {
    flex-direction: column;
  }
  .submit {
    top: calc(50% + 8px);
    left: calc(50% - 90px);
  }
  .submit-button {
    width: 180px;
    height: 30px;
  }
}
</style>

<script>
import axios from "axios";
export default {
  name: "hoge",
  data() {
    return {
      source: "ja",
      target: "en",
      inputSentence: "",
      outputSentence: ""
    };
  },
  methods: {
    getLang(lang) {
      if (lang === "ja") {
        return "日本語";
      }
      return "英語";
    },
    postTranslation() {
      axios
        .post("/api/translation", {
          source: this.source,
          target: this.target,
          input: this.inputSentence
        })
        .then(res => {
          this.outputSentence = res.data.output;
        })
        .catch(error => {
          // handle error
          console.log(error);
          window.alert("翻訳できませんでした(｡•́︿•̀｡)\n" + error);
        });
    }
  }
};
</script>
