module.exports = {
    testEnvironment: "jsdom",

    // Jest transformations
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    transform: {
        '^.+\\.tsx?$': 'ts-jest' // Transform TypeScript files using ts-jest
    },


}