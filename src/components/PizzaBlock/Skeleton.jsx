import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => (
  <div className="pizza-block-wrapper">
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={500}
      viewBox="0 0 280 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="134" cy="136" r="125" />
      <rect x="0" y="279" rx="10" ry="10" width="280" height="23" />
      <rect x="0" y="321" rx="10" ry="10" width="280" height="88" />
      <rect x="0" y="431" rx="10" ry="10" width="95" height="30" />
      <rect x="125" y="422" rx="25" ry="25" width="152" height="45" />
    </ContentLoader>
  </div>
)

export default Skeleton
