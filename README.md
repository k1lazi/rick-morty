# Rick and Morty Characters Viewer

## Opis
Aplikacja umożliwia przeglądanie postaci z serialu "Rick and Morty" za pomocą API Rick and Morty. Użytkownik może przeglądać postacie z podziałem na strony oraz filtrować je według statusu (np. "alive", "dead", "unknown").

## Funkcjonalności
- Przeglądanie listy postaci z podziałem na strony (paginacja).
- Filtrowanie postaci według statusu (np. Żywy, Martwy, Nieznany).
- Wyświetlanie zdjęć, nazw i statusów postaci.

## Instalacja
Aby uruchomić aplikację lokalnie, wykonaj poniższe kroki:

1. Sklonuj repozytorium:
    ```bash
    git clone https://github.com/uzytkownik/rick-morty-app.git
    ```

2. Przejdź do katalogu projektu:
    ```bash
    cd rick-morty-app
    ```

3. Zainstaluj zależności:
    ```bash
    npm install
    ```

4. Uruchom aplikację:
    ```bash
    npm start
    ```

## Wymagania
- Node.js w wersji 14+.
- Przeglądarka internetowa wspierająca najnowsze standardy HTML5 i JavaScript.

## Użycie
Po uruchomieniu aplikacji, użytkownik może przeglądać postacie za pomocą paginacji. Dostępne są również opcje filtrowania postaci na podstawie ich statusu:
- "Alive" (żywy)
- "Dead" (martwy)
- "Unknown" (nieznany)

## API
Aplikacja korzysta z publicznego [Rick and Morty API](https://rickandmortyapi.com/).
- Endpoint używany do pobierania postaci: `/api/character`
- Przykładowe zapytanie: `https://rickandmortyapi.com/api/character?page=1&status=alive`

## Struktura projektu
- `index.html` - Plik główny HTML.
- `style.scss` - Główne style aplikacji.
- `script.js` - Logika aplikacji, w tym obsługa API i paginacji.
- `assets/` - Folder z zasobami, takimi jak obrazy.

## Autorzy
- [k1lazi](https://github.com/twoj-profil-github) - Główny twórca projektu.

