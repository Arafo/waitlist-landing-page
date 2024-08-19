const config = {
    domain: "laptimes.arbyswift.com",
    title: "Lap Times",
    description: "Experience Formula 1 racing like never before with real-time data visualization, performance analytics, and strategic insights. Join the waitlist for early access to Lap Times.",
    subscribeForm: "https://dashboard.mailerlite.com/forms/1390274/149064615311967428/share",

    socials: {
        twitter: "https://x.com/arbyswift",
    },

    contents: {
        title: "Experience F1 Racing with Real-Time Data Visualization",
        markOfTitle: "LapTimes", // its for marking the title. The text must contain on title. If not, it will be ignored.
        description: `Get unprecedented insights into Formula 1 races with LapTimes. Track live race positions, analyze qualifying performance, compare driver stats, and predict race strategies with our comprehensive data visualization app.`,

        about: [
            {
                id: 1,
                emoji: "🏎️",
                title: "Live Race Tracking",
                description: "Follow races in real-time with dynamic position tracking, gap times between drivers, and tire compound monitoring for complete strategic insights."
            },
            {
                id: 2,
                emoji: "📊",
                title: "Performance Analytics",
                description: "Dive deep into sector-by-sector comparisons, qualifying data, and historical performance trends to understand driver and team strengths."
            },
            {
                id: 3,
                emoji: "🧠",
                title: "Strategic Insights",
                description: "Analyze pit stop timing, tire compound selection, and race strategy simulations to predict outcomes and understand team decisions."
            }
        ],

        howWorks: [
            {
                title: "Download the app",
                description: "Once released, download LapTimes from the App Store and create your account to get started."
            },
            {
                title: "Select a race weekend",
                description: "Choose from current or past race weekends to access practice, qualifying, and race data."
            },
            {
                title: "Explore real-time data",
                description: "During live races, watch as driver positions, lap times, and strategic decisions unfold in real-time with beautiful visualizations."
            },
            {
                title: "Analyze performance metrics",
                description: "Compare drivers, teams, and historical data with interactive charts and detailed analytics."
            },
            {
                title: "Predict race strategies",
                description: "Use our strategy simulator to predict pit stops, tire choices, and race outcomes based on current data."
            },
        ],

        price: {
            description: "Get premium F1 data insights with our subscription plans. Early waitlist members receive special pricing!",
            price: "4.99$",

            advantages: ['Real-time race data visualization', 'Historical race analysis and comparisons', 'Team and driver performance metrics', 'Strategy prediction tools', 'Regular updates with new features']
        },

        faq: [
            {
                question: "What is LapTimes?",
                answer: "LapTimes is an iOS app that provides real-time Formula 1 data visualization, performance analytics, and strategic insights for F1 fans."
            },
            {
                question: "When will LapTimes be available?",
                answer: "LapTimes is currently in development. Join our waitlist to be notified when it launches and get early access."
            },
            {
                question: "What features will LapTimes include?",
                answer: "LapTimes will include live race tracking, qualifying performance analysis, driver comparisons, team performance metrics, and race strategy simulations."
            },
            {
                question: "Will LapTimes be available for Android?",
                answer: "Initially, LapTimes will be available for iOS devices only. Android support may be added in the future based on demand."
            },
            {
                question: "How do I contact support?",
                answer: "You can contact our support team by emailing support@theproduct.com."
            },
            {
                question: "How do I contact support?",
                answer: "You can contact our support team by emailing support@theproduct.com."
            }
        ]
    }
}


export default config;