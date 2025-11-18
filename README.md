# ChronoShift: UTC Timezone Converter

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/myschoolstory/chronoshift)

ChronoShift is a beautifully designed, single-page web application that provides a seamless experience for converting Coordinated Universal Time (UTC) to multiple timezones simultaneously. The interface is clean and intuitive, adhering to minimalist design principles. At the top, the current UTC time is prominently displayed, updating every second. Below, users can view and manage a grid of selected timezones. Each timezone is presented in its own card, showing the full timezone name, its UTC offset, and the live-updating local time. Users can easily add new timezones from a comprehensive, searchable list and remove existing ones with a single click. The application uses smooth animations for adding and removing cards, creating a delightful and responsive user experience.

## Key Features

- **Real-Time UTC Clock**: A prominent, live-updating display of the current Coordinated Universal Time.
- **Multi-Timezone Conversion**: View multiple timezones simultaneously, all synchronized in real-time.
- **Interactive Timezone Management**: Easily add timezones from a comprehensive, searchable list and remove them with a single click.
- **Elegant & Minimalist UI**: A clean, intuitive, and visually polished interface built with modern design principles.
- **Smooth Animations**: Fluid animations for adding and removing timezone cards, powered by Framer Motion.
- **Fully Responsive**: A flawless experience across desktops, tablets, and mobile devices.
- **Single-Page Application**: All functionality is contained within a single, fast-loading page for a seamless user experience.

## Technology Stack

- **Framework**: React (with Vite)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui, Lucide React
- **State Management**: Zustand
- **Animation**: Framer Motion
- **Date & Time**: `date-fns` & `date-fns-tz`
- **Deployment**: Cloudflare Workers

## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.
- A code editor like Visual Studio Code.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/chronoshift.git
    cd chronoshift
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

### Running the Development Server

To start the local development server, run the following command:

```bash
bun dev
```

The application will be available at `http://localhost:3000` (or another port if 3000 is in use).

## Usage

Once the application is running, you can:

-   **View the current UTC time** at the top of the page.
-   **Add a new timezone** by clicking the "Add Timezone" button. This will open a searchable dialog where you can find and select any IANA timezone.
-   **Remove a timezone** by clicking the `x` icon in the top-right corner of any timezone card.
-   The application comes pre-loaded with a few default timezones to get you started.

## Available Scripts

-   `bun dev`: Starts the development server.
-   `bun build`: Creates a production-ready build of the application.
-   `bun lint`: Lints the codebase to check for errors and style issues.
-   `bun deploy`: Deploys the application to Cloudflare Workers.

## Deployment

This project is configured for easy deployment to Cloudflare's global network.

### One-Click Deploy

You can deploy this application to your own Cloudflare account with a single click.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/myschoolstory/chronoshift)

### Manual Deployment with Wrangler

1.  **Log in to Wrangler:**
    If you haven't already, log in to your Cloudflare account using the Wrangler CLI.
    ```bash
    wrangler login
    ```

2.  **Deploy the application:**
    Run the deploy script from the root of the project directory.
    ```bash
    bun deploy
    ```

Wrangler will build and deploy your application, providing you with a live URL upon completion.