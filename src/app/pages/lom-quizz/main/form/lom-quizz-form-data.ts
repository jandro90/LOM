export enum inputTypes { text, number, checkbox, radio };

export interface inputData {
    description: string,
    id: number,
    type: inputTypes,
    required: boolean,
    correctValue: string | number,
    multipleOptions?: Array<any>,
}

export const formData = [
    {
        description: '5 + 2?',
        id: 0,
        type: inputTypes.radio,
        required: true,
        correctValue: '7',
        multipleOptions: [
            {label: '4', value: '4'},
            {label: '8', value: '8'},
            {label: '7', value: '7'},
            
        ],
    },
    {
        description: 'Current Year?',
        id: 1,
        type: inputTypes.text,
        required: true,
        correctValue: '2022'
    },
    {
        description: 'Write "dog" in Spanish.',
        id: 2,
        type: inputTypes.text,
        required: true,
        correctValue: 'perro'
    },
    {
        description: 'What is the name of the place to receive medical assistance? (various options can be selected)',
        id: 3,
        type: inputTypes.checkbox,
        required: true,
        correctValue: 'hospital',
        multipleOptions: [
            {label: 'Hospital', value: 'hospital'},
            {label: 'Kitchen', value: 'kitchen'},
            {label: 'Library', value: 'library'},
            {label: 'WC', value: 'wc'},
        ],
    },
    {
        description: '10 - 2?',
        id: 4,
        type: inputTypes.text,
        required: true,
        correctValue: '8'
    },
    {
        description: 'Write the name of the brand corresponds to iphone phones?',
        id: 5,
        type: inputTypes.text,
        required: true,
        correctValue: 'apple'
    },
    {
        description: 'What type of protein is of vegetable origin? (various options can be selected)',
        id: 6,
        type: inputTypes.checkbox,
        required: true,
        correctValue: 'soja',
        multipleOptions: [
            {label: 'Chicken', value: 'chicken'},
            {label: 'Salmon', value: 'salmon'},
            {label: 'Eggs', value: 'eggs'},
            {label: 'Soja', value: 'soja'},
        ],
    },
    {
        description: '1 + 7',
        id: 7,
        type: inputTypes.text,
        required: true,
        correctValue: '8'
    },
    {
        description: 'What application is used to listen to music?',
        id: 8,
        type: inputTypes.radio,
        required: true,
        correctValue: 'spotify',
        multipleOptions: [
            {label: 'Spotify', value: 'spotify'},
            {label: 'Badi', value: 'badi'},
            {label: 'Whatsapp', value: 'whatsapp'},
            
        ],
    },
    {
        description: 'Write "cat" in Spanish.',
        id: 9,
        type: inputTypes.text,
        required: true,
        correctValue: 'gato'
    },

]