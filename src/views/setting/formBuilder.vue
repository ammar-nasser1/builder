<template>
  <div>
    <div
      class="w-full px-5 rounded-xl mx-auto bg-white flex flex-col justify-center items-center mt-6"
    >
      <div class="flex flex-col w-full">
        <div class="flex flex-col w-full divide-y-2">
          <draggable
            v-model="formElements"
            tag="transition-group"
            class="transition-group"
            name="fade"
            :move="onMove"
          >
            <template #item="{ element, index }">
              <div class="flex flex-col justify-between items-end gap-5 py-5">
                <div
                  class="flex w-full flex-row gap-3 items-center justify-center"
                >
                  <button
                    @click="removeElement(index)"
                    class="bg-red-600 p-1 rounded-xl"
                  >
                    حذف
                  </button>
                  <div class="input-wrapper w-full">
                    <label for="selectField" class="label"> نوع الحقل </label>
                    <select
                      id="selectField"
                      class="select-field w-full"
                      v-model="element.type"
                    >
                      <option
                        v-for="option in options"
                        :value="option.value"
                        :key="option.value"
                      >
                        {{ option.label }}
                      </option>
                    </select>
                  </div>
                  <div class="input-wrapper w-full">
                    <label for="inputField" class="label">اسم الحقل</label>
                    <input
                      type="text"
                      id="inputField"
                      class="input-field"
                      v-model="element.label"
                      placeholder="Label"
                    />
                  </div>
                  <img src="/img/icons/menu.png" alt="" />
                </div>
                <div
                  v-if="element.type === 'select'"
                  class="flex flex-col w-[50%] gap-3 pr-[30px]"
                >
                  <div
                    v-for="(option, optionIndex) in element.options"
                    :key="optionIndex"
                    class="flex flex-row items-center gap-3"
                  >
                    <button
                      @click="removeOption(index, optionIndex)"
                      class="bg-red-600 p-1 rounded-xl"
                    >
                      حذف
                    </button>
                    <div class="input-wrapper w-full">
                      <label for="inputField" class="label"
                        >الاختيار {{ optionIndex + 1 }}</label
                      >
                      <input
                        type="text"
                        id="inputField"
                        class="input-field"
                        v-model="element.options[optionIndex]"
                        placeholder="Label"
                      />
                    </div>
                  </div>
                  <button
                    @click="addOption(index)"
                    class="flex justify-end gap-2"
                  >
                    إضافة اختيار<img src="/img/icons/addicon.png" alt="" />
                  </button>
                </div>
              </div>
            </template>
          </draggable>
        </div>
        <div class="flex flex-row justify-center items-center w-full">
          <button @click="addNewElement" class="flex gap-2">
            إضافة حقل جديد <img src="/img/icons/addicon.png" alt="" />
          </button>
        </div>
      </div>
    </div>
    {{ formElements }}
    <TestPage />
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  data() {
    return {
      formElements: [],
      options: [
        { label: "Text", value: "text" },
        { label: "Textarea", value: "textarea" },
        { label: "Select", value: "select" },
      ],
    };
  },
  props: ["data"],
  watch: {
    data: {
      immediate: true,
      handler(newVal) {
        this.formElements = newVal;
      },
    },
  },
  methods: {
    addNewElement() {
      this.formElements.push({
        label: "",
        type: "text",
        options: [],
      });
    },
    removeElement(index) {
      this.formElements.splice(index, 1);
    },
    addOption(index) {
      this.formElements[index].options.push("");
    },
    removeOption(elementIndex, optionIndex) {
      this.formElements[elementIndex].options.splice(optionIndex, 1);
    },
  },
};
</script>

<style>
.input-wrapper {
  position: relative;
  /* Adjust width as needed */
}

.label {
  position: absolute;
  top: -8px; /* Adjust vertical position */
  right: 5px; /* Adjust horizontal position */
  background-color: white;
  padding: 0 5px;
  font-size: 12px;
}

.input-field {
  text-align: right;
  width: 100%;
  padding: 10px;
  border: 1px solid #dee2e6 !important;
  border-radius: 10px !important;
}
.transition-group {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
