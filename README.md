# Sahil's Daily Bugle

A React news reader prototype controlled through Alan AI voice commands.

## Implemented flow

- The browser initializes the Alan AI web SDK.
- An Alan script requests articles by source, topic, or category.
- The script sends article data to the React interface.
- News cards render the returned articles.
- Spoken headline playback can highlight the corresponding card.

The project uses React 16, Material UI 4, and Create React App 3.

## Run locally

```bash
npm install
npm start
```

Open [localhost:3000](http://localhost:3000).

Voice and news retrieval require external service setup:

1. Create your own compatible Alan AI project.
2. Review `src/Alan Script/news_reader_app.js` as the voice script to configure in that service.
3. Configure that script with your own News API access through the provider's supported server configuration.
4. Point the browser integration in `src/App.js` at your own Alan project.

Existing embedded configuration must not be assumed valid. Keep private news service credentials outside the browser bundle and source control.

## Source map

| Path | Responsibility |
| --- | --- |
| `src/App.js` | Alan SDK initialization, article state, and highlight events |
| `src/Alan Script/news_reader_app.js` | Voice intents and news retrieval |
| `src/components/NewsCards/` | Article collection layout |
| `src/components/NewsCard/` | Individual article presentation |

## Development and status

- `npm run build`: build the frontend.
- `npm test`: start the configured test runner.

This is an older voice interface prototype. External service compatibility and account configuration must be checked before use. The voice script defines an `open` command, but the current React command handler only handles `newHeadlines` and `highlight`; voice controlled article opening is not complete.

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
