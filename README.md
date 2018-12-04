### Form Generator
Based on Module options which is stored in website front database, we developed solution for dynamic form generator.
Here the example of form fields config
```javascript 1.8
        config = {
            id: 1,
            name: 'Module1',
            type: 'C',
            description: 'Module1 Desc',
            options: [
                {
                    fieldSet: 'FieldSet 4',
                    name: 'testColor',
                    description: 'testColor Description',
                    title: 'colorTitle',
                    type: 'color',
                    readonly: false,
                    isRequired: true,
                    defaultValue: '#000000',
                    options: {
                        placeholder: 'testDate Placeholder'
                    },
                },
                {
                    fieldSet: 'FieldSet 3',
                    name: 'testDate',
                    description: 'testDate Description',
                    title: 'dateTitle',
                    type: 'date',
                    readonly: false,
                    isRequired: true,
                    options: {
                        placeholder: 'testDate Placeholder',
                        inputElement: false,
                        manual: false,
                        dateFormat: 'YYYY/MM/DD',
                    },
                },
                {
                    fieldSet: 'FieldSet 1',
                    name: 'testInput',
                    description: 'testInput Description',
                    title: 'inputTitle',
                    type: 'input',
                    readonly: false,
                    isRequired: true,
                    defaultValue: 'inputDefaultValue',
                    options: {}
                },
                {
                    fieldSet: 'FieldSet 1',
                    name: 'testText',
                    description: 'testText Description',
                    title: 'textTitle',
                    type: 'text',
                    readonly: false,
                    isRequired: true,
                    defaultValue: '',
                    options: {},
                },
                {
                    fieldSet: 'FieldSet 2',
                    name: 'testSelect',
                    description: 'testSelect Description',
                    title: 'selectTitle',
                    type: 'select',
                    readonly: false,
                    isRequired: true,
                    defaultValue: 'selectOption2',
                    options: {
                        showEmpty: true,
                        emptyTitle: 'None',
                        list: [
                            {
                                value: 'selectOption1',
                                title: 'selectOptionTitle1'
                            },
                            {
                                value: 'selectOption2',
                                title: 'selectOptionTitle2'
                            },
                            {
                                value: 'selectOption3',
                                title: 'selectOptionTitle3'
                            },
                            {
                                value: 'selectOption4',
                                title: 'selectOptionTitle4'
                            },
                        ]
                    },
                },
                {
                    fieldSet: 'FieldSet 2',
                    name: 'testRadio',
                    description: 'testRadio Description',
                    title: 'radioTitle',
                    type: 'radio',
                    readonly: false,
                    isRequired: false,
                    defaultValue: 'radioOption3',
                    options: {
                        list: [
                            {
                                value: 'radioOption1',
                                title: 'radioOptionTitle1'
                            },
                            {
                                value: 'radioOption2',
                                title: 'radioOptionTitle2'
                            },
                            {
                                value: 'radioOption3',
                                title: 'radioOptionTitle3'
                            },
                            {
                                value: 'radioOption4',
                                title: 'radioOptionTitle4'
                            },
                        ]
                    },
                },
                {
                    fieldSet: 'FieldSet 2',
                    name: 'testCheck',
                    description: 'testCheck Description',
                    title: 'checkTitle',
                    type: 'check',
                    readonly: false,
                    isRequired: false,
                    value: true,
                    defaultValue: true,
                    options: {
                        value: 'checkValue',
                    },
                },
                {
                    fieldSet: 'FieldSet 2',
                    name: 'testSwitcher',
                    description: 'testSwitcher Description',
                    title: 'switcherTitle',
                    type: 'switcher',
                    readonly: false,
                    isRequired: false,
                    isChecked: true,
                    isDefaultChecked: true,
                    options: {
                        value: 'switcherValue',
                    },
                },
                {
                    fieldSet: 'FieldSet 3',
                    name: 'testDateTime',
                    description: 'testDateTime Description',
                    title: 'dateTimeTitle',
                    type: 'datetime',
                    readonly: false,
                    isRequired: false,
                    options: {
                        placeholder: 'testDateTime Placeholder',
                        inputElement: false,
                        manual: false,
                        dateFormat: 'YYYY/MM/DD',
                        timeFormat: 'HH:mm'
                    },
                },
                {
                    fieldSet: 'FieldSet 3',
                    name: 'testTime',
                    description: 'testTime Description',
                    title: 'timeTitle',
                    type: 'time',
                    readonly: false,
                    isRequired: false,
                    options: {
                        placeholder: 'testTime Placeholder',
                        inputElement: false,
                        manual: false,
                        timeFormat: 'HH:mm'
                    },
                },
                {
                    fieldSet: 'FieldSet 4',
                    name: 'testImage',
                    description: 'testImage Description',
                    title: 'imageTitle',
                    type: 'image',
                    readonly: false,
                    isRequired: false,
                    options: {
                        avatar: true
                    },
                },
            ]
        };
``` 
All options inside every field are optional except options.list in "select" and "radio" types.

In React front admin panel part we support the following types (the most popular field types):
- **input** Simple string value
- **text** Multiple rows text value
- **check** Checkbox can set true / false values
- **switcher** The same as Checkbox but has switcher view
- **radio** Radio group with options, can set one value from options
- **select** Selectbox with options, can set one value from options
- **datetime** DateTimePicker can set datetime value in custom format
- **date** DateTimePicker can set date value in custom format
- **time** DateTimePicker can set time value in custom format
- **image** File Uploader can set file converted to base64 even if it's not image format
- **color** Color Picker, can set color value in hex string format 

Also form generator supports field validations. But there is implemented only 3 **"required"**, **"email"** and **"number"**, but it can be easily extended on front part
