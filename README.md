# NFL Journey Migration Portal

An internal tool for NFL marketing teams to accelerate AEP journey deployment between environments.

## Features

- Browse pre-configured AEP journey templates
- Deploy journeys between AEP environments via API
- Simple UI adhering to NFL brand standards
- Mock API integration for development

## Prerequisites

- Node.js 16+ and npm
- Adobe Experience Platform API access (for production)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your configuration:
   ```
   REACT_APP_AEP_SOURCE=nfl-prod-2024
   REACT_APP_AEP_TARGET=nfl-stage-2024
   REACT_APP_AEP_CLIENT_ID=your_client_id
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Development

- The application uses Mock Service Worker (MSW) for API mocking in development
- Journey templates are configured in `src/config/journeys.json`
- NFL brand theme is defined in `src/theme/nflTheme.ts`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── config/        # Configuration files
  ├── mocks/         # MSW API mocks
  ├── pages/         # Page components
  ├── services/      # API services
  ├── theme/         # MUI theme configuration
  └── App.tsx        # Main application component
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

Internal use only - NFL © 2024 