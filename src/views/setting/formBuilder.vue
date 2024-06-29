<template>
  <div>
    <div class="w-[70%] mx-auto flex flex-col justify-center items-center mt-6">
      <div class="flex flex-col w-full">
        <div class="flex flex-col w-full gap-4">
          <draggable v-model="formElements">
            <div
              v-for="(element, index) in formElements"
              :key="index"
              class="flex flex-col justify-between items-end gap-3"
            >
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
                      >الاختيار {{ optionIndex + 1 }}
                    </label>
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
</style>
