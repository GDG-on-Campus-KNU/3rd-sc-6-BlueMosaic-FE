export const CircleSVG = ({ ranking, imageUrl }) => {
  // console.log("imageUrl",imageUrl);
  if (ranking === "1") {
    return (
      <svg width="103" height="117" viewBox="0 0 103 117" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Clip path for circle */}
        <defs>
          <clipPath id="circleClip">
            <circle cx="51.4993" cy="52.1443" r="49.5944" />
          </clipPath>
          {/* Pattern for image */}
          <pattern id="image" patternUnits="userSpaceOnUse" width="100%" height="100%">
            <image href={imageUrl} x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
          </pattern>
        </defs>

        {/* Rest of the SVG */}
        <circle cx="51.4993" cy="52.1443" r="49.5944" fill="url(#image)" stroke="#4285F4" strokeWidth="3.76667" />
        <rect x="51.5254" y="86.0442" width="21.3444" height="21.3444" rx="6.27778" transform="rotate(45 51.5254 86.0442)" fill="url(#paint0_linear_127_3077)" />
        <path d="M52.6087 97.5282V104.833H51.2854V98.8159H51.2426L49.534 99.9073V98.6946L51.3496 97.5282H52.6087Z" fill="white" />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="paint0_linear_127_3077" x1="62.1976" y1="86.0442" x2="62.1976" y2="107.389" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4285F4" />
            <stop offset="1" stopColor="#F8F9FA" />
          </linearGradient>
        </defs>
      </svg>
    );
  } else if (ranking === "2") {
    return (
      <svg width="87" height="99" viewBox="0 0 87 99" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Circle with image cover */}
      <defs>
        <pattern id="image" patternUnits="userSpaceOnUse" width="100%" height="100%">
          <image href={imageUrl} x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
        </pattern>
      </defs>
      <circle cx="43.599" cy="43.0219" r="40.8056" fill="url(#image)" stroke="url(#paint0_linear_127_3073)" strokeWidth="3.76667"/>
    
      {/* Other elements */}
      <rect x="43.625" y="68.1331" width="21.3444" height="21.3444" rx="6.27778" transform="rotate(45 43.625 68.1331)" fill="url(#paint1_linear_127_3073)"/>
      <path d="M41.7371 86.9219V85.9659L44.2731 83.4798C44.5157 83.2349 44.7178 83.0173 44.8795 82.8271C45.0412 82.6368 45.1625 82.4525 45.2434 82.2742C45.3242 82.0958 45.3646 81.9056 45.3646 81.7035C45.3646 81.4728 45.3123 81.2754 45.2077 81.1114C45.1031 80.9449 44.9592 80.8165 44.7761 80.7261C44.593 80.6358 44.3849 80.5906 44.1519 80.5906C43.9117 80.5906 43.7013 80.6405 43.5205 80.7404C43.3398 80.8379 43.1995 80.977 43.0996 81.1577C43.0021 81.3385 42.9534 81.5537 42.9534 81.8033H41.6943C41.6943 81.3396 41.8001 80.9366 42.0117 80.5942C42.2234 80.2517 42.5147 79.9866 42.8856 79.7987C43.259 79.6109 43.687 79.517 44.1697 79.517C44.6596 79.517 45.09 79.6085 45.4609 79.7916C45.8319 79.9747 46.1196 80.2256 46.3241 80.5442C46.531 80.8629 46.6345 81.2267 46.6345 81.6357C46.6345 81.9092 46.5821 82.1779 46.4775 82.4418C46.3729 82.7058 46.1886 82.9983 45.9246 83.3193C45.6631 83.6403 45.2957 84.0291 44.8225 84.4857L43.5633 85.7662V85.8161H46.745V86.9219H41.7371Z" fill="white"/>
    
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="paint0_linear_127_3073" x1="43.599" y1="0.333008" x2="43.599" y2="85.7108" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBC05"/>
          <stop offset="1" stopColor="#F8F9FA"/>
        </linearGradient>
        <linearGradient id="paint1_linear_127_3073" x1="54.2972" y1="68.1331" x2="54.2972" y2="89.4775" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBC05"/>
          <stop offset="1" stopColor="#D39D01"/>
        </linearGradient>
      </defs>
    </svg>
    );
  } else {
    // Handle other rankings or provide a default SVG
    return (
      <svg width="86" height="100" viewBox="0 0 86 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
          <pattern id="imagePattern" x="0" y="0" width="1" height="1">
              <image href={imageUrl} x="0" y="0" width="86" height="100" preserveAspectRatio="xMidYMid slice"/>
          </pattern>
      </defs>
      <circle cx="42.7787" cy="43.0224" r="40.8056" fill="url(#imagePattern)" stroke="#34A853" strokeWidth="3.76667"/>
      <rect x="44.0605" y="69.3889" width="21.3444" height="21.3444" rx="6.27778" transform="rotate(45 44.0605 69.3889)" fill="url(#paint0_linear_127_3069)"/>
      <path d="M43.5384 88.2779C43.0248 88.2779 42.5682 88.1899 42.1687 88.0139C41.7716 87.8379 41.4577 87.593 41.2271 87.2791C40.9964 86.9652 40.874 86.6026 40.8597 86.1912H42.2008C42.2127 86.3886 42.2781 86.561 42.397 86.7084C42.5159 86.8535 42.6741 86.9664 42.8714 87.0473C43.0688 87.1281 43.2899 87.1685 43.5349 87.1685C43.7965 87.1685 44.0283 87.1234 44.2304 87.033C44.4326 86.9403 44.5907 86.8118 44.7048 86.6478C44.819 86.4837 44.8748 86.2946 44.8725 86.0806C44.8748 85.8595 44.8178 85.6645 44.7013 85.4957C44.5847 85.3268 44.4159 85.1948 44.1948 85.0997C43.976 85.0046 43.712 84.9571 43.4029 84.9571H42.7573V83.9369H43.4029C43.6573 83.9369 43.8797 83.8929 44.0699 83.8049C44.2625 83.717 44.4135 83.5933 44.5229 83.434C44.6323 83.2723 44.6858 83.0856 44.6834 82.874C44.6858 82.6671 44.6394 82.4876 44.5443 82.3354C44.4516 82.1808 44.3196 82.0607 44.1484 81.9751C43.9796 81.8895 43.781 81.8467 43.5527 81.8467C43.3292 81.8467 43.1223 81.8871 42.9321 81.968C42.7418 82.0488 42.5885 82.1642 42.4719 82.314C42.3554 82.4614 42.2936 82.6374 42.2865 82.8419H41.0131C41.0226 82.4329 41.1403 82.0738 41.3662 81.7647C41.5945 81.4531 41.8988 81.2106 42.2793 81.037C42.6598 80.861 43.0866 80.7731 43.5598 80.7731C44.0473 80.7731 44.4706 80.8646 44.8297 81.0477C45.1911 81.2284 45.4705 81.4722 45.6679 81.7789C45.8653 82.0857 45.9639 82.4245 45.9639 82.7955C45.9663 83.2069 45.8451 83.5517 45.6001 83.8299C45.3576 84.1081 45.0389 84.29 44.6442 84.3756V84.4327C45.1578 84.5041 45.5514 84.6943 45.8248 85.0034C46.1007 85.3102 46.2374 85.6918 46.235 86.1484C46.235 86.5574 46.1185 86.9236 45.8855 87.247C45.6548 87.568 45.3362 87.8201 44.9295 88.0032C44.5253 88.1863 44.0616 88.2779 43.5384 88.2779Z" fill="white"/>
      <defs>
          <linearGradient id="paint0_linear_127_3069" x1="54.7328" y1="69.3889" x2="54.7328" y2="90.7334" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34A853"/>
              <stop offset="1" stopColor="#009026"/>
          </linearGradient>
      </defs>
  </svg>
    );
  }
}
