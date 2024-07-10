import { SVGProps } from 'react'

export const LoaderSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <circle
      cx={40}
      cy={65}
      r={15}
      fill="#FF156D"
      stroke="#FF156D"
      strokeWidth={15}
    >
      <animate
        attributeName="cy"
        begin={-0.4}
        calcMode="spline"
        dur={2}
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        values="65;135;65;"
      />
    </circle>
    <circle
      cx={100}
      cy={65}
      r={15}
      fill="#FF156D"
      stroke="#FF156D"
      strokeWidth={15}
    >
      <animate
        attributeName="cy"
        begin={-0.2}
        calcMode="spline"
        dur={2}
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        values="65;135;65;"
      />
    </circle>
    <circle
      cx={160}
      cy={65}
      r={15}
      fill="#FF156D"
      stroke="#FF156D"
      strokeWidth={15}
    >
      <animate
        attributeName="cy"
        begin={0}
        calcMode="spline"
        dur={2}
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        values="65;135;65;"
      />
    </circle>
  </svg>
)
