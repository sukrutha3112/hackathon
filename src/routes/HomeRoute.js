import React from 'react'
import HomePage from 'components/HomePage'

const HomeRoute = {
    path: '/home',
    element: <HomePage />,
    children: [
      {
        path: 'home',
        element: <HomePage />
      },

    ]
  };

export default HomeRoute
