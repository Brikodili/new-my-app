# Api client for http://68.183.119.148/apidoc

## App structure

    .
    ├── public                    # Static files
    ├── src                       # Source code
    │   ├── api                   # Side effects functions
    │   ├── components            # Reusable components
    │   │   ├── Routes            # Components that describes all routes for the app
    │   │   │   └── index.js      # Entrypoint for the component
    │   │   └── Header            # Header
    │   │       └── index.js      # Entrypoint for the component
    │   ├── pages                 # Unique components that correspond to routes structure
    │   │   └── Dashboard         # Corresponds to http://<your-domain>/dashboard
    │   │       └── index.js      # Entrypoint for the page
    │   └── index.js              # Entryp
