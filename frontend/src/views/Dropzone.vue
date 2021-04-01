<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap items-center justify-between">
      <h2 class="text-gray-900 font-bold text-3xl my-4">Check uploaded files (obj) on the fly</h2>
      <span class="">
        Edit
      </span>
    </div>

    <p class="text-sm text-gray-900 tracking-wider">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>

    <div class="flex flex-wrap bg-gray-100 py-4 px-20 mt-4">
      <h2 class="w-full text-3xl text-gray-900 text-center my-8">Upload a new model</h2>
      <!-- Dropzone -->
      <vue-dropzone
        :useCustomSlot="true"
        :include-styling="false"
        ref="myVueDropzone"
        id="customdropzone"
        :options="dropzoneOptions"
        @vdropzone-file-added="vfileAdded"
        v-on:vdropzone-error="uploadError"
        v-on:vdropzone-removed-file="fileRemoved">
        <div class="dropzone-custom-content">
          <p class="text-sm text-gray-900 my-8">There might be <span class="text-calc-blue ml-1">issues</span> if you upload. Press continue to uplaod anyway.</p>
          <h3 class="flex flex-wrap items-center justify-center text-black font-bold">
            Drag & drop or <span class="text-calc-blue ml-1"> browse</span>
          </h3>
        </div>
      </vue-dropzone>

      <div class="w-full flex flex-wrap items-center justify-between mt-10">
        <button type="button" class="p-3 rounded focus:outline-none text-calc-blue uppercase border border-calc-blue">Cancel</button>
        <button type="button" class="p-3 rounded focus:outline-none text-white uppercase bg-calc-blue">Uploaded files</button>
      </div>
    </div>

  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
// import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        maxFilesize: 0.5,
        previewTemplate: this.template(),
        // includeStyling: false,
      }
    }
  },
  methods: {
    template() {
      return `<div class="dz-preview dz-file-preview">
                <div class="dz-details custom-details">
                    <div class="dz-filename"><span data-dz-name></span></div>
                </div>
                <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                <div class="dz-error-message"><span data-dz-errormessage></span></div>
                <div class="dz-success-mark"><i class="fa fa-check"></i></div>
                <div class="dz-error-mark"><i class="fa fa-close"></i></div>
            </div>
        `;
    },
    uploadSuccess(file, response) {
      console.log('file', file);
      console.log('response', response);
    },
    uploadError(file, message) {
      console.log('An Error Occurred');
    },
    fileRemoved() {},
    vfileAdded(file) {

      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onload = function (event) {
        //   event.target.result - is dataURL data
        console.log('file')
        console.log(event.target.result)
      };

    }
  }
}
</script>

<style>
#customdropzone {
  background-color: white;
  font-family: 'Arial', sans-serif;
  letter-spacing: 0.2px;
  color: #777;
  width: 100%;
  transition: background-color .2s linear;
  height: 300px;
  padding: 40px;
  display: flex;
  justify-content: center;
}

#customdropzone .dz-preview {
  height: 60px;
}

#customdropzone .dz-preview .custom-details {
  color: black;
  transition: opacity .2s linear;
  text-align: center;
  border: 1px solid #1caad8;
  padding: .5rem;
  font-weight: bold;
  font-size: 16px;
  margin-right: 10px;
  background-color: #e5f6fa;

}

#customdropzone .dz-success-mark,
.dz-error-mark,
.dz-remove {
  display: none;
}

.dropzone-custom-content {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.dropzone-custom-title {
  margin-top: 0;
  color: #00b782;
}

.subtitle {
  color: #314b5f;
}
</style>
