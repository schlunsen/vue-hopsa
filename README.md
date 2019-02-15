# Hopsa

** UNDER CONSTRUCTION **

SVG Clipping transitions for vue components

[![npm (scoped with tag)](https://img.shields.io/npm/v/vue-hopsa/latest.svg?style=flat-square)](https://npmjs.com/package/vue-hopsa)
[![npm](https://img.shields.io/npm/dt/vue-hopsa.svg?style=flat-square)](https://npmjs.com/package/vue-hopsa)
[![Dependencies](https://david-dm.org/schlunsen/vue-hopsa/status.svg?style=flat-square)](https://david-dm.org/schlunsen/vue-hopsa)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

## Usage

```
<template>
    <div>
        <!-- Wrap your component with Hopsa -->
        <hopsa :animation="'circle'" :options="options">
            <template v-slot:content>
            
            <!-- CONTENT HERE -->
            <my-awesome-component></my-awesome-component>

            </template>
        </hopsa>
    </div>
</template>
import Hopsa from 'vue-hopsa' 
import MyAwesomeComponent from 'my/aweseome/path'

// Install plugin 
Vue.use(Hopsa)

export default {
  data: () => ({
      options: {
        duration: 1000,
        radius: 2000,
        delay: 1000,
        onComplete: () => {},
        
      }
  }),
  components: {
    MyAwesomeComponent
  }
  ...
}

```

## Animations

* Circle
* Box

## Custom animations

Animation can easily be created by extending BaseAnimation class for use with hopsa component.

Hopsa uses svg.js 

You can add svg elements to this.hopsa.clip

```
class MyAwesomeAnimation extends BaseAnimation {
  init() {
    
    this.circle = this.hopsaInstance.draw.circle(0).move(this.hopsaInstance.contentWidth / 2.5, this.hopsaInstance.contentHeight / 2).fill("#fff");
    this.hopsa.clip.add(this.circle);

  }

}



}
