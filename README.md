
```
Egresados
├─ .editorconfig
├─ .prettierignore
├─ .prettierrc
├─ app
│  ├─ Http
│  │  ├─ Controllers
│  │  │  ├─ Auth
│  │  │  │  ├─ AuthenticatedSessionController.php
│  │  │  │  ├─ ConfirmablePasswordController.php
│  │  │  │  ├─ EmailVerificationNotificationController.php
│  │  │  │  ├─ EmailVerificationPromptController.php
│  │  │  │  ├─ NewPasswordController.php
│  │  │  │  ├─ PasswordResetLinkController.php
│  │  │  │  ├─ RegisteredUserController.php
│  │  │  │  └─ VerifyEmailController.php
│  │  │  ├─ Controller.php
│  │  │  ├─ Settings
│  │  │  │  ├─ PasswordController.php
│  │  │  │  └─ ProfileController.php
│  │  │  └─ UsersController.php
│  │  ├─ Middleware
│  │  │  ├─ HandleAppearance.php
│  │  │  └─ HandleInertiaRequests.php
│  │  └─ Requests
│  │     ├─ Auth
│  │     │  └─ LoginRequest.php
│  │     └─ Settings
│  │        └─ ProfileUpdateRequest.php
│  ├─ Models
│  │  └─ User.php
│  └─ Providers
│     └─ AppServiceProvider.php
├─ artisan
├─ bootstrap
│  ├─ app.php
│  ├─ cache
│  │  ├─ packages.php
│  │  └─ services.php
│  └─ providers.php
├─ components.json
├─ composer.json
├─ composer.lock
├─ config
│  ├─ app.php
│  ├─ auth.php
│  ├─ cache.php
│  ├─ database.php
│  ├─ filesystems.php
│  ├─ inertia.php
│  ├─ logging.php
│  ├─ mail.php
│  ├─ permission.php
│  ├─ queue.php
│  ├─ services.php
│  └─ session.php
├─ database
│  ├─ factories
│  │  └─ UserFactory.php
│  ├─ migrations
│  │  ├─ 0001_01_01_000000_create_users_table.php
│  │  ├─ 0001_01_01_000001_create_cache_table.php
│  │  ├─ 0001_01_01_000002_create_jobs_table.php
│  │  └─ 2025_03_14_204610_create_permission_tables.php
│  └─ seeders
│     ├─ DatabaseSeeder.php
│     └─ UserSeeder.php
├─ eslint.config.js
├─ lang
│  ├─ es
│  │  ├─ actions.php
│  │  ├─ auth.php
│  │  ├─ http-statuses.php
│  │  ├─ pagination.php
│  │  ├─ passwords.php
│  │  └─ validation.php
│  └─ es.json
├─ package-lock.json
├─ package.json
├─ phpunit.xml
├─ public
│  ├─ .htaccess
│  ├─ favicon.ico
│  ├─ index.php
│  ├─ logo.svg
│  └─ robots.txt
├─ resources
│  ├─ css
│  │  └─ app.css
│  ├─ js
│  │  ├─ app.tsx
│  │  ├─ components
│  │  │  ├─ app-content.tsx
│  │  │  ├─ app-header.tsx
│  │  │  ├─ app-logo-icon.tsx
│  │  │  ├─ app-logo.tsx
│  │  │  ├─ app-shell.tsx
│  │  │  ├─ app-sidebar-header.tsx
│  │  │  ├─ app-sidebar.tsx
│  │  │  ├─ appearance-dropdown.tsx
│  │  │  ├─ appearance-tabs.tsx
│  │  │  ├─ breadcrumbs.tsx
│  │  │  ├─ chart.tsx
│  │  │  ├─ delete-user.tsx
│  │  │  ├─ heading-small.tsx
│  │  │  ├─ heading.tsx
│  │  │  ├─ icon.tsx
│  │  │  ├─ input-error.tsx
│  │  │  ├─ nav-footer.tsx
│  │  │  ├─ nav-main.tsx
│  │  │  ├─ nav-user.tsx
│  │  │  ├─ TableUsers.tsx
│  │  │  ├─ text-link.tsx
│  │  │  ├─ ui
│  │  │  │  ├─ alert.tsx
│  │  │  │  ├─ avatar.tsx
│  │  │  │  ├─ badge.tsx
│  │  │  │  ├─ breadcrumb.tsx
│  │  │  │  ├─ button.tsx
│  │  │  │  ├─ card.tsx
│  │  │  │  ├─ chart.tsx
│  │  │  │  ├─ checkbox.tsx
│  │  │  │  ├─ collapsible.tsx
│  │  │  │  ├─ dialog.tsx
│  │  │  │  ├─ dropdown-menu.tsx
│  │  │  │  ├─ icon.tsx
│  │  │  │  ├─ input.tsx
│  │  │  │  ├─ label.tsx
│  │  │  │  ├─ navigation-menu.tsx
│  │  │  │  ├─ placeholder-pattern.tsx
│  │  │  │  ├─ select.tsx
│  │  │  │  ├─ separator.tsx
│  │  │  │  ├─ sheet.tsx
│  │  │  │  ├─ sidebar.tsx
│  │  │  │  ├─ skeleton.tsx
│  │  │  │  ├─ switch.tsx
│  │  │  │  ├─ toggle-group.tsx
│  │  │  │  ├─ toggle.tsx
│  │  │  │  └─ tooltip.tsx
│  │  │  ├─ user-info.tsx
│  │  │  └─ user-menu-content.tsx
│  │  ├─ hooks
│  │  │  ├─ use-appearance.tsx
│  │  │  ├─ use-initials.tsx
│  │  │  ├─ use-mobile-navigation.ts
│  │  │  └─ use-mobile.tsx
│  │  ├─ layouts
│  │  │  ├─ app
│  │  │  │  ├─ app-header-layout.tsx
│  │  │  │  └─ app-sidebar-layout.tsx
│  │  │  ├─ app-layout.tsx
│  │  │  ├─ auth
│  │  │  │  ├─ auth-card-layout.tsx
│  │  │  │  ├─ auth-simple-layout.tsx
│  │  │  │  └─ auth-split-layout.tsx
│  │  │  ├─ auth-layout.tsx
│  │  │  └─ settings
│  │  │     └─ layout.tsx
│  │  ├─ lib
│  │  │  └─ utils.ts
│  │  ├─ pages
│  │  │  ├─ auth
│  │  │  │  ├─ confirm-password.tsx
│  │  │  │  ├─ forgot-password.tsx
│  │  │  │  ├─ login.tsx
│  │  │  │  ├─ register.tsx
│  │  │  │  ├─ reset-password.tsx
│  │  │  │  └─ verify-email.tsx
│  │  │  ├─ dashboard.tsx
│  │  │  ├─ settings
│  │  │  │  ├─ appearance.tsx
│  │  │  │  ├─ password.tsx
│  │  │  │  └─ profile.tsx
│  │  │  ├─ users.tsx
│  │  │  └─ welcome.tsx
│  │  ├─ ssr.tsx
│  │  └─ types
│  │     ├─ global.d.ts
│  │     ├─ index.d.ts
│  │     └─ vite-env.d.ts
│  └─ views
│     └─ app.blade.php
├─ routes
│  ├─ auth.php
│  ├─ console.php
│  ├─ settings.php
│  └─ web.php
├─ storage
│  ├─ app
│  │  ├─ private
│  │  └─ public
│  ├─ framework
│  │  ├─ cache
│  │  │  └─ data
│  │  ├─ sessions
│  │  ├─ testing
│  │  └─ views
│  │     ├─ 0f25114e00eed7da4c9fa177898114ff.php
│  │     ├─ 11a8ae72970cbe78f419864ad3f08323.php
│  │     ├─ 18b1dd023576cf62253741c34594fa05.php
│  │     ├─ 295f804cc480d9f62ec0e8874083b8c2.php
│  │     ├─ 2dc4dd6f3587ac2ed97d37e556e142e2.php
│  │     ├─ 2e32613d29594daff7c4e03efd82670f.php
│  │     ├─ 2fb09dbb57144e8c4e8b7900308c7a1a.php
│  │     ├─ 3c09623494d39b65dc7252eaf882ddee.php
│  │     ├─ 3ebbfa9368ac2aa37e4692f966d09782.php
│  │     ├─ 40721fe8b390b4e0a56ee36e65a1d9ba.php
│  │     ├─ 46b1a25c62c6a93840942ac1bda0976b.php
│  │     ├─ 4fc7c092c9cfe96cf88bc10019bebe21.php
│  │     ├─ 56544d3c2c7f9fecbd10e983c60547ff.php
│  │     ├─ 58776c08e371d4cd6483c5e3c9824f2b.php
│  │     ├─ 5f560fefdb54e1753e5885ff4f241ee0.php
│  │     ├─ 6e3e191a4c11711286b741b220753c01.php
│  │     ├─ 7131de01c916a9d5e46191c29852e980.php
│  │     ├─ 7df424f0bae8803288dd22fd1d70a78e.php
│  │     ├─ 8265fe766054084c680f683088784bd2.php
│  │     ├─ 85a4d3aa2103e3e244f636eae466cfd3.php
│  │     ├─ 8938fd59940fe98b6cb79a2d404419b4.php
│  │     ├─ 89620771d3ae6c74eca93fd1cb894996.php
│  │     ├─ 9ad7ab9aa280484e1247762bf20ea29b.php
│  │     ├─ a3b85317a28aa64aec4242431957e1be.php
│  │     ├─ a9e075d7d7eac9803e1953acd01608a7.php
│  │     ├─ be0c9cd7067cd7bdefecfdb0c6dc67cd.php
│  │     ├─ c052e5260dc7c955240606cf2b8ae401.php
│  │     ├─ cb054b84a727f2b69200065c9a1d319c.php
│  │     ├─ ce4d50ce7809ea43ea7172d09e5c42b5.php
│  │     ├─ e9335a916dfee205fc0ca17d77fd4ed7.php
│  │     └─ fe5051c9e20dd7e79d094757bbf5ccde.php
│  └─ logs
│     └─ laravel.log
├─ tailwind.config.js
├─ tests
│  ├─ Feature
│  │  ├─ Auth
│  │  │  ├─ AuthenticationTest.php
│  │  │  ├─ EmailVerificationTest.php
│  │  │  ├─ PasswordConfirmationTest.php
│  │  │  ├─ PasswordResetTest.php
│  │  │  └─ RegistrationTest.php
│  │  ├─ DashboardTest.php
│  │  ├─ ExampleTest.php
│  │  └─ Settings
│  │     ├─ PasswordUpdateTest.php
│  │     └─ ProfileUpdateTest.php
│  ├─ Pest.php
│  ├─ TestCase.php
│  └─ Unit
│     └─ ExampleTest.php
├─ tsconfig.json
└─ vite.config.ts

```