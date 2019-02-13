# vue-hopsa

SVG Clipping transitions for vue components

[![npm (scoped with tag)](https://img.shields.io/npm/v/vue-hopsa/latest.svg?style=flat-square)](https://npmjs.com/package/vue-hopsa)
[![npm](https://img.shields.io/npm/dt/vue-hopsa.svg?style=flat-square)](https://npmjs.com/package/vue-hopsa)
[![Dependencies](https://david-dm.org/schlunsen/vue-hopsa/status.svg?style=flat-square)](https://david-dm.org/schlunsen/vue-hopsa)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

## Usage

```
<template>
    <div>
        <hopsa :delay="1000" :animation="animation">
            <template v-slot:content>
            <!-- CONTENT HERE -->
            </template>
        </hopsa>
    </div>
</template>

import { Hopsa, CircleAnimation } from "vue-hopsa";

// or 
Vue.use(Hopsa)

export default {
  components: {
    Hopsa
  },
  data: () => ({
      animation: CircleAnimation
  })
  ...
}

```

