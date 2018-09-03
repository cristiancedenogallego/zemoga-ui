This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Commands
- Start project
```console
yarn start
```

- Build production ready version
```console
yarn build
```

- Run unit tests
```console
yarn test
```

- Run e2e test
```console
yarn e2e
```

- Run e2e test only in chrome
```console
yarn e2e:chrome
```

# Considerations

1. To start project please run
`yarn start`

2. This project dont include any css framework because in the project requirements not included any old browser this make a valid opcion use css grid, but i generally use foundation or bootstrap when i need give support to old browsers.

3. This project dont use any kind of css preprocessor because i used [styled-components] package that use tagged template literals to style components with the next beneficts.

- SASS Like syntax supported.
- Adapting component styles based on props.
- Use all JS power to style components.
- With react native web we can share some components with the react native team in case this exists.
- Autoprefixer included.
- Easy to use with ssr

4. I use the eslint airbnb for ensure javascript minimum code quality https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb

5. I used flow as type checker

6. All images are ontimized JPEG and ready for progressive loading

7. the photographs in the voting boxes was made background covered and centered because this help because generally the relevant part of a photography is in the center of the image.
