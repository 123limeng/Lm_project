<template>
  <editor id='tinymce' v-model='tinymceHtml' :init='init'></editor>
</template>
<script>
import tinymce from 'tinymce/tinymce'
// import 'tinymce/themes/modern/theme'
import 'tinymce/themes/silver/theme'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/wordcount'
export default {
  name: 'Tinymce',
  data () {
    return {
      tinymceHtml: '',
      init: {
        language_url: '/static/tinymce/zh_CN.js',
        language: 'zh_CN',
        // skin_url: '/static/tinymce/skins/lightgray',
        skin_url: '/static/tinymce/skins/ui/oxide',
        height: 300,
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
        toolbar: 'bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
        branding: false
      }
    }
  },
  mounted () {
    tinymce.init({})
  },
  components: {Editor}
}
</script>
