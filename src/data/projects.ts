export type ProjectSection = {
  heading: string
  paragraphs: string[]
}

export type Project = {
  slug: string
  title: string
  year: string
  status: string
  role: string
  stack: string
  lede: string
  links?: { label: string; href: string }[]
  images: string[]
  sections: ProjectSection[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'mealio',
    title: 'Mealio',
    year: '2026',
    status: 'In development',
    role: 'Developer',
    stack: 'Laravel 13 · Vue 3.5 · MySQL · Docker',
    lede: 'Find a recipe, pull its ingredients and quantities for a given number of servings, check its nutritional values, and compare product costs across several retailers. Eventually, Mealio should let you pick the most relevant products and carry the purchase through from the app.',
    images: [],
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          'Mealio starts from a recipe and tries to turn sometimes heterogeneous data into directly usable information.',
          'The app needs to identify a recipe\'s ingredients and quantities, scale them to the chosen number of servings, and attach the matching nutritional information.',
          'The challenge then becomes connecting these ingredients to products actually available from different retailers in order to compare prices.',
          'The goal is to progressively move from:',
          'Recipe → Ingredients → Products → Price → Comparison',
          'rather than simply displaying a recipe\'s data.',
        ],
      },
      {
        heading: 'Data sources',
        paragraphs: [
          'Mealio has to work with several types of sources.',
          'When a retailer or service exposes a usable API, it can be used directly. When that\'s not the case, data has to be collected through scraping.',
          'Both approaches need to coexist without the business logic depending on how the data was obtained.',
          'The real challenge lies in normalization: each provider has its own identifiers, data formats, units, naming conventions, product information and price structures.',
          'Mealio has to bring this data back to a common model before any reliable comparison can happen.',
        ],
      },
      {
        heading: 'Architecture',
        paragraphs: [
          'The backend is built with Laravel 13 and exposes an API consumed by a Vue 3.5 SPA. The whole application is containerized with Docker.',
          'The architecture is designed around a multi-provider logic, so different recipe and product sources can be added progressively without tying the business logic to a specific supplier.',
          'The goal is specifically to separate data retrieval, transformation, normalization, persistence, business logic, and product/price comparison.',
          'This separation should make it possible to add new providers without disrupting the rest of the application.',
        ],
      },
      {
        heading: 'Providers',
        paragraphs: [
          'The first retailers targeted are notably Auchan, E.Leclerc, U, Intermarché and Carrefour.',
          'Each provider is a potentially different source, with its own technical constraints and its own data model.',
          'Integrating these sources is therefore an exercise in aggregating heterogeneous data and designing an architecture able to absorb these differences.',
        ],
      },
      {
        heading: 'Current state',
        paragraphs: [
          'The project is currently in development.',
          'Mealio is mainly a new experimentation ground compared to my previous projects: where my earlier applications mostly relied on well-controlled data or the integration of one identified external source, Mealio introduces a multi-source normalization and aggregation problem.',
          'The project lets me dig into topics like designing multi-provider architectures, API integration, scraping, data transformation, and separating acquisition from business logic.',
        ],
      },
      {
        heading: 'Infrastructure',
        paragraphs: [
          'Mealio is designed to join the shared VPS infrastructure I built for my personal projects, alongside Laundry Map and this portfolio: Docker Compose per project, Traefik as the central reverse proxy for TLS and routing, and a common Grafana/Prometheus/Loki/Uptime Kuma stack for observability.',
          'Its Compose setup already follows that model, an isolated internal network for the backend, database and cache, and only the public-facing service joining the shared network Traefik routes traffic through, even though the project isn\'t deployed there yet while it\'s still under active development.',
        ],
      },
    ],
  },
  {
    slug: 'portfolio',
    title: 'Portfolio',
    year: '2026',
    status: 'Personal project',
    role: 'Developer',
    stack: 'React · Docker',
    lede: 'The site you are currently looking at.',
    images: [
      '/projects/portfolio/Portfolio.png',
      '/projects/portfolio/Project.png',
    ],
    sections: [
      {
        heading: 'Goal',
        paragraphs: [
          'A simple professional showcase, designed to present my profile, my projects and my skills, while staying easy to maintain and keep up to date as I apply for jobs.',
        ],
      },
      {
        heading: 'A deliberately simple choice',
        paragraphs: [
          'The project isn\'t trying to demonstrate a complex architecture. It\'s a React application with no dedicated backend, whose main goal remains presenting the profile and the projects.',
          'It\'s nonetheless containerized with Docker to keep deployment simple and reproducible, notably for a future release on my personal infrastructure.',
        ],
      },
      {
        heading: 'Infrastructure',
        paragraphs: [
          'This site is deployed on the same personal VPS as Laundry Map and Mealio, behind a single Traefik reverse proxy that terminates TLS (Let\'s Encrypt) and routes each domain to its own Docker Compose stack.',
          'Even though it\'s just a static build served by nginx with no backend of its own, it benefits from the same shared observability stack as the other projects , Prometheus and cAdvisor for container metrics, Loki for logs, Grafana to visualize all of it, and Uptime Kuma for external availability checks.',
          'The server itself is locked down with ufw, open only on SSH, HTTP and HTTPS, and fail2ban to block brute-force attempts on SSH.',
        ],
      },
    ],
  },
  {
    slug: 'laundry-map',
    title: 'Laundry Map',
    year: '2026',
    status: 'Personal project',
    role: 'Developer',
    stack: 'Symfony 8 · React 19 · MySQL · Docker',
    lede: 'A web platform to search, view and manage self-service laundromats across France.',
    links: [
      {
        label: 'View live',
        href: 'https://laundrymap.yacineguerda.fr',
      },
      {
        label: 'View on Figma',
        href: 'https://www.figma.com/design/4LHQzPCwQHcdOHUJcfkE4l/Laundry-Map?m=auto&t=0SRQWvNuEghrPoWL-1',
      },
      {
        label: 'Grafana (admin only)',
        href: 'https://grafana.yacineguerda.fr',
      },
      {
        label: 'Uptime Kuma (admin only)',
        href: 'https://kuma.yacineguerda.fr',
      },
      {
        label: 'Traefik dashboard (admin only)',
        href: 'https://traefik.yacineguerda.fr',
      },
    ],
    images: [
      '/projects/laundry-map/Login.png',
      '/projects/laundry-map/Register.png',
      '/projects/laundry-map/RegisterPro.png',
      '/projects/laundry-map/Research.png',
      '/projects/laundry-map/MapAndFilter.png',
      '/projects/laundry-map/Detail.png',
      '/projects/laundry-map/Comments.png',
      '/projects/laundry-map/ProfilReviews.png',
      '/projects/laundry-map/Profil.png',
      '/projects/laundry-map/EditProfil.png',
      '/projects/laundry-map/DashAdmin.png',
      '/projects/laundry-map/AddLaundry.png',
      '/projects/laundry-map/Avis.png',
      '/projects/laundry-map/Action.png',
    ],
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          'Laundry Map was designed as a directory of laundromats, letting people search for a location, view its details and quickly get its location.',
          'Beyond simple search, the app covers several levels of use: a public area for users, a management space for professionals, and an admin dashboard to control the platform\'s data and content.',
          'The goal is to build an application capable of handling a laundromat\'s entire lifecycle: listing, enriching its information, validation, publication and updates.',
        ],
      },
      {
        heading: 'Search and browsing',
        paragraphs: [
          'Search is the app\'s main entry point. Laundromats can be searched by location and shown as a list or on an interactive map.',
          'Each laundromat then has a detailed page gathering its key information: address, opening hours, equipment, payment methods, available machines, prices and additional details.',
          'The app also plans to link directly to directions toward the location through external navigation services.',
        ],
      },
      {
        heading: 'User management',
        paragraphs: [
          'Laundry Map distinguishes between several types of users with different responsibilities.',
          'Users can create an account, save laundromats as favorites, rate them and post comments.',
          'Professionals get a dedicated space to manage their locations, edit their information and reply to reviews.',
          'Finally, admins have a dashboard to manage professional accounts, validate laundromats and moderate content published on the platform.',
          'This separation of roles keeps a clear distinction between browsing, managing locations, and administering the platform.',
        ],
      },
      {
        heading: 'Data import and normalization',
        paragraphs: [
          'Some laundromats are fed automatically from the API provided by EC2E.',
          'The work isn\'t just about fetching the data: it has to be transformed and normalized before being persisted into the app\'s model, so it stays consistent with data entered or managed directly through Laundry Map.',
          'This integration also makes it possible to use information from WI-LINE control units when available, notably around equipment and machine status.',
          'The architecture keeps the retrieval of external data separate from its processing and use by the rest of the application.',
        ],
      },
      {
        heading: 'Architecture',
        paragraphs: [
          'Laundry Map is built on an architecture that clearly separates the frontend and the backend.',
          'The Symfony 8 backend exposes a REST API consumed by a React 19 SPA. Application data is persisted in MySQL.',
          'Everything is containerized with Docker, with separate containers for the frontend and the backend.',
          'This separation makes it possible to decouple the user interface from the business logic and to evolve the different parts of the application independently.',
        ],
      },
      {
        heading: 'Administration and moderation',
        paragraphs: [
          'A significant part of the project deals with managing data coming from several actors.',
          'Professionals can propose or edit information about their locations, but those changes aren\'t published directly: they go through an administrative validation process.',
          'The dashboard is used to manage laundromats, users and comments, but also to review data before it\'s published.',
          'This logic brings the notions of statuses, access rights and validation workflows directly into the application.',
        ],
      },
      {
        heading: 'Infrastructure',
        paragraphs: [
          'This is also the project where I went furthest on operating the application, not just building it.',
          'It runs on a personal VPS shared with my other projects, behind a single Traefik instance acting as the reverse proxy for all of them: it terminates TLS (Let\'s Encrypt, renewed automatically) and routes each domain to the right Docker Compose stack by container labels, so adding a new project only means adding labels, not touching a shared nginx config by hand.',
          'Each project keeps its own isolated Docker network for its backend, database and cache, and only exposes the one service that actually needs to be public (here, the nginx container in front of PHP-FPM and the frontend) to the network Traefik routes through.',
          'Prometheus and cAdvisor collect container-level metrics, node-exporter covers the VPS itself, Loki and Promtail centralize logs from every container on the server, Grafana visualizes all of it, and Uptime Kuma checks external availability of each domain. The server is also locked down with ufw (only SSH/HTTP/HTTPS open) and fail2ban against SSH brute-force attempts.',
          'The goal wasn\'t simply to deploy the application, but to have real visibility into how it behaves once in production: service availability, container metrics, logs, and the overall state of the infrastructure.',
          'The project let me work across an application\'s whole lifecycle, from development and data management through to deployment and day-to-day operations.',
        ],
      },
    ],
  },
  {
    slug: 'isla-food',
    title: 'Isla Food',
    year: '2025',
    status: 'Personal project',
    role: 'Developer',
    stack: 'Laravel · Filament · Livewire · React Native · MySQL',
    lede: 'An ordering platform for Isla Food\'s professional customers, with a mobile app, a web interface and management dashboards.',
    images: [
      '/projects/isla-food/Login.png',
      '/projects/isla-food/Dashboard.png',
      '/projects/isla-food/Commande.png',
      '/projects/isla-food/Client.png',
      '/projects/isla-food/Admin.png',
    ],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Isla Food was built to let professional customers order Isla Food\'s products directly, without having to visit a store.',
          'The app relies on a Laravel backend centralizing data and business logic. It\'s consumed by several interfaces: a React Native mobile app for customers, a web interface, and various dashboards to manage the platform.',
          'The project led me to design an architecture where several client applications rely on the same backend.',
        ],
      },
      {
        heading: 'Catalog management',
        paragraphs: [
          'The catalog is fully managed from the internal dashboard.',
          'Admins can create and manage the products available for order, entering details such as their price, category and other associated product information.',
          'This centralization keeps a single catalog, which is then used by the app\'s different interfaces.',
        ],
      },
      {
        heading: 'Customer management',
        paragraphs: [
          'Access to the platform is reserved for professionals.',
          'Customer accounts are therefore created and managed from the admin side. Each customer then has their own space to access their orders and order history.',
          'This centralized management makes it possible to control which users are authorized to access the service.',
        ],
      },
      {
        heading: 'Orders and customer space',
        paragraphs: [
          'The mobile app lets customers browse the catalog and place their orders directly from their phone.',
          'A customer space is also available on the web to view past orders, access order history and generate the related invoices.',
          'The project isn\'t limited to building a catalog: it also covers managing the customer journey around ordering.',
        ],
      },
      {
        heading: 'Administration',
        paragraphs: [
          'The admin dashboard was built with Filament and Livewire directly on top of the Laravel backend.',
          'It centralizes the platform\'s main management operations: catalog, products, customers and orders.',
          'Using Filament also let me work on building a complete admin interface without manually developing every management screen.',
        ],
      },
      {
        heading: 'Multi-client architecture',
        paragraphs: [
          'One of the project\'s main technical points of interest is the use of a single backend shared by several interfaces.',
          'The Laravel backend exposes the data and application logic, while the different clients consume these services according to their needs:',
          'React Native mobile app → Laravel API → MySQL',
          'Web interface → Laravel API → MySQL',
          'Admin dashboard → Laravel / Filament / Livewire',
          'This architecture helped me understand, in practice, the challenges of designing an API meant for several consumers, notably separating business logic from the interfaces that use it.',
        ],
      },
      {
        heading: 'What the project taught me',
        paragraphs: [
          'Isla Food is one of my first significant projects where I worked with several interfaces around the same backend.',
          'It let me go deeper into Laravel and API design, while also discovering the challenges of managing a catalog, users, orders and data shared across several clients.',
        ],
      },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}
