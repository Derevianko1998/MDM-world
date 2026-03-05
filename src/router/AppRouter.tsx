import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import {
  HomePage,
  AboutPage,
  CompanyLifePage,
  ContactsPage,
  ExpertisePage,
  MarketingResearchPage,
  OmnichannelMarketingPage,
  TradeMarketingPage,
} from '@/pages';
import { ArticlePage } from '@/pages/CompanyLifePage/ArticlePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'expertise',
        element: <ExpertisePage />,
      },
      {
        path: 'company-life',
        element: <CompanyLifePage />,
      },
      {
        path: 'company-life/:slug',
        element: <ArticlePage />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
      {
        path: 'services',
        children: [
          {
            path: 'trade-marketing',
            element: <TradeMarketingPage />,
          },
          {
            path: 'omnichannel-marketing',
            element: <OmnichannelMarketingPage />,
          },
          {
            path: 'marketing-research',
            element: <MarketingResearchPage />,
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;