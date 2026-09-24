import dashboardShot from '../assets/images/beartrax/dashboard.webp';
import employeesShot from '../assets/images/beartrax/employees.webp';
import jobPostingShot from '../assets/images/beartrax/job-posting.webp';
import announcementsShot from '../assets/images/beartrax/announcements.webp';

// Content for the BearTrax featured block and case study page.
//
// Everything here is drawn from the verified project brief. Two notes for
// future edits:
//   - Distribution is TestFlight / internal only. Do not imply a public store
//     listing until one actually exists.
//   - Usage is described qualitatively on purpose. There is no analytics
//     access, so headcount, ticket volume and uptime figures stay off the site
//     until they can be sourced.

export const beartrax = {
    name: 'BearTrax',
    client: 'Bear Oilfield Services LLC',
    tagline: 'Field workforce management for an oilfield crew that works out of signal.',

    pitch:
        "BearTrax is an offline-first Flutter app that replaces an oilfield crew's paper safety " +
        'and billing forms — JSAs, hot work permits, incident reports, ground disturbance permits ' +
        'and field tickets — with digital forms that generate print-ready PDFs, feed automatic ' +
        'payroll-hour reporting, and sync when the crew gets back in signal.',

    status: 'In production use',
    statusDetail:
        'Used daily by the field crew at Bear Oilfield Services LLC. Distributed to iOS through ' +
        'TestFlight, with builds submitted automatically from CI.',

    // Shown in the home page teaser.
    headlineStats: [
        { value: '37.5k', label: 'lines of Dart' },
        { value: '15', label: 'Cloud Functions' },
        { value: '2', label: 'platforms, 1 codebase' },
    ],

    // Fuller row on the case study page.
    stats: [
        { value: '37.5k', label: 'lines of hand-written Dart' },
        { value: '97', label: 'files across 13 feature modules' },
        { value: '15', label: 'Cloud Functions (TypeScript)' },
        { value: '16', label: 'test suites on business-critical logic' },
        { value: '887', label: 'localized strings, EN + ES' },
        { value: '5', label: 'document types, PDF-faithful' },
    ],

    techBadges: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'Cloud Functions', 'TypeScript'],

    problem: {
        heading: 'The problem',
        body: [
            'An oilfield crew runs on paper. Job safety analyses, hot work permits, incident ' +
            'reports and ground disturbance permits get filled out at the well site, then ride ' +
            'back to the office in a truck to be re-keyed for billing and payroll. Forms get lost, ' +
            'hours get transcribed wrong, and invoicing waits on the drive back.',

            'The obvious fix — put the forms on a phone — runs straight into the reason paper won ' +
            'in the first place. Well sites are dead zones. Any app that needs a connection to save ' +
            'a form is worse than the clipboard it replaced.',
        ],
    },

    sections: [
        {
            heading: 'Offline-first is the constraint, not a feature',
            body: [
                'Every form write is fire-and-forget against a local Firestore cache with document ' +
                'IDs generated on the device, so the UI never blocks on the network. A supervisor ' +
                'fills out a field ticket in a dead zone and it commits instantly, exactly as it ' +
                'would in town.',

                'That creates a harder problem underneath: these documents need gapless sequential ' +
                'numbers for billing, and a device that has been offline for three days cannot know ' +
                'what number it should get. Numbering is assigned server-side instead, by ' +
                'transactional Cloud Function triggers that fire when a document finally reaches ' +
                'Firestore. Numbers stay gapless and correctly ordered no matter how long a phone ' +
                'was dark.',
            ],
        },
        {
            heading: 'Matching the paper, exactly',
            body: [
                'The five document types each render a pixel-faithful PDF of the form the company ' +
                'was already using — same layout, same fields, same watermark. That was the ' +
                'requirement that made adoption possible: clients and regulators accept the output ' +
                'unchanged, so nothing downstream of the crew had to change.',

                'PDFs are composed on-device with no server round-trip, which keeps printing ' +
                'available offline too. Pagination is the kind of thing that silently breaks when a ' +
                'crew roster grows by one line, so the page-break math is pinned by tests rather ' +
                'than checked by eye.',
            ],
        },
        {
            heading: 'Payroll, not just paperwork',
            body: [
                'Field tickets carry a crew roster and time log, which the Work Hours Report ' +
                'aggregates by employee and week and exports as an .xlsx workbook for payroll. ' +
                'Week-boundary math and hour rounding are covered by tests, because a rounding bug ' +
                'here is a paycheck bug.',

                'Around that sits the rest of the job lifecycle: postings, employee acceptance, a ' +
                'calendar view, automatic completion sweeps, and cascade deletes that clean up every ' +
                'attached document when a job is removed.',
            ],
        },
        {
            heading: 'Roles enforced where it counts',
            body: [
                'The app has employee and admin roles plus a supervisor tier, each with its own ' +
                'navigation shell. The role itself is a signed Firebase Auth custom claim, never a ' +
                'value read from the client, and the Firestore security rules do real work against ' +
                'it — supervisor-tier access, crew-membership reads through a derived index array, ' +
                'and field-level restrictions on updates rather than a blanket ' +
                'authenticated-user rule.',

                'Privileged operations — creating users, changing roles — live in Cloud Functions ' +
                'behind that same claim, so the client never holds the ability to escalate itself.',
            ],
        },
    ],

    debugging: {
        heading: 'Two production bugs worth the writeup',
        intro:
            'Both were diagnosed and fixed from a Windows machine with no Mac and no Xcode access.',
        cases: [
            {
                title: 'Users logged out every time they reopened the app — release builds only',
                body:
                    'Auth sessions were vanishing between launches, but only for the crew, never in ' +
                    'development. The cause was Android Auto Backup restoring a stale copy of the ' +
                    "Firebase Auth credential store over the live one. It was invisible in debug " +
                    'because Auto Backup only restores into builds signed with the same key, so the ' +
                    'bug could not exist on a development device by construction. Excluding the auth ' +
                    'store from the backup set fixed it.',
            },
            {
                title: 'iOS push notifications silently never arrived',
                body:
                    'Notifications worked on Android and simply did nothing on iOS — no error, no ' +
                    'failed delivery, nothing in the logs. Nothing in the app had ever called ' +
                    'registerForRemoteNotifications, so iOS never issued an APNs token and FCM had ' +
                    'no device to deliver to. Fixing it meant writing the native registration into a ' +
                    'custom AppDelegate and SceneDelegate.',
            },
        ],
    },

    features: [
        'Five document types with pixel-faithful PDF output',
        'Field tickets with crew roster, time log and admin-editable checklists',
        'Typed cursive supervisor sign-off and bulk multi-ticket printing',
        'Work Hours Report with .xlsx payroll export',
        'Native document scanning — ML Kit on Android, VisionKit on iOS',
        'Push notifications with server-side preference gating',
        'Certification and safety-card expiry tracking',
        'Fully bilingual English / Spanish, switchable at runtime',
    ],

    stack: [
        { layer: 'Framework', detail: 'Flutter (Dart 3.11) — Android and iOS from one codebase' },
        { layer: 'State', detail: 'Riverpod with code generation (@riverpod / build_runner)' },
        { layer: 'Routing', detail: 'go_router — nested stateful shells, role-based redirect guards' },
        { layer: 'Backend', detail: 'Firestore (offline-first), Firebase Auth, Cloud Storage, App Check, Crashlytics' },
        { layer: 'Serverless', detail: '15 Cloud Functions v2 in TypeScript — user provisioning, sequential numbering, scheduled sweeps, push fan-out' },
        { layer: 'Auth', detail: 'Email/password with signed custom-claim roles enforced in security rules' },
        { layer: 'Push', detail: 'FCM topic broadcasts and token fan-out, native APNs registration' },
        { layer: 'Documents', detail: 'pdf + printing, composed on-device; excel for .xlsx payroll export' },
        { layer: 'CI/CD', detail: 'GitHub Actions (analyze, test, Android + iOS builds) and Codemagic auto-submit to TestFlight' },
    ],

    // Captured from a device against production, with employee names redacted
    // with solid fills before export. Entry [0] is also the featured shot on the
    // home page, so keep the strongest screen first.
    //
    // Still worth adding when captures exist: the field ticket fill screen and a
    // generated PDF beside the form that produced it. Those are the two that
    // show the domain work most directly.
    screenshots: [
        {
            id: 'admin-dashboard',
            src: dashboardShot,
            alt: 'BearTrax admin dashboard showing open field tickets, active jobs, workforce totals and weekly hours',
            caption: 'Admin dashboard — open tickets, workforce and weekly hours',
        },
        {
            id: 'employees',
            src: employeesShot,
            alt: 'BearTrax employee roster listing crew by role with hours logged for the week',
            caption: 'Employee roster — hours by person for the week, filtered by status',
        },
        {
            id: 'job-posting',
            src: jobPostingShot,
            alt: 'BearTrax create job posting form with department selection and location fields',
            caption: 'Job posting — department, crew and lease details',
        },
        {
            id: 'announcements',
            src: announcementsShot,
            alt: 'BearTrax announcements screen with pinned company-wide posts',
            caption: 'Announcements — pinned, and targeted to all staff or admins',
        },
    ],
};

export default beartrax;
