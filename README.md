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

TODO