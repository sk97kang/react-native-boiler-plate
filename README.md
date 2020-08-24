# React Native 프로젝트 생성

```bash
react-native init projectName
```

# 프로젝트 실행

```bash
yarn android
or
yarn ios
```

# Typescript

- Javascript에 Type을 지정해줄 수 있는 Superset

## Installation

```bash
npm install typescript @types/react @types/react-native --save-dev
or
yarn add --dev typescript @types/react @types/react-native
```

- typescript : typescript를 설치한다.
- @types/react : typescript에 필요한 react의 type을 설치한다.
- @types/react-native : typescript에 필요한 react-native의 type을 설치한다.

## Usage

- tsconfig.json

```json
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext",
    "baseUrl": "./src",
    "paths": {
      "~/*": ["*"]
    }
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}
```

- [typescript - tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [typescript - compile options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

# Styled Components

- 리액트 네이티브의 스타일링 적용을 도와주는 오픈소스 라이브러리

## Installation

```bash
npm install --save styled-components
npm install --save-dev @types/styled-components
or
yarn add styled-components
yarn add --dev @types/styled-components
```

- styled-components : styled-components 라이브러리 입니다.
- @types/styled-components : typescript에 필요한 styled-components의 타입입니다.
- babel-plugin-styled-components: 필수는 아니지만 디버깅시 class명을 확인하기 쉽게 만들어 줍니다. babel.config.js에 아래와 같이 설정해 줍니다.

## Usage

- App.tsx

```js
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Content = styled.Text`
  font-size: 16px;
`;

const App = () => {
  return (
    <Container>
      <Content>Hi! React Native</Content>
    </Container>
  );
};

export default App;
```

# babel-plugin-root-import

- 절대 경로로 컴포넌트 추가

## Installation

```bash
npm install --save-dev babel-plugin-root-import
or
yarn add --dev babel-plugin-root-import
```

## Usage

- babel.config.js

```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ],
};
```

- index.js

```js
import App from '~/App';
```

# ESLint/Prettier

- [React Native에서 ESLint, Prettier를 프로처럼 사용하기](https://dev-yakuza.github.io/ko/react-native/eslint-prettier-husky-lint-staged/)

# 앱 아이콘

- react-native-make를 이용하여 앱 아이콘을 적용한다.

- 사이즈 : 1024 X 1024px
- 경로 : ./src/Assets/Images/app_icon.png
- 적용

```bash
react-native set-icon --path ./src/Assets/Images/app_icon.png
```

# 앱 스플래시 스크린 이미지

- react-native-make를 이용하여 앱 스플래시 스크린을 적용한다.

- 사이즈 : 3000 X 3000px
- 경로 : ./src/Assets/Images/app_splash.png
- 적용
