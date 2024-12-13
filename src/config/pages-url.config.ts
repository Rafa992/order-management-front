class DASHBOARD {
    HOME = process.env.NODE_ENV === "production" ? 'https://order-management-indol.vercel.app/' : '/'
    LOGIN = '/auth/login'
    REGISTER = '/auth/register'
}

export const DASHBOARD_PAGES = new DASHBOARD()
