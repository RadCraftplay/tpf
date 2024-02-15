# Spis treści

- [Informacje ogólne](#informacje-ogólne)
- [Funkcje](#funkcje)
- [Wykorzystane technologie](#wykorzystane-technologie)
- [Przygotowanie i uruchamianie](#przygotowanie-i-uruchamianie)
- [Zrzuty ekranu](#zrzuty-ekranu)

# Informacje ogólne

Aplikacja to narzędzie do zarządzania osobistymi celami na dany okres czasu (np. tydzień/miesiąc/rok). Pozwala również organizować swoje zadania za pomocą znaczników.

# Funkcje

- Logowanie kontem Google
- Dodawanie celi na dany tydzień/miesiąc/rok
- Organizacja celi za pomocą znaczników

# Wykorzystane technologie

Projekt został wykonany w języku TypeScript z wykorzystaniem frameworka Angular. Jako backend został wykorzystany Firebase. Wszystkie wykorzystane w projekcie technologie to:
- HTML5
- CSS
- SCSS
- TypeScript
- Angular
- Firebase

# Przygotowanie i uruchamianie

Aby móc prawidłowo uruchomić projekt, należy utworzyć w katalogu ```app``` plik o nazwie ```credentials.ts```. W nim należy umieścić konfigurację otrzymaną z firebase. Prawidłowy plik powinien wyglądać mniej więcej tak:

```typescript
export const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "...",
};
```

# Zrzuty ekranu

## Komputer

![obraz](https://github.com/RadCraftplay/tpf/assets/6819852/924615b6-9e93-415c-83b4-527eca170ce2)

![obraz](https://github.com/RadCraftplay/tpf/assets/6819852/3672ddb2-706c-4333-b382-6c99d958f638)

![obraz](https://github.com/RadCraftplay/tpf/assets/6819852/0b4db897-7672-4954-8ddf-15a2617561dc)

## Telefon

![2024-02-15_00-24-51_chrome_Gac22yYQag](https://github.com/RadCraftplay/tpf/assets/6819852/cc6aa18b-716f-437d-a75e-55d44d44cc1a)

![2024-02-15_03-56-43_chrome_OKAOu3Fvsm_fix](https://github.com/RadCraftplay/tpf/assets/6819852/e761fece-bbb1-45b2-8e64-fa1ee93bf594)

![2024-02-15_02-25-19_chrome_K8DB5KhPaI](https://github.com/RadCraftplay/tpf/assets/6819852/1879159a-830d-4186-a90e-21a6fd42481e)

![2024-02-15_00-26-04_chrome_doB6OLd04x](https://github.com/RadCraftplay/tpf/assets/6819852/989f4d08-71d0-47d3-b044-cb2900ae281f)

![2024-02-15_03-47-40_chrome_98xEgtVlvh](https://github.com/RadCraftplay/tpf/assets/6819852/631de165-a489-4d4b-8e0d-c33e642fd97e)



