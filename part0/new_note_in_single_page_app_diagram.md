```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server

    Note right of browser: JSON data containing content and timestamp of the new note.

    server-->>browser: status code 201
    deactivate server
```